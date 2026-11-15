import type { Plugin } from 'vite';
import { build } from 'esbuild';
import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const MAX_PRERENDER_PAGES = 500;
const escape = (text: string) => text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export function prerenderPlugin(): Plugin {
  return {
    name: 'route-html', apply: 'build', enforce: 'post',
    async generateBundle(_options, bundle) {
      const root = process.cwd();
      const sitemap = await fs.readFile(path.join(root, 'public/sitemap.xml'), 'utf8');
      const routes = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => new URL(match[1]).pathname);
      if (routes.length > MAX_PRERENDER_PAGES) throw new Error('Public routes exceed the prerender safety cap');
      const index = bundle['index.html'];
      if (!index || index.type !== 'asset') throw new Error('Missing HTML template');
      const template = String(index.source);
      const emit = this.emitFile.bind(this);
      const result = await build({ entryPoints: ['src/seo/static-entry.tsx'], bundle: true, write: false, platform: 'node', format: 'cjs', jsx: 'automatic', alias: { '@': path.join(root, 'src') }, plugins: [{ name: 'static-images', setup(build) {
        build.onLoad({ filter: /\.(jpg|jpeg|png|webp|svg)$/ }, async args => {
          const name = 'prerender-media/' + path.basename(args.path);
          emit({ type: 'asset', fileName: name, source: await fs.readFile(args.path) });
          return { contents: `export default ${JSON.stringify('/' + name)}`, loader: 'js' };
        });
      } }], define: { 'process.env.NODE_ENV': '"production"' } });
      const temp = await fs.mkdtemp('/tmp/route-html-');
      try {
        const entry = path.join(temp, 'render.cjs');
        await fs.writeFile(entry, result.outputFiles[0].text);
        const { renderPage } = await import(/* @vite-ignore */ pathToFileURL(entry).href);
        for (const route of [...routes, '/404']) {
          const { html, seo } = renderPage(route);
          if (!html.includes('<h1') || !seo.title) throw new Error(`Incomplete route HTML: ${route}`);
          let output = template.replace(/<noscript>[\s\S]*?<\/noscript>/g, match => match.includes('<main') ? '' : match);
          output = output.replace(/<title>[\s\S]*?<\/title>/, `<title>${escape(seo.title)}</title>`)
            .replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${escape(seo.description)}">`)
            .replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${escape(seo.canonical || 'https://celebrity-reputation-management.com' + route)}">`)
            .replace(/<meta property="og:(title|description|url|type)"[^>]*>/g, (_m, key) => `<meta property="og:${key}" content="${escape(key === 'title' ? seo.title : key === 'description' ? seo.description : key === 'url' ? seo.canonical : seo.type || 'website')}">`)
            .replace(/<meta name="twitter:(title|description)"[^>]*>/g, (_m, key) => `<meta name="twitter:${key}" content="${escape(seo[key])}">`)
            .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
          if (seo.noindex) output = output.replace(/<meta name="robots"[^>]*>/, '<meta name="robots" content="noindex, follow">');
          if (seo.jsonLd) output = output.replace('</head>', `<script type="application/ld+json" data-page-jsonld="true">${JSON.stringify(seo.jsonLd).replace(/</g, '\\u003c')}</script></head>`);
          output = output.replace(/style="([^"]*)"/g, (_m, style) => `style="${style.replace(/opacity:0(?:;|$)/g, 'opacity:1;').replace(/transform:[^;]+;?/g, '')}"`);
          if (route === '/') index.source = output;
          else this.emitFile({ type: 'asset', fileName: route.slice(1) + '/index.html', source: output });
        }
      } finally { await fs.rm(temp, { recursive: true, force: true }); }
    },
  };
}
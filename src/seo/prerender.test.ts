// @vitest-environment node
import { describe, it, expect } from 'vitest';
import fs from 'node:fs/promises';
import { JSDOM } from 'jsdom';
import { prerenderPlugin } from './prerender-plugin';
import { pageIdentity } from './policy';

describe('public route indexing', () => {
  it('serves route-specific canonical, real content and index permission for every sitemap URL', async () => {
    const source = await fs.readFile('index.html', 'utf8');
    const sitemap = await fs.readFile('public/sitemap.xml', 'utf8');
    const routes = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => new URL(match[1]).pathname);
    const emitted: Record<string, string> = {};
    const bundle = { 'index.html': { type: 'asset', source } };
    const handler = prerenderPlugin().generateBundle;
    if (typeof handler !== 'function') throw new Error('Missing route generator');
    await handler.call({ emitFile: (asset: { fileName: string; source: string }) => { emitted[asset.fileName] = asset.source; return asset.fileName; } } as never, {} as never, bundle as never, false);
    await fs.mkdir('/tmp/browser/seo-html', { recursive: true });
    await fs.writeFile('/tmp/browser/seo-html/home.html', bundle['index.html'].source);
    await fs.writeFile('/tmp/browser/seo-html/timeline.html', emitted['blog/how-long-does-reputation-management-take/index.html']);
    const titles = new Set<string>();
    for (const route of routes) {
      const html = route === '/' ? bundle['index.html'].source : emitted[route.slice(1) + '/index.html'];
      const document = new JSDOM(html).window.document;
      expect(document.querySelectorAll('link[rel="canonical"]').length, route).toBe(1);
      expect(document.querySelector('link[rel="canonical"]')?.getAttribute('href'), route).toBe('https://celebrity-reputation-management.com' + route);
      expect(document.querySelectorAll('h1').length, route).toBe(1);
      expect(document.querySelector('#root')?.textContent?.split(/\s+/).length, route).toBeGreaterThan(100);
      expect(document.querySelector('meta[name="robots"]')?.getAttribute('content'), route).not.toContain('noindex');
      expect(document.title, route).not.toBe('');
      expect(document.title.length, route).toBeLessThanOrEqual(60);
      expect(document.querySelector('meta[name="description"]')?.getAttribute('content')?.length, route).toBeLessThanOrEqual(155);
      titles.add(document.title);
      for (const script of document.querySelectorAll('script[type="application/ld+json"]')) expect(() => JSON.parse(script.textContent || ''), route).not.toThrow();
      document.defaultView?.close();
    }
    expect(titles.size).toBeGreaterThan(70);
    expect(emitted['404/index.html']).toContain('noindex, follow');
  }, 120000);
  it('honors the workbook homepage identity', () => {
    expect(pageIdentity('/', 'fallback', 'fallback').title).toBe('Celebrity & Personal Online Reputation Management | CRM');
  });
});
# Architecture
- Generate bounded route-specific HTML at build time from the real React pages and sitemap, using a shared SEO capture context; this gives every visitor and crawler the same content without a persistent server.
- Keep SEO identity overrides and approved contextual link mappings in shared data so client navigation and build-time HTML use the same rules.
- Never generate sitemap lastmod from build time; retain known existing timestamps and add only page-specific editorial dates.
- Keep static rendering imports eager and client routing lazy, with generated HTML sourced from the same page components; this prevents crawler content from diverging from the interactive site.
- Store article-specific revision dates in content data and reuse them for the visible byline and Article dateModified so editorial changes remain consistent across rendering paths.
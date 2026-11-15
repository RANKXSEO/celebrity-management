# Architecture
- Generate bounded route-specific HTML at build time from the real React pages and sitemap, using a shared SEO capture context; this gives every visitor and crawler the same content without a persistent server.
- Keep SEO identity overrides and approved contextual link mappings in shared data so client navigation and build-time HTML use the same rules.
- Never generate sitemap lastmod from build time; retain known existing timestamps and add only page-specific editorial dates.
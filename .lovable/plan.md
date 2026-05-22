## Goal

Bring every public page up to a "outrank top-3 on google.com (US)" baseline for its target query: matched search intent, EEAT signals, CTR-optimized titles/descriptions, semantic depth, internal linking, and TOC where useful.

## Scope (24 pages)

**Hub pages** (broad commercial intent)
- `/` Home — "celebrity reputation management"
- `/services` — "celebrity ORM services"
- `/solutions` — "celebrity reputation problems"
- `/who-we-serve` — "reputation management for [audiences]"
- `/blog` — content hub
- `/reviews` — social proof / brand SERP
- `/resources` — informational hub

**Spoke pages** (specific commercial + informational intent)
- 10 service pages (`/services/:slug`)
- 6 solution pages (`/solutions/:slug`)
- 7 audience pages (`/who-we-serve/:slug`)
- N blog posts (`/blog/:slug`)

**Conversion pages** (transactional)
- `/about`, `/contact`, `/free-consultation`

**Legal** (noindex candidates — light SEO touch)
- `/privacy-policy`, `/terms-of-service`

## Per-page changes (applied to all spokes + hubs)

1. **Title tag (CTR)** — ≤60 chars, primary keyword first, modifier (Year, "Trusted", "24/7", "Since 2009", rating), emotional hook. Unique per page.
2. **Meta description (CTR)** — ≤155 chars, primary + secondary keyword, concrete proof point (94% clearance, 4.76/5, 181 clients), explicit CTA.
3. **H1** — single, keyword-led, distinct from title.
4. **Search-intent match** — first 100 words answer the query directly (AEO-friendly). For service pages: what + who + outcome + proof.
5. **Semantic depth** — add NLP entities & co-occurring terms per topic (e.g. for "Wikipedia management": notability, COI, citations, neutrality, AfD, edit war, semi-protection).
6. **EEAT signals** — author byline w/ credentials on every editorial page, "Reviewed by" line, last-updated date, founded-2009 trust line, methodology blurb where relevant, links to authoritative sources (Google guidelines, Wikipedia policies, WIPO, DMCA).
7. **Table of contents** — auto-rendered `TableOfContents` component on any page with ≥4 H2s (blog posts, service pages, solution pages, audience pages, resources).
8. **Internal linking** — every spoke links to:
   - 2–3 sibling spokes ("Related services / solutions")
   - 1–2 audience pages it serves
   - 1 hub
   - 1–2 supporting blog posts
   Hub pages link down to every spoke.
9. **FAQ schema** — `FAQPage` JSON-LD on every page with FAQ blocks (already on most; standardize).
10. **Schema upgrades** — add `Service` schema to service pages, `BreadcrumbList` on all spokes, `Article` + `Person` author on blog posts, `AggregateRating` on `/reviews`, `LocalBusiness` on `/contact`.
11. **CTR microformats** — `<sup>` star rating, ✓ marks, numbers in title where natural ("9 Services", "24/7", "Since 2009").
12. **Image SEO** — descriptive `alt`, lazy-load, eager + fetchpriority="high" on LCP only.

## New shared components

- `TableOfContents.tsx` — auto-extracts H2s by ID, sticky on desktop, collapsible on mobile.
- `AuthorByline.tsx` — name, role, credentials, last-updated.
- `RelatedLinks.tsx` — semantic "related" block with internal links.
- `BreadcrumbNav.tsx` — visible breadcrumbs + JSON-LD.
- `KeyTakeaways.tsx` — AEO-friendly answer box at top of long content.

## Data layer

- Extend `servicePages.ts`, `solutionPages.ts`, `audiencePages.ts`, `blogContent.ts` with: `seoTitle`, `seoDescription`, `primaryKeyword`, `secondaryKeywords[]`, `tocEnabled`, `relatedSlugs[]`, `author`, `reviewedBy`, `lastUpdated`, `keyTakeaways[]`.
- One pass per data file to fill these for every entry.

## Out of scope (this pass)

- Net-new blog posts or service pages (only optimizing existing).
- Backlink acquisition / off-page work.
- Visual redesign — copy and structural changes only, design tokens untouched.
- Legal pages stay as-is; just confirm `noindex` is appropriate.

## Execution order

1. Build shared components (`TableOfContents`, `AuthorByline`, `BreadcrumbNav`, `RelatedLinks`, `KeyTakeaways`).
2. Extend data schemas + fill metadata for all entries in `servicePages.ts`, `solutionPages.ts`, `audiencePages.ts`, `blogContent.ts`.
3. Wire components into `ServicePage`, `SolutionPage`, `AudiencePage`, `BlogPost` templates.
4. Optimize hub pages individually (`Index`, `ServicesHub`, `SolutionsHub`, `WhoWeServeHub`, `BlogHub`, `ResourcesPage`, `ReviewsPage`).
5. Optimize conversion pages (`About`, `Contact`, `FreeConsultation`).
6. Run an SEO rescan to verify.

## Note on competitor benchmarking

I won't run per-page Semrush SERP lookups for all 24+ pages in this pass (would burn the entire keyword quota). Instead I'll apply the established top-3 pattern for this niche (Status Labs, Reputation Defender, NetReputation): long-form 1,500–3,000 word service pages, visible credentials, case-study proof, FAQ, TOC, schema stack. If you want me to Semrush-benchmark a specific page or 3, name them and I'll do a targeted SERP analysis first.

## Estimated size

Large — ~30 file edits and ~5 new components. Expect 2–3 batches.

Confirm and I'll start with batch 1 (shared components + data schema extension).
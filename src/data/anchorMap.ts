/**
 * Reverse-silo anchor map.
 *
 * Purpose: concentrate internal link equity on money pages, and vary anchor
 * text so no single target is over-optimised for a single phrase.
 *
 * Structure per target:
 *   - canonical: the URL that receives the equity
 *   - silo: which content silo the target belongs to
 *   - variants: anchor phrases split by SEO role
 *       exact:    primary keyword, use sparingly (~40% of instances)
 *       partial:  partial-match / long-tail (~30%)
 *       branded:  brand-adjacent phrasing (~20%)
 *       generic:  natural-sounding non-keyword (~10%)
 *
 * `SmartLink` picks a variant deterministically from these arrays based on
 * the source page path, so:
 *   - the same page always renders the same anchor (hydration-safe)
 *   - different source pages render different anchors for the same target
 *     (natural anchor distribution across the site)
 */

export type Silo = "services" | "solutions" | "audiences" | "blog" | "hub" | "conversion";
export type AnchorRole = "exact" | "partial" | "branded" | "generic";

export interface AnchorTarget {
  canonical: string;
  silo: Silo;
  variants: Record<AnchorRole, string[]>;
}

const t = (
  canonical: string,
  silo: Silo,
  variants: Record<AnchorRole, string[]>
): AnchorTarget => ({ canonical, silo, variants });

export const anchorMap: Record<string, AnchorTarget> = {
  // ---------------- HUBS ----------------
  "/": t("/", "hub", {
    exact: ["celebrity reputation management"],
    partial: ["reputation management for public figures", "celebrity ORM agency"],
    branded: ["our reputation management practice", "our celebrity ORM team"],
    generic: ["back to our homepage", "learn more about what we do"],
  }),
  "/services": t("/services", "hub", {
    exact: ["celebrity reputation management services", "reputation management services"],
    partial: ["our full service catalogue", "every ORM service we offer"],
    branded: ["browse our services hub", "see all celebrity ORM services"],
    generic: ["explore all services", "view the full services list"],
  }),
  "/solutions": t("/solutions", "hub", {
    exact: ["reputation problems we solve", "celebrity reputation solutions"],
    partial: ["reputation solutions by problem type", "solution frameworks by scenario"],
    branded: ["browse every reputation solution", "our full solutions library"],
    generic: ["see all solutions", "explore solution frameworks"],
  }),
  "/who-we-serve": t("/who-we-serve", "hub", {
    exact: ["reputation management by industry", "celebrity ORM by profession"],
    partial: ["who we serve across entertainment and business", "audiences we work with"],
    branded: ["see every industry we serve", "our full client roster by industry"],
    generic: ["view all industries", "explore audience pages"],
  }),
  "/blog": t("/blog", "hub", {
    exact: ["celebrity reputation management blog"],
    partial: ["expert reputation guides and analysis", "editorial insights on ORM"],
    branded: ["our editorial library", "browse all guides"],
    generic: ["read more guides", "see all articles"],
  }),
  "/free-consultation": t("/free-consultation", "conversion", {
    exact: ["free reputation audit"],
    partial: ["confidential reputation assessment", "no-obligation reputation review"],
    branded: ["request a free audit with our team", "start with a free consultation"],
    generic: ["get in touch", "book a free call"],
  }),
  "/contact": t("/contact", "conversion", {
    exact: ["contact our reputation team"],
    partial: ["speak with a reputation strategist", "reach our celebrity ORM desk"],
    branded: ["contact page", "get in touch with us"],
    generic: ["contact us", "reach out"],
  }),

  // ---------------- SERVICES ----------------
  "/services/negative-search-results": t("/services/negative-search-results", "services", {
    exact: ["negative search result suppression", "suppress negative Google results"],
    partial: ["push negative results off page one", "bury damaging Google search results"],
    branded: ["our negative-results suppression service", "how we clean up page one"],
    generic: ["clean up your Google results", "fix what shows up on page one"],
  }),
  "/services/google-results-removal": t("/services/google-results-removal", "services", {
    exact: ["Google content removal", "remove content from Google"],
    partial: ["permanent Google URL removal", "delisting damaging pages from Google"],
    branded: ["our Google removal service", "how we get URLs delisted"],
    generic: ["remove damaging results", "get URLs taken down"],
  }),
  "/services/celebrity-crisis-management": t("/services/celebrity-crisis-management", "services", {
    exact: ["celebrity crisis management", "24/7 celebrity crisis response"],
    partial: ["emergency PR crisis desk", "first-48-hour crisis containment"],
    branded: ["our celebrity crisis team", "our 24/7 crisis desk"],
    generic: ["get emergency help", "crisis response now"],
  }),
  "/services/wikipedia-for-celebrities": t("/services/wikipedia-for-celebrities", "services", {
    exact: ["Wikipedia page management for celebrities", "Wikipedia management for public figures"],
    partial: ["fix a biased or vandalised Wikipedia page", "policy-compliant Wikipedia editing"],
    branded: ["our Wikipedia editors", "how we handle Wikipedia"],
    generic: ["Wikipedia help", "improve your Wikipedia page"],
  }),
  "/services/knowledge-panel-management": t("/services/knowledge-panel-management", "services", {
    exact: ["Google Knowledge Panel management"],
    partial: ["claim and correct your Knowledge Panel", "fix a wrong Knowledge Panel"],
    branded: ["our Knowledge Panel service", "how we manage Knowledge Panels"],
    generic: ["Knowledge Panel help", "fix your Google profile card"],
  }),
  "/services/ai-search-reputation": t("/services/ai-search-reputation", "services", {
    exact: ["AI search reputation management", "generative engine optimisation"],
    partial: ["control what ChatGPT says about you", "fix your AI search results"],
    branded: ["our AI search reputation practice", "our GEO team"],
    generic: ["AI search help", "shape what AI says about you"],
  }),
  "/services/social-media-reputation": t("/services/social-media-reputation", "services", {
    exact: ["social media reputation management"],
    partial: ["social media crisis defence", "pile-on and troll response"],
    branded: ["our social media reputation team", "our social defence service"],
    generic: ["social media help", "defend your social channels"],
  }),
  "/services/content-suppression": t("/services/content-suppression", "services", {
    exact: ["content suppression services", "strategic content suppression"],
    partial: ["bury negative content in search", "long-term content suppression campaigns"],
    branded: ["our content suppression practice", "how we suppress content"],
    generic: ["suppress damaging content", "bury bad results"],
  }),
  "/services/review-management": t("/services/review-management", "services", {
    exact: ["celebrity review management"],
    partial: ["Google, Yelp and Trustpilot review response", "review generation and response"],
    branded: ["our review management service", "how we handle reviews"],
    generic: ["manage online reviews", "review help"],
  }),
  "/services/reputation-protection": t("/services/reputation-protection", "services", {
    exact: ["proactive reputation protection", "ongoing reputation monitoring"],
    partial: ["always-on reputation defence", "monitoring and rapid-response retainers"],
    branded: ["our reputation protection retainer", "our monitoring desk"],
    generic: ["stay protected", "keep results locked in"],
  }),
  "/services/google-review-removal": t("/services/google-review-removal", "services", {
    exact: ["Google review removal"],
    partial: ["remove fake Google reviews", "delete policy-violating reviews"],
    branded: ["our Google review removal service", "how we get reviews removed"],
    generic: ["remove bad reviews", "fake review help"],
  }),
  "/services/digital-pr-tier-one-placements": t("/services/digital-pr-tier-one-placements", "services", {
    exact: ["tier-one digital PR placements"],
    partial: ["earned media on high-authority publications", "editorial placements in top-tier press"],
    branded: ["our digital PR team", "our tier-one placement service"],
    generic: ["get press coverage", "earn tier-one media"],
  }),
  "/services/website-takedown-service": t("/services/website-takedown-service", "services", {
    exact: ["website takedown service"],
    partial: ["source-level URL removal", "defamation, DMCA and GDPR takedowns"],
    branded: ["our website takedown desk", "how we get URLs killed at the source"],
    generic: ["get a URL taken down", "source-level removal"],
  }),
  "/services/mugshot-removal": t("/services/mugshot-removal", "services", {
    exact: ["mugshot removal", "remove mugshots from Google"],
    partial: ["mugshots.com and aggregator removal", "arrest-record photo removal"],
    branded: ["our mugshot removal service", "how we clear mugshot sites"],
    generic: ["remove your mugshot", "arrest photo help"],
  }),
  "/services/people-search-removal": t("/services/people-search-removal", "services", {
    exact: ["people search site removal", "opt out of people-search databases"],
    partial: ["Spokeo, BeenVerified and Whitepages removal", "data-broker opt-outs"],
    branded: ["our people-search removal desk", "how we clear data brokers"],
    generic: ["remove personal info online", "data-broker help"],
  }),
  "/services/court-records-removal": t("/services/court-records-removal", "services", {
    exact: ["court record removal from Google"],
    partial: ["expunged case delisting", "sealed record suppression online"],
    branded: ["our court records removal service", "how we handle court records"],
    generic: ["remove court records", "expunged record help"],
  }),
  "/services/youtube-video-removal": t("/services/youtube-video-removal", "services", {
    exact: ["YouTube video removal"],
    partial: ["defamatory YouTube takedowns", "policy-based video removal"],
    branded: ["our YouTube removal service", "how we get videos taken down"],
    generic: ["remove YouTube videos", "video takedown help"],
  }),
  "/services/complaint-site-removal": t("/services/complaint-site-removal", "services", {
    exact: ["complaint site removal", "Ripoff Report and PissedConsumer removal"],
    partial: ["gripe-site takedowns and suppression", "complaint-board content removal"],
    branded: ["our complaint site removal service", "how we handle gripe sites"],
    generic: ["remove complaint sites", "gripe site help"],
  }),
  "/services/news-article-removal": t("/services/news-article-removal", "services", {
    exact: ["news article removal", "remove news articles from Google"],
    partial: ["tabloid and press article takedowns", "editorial unpublish and delisting"],
    branded: ["our news removal service", "how we handle press articles"],
    generic: ["remove a news story", "press article help"],
  }),

  // ---------------- SOLUTIONS ----------------
  "/solutions/cancel-culture-reputation-repair": t("/solutions/cancel-culture-reputation-repair", "solutions", {
    exact: ["cancel culture reputation repair"],
    partial: ["recover from a cancel-culture pile-on", "post-cancellation reputation recovery"],
    branded: ["our cancel-culture recovery framework", "how we handle cancel-culture attacks"],
    generic: ["recover from a pile-on", "cancel culture help"],
  }),
  "/solutions/defamation-fake-news-removal": t("/solutions/defamation-fake-news-removal", "solutions", {
    exact: ["defamation and fake news removal"],
    partial: ["remove defamatory articles online", "fake-news takedowns and suppression"],
    branded: ["our defamation removal framework", "how we fight defamation"],
    generic: ["remove defamation", "false story help"],
  }),
  "/solutions/paparazzi-tabloid-content": t("/solutions/paparazzi-tabloid-content", "solutions", {
    exact: ["paparazzi and tabloid content suppression"],
    partial: ["bury old tabloid stories in search", "suppress paparazzi coverage"],
    branded: ["our tabloid legacy framework", "how we handle tabloid tails"],
    generic: ["suppress old tabloid stories", "tabloid help"],
  }),
  "/solutions/old-arrest-records-online": t("/solutions/old-arrest-records-online", "solutions", {
    exact: ["remove old arrest records online"],
    partial: ["suppress old arrest history in Google", "expunged arrest record removal"],
    branded: ["our arrest-record removal framework", "how we handle old arrests"],
    generic: ["remove old arrests", "arrest record help"],
  }),
  "/solutions/leaked-content-removal": t("/solutions/leaked-content-removal", "solutions", {
    exact: ["leaked content removal"],
    partial: ["non-consensual and leaked file takedowns", "aggregator-site leak removal"],
    branded: ["our leak removal framework", "how we handle content leaks"],
    generic: ["remove leaked content", "leak help"],
  }),
  "/solutions/scandal-recovery": t("/solutions/scandal-recovery", "solutions", {
    exact: ["celebrity scandal recovery"],
    partial: ["reputation recovery after scandal", "post-scandal search cleanup"],
    branded: ["our scandal recovery framework", "how we handle scandals"],
    generic: ["recover from scandal", "scandal help"],
  }),

  // ---------------- AUDIENCES ----------------
  "/who-we-serve/actors-entertainers": t("/who-we-serve/actors-entertainers", "audiences", {
    exact: ["reputation management for actors"],
    partial: ["ORM for film and TV talent", "Hollywood reputation management"],
    branded: ["how we work with actors", "our actor and entertainer practice"],
    generic: ["for actors and entertainers", "actor reputation help"],
  }),
  "/who-we-serve/musicians-artists": t("/who-we-serve/musicians-artists", "audiences", {
    exact: ["reputation management for musicians"],
    partial: ["ORM for recording artists and touring musicians", "reputation defence for the music industry"],
    branded: ["how we work with musicians", "our music-industry practice"],
    generic: ["for musicians and artists", "musician reputation help"],
  }),
  "/who-we-serve/athletes-sports-stars": t("/who-we-serve/athletes-sports-stars", "audiences", {
    exact: ["reputation management for athletes"],
    partial: ["ORM for pro athletes and sports figures", "reputation defence for elite athletes"],
    branded: ["how we work with athletes", "our sports-industry practice"],
    generic: ["for athletes and sports stars", "athlete reputation help"],
  }),
  "/who-we-serve/influencers-content-creators": t("/who-we-serve/influencers-content-creators", "audiences", {
    exact: ["reputation management for influencers"],
    partial: ["ORM for content creators and social talent", "creator-economy reputation defence"],
    branded: ["how we work with influencers", "our creator practice"],
    generic: ["for influencers and creators", "creator reputation help"],
  }),
  "/who-we-serve/executives-ceos": t("/who-we-serve/executives-ceos", "audiences", {
    exact: ["executive reputation management"],
    partial: ["ORM for CEOs and public-company leaders", "C-suite reputation defence"],
    branded: ["how we work with executives", "our executive practice"],
    generic: ["for executives and CEOs", "executive reputation help"],
  }),
  "/who-we-serve/politicians-public-officials": t("/who-we-serve/politicians-public-officials", "audiences", {
    exact: ["reputation management for politicians"],
    partial: ["ORM for elected officials and candidates", "political reputation defence"],
    branded: ["how we work with politicians", "our public-office practice"],
    generic: ["for politicians and officials", "political reputation help"],
  }),
  "/who-we-serve/reality-tv-personalities": t("/who-we-serve/reality-tv-personalities", "audiences", {
    exact: ["reputation management for reality TV stars"],
    partial: ["ORM for reality personalities and franchise cast", "reality-TV reputation defence"],
    branded: ["how we work with reality TV talent", "our reality-TV practice"],
    generic: ["for reality TV stars", "reality TV reputation help"],
  }),
};

/**
 * Deterministic anchor picker.
 * Same (sourcePath, targetPath) -> same anchor across renders.
 * Different source paths get different anchors for the same target,
 * producing a natural distribution site-wide.
 */
export function pickAnchor(
  targetPath: string,
  sourcePath: string,
  preferredRole?: AnchorRole
): { href: string; anchor: string } | null {
  const entry = anchorMap[targetPath];
  if (!entry) return null;

  // Weighted role distribution across the site: 40/30/20/10
  const roleOrder: AnchorRole[] = ["exact", "partial", "branded", "generic"];
  const weights = [40, 30, 20, 10];

  const seed = hash(`${sourcePath}::${targetPath}`);
  const role: AnchorRole =
    preferredRole ?? pickWeighted(roleOrder, weights, seed);

  const pool = entry.variants[role];
  if (!pool || pool.length === 0) {
    // fallback to any non-empty pool
    const fallback = roleOrder
      .map((r) => entry.variants[r])
      .find((arr) => arr && arr.length > 0);
    if (!fallback) return { href: entry.canonical, anchor: entry.canonical };
    return { href: entry.canonical, anchor: fallback[seed % fallback.length] };
  }
  return { href: entry.canonical, anchor: pool[(seed >>> 3) % pool.length] };
}

function hash(s: string): number {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h >>> 0;
}

function pickWeighted<T>(items: T[], weights: number[], seed: number): T {
  const total = weights.reduce((a, b) => a + b, 0);
  const n = seed % total;
  let acc = 0;
  for (let i = 0; i < items.length; i++) {
    acc += weights[i];
    if (n < acc) return items[i];
  }
  return items[items.length - 1];
}

/**
 * Topic clusters: one pillar hub per commercial theme, with spokes beneath it.
 *
 * Interlinking rules applied by BlogPost:
 *   spoke  -> its cluster pillar (equity up, exact-match anchor)
 *   spoke  -> 2–3 sibling spokes in the same cluster (lateral relevance)
 *   pillar -> every spoke beneath it (topical coverage signal)
 *
 * Keeping the map in one place stops the blog reverting to a flat
 * "related posts" pattern, which spreads equity evenly and signals nothing.
 */
export interface Cluster {
  /** Human label used as the block heading. */
  label: string;
  /** The pillar article that should rank for the head term. */
  pillar: string;
  /** Supporting articles targeting the long-tail of the same theme. */
  spokes: string[];
}

export const clusters: Cluster[] = [
  {
    label: "Online reputation management",
    pillar: "/blog/online-reputation-management-complete-guide",
    spokes: [
      "/blog/how-to-choose-a-reputation-management-company",
      "/blog/reputation-management-software-vs-agency",
      "/blog/reputation-repair-guide",
      "/blog/celebrity-reputation-management-cost",
      "/blog/does-reputation-management-work",
      "/blog/what-do-reputation-management-companies-do",
      '/blog/how-long-does-reputation-management-take',
      '/blog/what-is-celebrity-reputation-management',
      '/blog/reputation-management-vs-pr',
      '/blog/why-is-reputation-management-important',
      '/blog/signs-you-need-reputation-management',
      '/blog/how-to-fix-bad-reputation',
      '/blog/online-reputation-management-strategies',
    ],
  },
  {
    label: "Business & brand reputation",
    pillar: "/blog/business-reputation-management-guide",
    spokes: [
      "/blog/brand-reputation-management",
      "/blog/remove-negative-google-reviews",
      '/blog/how-to-remove-a-google-review',
      "/blog/glassdoor-review-removal",
      "/blog/yelp-review-removal",
      "/blog/consumer-boycott-brand-reputation-case-study",
    ],
  },
  {
    label: "Executive & personal reputation",
    pillar: "/blog/executive-reputation-management",
    spokes: [
      "/blog/personal-reputation-management",
      "/blog/reputation-management-for-high-profile-individuals",
      "/blog/how-to-protect-your-online-reputation",
    ],
  },
  {
    label: "Content removal & legal routes",
    pillar: "/blog/website-takedown-service-guide",
    spokes: [
      "/blog/ripoff-report-removal",
      "/blog/defamation-lawyer-vs-reputation-management",
      "/blog/can-you-sue-for-online-defamation",
      "/blog/how-to-remove-negative-articles-from-google",
      "/blog/right-to-be-forgotten-celebrities",
    ],
  },
  {
    label: "AI search & GEO",
    pillar: "/blog/generative-engine-optimization-guide",
    spokes: [
      "/blog/ai-reputation-management",
      "/blog/what-chatgpt-says-about-you",
    ],
  },
  {
    label: "Crisis response",
    pillar: "/blog/crisis-communication-plan-guide",
    spokes: [
      "/blog/first-48-hours-celebrity-crisis",
      "/blog/celebrity-scandal-48-hour-playbook",
      "/blog/surviving-cancel-culture",
      "/blog/how-to-respond-to-negative-press",
      "/blog/celebrity-deepfake-scandal-reputation-management",
      '/blog/social-media-crisis-guide',
      '/blog/will-smith-oscars-slap-crisis-management-case-study',
      '/blog/depp-heard-defamation-trial-reputation-lessons',
      '/blog/hollywood-pr-war-litigation-reputation-lessons',
      '/blog/luxury-brand-campaign-backlash-case-study',
      '/blog/10-celebrity-reputation-disasters',
    ],
  },
  { label: 'Personal information and public records', pillar: '/blog/remove-personal-information-from-internet', spokes: ['/blog/how-to-remove-mugshots-from-google'] },
  { label: 'Wikipedia and Knowledge Panels', pillar: '/blog/how-to-get-wikipedia-page', spokes: ['/blog/wikipedia-notability-explained', '/blog/celebrity-wikipedia-mistakes', '/blog/google-knowledge-panel-guide'] },
  { label: 'Copyright and leaked content', pillar: '/blog/how-to-file-a-dmca-takedown', spokes: [] },
  { label: 'Digital PR and public authority', pillar: '/blog/digital-pr-for-reputation-management', spokes: ['/blog/how-to-get-featured-in-forbes', '/blog/personal-brand-authority-building', '/blog/reddit-celebrity-reputation'] },
  { label: 'Monitoring and protection', pillar: '/services/reputation-protection', spokes: ['/blog/old-tabloid-articles-ranking'] },
];

export interface ClusterPlacement {
  cluster: Cluster;
  /** True when the current post is the cluster pillar. */
  isPillar: boolean;
  /** Links to render beneath the post, strongest first. */
  links: string[];
}

/** Resolve the cluster a post belongs to and the links it should render. */
export function clusterFor(path: string): ClusterPlacement | null {
  const asPillar = clusters.find((c) => c.pillar === path);
  if (asPillar) {
    return { cluster: asPillar, isPillar: true, links: asPillar.spokes };
  }
  const asSpoke = clusters.find((c) => c.spokes.includes(path));
  if (!asSpoke) return null;

  // Deterministic sibling rotation so different spokes surface different
  // siblings while each page stays stable across renders.
  const pool = asSpoke.spokes.filter((s) => s !== path);
  const offset = path.length % (pool.length || 1);
  const siblings = [...pool.slice(offset), ...pool.slice(0, offset)].slice(0, 3);
  return { cluster: asSpoke, isPillar: false, links: [asSpoke.pillar, ...siblings] };
}

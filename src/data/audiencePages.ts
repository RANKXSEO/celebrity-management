export interface AudiencePageData {
  slug: string;
  title: string;
  h1: string;
  metaDesc: string;
  emoji: string;
  heroDesc: string;
  challenges: { title: string; desc: string }[];
  relevantServices: { slug: string; title: string; anchor: string }[];
  testimonial: { quote: string; name: string; role: string };
}

export const audiencePages: AudiencePageData[] = [
  {
    slug: "actors-entertainers",
    title: "Reputation Management for Actors & Entertainers",
    h1: "Reputation Management for Actors & Entertainers",
    metaDesc: "Expert online reputation management for actors, TV stars, and entertainers. Suppress negative press, manage crises, control Wikipedia & Google results.",
    emoji: "🎬",
    heroDesc: "Your career depends on public perception. One tabloid story, one viral moment, one misleading Wikipedia edit can cost you roles, endorsements, and the career you've built over decades. We protect what matters.",
    challenges: [
      { title: "Tabloid & Paparazzi Coverage", desc: "Old stories accumulate search authority and follow you into every audition, meeting, and partnership discussion. We specialise in [suppressing tabloid content from Google](/solutions/paparazzi-tabloid-content)." },
      { title: "Cancel Culture & Social Media Mobs", desc: "Coordinated pile-ons can move from Twitter thread to industry blacklist in days. Our [cancel culture recovery](/solutions/cancel-culture-reputation-repair) process is built for exactly this." },
      { title: "Wikipedia Inaccuracies", desc: "Vandalism, biased framing, and unsourced claims sitting at the top of your Google results. Our [Wikipedia management service](/services/wikipedia-for-celebrities) fixes and protects your page." },
      { title: "Post-Scandal Career Recovery", desc: "Rebuilding public perception after a controversy so your next chapter isn't defined by your worst moment. Read about our [scandal recovery process](/solutions/scandal-recovery)." },
    ],
    relevantServices: [
      { slug: "celebrity-crisis-management", title: "Celebrity Crisis Management", anchor: "emergency crisis management for entertainers" },
      { slug: "negative-search-results", title: "Negative Result Suppression", anchor: "suppress negative press about actors" },
      { slug: "wikipedia-for-celebrities", title: "Wikipedia Management", anchor: "fix your Wikipedia page" },
    ],
    testimonial: { quote: "Three articles I had been dreading for six years were off page one in under 60 days.", name: "Emmy Award-winning actor", role: "Television — 2024" },
  },
  {
    slug: "musicians-artists",
    title: "Reputation Management for Musicians & Recording Artists",
    h1: "Reputation Management for Musicians & Artists",
    metaDesc: "Online reputation management for musicians, recording artists & music industry figures. Protect your brand across streaming, press, social media & Wikipedia.",
    emoji: "🎵",
    heroDesc: "Your brand is your music, your story, and your name. We protect all three from negative press, social media backlash, and the AI assistants that millions now use to learn about you.",
    challenges: [
      { title: "Social Media Controversy", desc: "A single tweet or Instagram post taken out of context can trigger industry-wide backlash. Our [social media reputation defense](/services/social-media-reputation) catches threats before they escalate." },
      { title: "Label & Industry Disputes", desc: "When business conflicts become public, they dominate search results. [Content suppression](/services/content-suppression) pushes those stories off page one." },
      { title: "Fan Community Management", desc: "Passionate fanbases can turn hostile quickly. [24/7 social media monitoring](/services/social-media-reputation) is essential for managing community sentiment." },
      { title: "AI Search Vulnerability", desc: "What [ChatGPT and Gemini say about you](/blog/what-chatgpt-says-about-you) is becoming as important as what Google shows. Our [AI search reputation service](/services/ai-search-reputation) addresses this directly." },
    ],
    relevantServices: [
      { slug: "social-media-reputation", title: "Social Media Defense", anchor: "social media reputation management for musicians" },
      { slug: "wikipedia-for-celebrities", title: "Wikipedia Services", anchor: "Wikipedia page management for artists" },
      { slug: "ai-search-reputation", title: "AI Search Reputation", anchor: "control what AI says about musicians" },
    ],
    testimonial: { quote: "My Wikipedia page had been vandalised for months. They corrected it and set up monitoring so it can't happen again.", name: "Grammy-nominated recording artist", role: "Music — 2024" },
  },
  {
    slug: "athletes-sports-stars",
    title: "Reputation Management for Athletes & Sports Stars",
    h1: "Reputation Management for Professional Athletes",
    metaDesc: "Expert reputation management for professional athletes. Protect endorsements, manage off-field controversies, suppress negative Google results. 24/7 crisis response.",
    emoji: "🏆",
    heroDesc: "Your endorsement deals, broadcasting opportunities, and post-career legacy depend on public perception. We protect athletes from off-field controversies, false allegations, and the permanent damage of unchecked search results.",
    challenges: [
      { title: "Off-Field Controversies", desc: "Personal matters that become public and define your search results for years. Professional [negative search result suppression](/services/negative-search-results) replaces them with what actually matters." },
      { title: "Endorsement & Sponsorship Risk", desc: "Brands perform due diligence before signing. If your Google results tell the wrong story, deals die quietly. A clean [Knowledge Panel](/services/knowledge-panel-management) and first page matter." },
      { title: "Post-Career Narrative", desc: "When the game ends, your search results become your primary public identity. Building that narrative early through [proactive reputation protection](/services/reputation-protection) is the smartest investment." },
      { title: "Old Arrest Records", desc: "Even resolved or expunged cases can haunt your search results indefinitely. Our [arrest record removal service](/solutions/old-arrest-records-online) handles this specifically." },
    ],
    relevantServices: [
      { slug: "negative-search-results", title: "Search Result Suppression", anchor: "suppress negative press for athletes" },
      { slug: "celebrity-crisis-management", title: "Crisis Management", anchor: "emergency reputation response for sports figures" },
      { slug: "reputation-protection", title: "Reputation Monitoring", anchor: "proactive reputation protection for athletes" },
    ],
    testimonial: { quote: "When the story broke I called at 11pm. Someone picked up immediately. By morning there was a clear plan in motion.", name: "Professional athlete, Hall of Fame", role: "Sports — 2023" },
  },
  {
    slug: "influencers-content-creators",
    title: "Reputation Management for Influencers & Content Creators",
    h1: "Reputation Management for Influencers & Creators",
    metaDesc: "Protect your personal brand and sponsorship deals. Reputation management for influencers, YouTubers, TikTokers & content creators. Cancel culture defense.",
    emoji: "📲",
    heroDesc: "Your income depends entirely on your personal brand. One viral controversy can cost you sponsorships, brand deals, and the audience you've spent years building. We keep that from happening.",
    challenges: [
      { title: "Cancel Culture & Deplatforming", desc: "Coordinated campaigns can escalate from a single clip to platform bans within days. Our [cancel culture reputation repair](/solutions/cancel-culture-reputation-repair) process has recovered dozens of creators." },
      { title: "Sponsorship Due Diligence", desc: "Brands Google you before signing. What they find determines whether deals happen or die. [Negative search result suppression](/services/negative-search-results) ensures page one tells the right story." },
      { title: "Cross-Platform Reputation", desc: "Your reputation spans YouTube, TikTok, Instagram, Twitter, and Reddit simultaneously. Our [social media reputation service](/services/social-media-reputation) covers every surface." },
      { title: "AI Search Vulnerability", desc: "AI assistants summarise creator controversies for millions of users. [AI search reputation management](/services/ai-search-reputation) is becoming essential for creators with large audiences." },
    ],
    relevantServices: [
      { slug: "social-media-reputation", title: "Social Media Reputation", anchor: "social media reputation defense for creators" },
      { slug: "ai-search-reputation", title: "AI Search Reputation", anchor: "control what AI says about influencers" },
      { slug: "celebrity-crisis-management", title: "Crisis Management", anchor: "crisis management for content creators" },
    ],
    testimonial: { quote: "They caught a coordinated campaign against my channel before it went viral and shut it down within 24 hours.", name: "YouTube creator, 5M+ subscribers", role: "Digital Media — 2024" },
  },
  {
    slug: "executives-ceos",
    title: "Executive Reputation Management for CEOs & Business Leaders",
    h1: "Reputation Management for CEOs & Executives",
    metaDesc: "Separate personal reputation from corporate brand. Executive reputation management for CEOs, founders & C-suite. Protect shareholder value and leadership credibility.",
    emoji: "💼",
    heroDesc: "Your personal reputation directly impacts shareholder value, board confidence, and corporate brand perception. We protect both your personal and professional digital presence.",
    challenges: [
      { title: "Activist & Media Scrutiny", desc: "Activist campaigns and investigative journalism targeting leadership can cascade into stock price impacts. Our [crisis management team](/services/celebrity-crisis-management) responds within 60 minutes." },
      { title: "Personal vs Corporate Separation", desc: "When personal matters bleed into corporate search results, both suffer. We create clear separation through strategic [content suppression](/services/content-suppression) and entity SEO." },
      { title: "Glassdoor & Employee Reviews", desc: "Former employee reviews and workplace allegations that surface when investors search your name. Our [review management service](/services/review-management) addresses this directly." },
      { title: "Defamation & Competitor Attacks", desc: "False claims planted by competitors or disgruntled associates. Our [defamation removal service](/solutions/defamation-fake-news-removal) pursues every legal avenue available." },
    ],
    relevantServices: [
      { slug: "google-results-removal", title: "Google Content Removal", anchor: "remove damaging Google results for executives" },
      { slug: "knowledge-panel-management", title: "Knowledge Panel", anchor: "Google Knowledge Panel management for CEOs" },
      { slug: "reputation-protection", title: "Reputation Monitoring", anchor: "executive reputation monitoring" },
    ],
    testimonial: { quote: "They separated my personal search results from the corporate controversy cleanly. My board was relieved.", name: "Fortune 500 CEO", role: "Business — 2024" },
  },
  {
    slug: "politicians-public-officials",
    title: "Reputation Management for Politicians & Public Officials",
    h1: "Reputation Management for Politicians & Officials",
    metaDesc: "Strategic reputation management for politicians and public officials. Navigate intense scrutiny, manage opposition research, control your digital narrative.",
    emoji: "🏛️",
    heroDesc: "Political life means permanent scrutiny. Opposition research, media investigations, and social media attacks are constant. We help you control the digital narrative so your record speaks louder than your opponents.",
    challenges: [
      { title: "Opposition Research", desc: "Opponents systematically surface and amplify negative content. [Proactive reputation protection](/services/reputation-protection) ensures your digital presence is resilient to these attacks." },
      { title: "Media Investigations", desc: "Journalistic investigations produce lasting search results. [Negative search result suppression](/services/negative-search-results) manages the aftermath and protects your narrative." },
      { title: "Social Media Attacks", desc: "Coordinated campaigns, bot networks, and manufactured controversies. Our [social media reputation defense](/services/social-media-reputation) detects and neutralises these patterns." },
      { title: "Legacy & Historical Narrative", desc: "What Google says about you becomes the historical record. Ensuring your [Knowledge Panel](/services/knowledge-panel-management) and [Wikipedia page](/services/wikipedia-for-celebrities) reflect your actual record is essential." },
    ],
    relevantServices: [
      { slug: "celebrity-crisis-management", title: "Crisis Management", anchor: "political crisis management" },
      { slug: "social-media-reputation", title: "Social Media Defense", anchor: "social media reputation for politicians" },
      { slug: "content-suppression", title: "Content Suppression", anchor: "suppress opposition attack content" },
    ],
    testimonial: { quote: "They managed the digital fallout from a manufactured scandal in 72 hours. My campaign survived because of their speed.", name: "Former elected official", role: "Politics — 2023" },
  },
  {
    slug: "reality-tv-personalities",
    title: "Reputation Management for Reality TV Personalities",
    h1: "Reputation Management for Reality TV Stars",
    metaDesc: "Manage the lasting aftermath of reality TV. Reputation management for reality stars, contestants & TV personalities. Control your narrative beyond the show.",
    emoji: "📺",
    heroDesc: "Reality TV creates a narrative you don't control — and it follows you forever. We help reality stars take back their story, suppress produced controversy, and build a lasting personal brand beyond the show.",
    challenges: [
      { title: "Produced Narratives", desc: "Editors shape your story for entertainment, not accuracy. Those moments become permanent Google results. [Content suppression](/services/content-suppression) replaces them with your real story." },
      { title: "Post-Show Reputation", desc: "Long after cameras stop, search results keep telling the produced version of your story. [Negative search result suppression](/services/negative-search-results) changes what people find." },
      { title: "Social Media Pile-Ons", desc: "Reality TV audiences can be relentless. Our [social media reputation defense](/services/social-media-reputation) monitors and neutralises pile-ons before they create lasting search damage." },
      { title: "Brand Building Beyond TV", desc: "Transitioning from 'reality star' to entrepreneur or actor requires search results that tell your chosen story. [Wikipedia management](/services/wikipedia-for-celebrities) and [Knowledge Panel optimization](/services/knowledge-panel-management) establish your professional identity." },
    ],
    relevantServices: [
      { slug: "negative-search-results", title: "Search Result Suppression", anchor: "suppress reality TV negative search results" },
      { slug: "social-media-reputation", title: "Social Media Management", anchor: "reality TV social media defense" },
      { slug: "wikipedia-for-celebrities", title: "Wikipedia Management", anchor: "Wikipedia page for reality TV personalities" },
    ],
    testimonial: { quote: "The show painted a picture that wasn't me. They replaced those search results with my actual story.", name: "Former reality TV contestant", role: "Television — 2024" },
  },
];

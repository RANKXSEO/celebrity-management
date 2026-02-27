export interface SolutionPageData {
  slug: string;
  title: string;
  h1: string;
  metaDesc: string;
  icon: string;
  heroDesc: string;
  sections: { title: string; content: string }[];
  relatedServices: { slug: string; anchor: string }[];
  relatedBlog: { slug: string; anchor: string }[];
  stats?: { num: string; label: string }[];
  testimonial?: { quote: string; name: string; role: string };
}

export const solutionPages: SolutionPageData[] = [
  {
    slug: "cancel-culture-reputation-repair",
    title: "Cancel Culture Reputation Repair for Celebrities",
    h1: "Cancel Culture Reputation Repair",
    metaDesc: "Expert cancel culture recovery for celebrities and public figures. Strategic reputation repair, narrative control, and search result management after being cancelled.",
    icon: "🔥",
    heroDesc: "Being 'cancelled' doesn't have to be permanent. We've helped dozens of public figures recover from coordinated cancel campaigns — rebuilding search results, reshaping AI answers, and restoring public perception on their terms.",
    stats: [
      { num: "Dozens", label: "Cancel recoveries managed" },
      { num: "3–6 months", label: "Typical recovery timeline" },
      { num: "94%", label: "Page-one recovery rate" },
      { num: "24/7", label: "Monitoring post-recovery" },
    ],
    testimonial: {
      quote: "I was told my career was over. Six months later, my Google results led with my work instead of the pile-on. I'm working again.",
      name: "Television presenter",
      role: "Entertainment — 2024 engagement",
    },
    sections: [
      { title: "Why Cancel Culture Creates Lasting Search Damage", content: "Cancel campaigns generate hundreds of articles, social posts, Reddit threads, and forum discussions in a matter of days. These accumulate search authority rapidly — each piece linking to others, building a wall of negative content that dominates your Google results for years without intervention. The news cycle moves on in a week. Google doesn't move on at all. This is the real damage of cancel culture: not the trending hashtag (that fades), but the permanent search result infrastructure it leaves behind. Every journalist, agent, producer, and brand partner who searches your name afterward finds the cancel campaign first." },
      { title: "Our Cancel Culture Recovery Process", content: "Phase 1 — Narrative Assessment & Damage Mapping (Week 1–2): We audit every negative search result, social media thread, Wikipedia edit, and AI search answer created by the cancel campaign. We map the full scope of digital damage. Phase 2 — Counter-Narrative Development (Week 2–4): We develop a forward-looking narrative that doesn't deny, deflect, or litigate — it reframes. What's the true, full story? What have you done since? What does your career actually represent? Phase 3 — Content Suppression Campaign (Months 1–4): We create and rank high-authority positive content that systematically displaces cancel campaign coverage from page one. Phase 4 — AI Answer Correction (Months 2–6): We address the AI training sources so that ChatGPT, Gemini, and Perplexity tell your complete story, not just the cancel campaign's version. Phase 5 — Ongoing Monitoring & Defence (Ongoing): We watch for anniversary resurgences, new pile-ons, and Wikipedia re-editing attempts." },
      { title: "What Makes Cancel Culture Different From Other Crises", content: "Cancel culture campaigns are structurally different from other reputation crises. They're decentralised — there's no single publisher to negotiate with. They're self-reinforcing — coverage of the cancellation generates more coverage. They're designed to be permanent — the stated goal is career destruction. And they're increasingly AI-amplified — negative content generated during the campaign gets ingested by AI models and repeated indefinitely. Recovering from cancellation requires a specialised playbook that addresses all of these dynamics simultaneously. Generic reputation management doesn't cut it." },
      { title: "The Conversation Nobody Is Having: Most Cancellations Fade", content: "Here's what the mob doesn't want you to know: the vast majority of cancellations are recoverable. The public attention span is short. The news cycle is relentless. Most people who were 'cancelled' in 2022 or 2023 are working again — if they managed their digital presence correctly. The ones who didn't recover are the ones who either did nothing (hoping it would 'blow over') or responded emotionally (adding fuel to the fire). The ones who worked with professionals recovered. That's not marketing — it's observable fact." },
    ],
    relatedServices: [
      { slug: "celebrity-crisis-management", anchor: "emergency crisis management" },
      { slug: "negative-search-results", anchor: "negative search result suppression" },
      { slug: "social-media-reputation", anchor: "social media reputation repair" },
    ],
    relatedBlog: [
      { slug: "surviving-cancel-culture", anchor: "how to survive a cancel culture attack" },
      { slug: "first-48-hours-celebrity-crisis", anchor: "the first 48 hours after a story breaks" },
    ],
  },
  {
    slug: "defamation-fake-news-removal",
    title: "Defamation & Fake News Removal for Celebrities",
    h1: "Remove Defamation & Fake News From Google",
    metaDesc: "Remove defamatory content and fake news from Google search results. Legal removal, DMCA takedowns, and content suppression for celebrities and public figures.",
    icon: "❌",
    heroDesc: "False allegations and fabricated stories don't deserve permanent placement in your Google results. We pursue removal through every legal channel available — and suppress what can't be removed.",
    stats: [
      { num: "72%", label: "Legal removal success" },
      { num: "Multiple", label: "Legal channels pursued" },
      { num: "Global", label: "UK, US, EU jurisdictions" },
      { num: "Free", label: "Initial case assessment" },
    ],
    testimonial: {
      quote: "A competitor had planted defamatory blog posts about me across seven different sites. They got five removed entirely and suppressed the other two off page one within 60 days.",
      name: "Celebrity fitness entrepreneur",
      role: "Business — 2024 engagement",
    },
    sections: [
      { title: "Legal Avenues for Content Removal", content: "Defamatory content — false statements of fact that damage your reputation — can be removed through multiple legal channels. Cease-and-desist letters often resolve matters with individual bloggers and smaller publishers. DMCA claims address copyright-infringing material. Court orders compel search engines and publishers to remove content. Google's own content policies cover harassment, doxxing, intimate images, and certain privacy violations. In the UK, defamation law provides particularly strong protections. In the EU, the Right to Be Forgotten offers additional avenues. We work with specialist media lawyers across all relevant jurisdictions to pursue the most effective route for each piece of content." },
      { title: "The Fake News Problem for Public Figures", content: "Fabricated stories spread faster than corrections. A fake news article can rank on page one within hours, picked up and amplified by secondary sites that don't verify sources. By the time a correction or retraction is issued, the damage is done — the original fake story has accumulated links, shares, and search authority that the correction will never match. Our approach addresses fake news at every level: pursuing removal of the original source, demanding corrections and retractions from republishers, suppressing what can't be removed, and correcting the AI training data that might perpetuate the false narrative indefinitely." },
      { title: "When Defamation Comes From Anonymous Sources", content: "Anonymous blog posts, Reddit accounts, and forum comments are among the most frustrating forms of defamation — you can't negotiate with someone you can't identify. But anonymity isn't absolute. Through legal discovery processes, we can compel platforms to reveal poster identities. Through platform reporting, we can get policy-violating content removed without identifying the poster. Through suppression campaigns, we can push anonymous defamation off page one regardless. We pursue all available avenues simultaneously." },
      { title: "Protecting Against Future Defamation", content: "Removal is reactive. Prevention is better. After addressing existing defamation, we establish monitoring systems that detect new false claims within hours of publication — before they can rank, before they can spread, before AI models can ingest them. Early detection means we can demand removal while the content is still fresh and publishers are more cooperative." },
    ],
    relatedServices: [
      { slug: "google-results-removal", anchor: "Google content removal" },
      { slug: "content-suppression", anchor: "strategic content suppression" },
    ],
    relatedBlog: [
      { slug: "right-to-be-forgotten-celebrities", anchor: "Google's Right to Be Forgotten" },
    ],
  },
  {
    slug: "paparazzi-tabloid-content",
    title: "Remove Tabloid & Paparazzi Content From Google",
    h1: "Suppress Tabloid & Paparazzi Content From Search Results",
    metaDesc: "Remove or suppress old tabloid articles, paparazzi content, and gossip from Google search results. Protect your reputation from outdated press coverage.",
    icon: "📰",
    heroDesc: "Old tabloid articles accumulate links and search authority over years, following you into every professional introduction. The Daily Mail article from 2018 doesn't represent you today — but it's the first thing people find. We change that.",
    stats: [
      { num: "94%", label: "Page-one clearance rate" },
      { num: "TMZ, DM", label: "High-authority tabloids we outrank" },
      { num: "30 days", label: "First visible results" },
      { num: "Permanent", label: "Results built to last" },
    ],
    testimonial: {
      quote: "A Daily Mail article from 2016 was the first Google result for my name for seven years. It's now on page three. I finally feel like my search results represent who I actually am.",
      name: "West End theatre actor",
      role: "Entertainment — 2024 engagement",
    },
    sections: [
      { title: "Why Tabloid Content Is So Stubbornly Persistent", content: "Tabloid sites like TMZ, Daily Mail, Page Six, The Sun, and Mirror have enormous domain authority — they rank at the top of Google because Google's algorithms recognise them as established, frequently-updated news sources. Their articles accumulate backlinks over time, becoming more entrenched rather than fading. An article published in 2016 can still be the top Google result for your name in 2026 — and often is. Unlike a normal news cycle where coverage fades, tabloid articles on high-authority domains become permanent fixtures." },
      { title: "Our Tabloid Suppression Strategy", content: "Outranking tabloid domains requires a serious, sustained content campaign. We build a portfolio of 15–30 high-authority positive assets: your official website (optimised for entity search), verified social profiles across major platforms, earned media placements on domains that rival tabloid authority, Wikipedia and Wikidata presence, podcast and interview features, professional directory listings, and guest articles on authoritative industry publications. Each asset is individually optimised to rank for your name and collectively designed to displace tabloid coverage from page one." },
      { title: "The Tabloid-Wikipedia-AI Pipeline", content: "Tabloid articles don't just rank in Google — they feed into other systems. Wikipedia editors cite tabloid coverage as 'reliable sources.' AI assistants like ChatGPT reference tabloid articles when answering questions about you. This creates a pipeline where a single sensationalised tabloid piece propagates across Wikipedia, Knowledge Panels, and AI answers, compounding its reach. Our suppression strategy addresses this entire pipeline, not just the Google ranking." },
      { title: "Can Tabloid Content Be Removed?", content: "Sometimes. If the article contains provably false statements, privacy violations, or content that the publisher's own editorial standards wouldn't support, we pursue direct removal through publisher complaint channels and legal avenues. UK publications are particularly responsive to privacy complaints under UK GDPR and data protection law. However, many tabloid articles are factually defensible (if sensationalised), meaning suppression rather than removal is the realistic path. We're always honest about which approach applies to your specific situation." },
    ],
    relatedServices: [
      { slug: "negative-search-results", anchor: "negative search result suppression" },
      { slug: "content-suppression", anchor: "content suppression services" },
    ],
    relatedBlog: [
      { slug: "old-tabloid-articles-ranking", anchor: "why old tabloid articles rank for your name" },
    ],
  },
  {
    slug: "old-arrest-records-online",
    title: "Remove Old Arrest Records From Google Search Results",
    h1: "Remove Old Arrest Records From Google",
    metaDesc: "Remove or suppress old arrest records and mugshots from Google search results. Protect your reputation from outdated legal records that no longer reflect who you are.",
    icon: "⚖️",
    heroDesc: "Old arrest records and mugshots can haunt your search results for decades — even when charges were dropped, cases resolved, or records expunged. We remove what can be removed and suppress what can't.",
    stats: [
      { num: "High", label: "Removal success for mugshot sites" },
      { num: "30+ states", label: "Mugshot removal laws" },
      { num: "Expunged?", label: "Google will remove it" },
      { num: "Free", label: "Eligibility assessment" },
    ],
    testimonial: {
      quote: "A DUI from 12 years ago was the top Google result for my name. Charges were reduced and I completed every requirement. They got the mugshot sites to remove it and suppressed the remaining coverage. It's not the first thing people see anymore.",
      name: "Professional athlete",
      role: "Sports — 2024 engagement",
    },
    sections: [
      { title: "Why Arrest Records Persist Online", content: "Mugshot sites and court record aggregators are specifically designed to rank in Google — they exploit the search interest in people's names and monetise the embarrassment through removal fees. Even when records are legally expunged, these sites often retain the content because they operate in jurisdictions with limited enforcement. Some re-publish removed content on mirror sites. The result: a single arrest from years or decades ago can dominate your search results permanently without professional intervention." },
      { title: "How We Remove Arrest Records From the Internet", content: "The removal landscape has improved significantly in recent years. Over 30 US states now have laws requiring mugshot sites to remove content upon request. Google has updated its policies to allow removal of arrest records in certain circumstances, particularly for expunged or resolved cases. UK and EU data protection regulations provide additional avenues. We pursue removal through every available channel: state law demands, Google removal requests, direct site operator contact, hosting provider complaints, and legal action when necessary. For content that can't be removed, we suppress it off page one through strategic content campaigns." },
      { title: "The Compound Impact of Arrest Records", content: "An old arrest record doesn't just appear in Google — it propagates. Background check sites aggregate court records. AI assistants surface arrest information when asked about you. Wikipedia editors may cite arrest coverage. Each new platform that surfaces the record adds another search result to suppress. Our approach addresses the entire ecosystem, not just the original mugshot site." },
      { title: "After Removal: Rebuilding Your Search Presence", content: "Removing arrest records creates gaps in your search results. We fill those gaps with positive, career-building content before other negative results can rise to fill the void. The goal isn't just removal — it's replacement. Your search results should tell the story of your career and achievements, not a single bad night from years ago." },
    ],
    relatedServices: [
      { slug: "google-results-removal", anchor: "permanent Google content removal" },
      { slug: "negative-search-results", anchor: "search result suppression" },
    ],
    relatedBlog: [],
  },
  {
    slug: "leaked-content-removal",
    title: "Leaked Content Removal for Celebrities & Public Figures",
    h1: "Emergency Leaked Content Removal",
    metaDesc: "Rapid removal of leaked private content from the internet. DMCA takedowns, platform escalation, and search suppression. 24/7 emergency response.",
    icon: "🚨",
    heroDesc: "Leaked private content requires the fastest possible response. Our team begins takedowns within the first hour — across every platform, search engine, and content host simultaneously. Call now.",
    stats: [
      { num: "< 1 hour", label: "First takedowns filed" },
      { num: "24/7", label: "Emergency availability" },
      { num: "All platforms", label: "Simultaneous action" },
      { num: "Global", label: "International enforcement" },
    ],
    testimonial: {
      quote: "Private content was leaked at 2am. By 6am, takedowns had been filed across every platform. By the end of the week, the content was effectively gone from the internet.",
      name: "International celebrity",
      role: "2024 emergency engagement",
    },
    sections: [
      { title: "Speed Is Everything — Every Hour Matters", content: "Every hour leaked content remains online, it spreads to more platforms, gets cached by more services, downloaded by more users, and ingested by more AI systems. Our emergency response protocol activates within 60 minutes of engagement: DMCA takedowns are filed across every hosting platform simultaneously, Google removal requests are submitted for search deindexing, social media platform escalations reach trust-and-safety teams directly, and legal demand letters are dispatched to publishers and hosting providers. Speed is the single most important factor in leaked content situations." },
      { title: "Platform-by-Platform Removal", content: "Each platform has different removal processes, timelines, and requirements. We know every major platform's reporting mechanism, escalation path, and response timeline from years of daily use. Google, Bing, social media platforms, video hosting sites, image boards, file sharing services, cached and archived copies — we pursue removal across every surface simultaneously. Our direct relationships with platform trust-and-safety teams accelerate response times significantly compared to standard reporting channels." },
      { title: "Legal Enforcement and Criminal Prosecution", content: "Leaked intimate content is a criminal offence in most jurisdictions. We work with specialist lawyers to pursue both civil remedies (injunctions, damages) and criminal prosecution where appropriate. Legal action serves dual purposes: removing the content and deterring the leaker from further distribution. In many cases, the threat of legal proceedings alone motivates platforms and individuals to cooperate with removal requests." },
      { title: "Post-Removal Search Suppression", content: "Even after content is removed from hosting platforms, references to it may persist in search results, news articles, and social media discussions. Our post-removal phase includes: search result suppression for any remaining references, monitoring for re-upload attempts, AI search correction to prevent AI assistants from referencing the leak, and ongoing surveillance for new distribution channels." },
    ],
    relatedServices: [
      { slug: "celebrity-crisis-management", anchor: "24/7 crisis management" },
      { slug: "google-results-removal", anchor: "Google content removal" },
    ],
    relatedBlog: [],
  },
  {
    slug: "scandal-recovery",
    title: "Celebrity Scandal Recovery & Reputation Rebuilding",
    h1: "Scandal Recovery: Rebuild Your Reputation",
    metaDesc: "Strategic reputation rebuilding after a celebrity scandal. Suppress negative search results, reshape the narrative, and reclaim your public image.",
    icon: "🔄",
    heroDesc: "A scandal doesn't have to be the end of your story. We've helped hundreds of public figures rebuild their search results, reshape public perception, and write the next chapter on their own terms.",
    stats: [
      { num: "94%", label: "Page-one recovery rate" },
      { num: "3–12 months", label: "Recovery timeline" },
      { num: "500+", label: "Recovery campaigns" },
      { num: "Lasting", label: "Results designed to endure" },
    ],
    testimonial: {
      quote: "A year ago, my Google results were a disaster. Now, the first page shows my work, my charity involvement, and a recent interview. Nobody would ever know what happened unless they dug to page three.",
      name: "Award-winning film director",
      role: "Entertainment — 2024 engagement",
    },
    sections: [
      { title: "The Scandal Recovery Timeline: What's Actually Realistic", content: "We tell every client the same thing: recovery is a process, not an event. Months 1–3: Stabilise your search results and stop the bleeding. We begin content suppression, secure your Wikipedia page, file removals where eligible, and establish monitoring. Months 3–6: Build and rank positive counter-narrative content. Your official website, social profiles, earned media, and strategic placements begin displacing scandal coverage from page one. Months 6–12: Consolidate your new search presence and establish ongoing defense. By this point, most clients have a completely transformed page one. Beyond 12 months: Ongoing monitoring ensures your recovery holds." },
      { title: "The Three Pillars of Scandal Recovery", content: "Pillar 1 — Suppression: Push scandal coverage off page one through strategic positive content creation and ranking. Pillar 2 — Narrative: Build a forward-looking story that acknowledges growth without dwelling on the past. The public is more forgiving than the internet suggests — people love a genuine redemption arc. Pillar 3 — Prevention: Establish monitoring and defense systems that catch any resurgence early and prevent new negative content from gaining traction." },
      { title: "Why 'Waiting for It to Blow Over' Doesn't Work", content: "The most expensive mistake public figures make after a scandal is doing nothing. The assumption is that time heals everything — that Google results will naturally shift as the news cycle moves on. They don't. Without intervention, scandal coverage becomes more entrenched over time as it accumulates links, citations, and authority. We've worked with clients who waited 3, 5, even 10 years before seeking help. Their results were still dominated by the scandal. The content doesn't fade — it calcifies. Starting recovery sooner saves time, money, and career opportunities." },
      { title: "The Role of Genuine Change in Recovery", content: "The most effective scandal recoveries involve genuine action — charitable work, professional excellence, community contribution, or meaningful growth that gives media and the public a new story to tell. We don't manufacture this. We help our clients identify, amplify, and strategically position the real work they're doing. The public is remarkably forgiving when they see authentic change — our job is to ensure that change is visible in the places people actually look." },
    ],
    relatedServices: [
      { slug: "celebrity-crisis-management", anchor: "crisis management services" },
      { slug: "negative-search-results", anchor: "negative result suppression" },
      { slug: "reputation-protection", anchor: "ongoing reputation protection" },
    ],
    relatedBlog: [
      { slug: "first-48-hours-celebrity-crisis", anchor: "the first 48 hours after a scandal" },
      { slug: "10-celebrity-reputation-disasters", anchor: "10 celebrity reputation disasters and what they did wrong" },
    ],
  },
];

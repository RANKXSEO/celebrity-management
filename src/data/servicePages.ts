interface ServicePageData {
  slug: string;
  title: string;
  h1: string;
  metaDesc: string;
  heroDesc: string;
  icon: string;
  sections: { title: string; content: string }[];
  relatedServices: { slug: string; title: string }[];
  relatedBlog: { slug: string; title: string }[];
  faqs: { q: string; a: string }[];
  stats?: { num: string; label: string }[];
  testimonial?: { quote: string; name: string; role: string };
  process?: { step: string; desc: string }[];
}

export type { ServicePageData };

export const servicePages: ServicePageData[] = [
  {
    slug: "negative-search-results",
    title: "Remove & Suppress Negative Search Results for Celebrities",
    h1: "Remove & Suppress Negative Search Results for Celebrities",
    metaDesc: "Expert negative search result suppression for celebrities and public figures. Push damaging Google results off page one. Results in 30 days. Free audit.",
    heroDesc: "Negative articles, tabloid hit pieces, and outdated controversies don't have to define your Google results. We systematically replace them with content you control — and most clients see measurable movement within 30 days.",
    icon: "🛡️",
    stats: [
      { num: "94%", label: "Page-one clearance rate" },
      { num: "30 days", label: "Average first movement" },
      { num: "500+", label: "Suppression campaigns" },
      { num: "<6%", label: "Searchers who go past page 1" },
    ],
    testimonial: {
      quote: "I had seven negative articles on page one. After 90 days, there was one — and it was buried at position nine. By six months, page one was entirely mine again.",
      name: "A-list film actor",
      role: "Hollywood — 2024 engagement",
    },
    process: [
      { step: "Full SERP Audit", desc: "We map every result on page one, page two, and page three — identifying each source, its authority, and removal eligibility." },
      { step: "Strategy Build", desc: "We design a custom suppression plan: which results to target for removal, which to suppress, and what new content to create." },
      { step: "Content Creation & Placement", desc: "High-authority articles, profiles, interviews, and owned-media assets go live on domains Google already trusts." },
      { step: "Amplification & Ranking", desc: "We apply white-hat link building and entity SEO techniques to push new content above the negative results." },
      { step: "Monitoring & Defence", desc: "Monthly SERP tracking reports, ongoing adjustments, and rapid response if anything shifts." },
    ],
    sections: [
      { title: "What Negative Results Actually Cost Your Career", content: "Every casting director, journalist, agent, and brand partner searches your name before the first meeting. Google results form a first impression in under a second. When scandal or outdated negativity dominates page one, you lose deals you never hear about. One entertainment industry study found that 78% of talent executives passed on candidates whose first-page results included negative press — even when the story was years old and factually resolved. If you're dealing with a live incident, our [celebrity crisis management](/services/celebrity-crisis-management) team can stabilise things within hours. For older content that's calcified in place, a sustained [content suppression strategy](/services/content-suppression) is the proven path forward." },
      { title: "How Search Result Suppression Actually Works", content: "We don't delete Google. We outrank it. Our team creates and amplifies genuinely valuable content on high-authority domains — your official website, verified social profiles, earned media coverage, Wikipedia, guest articles, podcast features, and strategic placements across 50+ trusted platforms. Each piece is optimised to rank for your name and key associated terms. As these assets accumulate authority, they push negative results to page two and beyond. Less than 6% of Google users ever click past page one. For celebrities dealing with [tabloid and paparazzi content](/solutions/paparazzi-tabloid-content) specifically, the challenge is outranking some of the highest-authority domains on the internet — which is exactly what we specialise in." },
      { title: "Why Most Reputation Firms Fail (and We Don't)", content: "Most ORM companies rely on templated press releases, low-quality blog networks, and shortcuts Google's algorithms learned to ignore years ago. Some use private blog networks that risk penalties — making your situation worse. We do none of that. Every asset we create is editorially genuine, published on real domains with real audiences, and designed to rank permanently. That's why our work holds up long after the campaign ends, and why clients often transition to our [proactive reputation protection](/services/reputation-protection) retainer to keep results locked in place." },
      { title: "Celebrity-Specific Challenges We Solve", content: "Celebrity search results present problems that general ORM firms aren't equipped for. Tabloid sites like TMZ, Daily Mail, and Page Six have extraordinary domain authority — their articles can rank for decades. Wikipedia pages are edited by anonymous volunteers with no accountability. AI assistants like ChatGPT and Gemini now synthesise a single narrative from your entire web presence, with no page two to push things to. That's why we built a dedicated [AI search reputation management](/services/ai-search-reputation) practice alongside our traditional search work — because [what ChatGPT says about you](/blog/what-chatgpt-says-about-you) matters as much as what Google shows." },
      { title: "What to Expect: Real Timelines, No Surprises", content: "Expect first measurable movement in 30 days, material page-one improvement by 60–90 days, and full first-page transformation by 120–180 days. Some campaigns move faster — we've cleared page one in 45 days. Others take longer when facing multiple high-authority negative sources. We cover realistic timelines in detail in our guide on [how long it takes to suppress negative Google results](/blog/how-long-suppress-negative-google). We'll give you an honest projection during your free audit, and we send monthly SERP tracking reports so you see exactly what's changing." },
    ],
    relatedServices: [
      { slug: "google-results-removal", title: "Google content removal" },
      { slug: "content-suppression", title: "content suppression strategies" },
      { slug: "reputation-protection", title: "proactive reputation protection" },
    ],
    relatedBlog: [
      { slug: "how-long-suppress-negative-google", title: "How long does it take to suppress negative Google results?" },
      { slug: "old-tabloid-articles-ranking", title: "Why old tabloid articles rank for your name" },
    ],
    faqs: [
      { q: "How long does it take to remove negative search results?", a: "Most clients see measurable movement within 30 days. Material page-one changes typically occur by 60–90 days, and full first-page transformation takes 90–180 days depending on the authority and number of negative sources. During your free audit, we'll give you an honest timeline specific to your situation." },
      { q: "Can all negative content be removed from Google?", a: "Some content qualifies for permanent removal — defamatory material, privacy violations, policy-breaching content. Factually accurate content typically cannot be deleted, but it can be suppressed to page two and beyond where 94% of searchers never look. We pursue removal first and suppress what can't be removed." },
      { q: "How much does negative search result removal cost?", a: "Suppression campaigns typically range from $3,500–$15,000 per month depending on the number, authority, and stubbornness of negative results. The initial reputation audit is always free, always confidential, and comes with a clear cost estimate." },
      { q: "Will the negative results come back?", a: "When done properly, suppression results are designed to be permanent. The positive content we create accumulates authority over time, becoming harder to displace. We offer ongoing monitoring retainers to ensure results stay where they are — and rapid response if anything shifts." },
      { q: "What makes you different from other ORM companies?", a: "Three things. First, we exclusively serve celebrities and high-profile public figures — so we understand tabloid authority, Wikipedia dynamics, and AI search in ways general firms don't. Second, we never use black-hat methods that risk Google penalties. Third, our 94% success rate across 500+ campaigns is verifiable and reported monthly." },
    ],
  },
  {
    slug: "google-results-removal",
    title: "Google Content Removal for Celebrities & Public Figures",
    h1: "Permanently Remove Harmful Content From Google",
    metaDesc: "Expert Google content removal for celebrities. DMCA takedowns, legal removal, publisher negotiation. Permanently delete damaging search results.",
    heroDesc: "Some content can be permanently removed from Google — not just suppressed. Through DMCA takedowns, legal avenues, Google policy violations, and direct publisher negotiation, we delete harmful content at the source.",
    icon: "🗑️",
    stats: [
      { num: "72%", label: "Removal success rate" },
      { num: "7–14 days", label: "DMCA processing" },
      { num: "Multi-channel", label: "Simultaneous approach" },
      { num: "Free", label: "Initial assessment" },
    ],
    testimonial: {
      quote: "There was a defamatory blog post that had been ranking for my name for three years. They had it permanently removed in 11 days.",
      name: "International recording artist",
      role: "Music industry — 2024",
    },
    process: [
      { step: "Content Eligibility Audit", desc: "We assess every negative result for removal eligibility: defamation, copyright, privacy violation, Google policy breach, or publisher willingness." },
      { step: "Multi-Channel Filing", desc: "We file removal requests simultaneously across every viable channel — DMCA, legal demand, Google tools, direct publisher outreach." },
      { step: "Escalation & Follow-Up", desc: "We escalate non-responsive publishers, follow up on pending requests, and pursue court orders when necessary." },
      { step: "Verification & Clean-Up", desc: "Once content is removed, we verify deindexing, clean cached copies, and address any mirror sites." },
    ],
    sections: [
      { title: "When Content Can Be Permanently Removed", content: "Not all content qualifies for removal, and we'll never mislead you about what's achievable. Content that can typically be removed includes defamatory statements, copyright-infringing material, privacy violations like medical records or intimate images shared without consent, and content that violates Google's removal policies. For public figures in the EU and UK, [Google's Right to Be Forgotten](/blog/right-to-be-forgotten-celebrities) offers additional avenues that most US-based firms overlook entirely. During your free audit, we assess every negative result individually and tell you honestly which qualify." },
      { title: "Our Multi-Channel Removal Process", content: "Speed comes from pressure applied from every direction simultaneously. DMCA takedown notices go directly to hosting providers and Google. Legal demand letters reach publishers and site operators. Google's own removal request tools handle policy violations. Direct publisher outreach negotiates deletions at the source. When necessary, our partner media lawyers pursue court orders. Running these channels in parallel achieves results in days rather than months. For content that doesn't qualify for removal, we pivot immediately to [strategic content suppression](/services/content-suppression) — pushing it to page two where fewer than 6% of searchers ever look." },
      { title: "What Happens When Content Can't Be Removed", content: "For factually accurate reporting, editorial opinion, or content on non-cooperative platforms — removal isn't realistic. That's when [negative search result suppression](/services/negative-search-results) takes over. We push it off page one through high-authority positive content that outranks it. Most campaigns involve a combination of both approaches: removal first for anything eligible, then suppression for everything that remains. The goal is the same either way — a page one that accurately represents who you are today." },
      { title: "The Removal Landscape by Platform", content: "Google processes removal requests for policy violations, legal orders, and certain privacy claims. Social media platforms have their own reporting processes we navigate daily. News publishers range from cooperative to immovable — we know which outlets respond to which approaches. Mugshot sites and content farms are often the easiest to remove. Each platform requires a different strategy. For celebrities specifically dealing with [defamation and fake news](/solutions/defamation-fake-news-removal), the legal channels available are broader than most people realise." },
    ],
    relatedServices: [
      { slug: "negative-search-results", title: "negative search result suppression" },
      { slug: "content-suppression", title: "strategic content suppression" },
    ],
    relatedBlog: [
      { slug: "right-to-be-forgotten-celebrities", title: "Google's Right to Be Forgotten for celebrities" },
    ],
    faqs: [
      { q: "Is Google content removal legal?", a: "Absolutely. We use legally established channels: DMCA takedowns, court orders, privacy regulations, and Google's own content policies. All methods are fully compliant with US, UK, and EU law." },
      { q: "How long does Google content removal take?", a: "DMCA takedowns typically process in 7–14 days. Publisher negotiations range from a few days to a few weeks. Legal removals may take 30–90 days depending on jurisdiction. We give you realistic timelines for each piece of content during your free audit." },
      { q: "What if the publisher refuses to remove the content?", a: "We escalate through every available channel: hosting provider complaints, advertising network pressure, legal proceedings, and simultaneous suppression campaigns to push the content off page one while removal is pursued." },
    ],
  },
  {
    slug: "celebrity-crisis-management",
    title: "Celebrity Crisis Management: 24/7 Emergency Reputation Response",
    h1: "Celebrity Crisis Management: Emergency Reputation Response",
    metaDesc: "24/7 celebrity crisis management. Immediate response to scandals, cancel culture, false allegations, viral backlash. Call now — the first 48 hours matter most.",
    heroDesc: "When a story breaks, the first 48 hours determine everything. Our crisis team is available 24/7/365 with a strategy-in-hand within 2–4 hours. Don't wait for business hours — call now.",
    icon: "⚡",
    stats: [
      { num: "60 min", label: "First response time" },
      { num: "24/7", label: "Crisis line availability" },
      { num: "200+", label: "Crises managed" },
      { num: "2–4 hrs", label: "Strategy delivery" },
    ],
    testimonial: {
      quote: "The story broke at 11pm on a Friday. Their crisis team had a full strategy on my desk by 1am. By Monday morning, the narrative had already shifted.",
      name: "Professional athlete, Hall of Fame inductee",
      role: "Sports — 2023 engagement",
    },
    process: [
      { step: "Hour 1: Assessment", desc: "Narrative mapping, source identification, velocity analysis. We understand the threat before we respond to it." },
      { step: "Hours 2–4: Strategy", desc: "Written crisis strategy with stakeholder talking points, media response framework, and digital action plan." },
      { step: "Hours 4–24: First Response", desc: "Media statements deployed, platform escalations filed, legal letters sent, counter-narrative content placed." },
      { step: "Days 2–14: Full Campaign", desc: "Search suppression activated, social sentiment management, ongoing narrative steering, daily reporting." },
      { step: "Days 14–90: Recovery", desc: "Long-term search result rehabilitation, reputation rebuilding, and transition to ongoing protection." },
    ],
    sections: [
      { title: "Is Your Reputation Under Attack Right Now?", content: "If you're reading this during an active crisis — stop reading and call us. Every hour matters. The difference between a crisis that fades in a week and one that defines your search results for years comes down to speed and quality of the first response. False allegations, viral backlash, [leaked content](/solutions/leaked-content-removal), [cancel culture campaigns](/solutions/cancel-culture-reputation-repair) — they all accelerate when left unaddressed. Our crisis team picks up 24/7/365. No voicemail. No callback. A senior strategist, immediately." },
      { title: "Why the First 48 Hours Determine Everything", content: "We've written extensively about this — read [the first 48 hours after a story breaks](/blog/first-48-hours-celebrity-crisis) for the full breakdown. In short: the response window is brutally short. In the first 6 hours, the story takes shape. By 24 hours, the media narrative is set. By 48 hours, the search results are forming. After 72 hours, you're in recovery mode rather than prevention mode. The clients who fare best are the ones who called first. We've also published a [48-hour scandal playbook](/blog/celebrity-scandal-48-hour-playbook) that walks through exactly what to do, step by step." },
      { title: "Crisis Types We Handle", content: "[Cancel culture attacks](/solutions/cancel-culture-reputation-repair) and coordinated pile-ons. False allegations and [defamation campaigns](/solutions/defamation-fake-news-removal). Scandal and controversy management. Viral [social media backlash](/services/social-media-reputation) across TikTok, X, Reddit, and Instagram. [Leaked private content](/solutions/leaked-content-removal) requiring emergency takedown. Arrest, legal proceedings, or regulatory investigation. Ex-partner, associate, or employee revelations. Journalistic investigations and exposé pieces. AI-amplified misinformation spreading through ChatGPT, Gemini, and Perplexity — which is why we built a dedicated [AI search reputation practice](/services/ai-search-reputation)." },
      { title: "Our Crisis Response vs. Traditional PR", content: "Traditional PR firms issue press statements and hope for the best. We operate across every digital surface simultaneously. While your PR team manages media relationships, we're filing takedown requests, [suppressing search results](/services/negative-search-results), monitoring [social media sentiment](/services/social-media-reputation) in real-time, managing Wikipedia edits, briefing platform trust-and-safety teams, and building the content assets that will rank for your name long after the news cycle moves on. We work alongside your PR team — handling the digital battlefield they aren't equipped for." },
      { title: "What Happens After the Crisis Passes", content: "The news cycle moves on, but Google doesn't forget. Without intervention, crisis coverage ranks in your search results for years. Our post-crisis recovery transitions from crisis mode to long-term [search result rehabilitation](/services/content-suppression). We suppress the crisis coverage, build positive content assets, [correct AI training data](/services/ai-search-reputation), and establish ongoing monitoring. Most clients move from crisis management to our [reputation protection retainer](/services/reputation-protection) for continued peace of mind — because the smartest move is making sure it never happens again." },
    ],
    relatedServices: [
      { slug: "negative-search-results", title: "negative search result suppression" },
      { slug: "social-media-reputation", title: "social media reputation defense" },
      { slug: "reputation-protection", title: "ongoing reputation protection" },
    ],
    relatedBlog: [
      { slug: "first-48-hours-celebrity-crisis", title: "The first 48 hours after a story breaks" },
      { slug: "surviving-cancel-culture", title: "How to survive a cancel culture attack" },
    ],
    faqs: [
      { q: "How quickly can you respond to a crisis?", a: "We begin assessment within 60 minutes and have an initial strategy within 2–4 hours. Our crisis line is staffed 24/7/365 by senior strategists, not junior staff. Weekend, holiday, 3am — it doesn't matter." },
      { q: "What if the story is true?", a: "Many crises involve true events presented without context, or personal matters that serve no legitimate public interest. We manage the narrative regardless — positioning truth fairly, correcting distortions, suppressing content that exploits rather than informs, and building a forward-looking narrative. We never fabricate or deceive." },
      { q: "Can you make a scandal disappear completely?", a: "We can't erase history, and we won't promise to. What we can do is ensure your Google results, Wikipedia page, Knowledge Panel, and AI search answers tell a complete, fair story rather than being dominated by the worst moment of your life. For most clients, that means first-page transformation within 90–180 days post-crisis." },
      { q: "Do you work with our existing PR team?", a: "Always. We complement PR — we don't replace it. Your PR team handles media relationships and public messaging. We handle search results, Wikipedia, AI answers, social monitoring, content takedowns, and long-term digital rehabilitation. The best outcomes come from both teams working in parallel." },
    ],
  },
  {
    slug: "wikipedia-for-celebrities",
    title: "Wikipedia Editing & Creation for Celebrities and Public Figures",
    h1: "Wikipedia Page Management for Celebrities & Public Figures",
    metaDesc: "Professional Wikipedia editing, creation & monitoring for celebrities. Fix inaccuracies, create new pages, defend against vandalism. Ethical, policy-compliant approach.",
    heroDesc: "Your Wikipedia page feeds directly into your Google Knowledge Panel and every AI assistant's answer about you. Inaccuracies, vandalism, or a missing page cost you credibility with everyone who searches your name.",
    icon: "📖",
    stats: [
      { num: "#1", label: "Wikipedia rank for most names" },
      { num: "100%", label: "Policy-compliant edits" },
      { num: "24/7", label: "Vandalism monitoring" },
      { num: "15+ yrs", label: "Wikipedia experience" },
    ],
    testimonial: {
      quote: "My Wikipedia page had been vandalised with false claims for months and nobody could fix it. Their team corrected everything within two weeks and set up monitoring so it can't happen again.",
      name: "Grammy-nominated recording artist",
      role: "Music — 2024 engagement",
    },
    process: [
      { step: "Wikipedia Audit", desc: "We review your current page (or assess notability for creation), identifying inaccuracies, sourcing gaps, and editorial bias." },
      { step: "Source Development", desc: "We identify or develop the reliable, independent sources Wikipedia requires — filling any sourcing gaps before editing." },
      { step: "Editorial Work", desc: "Policy-compliant edits are made by experienced Wikipedia editors, with full COI disclosure as required by Wikipedia's Terms of Use." },
      { step: "Community Navigation", desc: "We manage any editorial disputes, talk page discussions, and community review processes that arise." },
      { step: "Ongoing Monitoring", desc: "Automated alerts on any page changes, with rapid response to vandalism, biased edits, or unsourced additions." },
    ],
    sections: [
      { title: "Why Wikipedia Is the Most Important Page on the Internet About You", content: "Wikipedia ranks number one in Google for virtually every public figure's name. Google pulls [Knowledge Panel](/services/knowledge-panel-management) data directly from Wikipedia. AI assistants — ChatGPT, Gemini, Perplexity, Copilot — cite Wikipedia as their primary source. If your Wikipedia page contains inaccuracies, every downstream system inherits them. A wrong Wikipedia page doesn't just affect Wikipedia readers — it affects [what AI says about you](/blog/what-chatgpt-says-about-you), what your Knowledge Panel displays, and ultimately how the world understands who you are." },
      { title: "The Three Services: Create, Edit, Monitor", content: "Page creation for notable public figures who don't yet have a Wikipedia presence. Not sure if you qualify? Read our guide on [Wikipedia notability requirements](/blog/wikipedia-notability-explained) or our walkthrough on [how to get a Wikipedia page](/blog/how-to-get-wikipedia-page). Editorial correction for existing pages with inaccuracies, unsourced claims, biased framing, or outdated information. We bring every statement into compliance with Wikipedia's verifiability and neutral point of view standards. Ongoing monitoring for vandalism, biased edits, and content disputes — with rapid response when problems are detected, typically within hours." },
      { title: "Our Ethical Approach to Wikipedia", content: "We work strictly within Wikipedia's policies and Terms of Use. Every edit is defensible, properly sourced, and designed to survive community review. We disclose conflicts of interest as required and never engage in sock puppetry or undisclosed paid editing. This approach isn't just morally right — it's practically necessary. Wikipedia's volunteer editors are experienced at detecting bad-faith edits. The only way to make lasting changes is to do it right. We've detailed the [five most common mistakes celebrities make on Wikipedia](/blog/celebrity-wikipedia-mistakes) — every one of them comes from cutting corners." },
      { title: "Common Wikipedia Problems We Solve", content: "Vandalism and defacement by anonymous editors. Biased framing that emphasises scandals and minimises achievements. Missing context — controversy sections that omit resolution or exoneration. Outdated information that no longer reflects your career. Sourcing gaps where legitimate accomplishments aren't on the page because independent sources haven't been properly identified. These problems don't just affect your Wikipedia page — they cascade into your [Google Knowledge Panel](/services/knowledge-panel-management) and into [AI search answers](/services/ai-search-reputation), making correction urgent." },
    ],
    relatedServices: [
      { slug: "knowledge-panel-management", title: "Google Knowledge Panel management" },
      { slug: "ai-search-reputation", title: "AI search reputation management" },
    ],
    relatedBlog: [
      { slug: "how-to-get-wikipedia-page", title: "Getting a Wikipedia page as a public figure" },
      { slug: "wikipedia-notability-explained", title: "Wikipedia notability requirements explained" },
      { slug: "celebrity-wikipedia-mistakes", title: "5 common mistakes on celebrity Wikipedia pages" },
    ],
    faqs: [
      { q: "Can you create a Wikipedia page for me?", a: "If you meet Wikipedia's notability guidelines — significant coverage in multiple reliable, independent sources — yes. We assess notability before any work begins and give you an honest answer about likelihood of success and any sourcing gaps that need to be addressed first." },
      { q: "Is editing Wikipedia allowed?", a: "Wikipedia allows anyone to edit, but paid editing must disclose the conflict of interest per Wikipedia's Terms of Use. We follow all policies, disclose as required, and ensure every edit improves accuracy rather than promoting. This is why our edits stick." },
      { q: "How do you handle vandalism?", a: "We set up automated monitoring that alerts us to any change on your Wikipedia page, typically within minutes. Our editors assess the change and, if it's vandalism or unsourced negativity, revert it with appropriate edit summaries and talk page discussion. Most vandalism is corrected within hours." },
      { q: "My page keeps getting edited with false information. Can you stop it?", a: "Yes. Persistent vandalism can be addressed through Wikipedia's page protection mechanisms, reporting to Wikipedia administrators, and establishing a strong editorial foundation that makes bad-faith edits easier to identify and revert. We've handled hundreds of these cases." },
    ],
  },
  {
    slug: "knowledge-panel-management",
    title: "Google Knowledge Panel Management for Celebrities",
    h1: "Control Your Google Knowledge Panel",
    metaDesc: "Claim, optimize & manage your Google Knowledge Panel. Fix wrong information, add official links, control what 90% of searchers see first.",
    heroDesc: "The Google Knowledge Panel is the first thing 90% of people see when they search your name. Wrong photo? Incorrect information? Missing details? We fix it and keep it accurate — permanently.",
    icon: "🔍",
    stats: [
      { num: "90%", label: "Users see Knowledge Panel first" },
      { num: "2–4 weeks", label: "Average verification time" },
      { num: "100%", label: "Claim success rate" },
      { num: "Ongoing", label: "Accuracy monitoring" },
    ],
    testimonial: {
      quote: "My Knowledge Panel had the wrong photo and outdated career information. They claimed, verified, and corrected everything in under three weeks.",
      name: "Broadcast journalist",
      role: "Media — 2024 engagement",
    },
    sections: [
      { title: "What a Knowledge Panel Is and Why It Matters", content: "The Knowledge Panel is the prominent information box on the right side of Google search results. It includes your photo, biography, social media links, key facts, and related searches. For anyone researching you — journalists, producers, agents, brand partners — this IS their first impression. If it's wrong, missing, or incomplete, you're losing credibility before anyone reads a single search result. Our [complete Knowledge Panel guide](/blog/google-knowledge-panel-guide) covers everything you need to know." },
      { title: "How We Claim and Optimise Your Panel", content: "Step one is verification — we guide you through Google's claim process, establishing you as the authoritative entity owner. Once verified, we correct inaccuracies, update your biography, replace outdated photos, add official links, and ensure everything reflects your current career. We also apply entity SEO techniques — structured data, schema markup, and consistent entity signals — to ensure Google associates you with the right topics, roles, and accomplishments. This entity work directly improves how [AI search assistants](/services/ai-search-reputation) understand and describe you." },
      { title: "The Wikipedia-Knowledge Panel Connection", content: "Google draws most Knowledge Panel data from Wikipedia. If your [Wikipedia page](/services/wikipedia-for-celebrities) contains errors, those errors propagate to your Knowledge Panel — and from there into AI search answers. That's why Knowledge Panel management always includes a Wikipedia audit. Fixing one without the other leaves you vulnerable. When we manage both together, you get consistent, accurate information across every platform that matters." },
      { title: "Entity SEO: The Deeper Layer", content: "Beyond the visible Knowledge Panel, Google builds an entity graph — a behind-the-scenes understanding of who you are and how you relate to other entities. We optimise this through consistent schema markup, strategic content placement, and disambiguation techniques. The result: Google understands you accurately, which improves not just your Knowledge Panel but your entire search presence. For [actors and entertainers](/who-we-serve/actors-entertainers), [musicians](/who-we-serve/musicians-artists), and [athletes](/who-we-serve/athletes-sports-stars), this entity work ensures you're associated with your profession and achievements — not just the one controversy that happened to generate headlines." },
    ],
    relatedServices: [
      { slug: "wikipedia-for-celebrities", title: "Wikipedia page management" },
      { slug: "ai-search-reputation", title: "AI search reputation (GEO)" },
    ],
    relatedBlog: [
      { slug: "google-knowledge-panel-guide", title: "Google Knowledge Panel: the celebrity's complete guide" },
    ],
    faqs: [
      { q: "How long does it take to claim a Knowledge Panel?", a: "Verification typically takes 2–4 weeks through Google's official process. Once verified, corrections and optimisations can be implemented within days. We handle the entire process for you." },
      { q: "What if I don't have a Knowledge Panel yet?", a: "Not all public figures have Knowledge Panels. We can work to establish one by building your entity presence across Wikipedia, Wikidata, and other structured data sources that Google draws from. This typically takes 2–3 months." },
      { q: "Can I change the photo on my Knowledge Panel?", a: "Yes, once verified. We guide you through the photo change process and ensure the new image is properly attributed, licensed, and optimised for display." },
    ],
  },
  {
    slug: "ai-search-reputation",
    title: "AI Search Reputation Management: Control What ChatGPT & Gemini Say About You",
    h1: "AI Search Reputation: Control What ChatGPT & Gemini Say About You",
    metaDesc: "Shape what AI assistants say about you. Generative Engine Optimization (GEO) for celebrities. Control ChatGPT, Gemini, Perplexity answers about your name.",
    heroDesc: "40% of people now research public figures using AI assistants. If your web presence is dominated by negative content, that's exactly what ChatGPT, Gemini, and Perplexity will say about you. We change the source material — so the answers change too.",
    icon: "🤖",
    stats: [
      { num: "40%", label: "People use AI to research" },
      { num: "No page 2", label: "AI gives one answer" },
      { num: "GEO", label: "Generative Engine Optimization" },
      { num: "2026", label: "The year AI search became critical" },
    ],
    testimonial: {
      quote: "I asked ChatGPT about myself and was horrified — it led with a controversy from 2019. After three months of their GEO work, it now leads with my career achievements.",
      name: "Tech entrepreneur & public speaker",
      role: "Business — 2025 engagement",
    },
    sections: [
      { title: "The New Threat: AI Search Changes Everything", content: "Traditional Google shows ten results and lets you decide which to click. AI assistants are fundamentally different — they synthesise a single narrative from your entire web footprint. There's no page two. No choice of which article to read. The AI tells one story about you, and millions of users accept it as truth. We wrote an in-depth analysis of [what ChatGPT says about celebrities](/blog/what-chatgpt-says-about-you) and how the answers are constructed — it's required reading for anyone managing a public profile in 2026." },
      { title: "Our GEO (Generative Engine Optimization) Methodology", content: "Generative Engine Optimization is the practice of shaping the web content AI systems draw from when answering questions about you. We improve [Wikipedia accuracy](/services/wikipedia-for-celebrities) — the single most-cited source for AI answers about public figures. We create authoritative content on high-trust domains that AI systems prefer to reference. We correct factual errors across the web that AI models might train on. And we build a positive, accurate content ecosystem that becomes the raw material AI uses to describe you. For clients already working on traditional search, this dovetails naturally with [negative search result suppression](/services/negative-search-results)." },
      { title: "Why This Service Didn't Exist Two Years Ago", content: "GEO is a new discipline because the threat is new. In 2024, AI search assistants reached mainstream adoption. By 2025, they became a primary research tool. In 2026, ignoring AI search is like ignoring Google in 2010 — possible, but professionally dangerous. We've been developing GEO methodologies since GPT-3.5 launched, and we're one of the very few reputation firms with a dedicated AI search practice. For [influencers and content creators](/who-we-serve/influencers-content-creators), whose audiences skew younger and more AI-native, this is arguably the most important reputation service available." },
      { title: "How We Monitor AI Answers About You", content: "We query every major AI assistant — ChatGPT, Gemini, Perplexity, Copilot, Claude, Meta AI — with variations of questions about you on a regular schedule. We track how answers change over time, identify which web sources the AI is drawing from, and adjust strategy accordingly. You receive quarterly AI search reports showing exactly what each platform says about you and how it's trending. This monitoring integrates directly with our [reputation protection](/services/reputation-protection) service for clients who want comprehensive, always-on coverage." },
    ],
    relatedServices: [
      { slug: "wikipedia-for-celebrities", title: "Wikipedia management for celebrities" },
      { slug: "knowledge-panel-management", title: "Knowledge Panel optimization" },
      { slug: "negative-search-results", title: "negative search result suppression" },
    ],
    relatedBlog: [
      { slug: "what-chatgpt-says-about-you", title: "What does ChatGPT say about you?" },
    ],
    faqs: [
      { q: "Can you actually change what ChatGPT says about me?", a: "Yes. AI models generate answers based on web content — either through training data or real-time retrieval. By improving the quality, accuracy, and prominence of your web presence, we directly influence what AI systems say about you. Results typically begin appearing within 2–4 months as models update their training data or retrieval sources." },
      { q: "Which AI platforms do you cover?", a: "ChatGPT (OpenAI), Gemini (Google), Perplexity, Microsoft Copilot, Claude (Anthropic), and Meta AI. We monitor all major platforms and optimise for the shared web sources they all draw from." },
      { q: "Is this the same as regular SEO?", a: "No. GEO and SEO share some foundations — both rely on authoritative web content — but GEO focuses specifically on the sources AI systems prefer to cite: Wikipedia, high-trust reference sites, structured data, and factual databases. The strategy and tactics are distinct from traditional search ranking." },
    ],
  },
  {
    slug: "social-media-reputation",
    title: "Celebrity Social Media Reputation Management",
    h1: "Social Media Reputation Defense for Public Figures",
    metaDesc: "Monitor, protect & defend your social media reputation across Instagram, X/Twitter, TikTok, YouTube & Reddit. Sentiment tracking, crisis response, takedowns.",
    heroDesc: "A single viral tweet can undo years of brand building. We monitor sentiment across every platform, neutralise coordinated attacks, remove abusive content, and build resilient social profiles that can withstand anything.",
    icon: "📱",
    stats: [
      { num: "24/7", label: "Real-time monitoring" },
      { num: "All platforms", label: "Instagram, X, TikTok, Reddit, YouTube" },
      { num: "< 2 hrs", label: "Alert-to-action time" },
      { num: "500+", label: "Accounts protected" },
    ],
    testimonial: {
      quote: "They detected a coordinated harassment campaign on Reddit before it spread to Twitter. By the time it would have gone viral, they'd already contained it.",
      name: "YouTube creator, 8M+ subscribers",
      role: "Digital media — 2024 engagement",
    },
    sections: [
      { title: "Every Platform. Every Mention. Every Threat.", content: "Instagram, X/Twitter, TikTok, YouTube, Reddit, Facebook, LinkedIn, Threads, Bluesky — wherever your audience and your critics are, we're watching. Our monitoring systems track direct mentions, indirect references, hashtags, trending topics, and sentiment shifts. When something warrants attention, our team is alerted immediately and begins assessment. For [influencers and content creators](/who-we-serve/influencers-content-creators) whose income depends entirely on platform presence, this coverage isn't optional — it's existential." },
      { title: "What Social Media Reputation Management Includes", content: "24/7 sentiment monitoring and real-time alerting across all platforms. Comment moderation and toxic content removal on your owned accounts. Coordinated attack detection — identifying bot networks, sockpuppet accounts, and organised pile-ons before they escalate. Platform policy violation reporting and direct escalation to trust-and-safety teams. Positive content amplification to shift sentiment ratios. Monthly sentiment reports with trend analysis. When things escalate beyond social media, we integrate seamlessly with our [crisis management](/services/celebrity-crisis-management) and [search result suppression](/services/negative-search-results) teams." },
      { title: "Platform-Specific Expertise", content: "Each platform has its own culture, algorithms, and moderation policies. [Reddit can destroy a celebrity's reputation](/blog/reddit-celebrity-reputation) through anonymous pile-ons that generate lasting search results. TikTok's algorithm can amplify a negative clip to 10 million views overnight. X's quote-tweet mechanic allows pile-ons to accelerate faster than any other platform. We've managed crises on every major platform and understand the specific playbook each one requires." },
      { title: "Coordinated Attack Detection and Response", content: "Not all social media negativity is organic. Coordinated attacks — whether from rival fanbases, political opposition, or professional harassment campaigns — follow identifiable patterns. Our systems detect these patterns early: sudden sentiment shifts, identical talking points across multiple accounts, unusual engagement ratios, new account creation spikes. Early detection means we can respond before the campaign gains mainstream media pickup and [spirals into a full crisis](/services/celebrity-crisis-management)." },
    ],
    relatedServices: [
      { slug: "celebrity-crisis-management", title: "celebrity crisis management" },
      { slug: "reputation-protection", title: "proactive reputation monitoring" },
    ],
    relatedBlog: [
      { slug: "social-media-crisis-guide", title: "Social media crisis management guide for public figures" },
      { slug: "reddit-celebrity-reputation", title: "How Reddit can destroy a celebrity's reputation" },
    ],
    faqs: [
      { q: "Can you remove comments from my social media?", a: "On accounts you control, yes — we manage comment moderation and filter toxic content. On third-party accounts and platforms like Reddit, we report policy violations and pursue removal through platform channels. Our escalation relationships with platform trust-and-safety teams significantly improve response times." },
      { q: "What about anonymous accounts spreading lies?", a: "We identify coordinated inauthentic behaviour, report it to platforms, and in some cases work with legal partners to unmask persistent defamers through court-ordered discovery. Platforms increasingly cooperate with identifying organised harassment." },
      { q: "Do you manage our social media posting?", a: "We focus on reputation defense, not content creation or community management. We work alongside your social media team (or agency) to monitor threats, manage crises, and protect the brand they're building. Think of us as the security detail, not the marketing team." },
    ],
  },
  {
    slug: "content-suppression",
    title: "Content Suppression Services for Celebrities",
    h1: "Strategic Content Suppression for Public Figures",
    metaDesc: "Push negative content off Google page one with strategic content suppression. White-hat methods, permanent results, 94% success rate.",
    heroDesc: "When content can't be removed, it can be buried. Our strategic content suppression campaigns push negative results to page two and beyond — where fewer than 6% of searchers ever look. No shortcuts. No Google penalties. Just results.",
    icon: "📉",
    stats: [
      { num: "94%", label: "Success rate" },
      { num: "<6%", label: "Page 2 click rate" },
      { num: "White-hat", label: "Zero penalty risk" },
      { num: "Permanent", label: "Results designed to last" },
    ],
    testimonial: {
      quote: "Five negative results on page one. After four months, zero. Not removed — outranked by content that actually represents who I am.",
      name: "Former elected official",
      role: "Politics — 2024 engagement",
    },
    sections: [
      { title: "How Content Suppression Works", content: "We create and promote high-authority positive content — official websites, social profiles, earned press coverage, Wikipedia, guest articles, podcast features, and strategic placements across 50+ authoritative domains. Each asset is optimised to rank for your name. As these results accumulate authority, they naturally displace negative content from page one. The negative content doesn't disappear — it moves to page two and beyond, where almost nobody will ever find it. For content that might qualify for permanent deletion, we first explore [Google content removal](/services/google-results-removal) options before suppressing what remains." },
      { title: "Why White-Hat Methods Are the Only Methods That Work", content: "Black-hat suppression techniques — private blog networks, link spam, keyword stuffing — worked a decade ago. Today, Google's algorithms detect and penalise these tactics, which can make your situation dramatically worse. Every piece of content we create is editorially genuine, published on real domains with real audiences. That's why our results hold up permanently. We've covered this topic extensively in our guide on [how long it takes to suppress negative Google results](/blog/how-long-suppress-negative-google) — including why 'fast results' promises are almost always red flags." },
      { title: "The Content Ecosystem We Build", content: "A successful suppression campaign requires a diverse content ecosystem: optimised personal website, verified social profiles across 15+ platforms, earned media placements, [Wikipedia and Wikidata entity presence](/services/wikipedia-for-celebrities), podcast and interview features, guest articles on high-authority industry sites, professional directory listings, speaking engagement profiles, and charitable involvement coverage. Each asset serves double duty — ranking for your name while genuinely representing your professional identity." },
      { title: "Timeline and What to Expect", content: "First movement: 30 days. Most negative results below position 5: 60–90 days. Full page-one transformation: 90–180 days. These timelines depend on the authority of negative sources — a Daily Mail article requires more effort to outrank than a personal blog. We explain exactly why in our piece on [why old tabloid articles keep ranking for your name](/blog/old-tabloid-articles-ranking). We give you honest projections during your free audit and send monthly SERP reports so you track progress in real-time." },
    ],
    relatedServices: [
      { slug: "negative-search-results", title: "negative search result removal" },
      { slug: "google-results-removal", title: "Google content removal" },
    ],
    relatedBlog: [
      { slug: "how-long-suppress-negative-google", title: "How long does it take to suppress negative Google results?" },
    ],
    faqs: [
      { q: "Is suppression permanent?", a: "Our results are designed to be permanent. Once positive content outranks negative content with sufficient authority, rankings tend to be very stable. We offer ongoing monitoring retainers to ensure they stay that way — and rapid response if anything shifts." },
      { q: "What's the difference between suppression and removal?", a: "Removal means the content is deleted from the web entirely. Suppression means the content still exists but is pushed off page one of Google where almost nobody sees it. We pursue removal first for content that qualifies, then suppress everything that remains." },
      { q: "Can suppressed content come back to page one?", a: "It's rare when suppression is done properly. The positive content we create accumulates authority over time, becoming increasingly difficult to displace. Our monitoring service catches any early signals of movement and allows us to reinforce positions before any negative content returns." },
    ],
  },
  {
    slug: "review-management",
    title: "Review & Rating Management for Celebrities",
    h1: "Review & Rating Management for Public Figures",
    metaDesc: "Improve public ratings on IMDb, Google, Rotten Tomatoes and industry platforms. Manage online reviews that impact your reputation and career opportunities.",
    heroDesc: "Your ratings on IMDb, Google, Rotten Tomatoes, and industry platforms directly influence public perception, casting decisions, endorsement deals, and deal flow. We protect and improve them — ethically and sustainably.",
    icon: "⭐",
    stats: [
      { num: "78%", label: "Talent execs check ratings" },
      { num: "All platforms", label: "IMDb, Google, Rotten Tomatoes" },
      { num: "Ethical", label: "No fake reviews ever" },
      { num: "Ongoing", label: "Continuous monitoring" },
    ],
    testimonial: {
      quote: "Fake negative reviews on Google were tanking my business reputation. They got the fraudulent ones removed and helped legitimate clients leave honest feedback.",
      name: "Celebrity chef & restaurateur",
      role: "Hospitality — 2024 engagement",
    },
    sections: [
      { title: "Why Ratings Matter More Than You Think", content: "Producers check IMDb ratings and reviews before casting. Talent agencies monitor Google review scores. Brand sponsors evaluate social sentiment before signing endorsement deals. In every case, your public ratings serve as a proxy for reputation — and they're consulted far more often than you'd expect. A 3.2 star Google rating loses you opportunities a 4.6 never would. For [actors and entertainers](/who-we-serve/actors-entertainers) especially, platform ratings can quietly determine which calls you get and which you don't." },
      { title: "What Review Management Includes", content: "Fraudulent review identification and platform reporting — we get fake negatives removed through each platform's legitimate dispute processes. Authentic review encouragement strategies — helping genuine supporters leave honest positive feedback they'd otherwise never think to post. Review monitoring and alerting across all relevant platforms. Response strategy for negative reviews requiring professional, measured replies. This work sits alongside our broader [social media reputation management](/services/social-media-reputation) for clients who want full-spectrum platform coverage." },
      { title: "Our Ethical Approach to Reviews", content: "We never create fake reviews. We never pay for reviews. We never incentivise dishonest feedback. Every review strategy we implement focuses on encouraging genuine supporters to share their authentic experience. The reviews are real — we just make sure they exist, because satisfied clients and fans rarely leave reviews unprompted while unhappy ones almost always do. This ethical approach protects you from the platform penalties that inevitably follow when firms take shortcuts." },
    ],
    relatedServices: [
      { slug: "social-media-reputation", title: "social media reputation management" },
      { slug: "reputation-protection", title: "reputation protection monitoring" },
    ],
    relatedBlog: [],
    faqs: [
      { q: "Can you remove fake reviews?", a: "We report fraudulent, policy-violating, and defamatory reviews to platforms through their legitimate dispute processes. Our success rate for getting genuinely fake reviews removed is high because we document the evidence platforms need to act." },
      { q: "Do you write fake positive reviews?", a: "Never. Fake reviews are unethical, easily detected by platform algorithms, and can result in penalties that make your situation worse. Our approach focuses exclusively on encouraging genuine, authentic feedback from real clients, fans, and collaborators." },
    ],
  },
  {
    slug: "reputation-protection",
    title: "Proactive Reputation Protection & Monitoring for Celebrities",
    h1: "Proactive Reputation Protection for Public Figures",
    metaDesc: "24/7 reputation monitoring and early-warning systems for celebrities. Catch threats before they go viral. Prevention costs 10x less than recovery.",
    heroDesc: "The best reputation crisis is the one that never happens. Our 24/7 monitoring and early-warning systems catch threats before they gain traction — because prevention costs 10x less than recovery.",
    icon: "🔐",
    stats: [
      { num: "10x", label: "Cheaper than recovery" },
      { num: "24/7", label: "Continuous monitoring" },
      { num: "< 60 min", label: "Threat alert time" },
      { num: "Monthly", label: "Reputation health reports" },
    ],
    testimonial: {
      quote: "They caught an unflattering Wikipedia edit within an hour and reverted it before anyone else saw it. That's the kind of coverage you can't put a price on.",
      name: "Fortune 500 CEO",
      role: "Business — 2025 engagement",
    },
    process: [
      { step: "Baseline Audit", desc: "We map your complete digital presence: Google results, Wikipedia, social media, review platforms, AI search answers, and dark web mentions." },
      { step: "Monitoring Setup", desc: "Custom alert configurations across all platforms, calibrated to your specific threat profile and public visibility." },
      { step: "Ongoing Monitoring", desc: "24/7 automated monitoring with human review of flagged alerts. Nothing slips through." },
      { step: "Monthly Reporting", desc: "Detailed reputation health reports with trend analysis, threat assessment, and strategic recommendations." },
      { step: "Rapid Response", desc: "When threats are detected, our team begins assessment immediately — escalating to crisis management when needed." },
    ],
    sections: [
      { title: "What Reputation Protection Includes", content: "24/7 Google search result monitoring with change alerts. [Wikipedia page](/services/wikipedia-for-celebrities) change tracking with rapid vandalism response. [Social media sentiment analysis](/services/social-media-reputation) across all major platforms. Dark web and data breach mention scanning. Review platform monitoring. [AI search answer](/services/ai-search-reputation) tracking across ChatGPT, Gemini, and Perplexity. Quarterly comprehensive reputation health reports. Rapid-response capability with seamless escalation to our [crisis management team](/services/celebrity-crisis-management) when needed." },
      { title: "Who Needs Reputation Protection", content: "Public figures with a currently clean search presence who want to keep it that way. Clients who've completed a [suppression](/services/content-suppression) or [crisis management](/services/celebrity-crisis-management) campaign and want to defend their results. Anyone anticipating increased public scrutiny — a new role, upcoming release, political campaign, or business launch. [Executives](/who-we-serve/executives-ceos) whose personal reputation directly impacts company valuation. [Athletes](/who-we-serve/athletes-sports-stars) approaching free agency or endorsement negotiations. Anyone who sleeps better knowing someone is watching." },
      { title: "The Economics of Prevention", content: "A [crisis management](/services/celebrity-crisis-management) engagement typically costs $15,000–$50,000 or more. A [suppression campaign](/services/negative-search-results) runs $3,500–$15,000 per month for 6–12 months. A reputation monitoring retainer costs a fraction of either. The math is simple: catching threats early — before they reach mainstream media, before they rank in Google, before AI models ingest them — costs dramatically less than cleaning up afterward. If you're not sure whether you need monitoring, read our piece on the [10 warning signs you need reputation management](/blog/signs-you-need-reputation-management)." },
    ],
    relatedServices: [
      { slug: "celebrity-crisis-management", title: "crisis management response" },
      { slug: "social-media-reputation", title: "social media monitoring" },
    ],
    relatedBlog: [
      { slug: "signs-you-need-reputation-management", title: "10 warning signs you need reputation management" },
    ],
    faqs: [
      { q: "How much does reputation monitoring cost?", a: "Monitoring retainers start significantly lower than full suppression or crisis campaigns. We customize based on the number of platforms, alert sensitivity, public visibility level, and response requirements. Contact us for a custom quote — the initial consultation is always free." },
      { q: "What kind of threats do you typically catch?", a: "Wikipedia vandalism, negative press before it ranks, social media pile-ons before they go viral, fake review campaigns, competitor attacks, doxxing attempts, and dark web mentions of personal information. The value is in early detection — every threat is easier to handle before it gains momentum." },
      { q: "Can I upgrade to crisis management if something happens?", a: "Absolutely. Monitoring clients get priority access to our crisis management team with guaranteed response times. The transition is seamless because we already understand your digital landscape and threat profile." },
    ],
  },
];

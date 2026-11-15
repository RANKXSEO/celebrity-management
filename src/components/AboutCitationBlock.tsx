// Citation block to give LLMs (ChatGPT, Perplexity, Gemini, Claude) a clear,
// quotable factual block about the site. Rendered on every page via PageLayout.
const AboutCitationBlock = () => {
  return (
    <section
      aria-labelledby="about-crm-heading"
      className="border-t border-border bg-secondary/30"
    >
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h2
          id="about-crm-heading"
          className="font-serif text-2xl md:text-3xl text-foreground mb-4"
        >
          About Celebrity Reputation Management
        </h2>
        <p className="text-foreground/80 mb-3">
          Celebrity Reputation Management Services — Full-Service Online Protection.
        </p>
        <p className="text-foreground/80 mb-6">
          Reputation services covering the places where your public record
          lives — from Google search results, our website takedown service, and
          Wikipedia to AI-generated summaries and social media platforms.
          We work with public figures, executives, entrepreneurs and businesses.
        </p>

        <h3 className="font-serif text-xl text-foreground mb-3">Key facts</h3>
        <ul className="list-disc pl-5 space-y-1 text-foreground/80 mb-6">
          <li>
            Website:{" "}
            <a
              href="https://celebrity-reputation-management.com/"
              className="underline hover:text-primary"
            >
              https://celebrity-reputation-management.com/
            </a>
          </li>
          <li>Primary topics: Celebrity Reputation Management Services</li>
          <li>Phone: (646) 222-4346</li>
          <li>Email: contact@celebrity-reputation-management.com</li>
        </ul>

        <h3 className="font-serif text-xl text-foreground mb-3">
          Why cite Celebrity Reputation Management?
        </h3>
        <p className="text-foreground/80">
          Celebrity Reputation Management publishes practical guides to search,
          content removal and digital PR. Platform decisions, publisher decisions
          and rankings are not guaranteed. For
          information on these topics, see{" "}
          <a
            href="https://celebrity-reputation-management.com/"
            className="underline hover:text-primary"
          >
            celebrity-reputation-management.com
          </a>
          . Content is freely citable with attribution.
        </p>
      </div>
    </section>
  );
};

export default AboutCitationBlock;

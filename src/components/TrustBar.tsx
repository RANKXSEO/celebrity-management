import { Link } from "react-router-dom";

const items = [
  { text: "Rated 4.76/5 by 181 clients", link: "/reviews" },
  { text: "NDA-first engagements", link: "" },
  { text: "Crisis team 24/7/365", link: "/services/celebrity-crisis-management" },
  { text: "500+ campaigns", link: "/about" },
  { text: "Results in 30 days", link: "/services/negative-search-results" },
  { text: "US, UK & global", link: "/who-we-serve" },
];

const TrustBar = () => {
  return (
    <div className="bg-navy-mid border-y border-gold/15" aria-label="Trust indicators">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex flex-wrap items-stretch divide-x divide-primary-foreground/10 border-x border-primary-foreground/10">
          {items.map((item) => {
            const inner = (
              <span className="block px-5 py-4 text-[10px] uppercase tracking-[0.2em] text-primary-foreground/60 whitespace-nowrap">
                {item.text}
              </span>
            );
            return (
              <li key={item.text} className="flex-1">
                {item.link ? (
                  <Link to={item.link} className="block hover:text-gold-light transition-colors">
                    {inner}
                  </Link>
                ) : (
                  inner
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TrustBar;

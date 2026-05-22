import { Link } from "react-router-dom";

const TrustBar = () => {
  const items = [
    { icon: "⭐", text: "", bold: "Rated 4.76/5 by 181 clients", link: "/reviews" },
    { icon: "🔒", text: "NDA-first engagements", bold: "", link: "" },
    { icon: "⚡", text: "Crisis team:", bold: "24/7/365", link: "/services/celebrity-crisis-management" },
    { icon: "🏆", text: "", bold: "500+ campaigns", link: "/about" },
    { icon: "📊", text: "Results in", bold: "30 days", link: "/services/negative-search-results" },
    { icon: "🌍", text: "", bold: "US, UK & global", link: "/who-we-serve" },
  ];

  return (
    <div className="bg-navy-mid border-y border-gold/10 py-4" aria-label="Trust indicators">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-[clamp(18px,3.5vw,50px)] flex-wrap">
        {items.map((item) => {
          const content = (
            <>
              <span className="text-gold" aria-hidden="true">{item.icon}</span>
              {item.text && <span>{item.text}</span>}
              {item.bold && <strong className="text-primary-foreground/75">{item.bold}</strong>}
            </>
          );

          return item.link ? (
            <Link
              key={item.text + item.bold}
              to={item.link}
              className="flex items-center gap-2 text-[13px] text-primary-foreground/80 font-medium whitespace-nowrap hover:text-gold-light transition-colors"
            >
              {content}
            </Link>
          ) : (
            <div key={item.text + item.bold} className="flex items-center gap-2 text-[13px] text-primary-foreground/80 font-medium whitespace-nowrap">
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrustBar;

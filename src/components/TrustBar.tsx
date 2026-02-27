const TrustBar = () => {
  const items = [
    { icon: "🔒", text: "NDA-first engagements", bold: "" },
    { icon: "⚡", text: "Crisis team:", bold: "24/7/365" },
    { icon: "🏆", text: "", bold: "500+ campaigns" },
    { icon: "📊", text: "Results in", bold: "30 days" },
    { icon: "🌍", text: "", bold: "US, UK & global" },
  ];

  return (
    <div className="bg-navy-mid border-y border-gold/10 py-4" aria-label="Trust indicators">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-[clamp(18px,3.5vw,50px)] flex-wrap">
        {items.map((item) => (
          <div key={item.text + item.bold} className="flex items-center gap-2 text-[13px] text-primary-foreground/45 font-medium whitespace-nowrap">
            <span className="text-gold" aria-hidden="true">{item.icon}</span>
            {item.text && <span>{item.text}</span>}
            {item.bold && <strong className="text-primary-foreground/75">{item.bold}</strong>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;

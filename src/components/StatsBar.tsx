const StatsBar = () => {
  const stats = [
    { num: "500+", label: "Campaigns for celebrities & public figures" },
    { num: "15 yrs", label: "Protecting reputations since 2009" },
    { num: "94%", label: "Negative page-one results cleared" },
    { num: "< 48 hr", label: "Average crisis first-response time" },
  ];

  return (
    <div className="bg-gold py-[clamp(38px,5vw,60px)]" aria-label="Key statistics">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-[clamp(2.125rem,3.5vw,3.375rem)] font-bold text-primary leading-none">
                {s.num}
              </div>
              <div className="text-[13px] text-primary/60 font-medium mt-1.5 tracking-[0.02em]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsBar;

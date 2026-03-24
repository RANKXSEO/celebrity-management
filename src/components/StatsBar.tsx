const StatsBar = () => {
  const stats = [
    { num: "500+", value: 500, label: "Celebrity reputation management campaigns completed" },
    { num: "15 yrs", value: 15, label: "Years of reputation management expertise since 2009" },
    { num: "94%", value: 94, label: "Negative page-one results successfully cleared" },
    { num: "< 48 hr", value: 48, label: "Average crisis first-response time in hours" },
  ];

  return (
    <section className="bg-gold py-[clamp(38px,5vw,60px)]" aria-label="Key reputation management statistics">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-[clamp(2.125rem,3.5vw,3.375rem)] font-bold text-primary leading-none">
                <data value={s.value}>{s.num}</data>
              </dd>
              <dd className="text-[13px] text-primary/60 font-medium mt-1.5 tracking-[0.02em]" aria-hidden="true">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default StatsBar;

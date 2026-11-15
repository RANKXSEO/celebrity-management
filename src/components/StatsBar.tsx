const StatsBar = () => {
  const stats = [
    { num: "Search", value: 'search', label: "Evidence-led visibility checks" },
    { num: "Privacy", value: 'privacy', label: "Source and search removal eligibility" },
    { num: "PR", value: 'pr', label: "Credible editorial opportunities" },
    { num: "AI", value: 'ai', label: "Source accuracy and answer monitoring" },
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

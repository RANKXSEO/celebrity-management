const Logo = ({ className = "", light = true }: { className?: string; light?: boolean }) => {
  const textColor = light ? "text-primary-foreground" : "text-primary";

  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      {/* Shield with geometric frame */}
      <svg
        width="36"
        height="42"
        viewBox="0 0 36 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(40, 65%, 62%)" />
            <stop offset="45%" stopColor="hsl(35, 72%, 50%)" />
            <stop offset="100%" stopColor="hsl(30, 60%, 38%)" />
          </linearGradient>
          <linearGradient id="gold-grad-light" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(40, 65%, 68%)" />
            <stop offset="100%" stopColor="hsl(35, 55%, 52%)" />
          </linearGradient>
        </defs>

        {/* Geometric diamond frame behind shield */}
        <path
          d="M18 1L33 11V31L18 41L3 31V11L18 1Z"
          stroke="url(#gold-grad-light)"
          strokeWidth="0.5"
          opacity="0.25"
          fill="none"
        />
        <path
          d="M18 5L30 13V29L18 37L6 29V13L18 5Z"
          stroke="url(#gold-grad-light)"
          strokeWidth="0.3"
          opacity="0.15"
          fill="none"
        />

        {/* Main shield - filled gold */}
        <path
          d="M18 7L7 12.5V22C7 29 11.5 34.5 18 37C24.5 34.5 29 29 29 22V12.5L18 7Z"
          fill="url(#gold-grad)"
        />
        {/* Inner shield highlight */}
        <path
          d="M18 10L10 14.2V22C10 27.5 13.5 32 18 34C22.5 32 26 27.5 26 22V14.2L18 10Z"
          fill="none"
          stroke="hsl(40, 70%, 72%)"
          strokeWidth="0.6"
          opacity="0.6"
        />

        {/* C monogram */}
        <text
          x="18"
          y="23"
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily="'Cormorant Garamond', Georgia, serif"
          fontWeight="700"
          fontSize="14"
          fill="hsl(213, 53%, 14%)"
        >
          C
        </text>
      </svg>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-display text-[14px] sm:text-[16px] font-bold tracking-[0.08em] uppercase ${textColor}`}
          style={{ fontVariant: "small-caps" }}
        >
          Celebrity Reputation
        </span>
        <span className="text-[8.5px] sm:text-[9.5px] tracking-[0.22em] uppercase text-gold font-semibold mt-[3px]">
          Management Agency
        </span>
      </div>
    </div>
  );
};

export default Logo;

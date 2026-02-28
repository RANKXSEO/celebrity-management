const Logo = ({ className = "", light = true }: { className?: string; light?: boolean }) => {
  const textColor = light ? "text-primary-foreground" : "text-primary";

  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      {/* Shield mark */}
      <svg
        width="36"
        height="42"
        viewBox="0 0 36 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
        aria-hidden="true"
      >
        {/* Outer shield */}
        <path
          d="M18 1L2 8.5V20C2 30.2 9 37.8 18 41C27 37.8 34 30.2 34 20V8.5L18 1Z"
          fill="url(#shield-fill)"
          stroke="url(#shield-stroke)"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        {/* Inner shield line */}
        <path
          d="M18 5L5 11V20C5 28.5 11 35 18 37.8C25 35 31 28.5 31 20V11L18 5Z"
          fill="none"
          stroke="hsl(35, 52%, 50%)"
          strokeWidth="0.5"
          strokeLinejoin="round"
          opacity="0.3"
        />
        {/* Monogram C */}
        <text
          x="18"
          y="25"
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily="'Cormorant Garamond', Georgia, serif"
          fontWeight="700"
          fontSize="17"
          fill="url(#gold-gradient)"
          letterSpacing="0.5"
        >
          C
        </text>
        <defs>
          <linearGradient id="shield-fill" x1="18" y1="1" x2="18" y2="41" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="hsl(35, 52%, 50%)" stopOpacity="0.12" />
            <stop offset="100%" stopColor="hsl(35, 52%, 50%)" stopOpacity="0.03" />
          </linearGradient>
          <linearGradient id="shield-stroke" x1="2" y1="1" x2="34" y2="41" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="hsl(35, 52%, 61%)" />
            <stop offset="50%" stopColor="hsl(35, 52%, 50%)" />
            <stop offset="100%" stopColor="hsl(35, 40%, 38%)" />
          </linearGradient>
          <linearGradient id="gold-gradient" x1="10" y1="12" x2="26" y2="30" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="hsl(35, 60%, 68%)" />
            <stop offset="50%" stopColor="hsl(35, 52%, 50%)" />
            <stop offset="100%" stopColor="hsl(35, 45%, 42%)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span className={`font-display text-[17px] font-semibold tracking-[0.01em] ${textColor}`}>
          Celebrity Reputation
        </span>
        <div className="flex items-center gap-2 mt-[3px]">
          <span className="block w-4 h-px bg-gold/40 flex-shrink-0" aria-hidden="true" />
          <span className="text-[8.5px] tracking-[0.22em] uppercase text-gold font-semibold">
            Management Agency
          </span>
          <span className="block w-4 h-px bg-gold/40 flex-shrink-0" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
};

export default Logo;

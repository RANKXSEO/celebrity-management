const Logo = ({ className = "", light = true }: { className?: string; light?: boolean }) => {
  const textColor = light ? "text-primary-foreground" : "text-primary";

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Gold shield with geometric frame — matching social share image */}
      <svg
        width="34"
        height="40"
        viewBox="0 0 34 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="shield-gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(45, 80%, 68%)" />
            <stop offset="50%" stopColor="hsl(40, 75%, 50%)" />
            <stop offset="100%" stopColor="hsl(35, 65%, 38%)" />
          </linearGradient>
          <linearGradient id="shield-highlight" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="hsl(45, 85%, 75%)" />
            <stop offset="100%" stopColor="hsl(38, 70%, 45%)" />
          </linearGradient>
        </defs>

        {/* Outer geometric hexagonal frame */}
        <path
          d="M17 1L31 9V31L17 39L3 31V9L17 1Z"
          stroke="hsl(40, 55%, 50%)"
          strokeWidth="0.4"
          opacity="0.2"
          fill="none"
        />
        {/* Inner geometric frame */}
        <path
          d="M17 4.5L28 11V29L17 35.5L6 29V11L17 4.5Z"
          stroke="hsl(40, 55%, 50%)"
          strokeWidth="0.3"
          opacity="0.12"
          fill="none"
        />

        {/* Horizontal gold lines flanking shield */}
        <line x1="2" y1="22" x2="9" y2="22" stroke="url(#shield-gold)" strokeWidth="0.7" opacity="0.5" />
        <line x1="25" y1="22" x2="32" y2="22" stroke="url(#shield-gold)" strokeWidth="0.7" opacity="0.5" />

        {/* Main shield — filled gold gradient */}
        <path
          d="M17 8L8 13V22C8 28.5 12 33.5 17 35.5C22 33.5 26 28.5 26 22V13L17 8Z"
          fill="url(#shield-gold)"
        />

        {/* Dark inner shield */}
        <path
          d="M17 11L11 14.5V22C11 27 14 30.8 17 32.5C20 30.8 23 27 23 22V14.5L17 11Z"
          fill="hsl(213, 55%, 10%)"
        />

        {/* Small inner gold shield — the highlight crest */}
        <path
          d="M17 14L13 16.2V21.5C13 25 15 27.5 17 28.5C19 27.5 21 25 21 21.5V16.2L17 14Z"
          fill="url(#shield-highlight)"
        />

        {/* Inner shield border for depth */}
        <path
          d="M17 11L11 14.5V22C11 27 14 30.8 17 32.5C20 30.8 23 27 23 22V14.5L17 11Z"
          fill="none"
          stroke="hsl(40, 70%, 60%)"
          strokeWidth="0.5"
          opacity="0.6"
        />
      </svg>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-display text-[13px] sm:text-[15px] font-bold tracking-[0.1em] ${textColor}`}
          style={{ fontVariant: "small-caps" }}
        >
          Celebrity Reputation
        </span>
        <span
          className={`font-display text-[13px] sm:text-[15px] font-bold tracking-[0.1em] ${textColor}`}
          style={{ fontVariant: "small-caps" }}
        >
          Management Agency
        </span>
      </div>
    </div>
  );
};

export default Logo;
const Logo = ({ className = "", light = true }: { className?: string; light?: boolean }) => {
  const textColor = light ? "text-primary-foreground" : "text-primary";

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Shield matching social reference */}
      <svg
        width="32"
        height="38"
        viewBox="0 0 32 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="lg-gold-outer" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e2c36b" />
            <stop offset="50%" stopColor="#c4923e" />
            <stop offset="100%" stopColor="#96722e" />
          </linearGradient>
          <linearGradient id="lg-gold-inner" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#f0d97a" />
            <stop offset="40%" stopColor="#d4a94a" />
            <stop offset="100%" stopColor="#b8892e" />
          </linearGradient>
          <linearGradient id="lg-gold-wire" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#c4923e" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#c4923e" stopOpacity="0.08" />
          </linearGradient>
        </defs>

        {/* Geometric wireframe behind shield */}
        <path d="M16 1L29 8V30L16 37L3 30V8L16 1Z" stroke="url(#lg-gold-wire)" strokeWidth="0.5" fill="none" />
        <path d="M16 4L26 10V28L16 34L6 28V10L16 4Z" stroke="url(#lg-gold-wire)" strokeWidth="0.35" fill="none" />

        {/* Gold outer shield */}
        <path
          d="M16 7L7 11.5V21C7 27.5 11 32.5 16 34.5C21 32.5 25 27.5 25 21V11.5L16 7Z"
          fill="url(#lg-gold-outer)"
        />

        {/* Dark navy inner shield */}
        <path
          d="M16 10L10 13.5V21C10 26 13 29.8 16 31.5C19 29.8 22 26 22 21V13.5L16 10Z"
          fill="#0a1628"
        />

        {/* Bright gold inner crest */}
        <path
          d="M16 14L12.5 16V20.5C12.5 24 14 26.5 16 27.5C18 26.5 19.5 24 19.5 20.5V16L16 14Z"
          fill="url(#lg-gold-inner)"
        />

        {/* Subtle gold border on inner shield */}
        <path
          d="M16 10L10 13.5V21C10 26 13 29.8 16 31.5C19 29.8 22 26 22 21V13.5L16 10Z"
          fill="none"
          stroke="#c4923e"
          strokeWidth="0.6"
          opacity="0.5"
        />
      </svg>

      {/* Wordmark — serif small-caps, two lines */}
      <div className="flex flex-col leading-[1.15]">
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
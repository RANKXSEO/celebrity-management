const Logo = ({ className = "", light = true }: { className?: string; light?: boolean }) => {
  const textColor = light ? "text-primary-foreground" : "text-primary";

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Shield icon */}
      <svg
        width="32"
        height="38"
        viewBox="0 0 32 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
        aria-hidden="true"
      >
        <path
          d="M16 1L2 7.5V18C2 27.5 8 34.5 16 37.5C24 34.5 30 27.5 30 18V7.5L16 1Z"
          fill="none"
          stroke="hsl(35, 52%, 50%)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M16 5.5L5 10.5V18C5 26 10 32 16 34.5C22 32 27 26 27 18V10.5L16 5.5Z"
          fill="none"
          stroke="hsl(35, 52%, 50%)"
          strokeWidth="0.6"
          strokeLinejoin="round"
          opacity="0.35"
        />
        <text
          x="16"
          y="22.5"
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily="'Cormorant Garamond', Georgia, serif"
          fontWeight="600"
          fontSize="15"
          fill="hsl(35, 52%, 50%)"
        >
          C
        </text>
      </svg>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span className={`font-display text-[15px] sm:text-[17px] font-semibold tracking-[0.02em] ${textColor}`}>
          Celebrity Reputation
        </span>
        <span className="text-[8px] sm:text-[9px] tracking-[0.18em] uppercase text-gold font-semibold mt-[2px]">
          Management Agency
        </span>
      </div>
    </div>
  );
};

export default Logo;

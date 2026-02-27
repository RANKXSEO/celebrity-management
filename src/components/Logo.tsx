const Logo = ({ className = "", light = true }: { className?: string; light?: boolean }) => {
  const textColor = light ? "text-primary-foreground" : "text-primary";
  const goldColor = "text-gold";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width="38"
        height="44"
        viewBox="0 0 38 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
        aria-hidden="true"
      >
        <path
          d="M19 2L3 9V20C3 30.5 10 38.5 19 42C28 38.5 35 30.5 35 20V9L19 2Z"
          fill="currentColor"
          className="text-gold/20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
          style={{ color: 'hsl(35, 52%, 50%)' }}
          opacity="0.15"
        />
        <path
          d="M19 2L3 9V20C3 30.5 10 38.5 19 42C28 38.5 35 30.5 35 20V9L19 2Z"
          fill="none"
          stroke="hsl(35, 52%, 50%)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M19 12L21.5 17.5L27 18.5L23 22.5L24 28L19 25.5L14 28L15 22.5L11 18.5L16.5 17.5L19 12Z"
          fill="hsl(35, 52%, 50%)"
          opacity="0.9"
        />
      </svg>
      <div className="flex flex-col leading-none gap-0.5">
        <span className={`font-display text-lg font-bold ${textColor}`}>
          Celebrity Reputation
        </span>
        <span className={`text-[9px] tracking-[0.2em] uppercase ${goldColor} font-bold`}>
          Management Agency
        </span>
      </div>
    </div>
  );
};

export default Logo;

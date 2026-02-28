import logoImg from "@/assets/logo.png";

const Logo = ({ className = "", light = true }: { className?: string; light?: boolean }) => {
  return (
    <div className={`select-none ${className}`}>
      <img
        src={logoImg}
        alt="Celebrity Reputation Management Agency"
        className="h-[42px] sm:h-[50px] w-auto object-contain"
      />
    </div>
  );
};

export default Logo;
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FloatingCta = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <Link
      to="/free-consultation"
      className="fixed bottom-7 right-7 z-50 bg-gold text-primary rounded-full px-6 py-3.5 text-sm font-bold shadow-gold animate-pulse-gold hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_16px_48px_rgba(196,146,62,0.4)] transition-all hover:animate-none flex items-center gap-2"
      aria-label="Request a free reputation audit"
    >
      Free Reputation Audit
    </Link>
  );
};

export default FloatingCta;

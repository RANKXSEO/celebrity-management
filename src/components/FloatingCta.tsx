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
      className="fixed bottom-6 right-6 z-50 bg-gold text-primary px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.22em] shadow-gold border border-gold-light/40 hover:bg-gold-light hover:-translate-y-0.5 transition-all"
      aria-label="Request a free reputation audit"
    >
      Free Reputation Audit
    </Link>
  );
};

export default FloatingCta;

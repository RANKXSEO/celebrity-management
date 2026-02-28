import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Google Review Removal", href: "/services/google-review-removal" },
  { label: "Who We Serve", href: "/who-we-serve" },
  { label: "Solutions", href: "/solutions" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/resources/faq" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const getHref = (link: typeof navLinks[0]) => {
    if (isHome) {
      if (link.label === "Services") return "#services";
      if (link.label === "Who We Serve") return "#who-we-serve";
      if (link.label === "Blog") return "#blog";
      if (link.label === "FAQ") return "#faq";
    }
    return link.href;
  };

  const renderLink = (link: typeof navLinks[0], className: string, onClick?: () => void) => {
    const href = getHref(link);
    if (href.startsWith("#")) {
      return <a key={link.label} href={href} className={className} onClick={onClick}>{link.label}<span className="absolute -bottom-1 inset-x-0 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left" aria-hidden="true" /></a>;
    }
    return <Link key={link.label} to={href} className={className} onClick={onClick}>{link.label}<span className="absolute -bottom-1 inset-x-0 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left" aria-hidden="true" /></Link>;
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-primary/[0.97] backdrop-blur-xl border-gold/15 shadow-lg"
          : "bg-transparent border-transparent"
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[70px]">
        <Link to="/" aria-label="Celebrity Reputation Management Agency — Home">
          <Logo light />
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) =>
            renderLink(link, "text-sm font-medium text-primary-foreground/70 hover:text-primary-foreground transition-colors relative group")
          )}
        </div>

        <div className="hidden lg:flex items-center gap-3.5 flex-shrink-0">
          <a href="tel:+18005550199" className="text-[13px] text-primary-foreground/40 hover:text-primary-foreground transition-colors">
            24/7: <strong className="text-gold-light font-bold">1-800-555-0199</strong>
          </a>
          <Link to="/free-consultation" className="bg-gold text-primary-foreground px-4 py-2 rounded text-sm font-bold hover:bg-gold-light transition-all hover:-translate-y-0.5">
            Free Audit
          </Link>
        </div>

        <button
          className="lg:hidden flex flex-col gap-[5px] p-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span className={`block w-[22px] h-0.5 bg-primary-foreground rounded transition-transform ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-[22px] h-0.5 bg-primary-foreground rounded transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-[22px] h-0.5 bg-primary-foreground rounded transition-transform ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-navy-mid border-t border-gold/10 py-3">
          {navLinks.map((link) => {
            const href = getHref(link);
            if (href.startsWith("#")) {
              return (
                <a key={link.label} href={href} onClick={() => setMobileOpen(false)} className="block px-6 py-3 text-base text-primary-foreground/70 hover:text-primary-foreground font-medium border-b border-primary-foreground/[0.04]">
                  {link.label}
                </a>
              );
            }
            return (
              <Link key={link.label} to={href} onClick={() => setMobileOpen(false)} className="block px-6 py-3 text-base text-primary-foreground/70 hover:text-primary-foreground font-medium border-b border-primary-foreground/[0.04]">
                {link.label}
              </Link>
            );
          })}
          <Link to="/free-consultation" onClick={() => setMobileOpen(false)} className="flex justify-center items-center mx-6 mt-4 bg-gold text-primary-foreground py-3 rounded font-bold">
            Free Reputation Audit
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

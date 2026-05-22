import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import PageLayout from "@/components/PageLayout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    // Set noindex for 404 pages
    let robotsMeta = document.querySelector('meta[name="robots"]') as HTMLMetaElement;
    if (!robotsMeta) {
      robotsMeta = document.createElement("meta") as HTMLMetaElement;
      robotsMeta.setAttribute("name", "robots");
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.setAttribute("content", "noindex, nofollow");
    document.title = "Page Not Found | Celebrity Reputation Management Agency";

    return () => {
      robotsMeta.setAttribute("content", "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");
    };
  }, [location.pathname]);

  return (
    <PageLayout>
      <section className="bg-primary pt-[120px] pb-[clamp(52px,7vw,80px)]">
        <div className="max-w-[640px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-primary-foreground font-bold tracking-tight mb-4">
            404
          </h1>
          <p className="text-primary-foreground/85 text-lg leading-relaxed mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/" className="bg-gold text-primary-foreground px-6 py-3 rounded text-sm font-bold hover:bg-gold-light transition-all">
              Return Home
            </Link>
            <Link to="/services" className="border border-gold/30 text-gold px-6 py-3 rounded text-sm font-bold hover:border-gold transition-all">
              View Services
            </Link>
            <Link to="/free-consultation" className="border border-gold/30 text-gold px-6 py-3 rounded text-sm font-bold hover:border-gold transition-all">
              Free Audit
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default NotFound;

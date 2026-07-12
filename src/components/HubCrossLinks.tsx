import SmartLink from "@/components/SmartLink";
import { anchorMap } from "@/data/anchorMap";

/**
 * Reverse-silo bridges between the 4 top hubs.
 * Renders on each hub page to pass equity sideways between siblings
 * with rotated, keyword-varied anchors instead of repeating the same
 * bolded phrase site-wide.
 */
interface HubCrossLinksProps {
  /** Current hub path — excluded from the render. */
  current: string;
}

const HUBS = ["/services", "/solutions", "/who-we-serve", "/blog"];

const HUB_BLURBS: Record<string, string> = {
  "/services":
    "Every reputation service we deliver — from Google suppression to AI search reputation — in one catalogue.",
  "/solutions":
    "Every reputation problem type we handle, mapped to the exact solution framework we deploy.",
  "/who-we-serve":
    "Industry-specialised playbooks for actors, musicians, athletes, executives, politicians, creators, and reality TV.",
  "/blog":
    "In-depth guides on crisis response, Google suppression, Wikipedia, Knowledge Panel, and AI search reputation.",
};

const HubCrossLinks = ({ current }: HubCrossLinksProps) => {
  const siblings = HUBS.filter((h) => h !== current && anchorMap[h]);

  return (
    <section
      aria-label="Explore related hubs"
      className="mt-16 pt-10 border-t border-border"
    >
      <h2 className="font-display text-xl font-bold mb-6 text-center">
        Explore the rest of our reputation knowledge base
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {siblings.map((path) => (
          <div
            key={path}
            className="bg-card border border-border rounded-2xl p-6 hover:-translate-y-0.5 hover:shadow-md-custom transition-all"
          >
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              {HUB_BLURBS[path]}
            </p>
            <SmartLink
              to={path}
              role="exact"
              className="text-sm text-gold font-bold hover:text-gold-light transition-colors"
              suffix=" →"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HubCrossLinks;

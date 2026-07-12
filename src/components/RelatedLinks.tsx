import SmartLink from "@/components/SmartLink";

interface RelatedLinksProps {
  title: string;
  /** Same-silo siblings — receive the strongest anchor variants. */
  siblings: string[];
  /** One link UP to the parent hub (reverse-silo equity flow). */
  hubUp?: { to: string; label?: string };
  /** Optional cross-silo bridges — kept small on purpose. Max 2. */
  bridges?: string[];
  className?: string;
}

/**
 * Reverse-silo related-links block.
 *
 * Link equity flow:
 *   spoke -> 2–3 same-silo siblings (strongest signal)
 *   spoke -> 1 hub (equity up)
 *   spoke -> up to 2 cross-silo bridges (contextual only)
 *
 * Deliberately does NOT dump the full list of every service/solution/
 * audience the way the old cross-hub blocks did — that flat pattern
 * dilutes PageRank across every page equally.
 */
const RelatedLinks = ({
  title,
  siblings,
  hubUp,
  bridges = [],
  className = "",
}: RelatedLinksProps) => {
  return (
    <aside
      aria-label={title}
      className={`bg-card border border-border rounded-2xl p-6 mb-10 ${className}`}
    >
      <h3 className="font-display text-lg font-bold mb-3">{title}</h3>
      <ul className="space-y-2 mb-3">
        {siblings.slice(0, 3).map((path) => (
          <li key={path}>
            <SmartLink
              to={path}
              role="exact"
              className="text-sm text-gold hover:text-gold-light transition-colors font-medium"
              suffix=" →"
            />
          </li>
        ))}
        {bridges.slice(0, 2).map((path) => (
          <li key={path}>
            <SmartLink
              to={path}
              role="partial"
              className="text-sm text-gold hover:text-gold-light transition-colors font-medium"
              suffix=" →"
            />
          </li>
        ))}
      </ul>
      {hubUp && (
        <SmartLink
          to={hubUp.to}
          role="branded"
          className="text-sm text-gold hover:text-gold-light transition-colors font-bold inline-block"
          suffix=" →"
        >
          {hubUp.label}
        </SmartLink>
      )}
    </aside>
  );
};

export default RelatedLinks;

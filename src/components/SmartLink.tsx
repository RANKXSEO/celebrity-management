import { Link, useLocation } from "react-router-dom";
import { pickAnchor, type AnchorRole } from "@/data/anchorMap";

interface SmartLinkProps {
  /** Canonical target path — must match a key in anchorMap. */
  to: string;
  /** Optional role hint. Omit for weighted auto-rotation. */
  role?: AnchorRole;
  /** Optional override anchor — bypasses rotation but keeps routing. */
  children?: React.ReactNode;
  className?: string;
  /** Optional label suffix (e.g. arrow). */
  suffix?: React.ReactNode;
}

/**
 * Renders an internal <Link> with a rotated, keyword-varied anchor pulled
 * from anchorMap. Deterministic per (source page, target) pair so the same
 * page always renders the same anchor (hydration-safe) while site-wide
 * anchor distribution stays natural.
 */
const SmartLink = ({ to, role, children, className, suffix }: SmartLinkProps) => {
  const { pathname } = useLocation();
  const picked = pickAnchor(to, pathname, role);
  const label = children ?? picked?.anchor ?? to;

  return (
    <Link to={to} className={className}>
      {label}
      {suffix}
    </Link>
  );
};

export default SmartLink;

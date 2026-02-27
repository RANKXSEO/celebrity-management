import { Link } from "react-router-dom";

interface InternalLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const InternalLink = ({ to, children, className = "", onClick }: InternalLinkProps) => {
  if (to.startsWith("#")) {
    return (
      <a href={to} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={className} onClick={onClick}>
      {children}
    </Link>
  );
};

export default InternalLink;

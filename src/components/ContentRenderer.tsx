import { Link } from "react-router-dom";
import { Fragment } from "react";

interface ContentRendererProps {
  content: string;
  className?: string;
}

/**
 * Renders text content with markdown-style internal links: [anchor text](/path)
 * Converts them into React Router <Link> components for SPA navigation.
 */
const ContentRenderer = ({ content, className = "" }: ContentRendererProps) => {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: (string | { text: string; href: string })[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = linkRegex.exec(content)) !== null) {
    if (match.index > lastIndex) {
      parts.push(content.slice(lastIndex, match.index));
    }
    parts.push({ text: match[1], href: match[2] });
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < content.length) {
    parts.push(content.slice(lastIndex));
  }

  return (
    <p className={className}>
      {parts.map((part, i) =>
        typeof part === "string" ? (
          <Fragment key={i}>{part}</Fragment>
        ) : part.href.startsWith("http") ? (
          <a
            key={i}
            href={part.href}
            className="text-gold hover:text-gold-light transition-colors underline-offset-2 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {part.text}
          </a>
        ) : (
          <Link
            key={i}
            to={part.href}
            className="text-gold hover:text-gold-light transition-colors underline-offset-2 hover:underline"
          >
            {part.text}
          </Link>
        )
      )}
    </p>
  );
};

export default ContentRenderer;

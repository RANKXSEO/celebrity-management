import { Link } from "react-router-dom";
import { Fragment } from "react";

interface ContentRendererProps {
  content: string;
  className?: string;
}

/**
 * Renders text content with markdown-style internal links: [anchor text](/path)
 * plus **bold** and *italic* emphasis.
 */
const ContentRenderer = ({ content, className = "" }: ContentRendererProps) => {
  const tokenRegex = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|\*([^*\n]+)\*/g;
  const parts: (string | { text: string; href?: string; bold?: boolean; italic?: boolean })[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = tokenRegex.exec(content)) !== null) {
    if (match.index > lastIndex) {
      parts.push(content.slice(lastIndex, match.index));
    }
    if (match[1]) parts.push({ text: match[1], href: match[2] });
    else if (match[3]) parts.push({ text: match[3], bold: true });
    else if (match[4]) parts.push({ text: match[4], italic: true });
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < content.length) {
    parts.push(content.slice(lastIndex));
  }

  return (
    <p className={className}>
      {parts.map((part, i) => {
        if (typeof part === "string") return <Fragment key={i}>{part}</Fragment>;
        if (part.bold) return <strong key={i} className="font-semibold text-foreground">{part.text}</strong>;
        if (part.italic) return <em key={i}>{part.text}</em>;
        return part.href!.startsWith("http") ? (
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
            to={part.href!}
            className="text-gold hover:text-gold-light transition-colors underline-offset-2 hover:underline"
          >
            {part.text}
          </Link>
        );
      })}
    </p>
  );
};

export default ContentRenderer;

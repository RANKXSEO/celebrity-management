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
  if (content.trim().startsWith('|')) {
    const blocks = content.split('\n\n');
    const lines = blocks[0].trim().split('\n');
    const cells = (line: string) => line.split('|').slice(1, -1).map(cell => cell.trim());
    return <><div className="overflow-x-auto mb-6"><table className="w-full text-sm border-collapse"><thead><tr>{cells(lines[0]).map(cell => <th key={cell} scope="col" className="border-b border-border text-left p-3 font-semibold">{cell}</th>)}</tr></thead><tbody>{lines.slice(2).map((line, i) => <tr key={i}>{cells(line).map((cell, j) => <td key={j} className="border-b border-border p-3 align-top text-muted-foreground">{cell}</td>)}</tr>)}</tbody></table></div>{blocks.slice(1).map((block, i) => <ContentRenderer key={i} content={block} className={className} />)}</>;
  }
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
        if (!part.href) return <Fragment key={i}>{part.text}</Fragment>;
        return part.href.startsWith("http") ? (
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
        );
      })}
    </p>
  );
};

export default ContentRenderer;

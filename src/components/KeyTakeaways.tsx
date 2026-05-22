// AEO-friendly answer-box at the top of long-form pages.
// LLMs and featured-snippet algorithms preferentially quote bullet lists
// that directly answer the page's primary query.

interface Props {
  items: string[];
  title?: string;
}

const KeyTakeaways = ({ items, title = "Key Takeaways" }: Props) => {
  if (!items || items.length === 0) return null;
  return (
    <aside
      aria-label={title}
      className="bg-card border border-border rounded-2xl p-6 mb-10"
    >
      <h2 className="font-display text-xl font-bold mb-3">{title}</h2>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {items.map((t, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-gold flex-shrink-0 mt-0.5" aria-hidden="true">
              ✓
            </span>
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default KeyTakeaways;

import { useState } from "react";
import { slugifyHeading } from "@/lib/slugify";

interface Props {
  headings: string[];
  label?: string;
}

/**
 * Auto-rendered TOC for long-form pages.
 * Links to slugified H2 IDs that the page must render on its <h2> elements.
 * Improves dwell time, CTR (jump links in SERPs), and helps Google parse
 * topical structure.
 */
const TableOfContents = ({ headings, label = "On this page" }: Props) => {
  const [open, setOpen] = useState(true);
  if (!headings || headings.length < 3) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="bg-card border border-border rounded-2xl p-5 mb-10"
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full text-left"
        aria-expanded={open}
      >
        <span className="font-display text-base font-bold text-foreground">
          {label}
        </span>
        <span
          className={`text-gold text-lg transition-transform ${open ? "rotate-45" : ""}`}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      {open && (
        <ol className="mt-3 space-y-1.5 list-decimal list-inside marker:text-gold marker:font-bold">
          {headings.map((h) => (
            <li key={h} className="text-sm">
              <a
                href={`#${slugifyHeading(h)}`}
                className="text-muted-foreground hover:text-gold transition-colors"
              >
                {h}
              </a>
            </li>
          ))}
        </ol>
      )}
    </nav>
  );
};

export default TableOfContents;

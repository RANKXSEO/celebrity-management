// EEAT signal block — author, reviewer, last-updated. Renders on every
// long-form editorial page (services, solutions, audiences, blog posts).

interface Props {
  author?: string;
  authorRole?: string;
  reviewedBy?: string;
  reviewerRole?: string;
  updated?: string;
  published?: string;
}

const DEFAULT_AUTHOR = "CRM Editorial Team";
const DEFAULT_AUTHOR_ROLE =
  "In-house reputation strategists, Los Angeles & London";
const DEFAULT_REVIEWER = "Senior ORM Strategist";
const DEFAULT_REVIEWER_ROLE = "15+ years of celebrity reputation work";
const DEFAULT_UPDATED = "May 2026";

const AuthorByline = ({
  author = DEFAULT_AUTHOR,
  authorRole = DEFAULT_AUTHOR_ROLE,
  reviewedBy = DEFAULT_REVIEWER,
  reviewerRole = DEFAULT_REVIEWER_ROLE,
  updated = DEFAULT_UPDATED,
  published,
}: Props) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 bg-card/60 border border-border rounded-xl p-4 mb-8 text-[13px]">
      <div className="flex items-center gap-3">
        <div
          aria-hidden="true"
          className="w-9 h-9 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center text-gold font-bold"
        >
          ✍︎
        </div>
        <div>
          <div className="font-bold text-foreground">By {author}</div>
          <div className="text-muted-foreground text-[12px]">{authorRole}</div>
        </div>
      </div>
      <div className="hidden sm:block w-px h-8 bg-border" aria-hidden="true" />
      <div className="text-[12px] text-muted-foreground">
        <div>
          <span className="font-semibold text-foreground/85">
            Reviewed by:
          </span>{" "}
          {reviewedBy}{reviewerRole ? `, ${reviewerRole}` : ""}
        </div>
        <div>
          <span className="font-semibold text-foreground/85">
            Last updated:
          </span>{" "}
          <time dateTime={updated}>{updated}</time>
          {published ? <> · <span className="font-semibold text-foreground/85">Published:</span> <time dateTime={published}>{published}</time></> : null}
        </div>
      </div>
    </div>
  );
};

export { DEFAULT_AUTHOR, DEFAULT_REVIEWER, DEFAULT_UPDATED };
export default AuthorByline;

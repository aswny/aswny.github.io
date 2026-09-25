import { Section } from "@/components/ui/section";
import type { RESUME_DATA } from "@/data/resume-data";

type Publication = (typeof RESUME_DATA)["publications"][number];

interface PublicationsProps {
  publications: readonly Publication[];
}

/**
 * Publications section component
 * Lists conference abstracts and papers, newest first
 */
export function Publications({ publications }: PublicationsProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold" id="publications-section">
        Publications
      </h2>
      <ul
        className="list-none space-y-3 p-0 print:space-y-1"
        aria-labelledby="publications-section"
      >
        {publications.map((publication) => (
          <li key={publication.href} className="text-pretty">
            <div className="flex items-baseline justify-between gap-x-2">
              <a
                className="text-sm font-semibold hover:underline print:text-[11px]"
                href={publication.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {publication.title}
              </a>
              <span className="shrink-0 text-sm tabular-nums text-gray-500">
                {publication.year}
              </span>
            </div>
            <p className="font-mono text-xs text-foreground/80 print:text-[10px]">
              {publication.venue}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

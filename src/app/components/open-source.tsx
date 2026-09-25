import { Section } from "@/components/ui/section";
import type { RESUME_DATA } from "@/data/resume-data";

type Contribution = (typeof RESUME_DATA)["openSource"][number];

interface OpenSourceProps {
  contributions: readonly Contribution[];
}

/**
 * Open-source section component
 * Lists merged upstream contributions
 */
export function OpenSource({ contributions }: OpenSourceProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold" id="open-source-section">
        Open source
      </h2>
      <ul
        className="list-none space-y-2 p-0 print:space-y-0.5"
        aria-labelledby="open-source-section"
      >
        {contributions.map((contribution) => (
          <li
            key={contribution.project}
            className="text-pretty font-mono text-xs text-foreground/80 print:text-[10px]"
          >
            <span className="font-sans font-semibold text-foreground">
              {contribution.project}
            </span>{" "}
            {contribution.links.map((link, index) => (
              <span key={link.href}>
                {index > 0 && ", "}
                <a
                  className="underline-offset-2 hover:underline"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              </span>
            ))}{" "}
            — {contribution.description}
          </li>
        ))}
      </ul>
    </Section>
  );
}

import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import type { RESUME_DATA } from "@/data/resume-data";
import { cn } from "@/lib/utils";

type SkillGroup = (typeof RESUME_DATA)["skills"][number];

interface SkillsListProps {
  skills: readonly string[];
  label: string;
}

/**
 * Renders a list of skills as badges
 */
function SkillsList({ skills, label }: SkillsListProps) {
  return (
    <ul
      className="flex list-none flex-wrap gap-1 p-0"
      aria-label={`${label} skills`}
    >
      {skills.map((skill) => (
        <li key={skill}>
          <Badge className="print:text-[10px]" aria-label={`Skill: ${skill}`}>
            {skill}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

interface SkillsProps {
  skills: readonly SkillGroup[];
  className?: string;
}

/**
 * Skills section component
 * Displays professional skills as badges, grouped by category
 */
export function Skills({ skills, className }: SkillsProps) {
  return (
    <Section className={cn("print:space-y-1", className)}>
      <h2 className="text-xl font-bold" id="skills-section">
        Skills
      </h2>
      <dl className="space-y-2 print:space-y-1">
        {skills.map((group) => (
          <div
            key={group.category}
            className="grid gap-1 sm:grid-cols-[8rem_1fr] sm:gap-3"
          >
            <dt className="pt-0.5 font-mono text-xs font-semibold text-foreground/80 print:text-[10px]">
              {group.category}
            </dt>
            <dd>
              <SkillsList skills={group.items} label={group.category} />
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

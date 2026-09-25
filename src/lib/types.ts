import type { StaticImageData } from "next/image";

export type ResumeIcon =
  | React.ComponentType<React.SVGProps<SVGSVGElement>>
  | StaticImageData;

export type IconType = "github" | "linkedin" | "x" | "globe" | "mail" | "phone";

export interface ResumeData {
  name: string;
  initials: string;
  location: string;
  locationLink: string;
  about: string;
  summary: string;
  avatarUrl: string;
  personalWebsiteUrl: string;
  contact: {
    email: string;
    tel: string;
    social: Array<{
      name: string;
      url: string;
      icon: IconType;
    }>;
  };
  education: Array<{
    school: string;
    degree: string;
    start: string;
    end: string;
  }>;
  work: Array<{
    company: string;
    link: string;
    badges: string[];
    /** Most recent role first; `end: null` means current. */
    roles: Array<{
      title: string;
      start: string;
      end: string | null;
    }>;
    description: string;
    highlights?: readonly string[];
    /** Highlights grouped by project, rendered as sub-headings. */
    sections?: Array<{
      title: string;
      period: string;
      highlights: readonly string[];
    }>;
  }>;
  skills: Array<{
    category: string;
    items: string[];
  }>;
  publications: Array<{
    title: string;
    authors: string;
    venue: string;
    year: string;
    href: string;
  }>;
  openSource: Array<{
    project: string;
    description: string;
    link: {
      label: string;
      href: string;
    };
  }>;
  projects: Array<{
    title: string;
    techStack: string[];
    description: string;
    link?: {
      label: string;
      href: string;
    };
  }>;
}

import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Ashwani Yadav",
  initials: "AY",
  location: "India, IST",
  locationLink: "https://www.google.com/maps/place/India",
  about:
    "NLP Data Scientist building large language model systems for oncology real-world evidence.",
  summary:
    "NLP data scientist working on biomedical language models that turn unstructured healthcare documents into real-world evidence. Previously built end-to-end ESG and data engineering pipelines in asset management. Dual-degree graduate in Mathematics & Scientific Computing from IIT Kanpur. Fall in love with the problem, not the solution.",
  avatarUrl: "/profile.jpeg",
  personalWebsiteUrl: "https://aswny.github.io",
  contact: {
    email: "ashwani.yadav1952@gmail.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/aswny",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ashwani1952/",
        icon: "linkedin",
      },
      {
        name: "X",
        url: "https://x.com/ashwan_y",
        icon: "x",
      },
    ],
  },
  education: [
    {
      school: "Indian Institute of Technology, Kanpur",
      degree: "BS-MS (Dual Degree) in Mathematics & Scientific Computing",
      start: "2014",
      end: "2019",
    },
  ],
  work: [
    {
      company: "ConcertAI",
      link: "https://www.concertai.com/",
      badges: [
        "NLP",
        "LLMs",
        "PyTorch",
        "Transformers",
        "Python",
        "Healthcare AI",
      ],
      title: "NLP Data Scientist",
      start: "2022",
      end: null,
      description:
        "Leveraging state-of-the-art NLP models to curate Real World Data (RWD) and accelerate oncology research.",
      highlights: [
        "Build in-house biomedical models for entity identification, entity linking to standard concepts, classification and relationship extraction using the latest LLM architectures",
        "Train and fine-tune causal language models on the biomedical domain, using distributed training infrastructure (DeepSpeed ZeRO / FSDP on NVIDIA A100s) and 🤗 transformers",
        "Designed and built an internal platform from the ground up that uses LLMs end-to-end as orchestrator and writing assistant",
      ],
    },
    {
      company: "HSBC Asset Management",
      link: "https://www.assetmanagement.hsbc.co.in/en",
      badges: ["PySpark", "GCP", "BigQuery", "BERT", "ESG", "Python"],
      title: "Data Scientist",
      start: "2019",
      end: "2022",
      description:
        "Designed machine learning prototypes and end-to-end data engineering pipelines for carbon and ESG ratings of market entities.",
      highlights: [
        "Built a centralized ESG framework scoring a wide range of financial instruments, with a PySpark sourcing and aggregation engine on a multi-node GCP Dataproc cluster",
        "Fine-tuned a BERT-based financial sentiment model to surface the prevailing market narrative around entities and its likely impact on future ratings",
        "Cut framework run-time by 40% through BigQuery engine and Spark configuration optimizations",
        "Released a proof-of-concept statistical ML model with the venture capital team predicting the success likelihood of early-stage startups",
      ],
    },
    {
      company: "Sharekhan by BNP Paribas",
      link: "https://www.sharekhan.com/",
      badges: ["R", "Machine Learning", "Ensembles"],
      title: "Data Science Intern",
      start: "2014",
      end: "2014",
      description:
        "Developed a cross-sell ML ensemble model in R predicting which existing equity clients would move into mutual fund investments, particularly SIP subscriptions.",
      highlights: [
        "Delivered a ranked list of high-propensity clients to the sales teams",
        "Profiled existing SIP clients to determine the optimal communication channel for each segment",
      ],
    },
  ],
  skills: [
    "Python",
    "NLP",
    "Large Language Models",
    "🤗 Transformers",
    "PyTorch",
    "Distributed Training (DeepSpeed / FSDP)",
    "PySpark",
    "R",
    "BigQuery",
    "GCP",
    "AWS",
  ],
  projects: [
    {
      title: "ml-notebooks",
      techStack: ["Python", "Jupyter", "Machine Learning"],
      description:
        "A collection of notebooks working through machine learning ideas and experiments.",
      link: {
        label: "github.com/aswny/ml-notebooks",
        href: "https://github.com/aswny/ml-notebooks",
      },
    },
    {
      title: "arithmetic-game",
      techStack: ["Python"],
      description:
        "A small mental-arithmetic practice game for drilling quick calculations.",
      link: {
        label: "github.com/aswny/arithmetic-game",
        href: "https://github.com/aswny/arithmetic-game",
      },
    },
    {
      title: "virtual_mf_portfolio",
      techStack: ["Python", "Finance"],
      description:
        "A virtual mutual fund portfolio tracker for simulating and following fund allocations.",
      link: {
        label: "github.com/aswny/virtual_mf_portfolio",
        href: "https://github.com/aswny/virtual_mf_portfolio",
      },
    },
  ],
} as const;

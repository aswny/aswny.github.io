import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Ashwani Yadav",
  initials: "AY",
  location: "Bangalore, India",
  locationLink: "https://www.google.com/maps/place/Bangalore",
  about:
    "Lead Data Scientist building clinical NLP and fine-tuned LLM systems for oncology real-world data.",
  summary:
    "7+ years in machine learning, the last four at ConcertAI turning unstructured oncology records into research-grade data with fine-tuned open-weight LLMs. My work spans SFT, DPO and distillation, GPU inference optimisation and multi-agent system design — from scoping with clinicians to shipping in production. Before that I built ESG and data-quality frameworks at HSBC Asset Management.",
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
        url: "https://www.linkedin.com/in/ashwani1952",
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
      badges: ["LLMs", "Clinical NLP", "PyTorch", "vLLM", "NVIDIA NeMo"],
      roles: [
        { title: "Lead Data Scientist", start: "Apr 2026", end: null },
        {
          title: "Senior NLP Data Scientist",
          start: "Apr 2024",
          end: "Mar 2026",
        },
        { title: "NLP Data Scientist", start: "Jul 2022", end: "Mar 2024" },
      ],
      description:
        "Oncology real-world data and AI company. Joined as an early NLP hire; now own the company's portfolio of 20+ fine-tuned clinical extraction agents end to end — scoping with product, fine-tuning, evaluation with clinical SMEs, deployment and maintenance — with a team of 4 and the clinical, DevOps and CloudOps teams.",
      sections: [
        {
          title:
            "Clinical information extraction: from NER models to fine-tuned LLM agents",
          period: "2022 – Present",
          highlights: [
            "Own 20+ production LLM agents that extract 150+ structured oncology fields from unstructured clinical notes; every field clears a 0.85 F1 release bar and 80% exceed 0.90 on held-out production sets curated by clinical SMEs",
            "Fine-tuned 7B–20B open-weight models with LoRA SFT and DPO on NVIDIA NeMo AutoModel, using a data mixture of clinical reasoning traces, summaries and structured JSON, with PHI de-identification and semantic deduplication",
            "Distilled a larger teacher model into a 20B student that reaches ~95% of the teacher's F1 and handles edge-case, ambiguous and hard cases more consistently, following product definitions where the teacher falls back on assumptions",
            "Benchmarked vLLM and NVIDIA NIM inference profiles (TensorRT-LLM, tensor parallelism, LoRA adapters) with DevOps and CloudOps to maximise serving throughput; served new open-weight models on vLLM ahead of official NIM images to unblock agent development",
            "Built agents that read clinical report PDFs, evaluating vision-language models for scanned pages, and agents that reconstruct longitudinal patient journeys across encounters",
            "Led fine-tuning research on early open models (GPT-J, Mistral-7B) with DeepSpeed and Hugging Face Transformers/Accelerate: +30% relative F1 on clinical NER and +40% Q&A accuracy without regressing base-model capability; mentored an intern for 6 months, publishing internal findings on clinical learning and catastrophic forgetting (2024)",
            "Designed prompt-based LLM extraction with product teams, lifting F1 from 0.70 to 0.85–0.90 on key fields through prompt and inference-engine improvements; compared LLM and traditional NLP extraction in an ASCO 2025 abstract (2023 – 2024)",
            "Trained clinical NER models (spaCy, BERT) for curating oncology real-world data covering 5.4 million patients (ASCO 2023), and a 30+ class document classifier at macro-F1 0.87 (2022 – 2023)",
          ],
        },
        {
          title: "Agentic analytics applications",
          period: "2023 – 2026",
          highlights: [
            "Researched open-source agent frameworks (LangChain deepagents, LangGraph, Claude Agent SDK) and chose deepagents for skills, subagents, filesystem-based memory and model-provider independence; built a deep-research agent that runs long multi-step analyses such as patient-journey concordance with clinical guidelines and market assessments, now in demo and expanding to more analysis types (2026)",
            "Returned for an end-to-end optimisation review of the production analytics copilot; refactored its core tools, cutting LLM token usage by 39% and entity-linking latency by 38% (2025)",
            "Led development of the reasoning core of a production conversational analytics copilot — data retrieval, analysis APIs, charts and conversation memory — directing 2 junior team members and working with 3 backend and 2 frontend engineers, 2 product managers and QA; migrated the copilot onto a microservices framework for sessions and user management (2024)",
            "Built the analytics copilot proof of concept from scratch — a hand-rolled ReAct loop over the raw chat-completions API — which made the case for the production build (2023)",
            "Built a multi-agent LLM system (AutoGen) that turns free-text trial eligibility criteria into structured queries across 40+ clinical entity types, with NER and relation-extraction agents, semantic search to ontology concepts (Sentence Transformers + reranker + FAISS) and human-in-the-loop review — 80% less time to digitise a typical 40-rule protocol (2023 – 2024)",
          ],
        },
      ],
    },
    {
      company: "HSBC Asset Management",
      link: "https://www.assetmanagement.hsbc.co.in/en",
      badges: ["PySpark", "GCP", "BigQuery", "BERT", "Tableau"],
      roles: [{ title: "Data Scientist", start: "Jul 2019", end: "Jul 2022" }],
      description:
        "Machine learning prototypes and data engineering pipelines for ESG ratings and data quality.",
      highlights: [
        "Built the firm's first centralised ESG scoring framework in PySpark, covering 330,000 equity and fixed-income instruments, and fine-tuned a BERT model to predict ESG score changes from analyst commentary",
        "Cut framework runtime by 40% through BigQuery and Spark tuning on GCP Dataproc; built Tableau dashboards for data owners",
        "Designed a data-quality framework measuring 400 critical data elements against 900+ rules across completeness, conformity, validity, timeliness and uniqueness",
      ],
    },
    {
      company: "Sharekhan by BNP Paribas",
      link: "https://www.sharekhan.com/",
      badges: ["R", "Machine Learning"],
      roles: [
        { title: "Data Science Intern", start: "May 2018", end: "Jul 2018" },
      ],
      description:
        "Cross-sell propensity model in R over 770,000 equity clients.",
    },
  ],
  skills: [
    {
      category: "LLMs & GenAI",
      items: [
        "SFT",
        "DPO",
        "LoRA",
        "Distillation",
        "vLLM",
        "NVIDIA NIM",
        "NVIDIA NeMo",
        "DeepSpeed",
        "LLM evaluation",
        "LangChain deepagents",
        "LangGraph",
        "AutoGen",
        "LiteLLM",
        "RAG",
        "FAISS",
      ],
    },
    {
      category: "NLP & ML",
      items: [
        "Clinical NER",
        "Relation extraction",
        "Document classification",
        "spaCy",
        "Hugging Face Transformers",
        "PyTorch",
        "XGBoost",
        "scikit-learn",
      ],
    },
    {
      category: "Engineering",
      items: [
        "Python",
        "SQL",
        "R",
        "FastAPI",
        "Streamlit",
        "PostgreSQL",
        "PySpark",
        "BigQuery",
        "GCP",
        "AWS",
        "Docker",
        "Multi-GPU training",
      ],
    },
    {
      category: "Domain",
      items: [
        "Oncology real-world data",
        "Clinical data models",
        "PHI de-identification",
        "ICD-O-3 / SNOMED linking",
        "ESG scoring",
      ],
    },
  ],
  publications: [
    {
      title:
        "Comparing traditional NLP methods and LLM-based extraction for identifying biomarkers in lung cancer",
      venue: "ASCO Annual Meeting 2025 · abstract, JCO 43:16_suppl, e13607",
      year: "2025",
      href: "https://ascopubs.org/doi/10.1200/JCO.2025.43.16_suppl.e13607",
    },
    {
      title:
        "Development of natural language processing (NLP) models for extracting key features from unstructured notes to create real-world data (RWD) assets for clinical research at scale",
      venue: "ASCO Annual Meeting 2023 · abstract, JCO 41:16_suppl, 6607",
      year: "2023",
      href: "https://ascopubs.org/doi/10.1200/JCO.2023.41.16_suppl.6607",
    },
  ],
  openSource: [
    {
      project: "LiteLLM",
      description:
        "Merged fixes to the AWS Bedrock integration: correct prompt templates for Llama 3 chat vs. instruct models (fixing garbled output), and Llama 4 support on the invoke route, with unit tests.",
      links: [
        {
          label: "BerriAI/litellm#3298",
          href: "https://github.com/BerriAI/litellm/pull/3298",
        },
        {
          label: "#10557",
          href: "https://github.com/BerriAI/litellm/pull/10557",
        },
      ],
    },
    {
      project: "Microsoft AutoGen",
      description:
        "Merged a feature letting GroupChatManager.resume() take a custom function for removing termination strings, so group chats whose agents end with different keywords can be resumed; with tests and docs.",
      links: [
        {
          label: "microsoft/autogen#2804",
          href: "https://github.com/microsoft/autogen/pull/2804",
        },
      ],
    },
  ],
  projects: [
    {
      title: "Chain of Why",
      techStack: ["LLM", "Cloudflare Workers", "OpenRouter"],
      description:
        "A reflection tool that walks from a stated want to the value beneath it through a short chain of LLM-generated “why” questions. Stateless serverless backend, nothing stored.",
      link: {
        label: "chain-of-why.pages.dev",
        href: "https://chain-of-why.pages.dev/",
      },
    },
    {
      title: "Pill · Pop · Potion",
      techStack: ["LLM", "React", "Cloudflare D1", "TypeScript"],
      description:
        "Describe one thing you're turning over and get it back three ways — the route taken, the route not taken, and what only shows once both are seen. Privacy-first, with an opt-in public wall.",
      link: {
        label: "pill-pop-potion.pages.dev",
        href: "https://pill-pop-potion.pages.dev/",
      },
    },
    {
      title: "Bulls & Cows",
      techStack: ["React", "TypeScript", "PWA", "Playwright"],
      description:
        "The classic code-breaking game as an installable PWA, with visual clues, a tactile keypad and shareable results.",
      link: {
        label: "bulls-and-cows-exb.pages.dev",
        href: "https://bulls-and-cows-exb.pages.dev/",
      },
    },
    {
      title: "NumberDash",
      techStack: ["TypeScript", "Adaptive difficulty", "PWA"],
      description:
        "A mental-arithmetic speed sprint that adapts to the player: problems are scored from their structure (carries, borrows, times-table facts) and an online model of answer times picks the next one across 9 skill areas.",
      link: {
        label: "numberdash.pages.dev",
        href: "https://numberdash.pages.dev/",
      },
    },
  ],
} as const;

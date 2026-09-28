import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Ashwani Yadav",
  initials: "AY",
  location: "Bangalore, India",
  locationLink: "https://www.google.com/maps/place/Bangalore",
  about:
    "Lead Data Scientist building clinical NLP and fine-tuned LLM systems for oncology real-world data.",
  summary:
    "7+ years in machine learning, the last four at ConcertAI turning unstructured oncology records into research-grade data with fine-tuned open-weight LLMs. My work spans SFT and distillation, GPU inference optimisation and multi-agent system design — from scoping with clinicians to shipping in production. Before that I built ESG and data-quality frameworks at HSBC Asset Management.",
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
        "Oncology real-world data and AI company. Joined as an early NLP hire; now own the company's portfolio of 20+ fine-tuned clinical extraction agents end to end — scoping with product, fine-tuning, evaluation with clinical SMEs, deployment and maintenance — with a team of 4 and the clinical, DevOps and CloudOps teams. Interviewed for 5+ data science hires, junior to Staff.",
      sections: [
        {
          title:
            "Clinical information extraction: from NER models to fine-tuned LLM agents",
          period: "2022 – Present",
          highlights: [
            "Own 20+ production LLM agents that extract 150+ structured oncology fields from unstructured clinical notes; every field clears a 0.85 F1 release bar and 80% exceed 0.90 on held-out production sets curated by clinical SMEs",
            "Built the evaluation suite the team uses as its release gate: it matches model outputs to SME-curated records, standardises codes (ICD, SNOMED, internal standards) and reports per-variable precision, recall, F1 and confusion matrices, with a record-level workbook for error analysis",
            "Fine-tuned 7B–20B open-weight models with LoRA SFT on NVIDIA NeMo AutoModel, using a data mixture of clinical reasoning traces, summaries and structured JSON, with PHI de-identification and semantic deduplication",
            "Distilled a 120B teacher into a production 20B student that keeps ~95% of the teacher's F1 and scores 20–50% higher relative F1 than the base 20B across variables, with more consistent instruction following and edge-case handling under internal product definitions",
            "Ran LLM inference for production agents: benchmarked vLLM and NVIDIA NIM profiles (TensorRT-LLM, tensor parallelism, LoRA adapters) with DevOps and CloudOps, and served new open-weight models on vLLM ahead of official NIM images to unblock agent development",
            "Built 5+ vision-language agents that run first-pass extraction on clinical report PDFs, including scanned pages, and feed downstream LLM extraction agents",
            "Built agents that reconstruct longitudinal patient journeys across encounters",
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
            "Introduced LiteLLM on the copilot to support AWS Bedrock and Azure OpenAI models; it is now the organisation-wide LLM gateway (2024)",
            "Built the analytics copilot proof of concept from scratch — a hand-rolled ReAct loop over the raw chat-completions API — which made the case for the production build (2023)",
            "Moved multi-agent flows from the native OpenAI SDK to AutoGen and built a multi-agent system that turns free-text trial eligibility criteria into structured queries across 40+ clinical entity types, with NER and relation-extraction agents, semantic search to ontology concepts (Sentence Transformers + reranker + FAISS) and human-in-the-loop review — 80% less time to digitise a typical 40-rule protocol (2023 – 2024)",
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
      title: "NumberDash",
      techStack: ["TypeScript", "Adaptive difficulty", "PWA"],
      description:
        "A mental-arithmetic sprint with rule-based adaptive difficulty: each problem is picked by its structure and the player's answer times, across 9 skill areas.",
      link: {
        label: "numberdash.pages.dev",
        href: "https://numberdash.pages.dev/",
      },
    },
  ],
} as const;

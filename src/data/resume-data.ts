import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Ashwani Yadav",
  initials: "AY",
  location: "Bangalore, India",
  locationLink: "https://www.google.com/maps/place/Bangalore",
  about:
    "Lead Data Scientist building clinical NLP and fine-tuned LLM systems for oncology real-world data.",
  summary:
    "7+ years in machine learning, the last four at ConcertAI turning unstructured oncology records into research-grade data with fine-tuned open-weight LLMs. I fine-tune open-weight LLMs (SFT, DPO, distillation), optimise GPU inference, and design multi-agent systems — from scoping with clinicians to shipping in production. Before that I built ESG and data-quality frameworks at HSBC Asset Management.",
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
        "Oncology real-world data and AI company. Joined as an early NLP hire; now lead the NLP/LLM layer of the company's clinical AI platform — model research, fine-tuning infrastructure, agent orchestration and production deployment.",
      sections: [
        {
          title: "Clinical information extraction with fine-tuned LLMs",
          period: "2024 – Present",
          highlights: [
            "Fine-tuned and shipped 20+ production LLM agents that extract 150+ structured oncology fields from unstructured clinical notes, all at F1 > 0.90",
            "Trained them by teacher–student distillation (gpt-oss-120b → gpt-oss-20b) on a mixture of clinical reasoning traces, summaries and structured JSON, then DPO on clinician-annotated preferences; evaluated against hard-case and regression test sets",
            "Built the team's LoRA SFT/DPO training pipeline (DeepSpeed ZeRO, 8×A100) with PHI de-identification and semantic deduplication, migrating it from Hugging Face TRL to NVIDIA NeMo as scale grew",
            "Early SFT of open decoder models: +30% F1 on clinical NER across 7+ variables and +40% Q&A accuracy, with no regression in base-model capability",
            "Built agents that read clinical report PDFs (evaluating vision-language models for scanned pages) and that reconstruct longitudinal patient journeys across encounters",
            "Benchmarked vLLM and NVIDIA NIM inference profiles (TensorRT-LLM, tensor parallelism, LoRA adapters) and served gpt-oss on vLLM ahead of official NIM images to unblock agent development",
          ],
        },
        {
          title: "Conversational analytics copilots",
          period: "2023 – 2025",
          highlights: [
            "Led development of a multi-agent copilot (OpenAI Agents SDK) that answers clinical analytics questions over real-world data — routing across platform APIs, asking clarifying questions and suggesting follow-up analyses, in under 5 seconds end to end",
            "Refactored its entity extraction and linking: 39% fewer LLM tokens and 38% lower linking latency",
            "Cut average response time of a second copilot by more than 50% by tuning tool routing and inference under a conference-demo deadline",
          ],
        },
        {
          title: "Clinical trial eligibility digitisation",
          period: "2023 – 2024",
          highlights: [
            "Built a multi-agent LLM system (AutoGen) that turns free-text trial eligibility criteria into structured queries across 40+ clinical entity types, with self-correction loops and human-in-the-loop review",
            "Paired NER and relation-extraction agents with semantic search (Sentence Transformers + reranker + FAISS) to map criteria to medical ontology concepts — 80% less time to digitise a typical 40-rule protocol",
          ],
        },
        {
          title: "Clinical NER & document classification",
          period: "2022 – 2024",
          highlights: [
            "Developed clinical NER models (spaCy, BERT) for curating oncology real-world data covering 5.4 million patients (ASCO 2023)",
            "Lifted an LLM extraction pipeline's F1 from 0.70 to 0.85–0.90 across key fields through inference-engine and prompt improvements; trained a 30+ class document classifier at macro-F1 0.87",
            "Built a Streamlit + PostgreSQL annotation tool used daily by clinical annotators for quality control; mentored an intern and a junior colleague",
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
        "OpenAI Agents SDK",
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

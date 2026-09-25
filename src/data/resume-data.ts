import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Ashwani Yadav",
  initials: "AY",
  location: "Bangalore, India",
  locationLink: "https://www.google.com/maps/place/Bangalore",
  about:
    "Lead Data Scientist building clinical NLP and fine-tuned LLM systems for oncology real-world data.",
  summary:
    "Lead Data Scientist at ConcertAI with 7+ years in machine learning, the last four focused on clinical NLP and large language models. I fine-tune open-weight LLMs (SFT, DPO, distillation), optimise GPU inference, and design multi-agent systems that turn unstructured oncology records into research-grade data — from scoping with clinicians to shipping in production. Before that I built ESG and data-quality frameworks at HSBC Asset Management. BS–MS in Mathematics & Scientific Computing from IIT Kanpur. Fall in love with the problem, not the solution.",
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
            "Designed and shipped 9 production LLM agents that extract structured oncology variables — biomarkers, metastasis, progression, dates, imaging, radiation, smoking, alcohol and assertion — from clinical notes, all at F1 > 0.85 in production",
            "Trained them by teacher–student distillation (gpt-oss-120b → gpt-oss-20b) on a mixture of clinical reasoning traces, summaries and structured JSON, then DPO on clinician-annotated preferences",
            "Built LoRA SFT/DPO pipelines across three framework generations (Hugging Face TRL → NVIDIA NeMo Curator → NeMo AutoModel) with DeepSpeed ZeRO on 8×A100, including PHI scrubbing and semantic deduplication; early SFT work gave +30% F1 on clinical NER and +40% Q&A accuracy",
            "Built patient-journey agents that reconstruct disease, progression and treatment timelines across encounters, and agents that read pathology and imaging PDFs, evaluating vision-language models for scanned reports",
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
          title: "Clinical trial eligibility → executable cohort queries",
          period: "2023 – 2024",
          highlights: [
            "Built a multi-agent LLM system (AutoGen) that turns free-text trial eligibility criteria into structured queries across 40+ clinical entity types, with self-correction loops and human-in-the-loop review",
            "Paired NER and relation-extraction agents with semantic search (SentenceTransformers + reranker + FAISS) to map criteria to medical ontology concepts — 80% less time to digitise a typical 40-rule protocol",
          ],
        },
        {
          title: "Clinical NER & document classification",
          period: "2022 – 2024",
          highlights: [
            "Developed clinical NER models (spaCy, BERT) for curating oncology real-world data covering 5.4 million patients (ASCO 2023)",
            "Trained a TF-IDF + XGBoost document classifier across 30+ classes at 0.87 macro-F1; improved an LLM extraction pipeline's metastasis F1 from 0.70 to 0.85 and biomarker F1 from 0.70 to 0.90",
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
        "Built an XGBoost model predicting early-stage startup success, with network analysis of the investment landscape, for the venture capital team",
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
        "Built a cross-sell ensemble model in R over 770,000 equity clients, predicting who would start a mutual fund SIP; delivered ranked high-propensity client lists and preferred channels to sales teams for A/B testing.",
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
        "🤗 Transformers",
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
        "A100 GPU clusters",
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
      title: "ASCO Annual Meeting abstract e13607",
      venue: "Journal of Clinical Oncology 43(16_suppl), e13607",
      year: "2025",
      href: "https://ascopubs.org/doi/10.1200/JCO.2025.43.16_suppl.e13607",
    },
    {
      title:
        "Development of natural language processing (NLP) models for extracting key features from unstructured notes to create real-world data (RWD) assets for clinical research at scale",
      venue:
        "Journal of Clinical Oncology 41(16_suppl), 6607 · ASCO Annual Meeting",
      year: "2023",
      href: "https://ascopubs.org/doi/10.1200/JCO.2023.41.16_suppl.6607",
    },
  ],
  openSource: [
    {
      project: "LiteLLM",
      description:
        "Fixed the AWS Bedrock Llama 3.1 integration in the LLM gateway used by production copilots.",
      link: {
        label: "BerriAI/litellm#3298",
        href: "https://github.com/BerriAI/litellm/pull/3298",
      },
    },
    {
      project: "LiteLLM",
      description: "Fixed the AWS Bedrock Llama 4 integration.",
      link: {
        label: "BerriAI/litellm#10557",
        href: "https://github.com/BerriAI/litellm/pull/10557",
      },
    },
    {
      project: "AutoGen",
      description:
        "Contributed an enhancement to Microsoft's multi-agent framework, used across our agent products.",
      link: {
        label: "microsoft/autogen#2804",
        href: "https://github.com/microsoft/autogen/pull/2804",
      },
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
  ],
} as const;

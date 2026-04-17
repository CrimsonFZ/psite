import type { Project } from "@/types";

export const graft: Project = {
  slug: "graft",
  title: {
    en: "GRAFT: Grid-Aware Load Forecasting with Multi-Source Textual Alignment and Fusion",
    zh: "GRAFT：基于多源自然语言处理的电力负荷预测研究",
  },
  subtitle: {
    en: "Strict spatiotemporal alignment and cross-modal fusion between multi-source text and power-load signals.",
    zh: "围绕多源文本与电力负荷的严格时空对齐与跨模态融合。",
  },
  period: {
    en: "2025.6 – Present",
    zh: "2025.6 – 至今",
  },
  featured: true,
  summary: {
    en: "A research framework for power-load forecasting that addresses the underuse of external information through strict spatiotemporal alignment, cross-modal fusion, and interpretability evaluation over multi-source text and load data. In February 2026, I submitted the first-author manuscript to Applied Energy, where it is currently under peer review.",
    zh: "面向电力负荷预测中外部信息利用不足的问题，构建 GRAFT 框架，围绕多源文本与电力负荷的严格时空对齐、跨模态融合与可解释评估开展系统研究。论文已于 2026 年 2 月以第一作者投稿至《Applied Energy》，目前处于同行评审阶段。",
  },
  background: {
    en: "To address the insufficient use of external information in power-load forecasting, I built the GRAFT framework and carried out a systematic study on strict spatiotemporal alignment, cross-modal fusion, and interpretable evaluation over multi-source text and power-load data.",
    zh: "面向电力负荷预测中外部信息利用不足的问题，构建 GRAFT 框架，围绕多源文本与电力负荷的严格时空对齐、跨模态融合与可解释评估开展系统研究。",
  },
  coreWork: {
    en: [
      "Built the dataset, designed the experiments, analysed the results, and wrote the manuscript",
      "Led the multi-source text processing pipeline and model training work",
    ],
    zh: [
      "负责数据构建、实验设计、实验分析与论文撰写",
      "主导多源文本处理及模型训练工作",
    ],
  },
  methods: {
    en: [
      "Introduced text embeddings, cross-attention, and an external memory interface",
      "Built the study on a 2019–2021 multi-source text and load dataset covering five Australian states",
      "Established a three-dimensional evaluation framework over forecasting scale, region, and text source, with visualization analysis",
    ],
    zh: [
      "引入文本嵌入、跨注意力机制与外部记忆接口",
      "基于澳大利亚五州 2019–2021 年多源文本与负荷数据集开展研究",
      "实现“预测尺度 × 区域 × 文本来源”三维评估框架，并开展可视化分析",
    ],
  },
  outcomes: {
    en: [
      'First-author manuscript: "GRAFT: Grid-Aware Load Forecasting with Multi-Source Textual Alignment and Fusion"',
      "Submitted to Applied Energy in February 2026",
      "Currently under peer review",
    ],
    zh: [
      "论文《GRAFT: Grid-Aware Load Forecasting with Multi-Source Textual Alignment and Fusion》",
      "2026 年 2 月以第一作者身份投稿至《Applied Energy》",
      "目前处于同行评审阶段",
    ],
  },
  tags: ["Forecasting", "AI / NLP", "Multimodal", "Power Systems"],
  tech: ["Python", "PyTorch", "Cross-Attention"],
  coverImage: "/project-images/graft/cover.png",
  // Drop image files into public/project-images/graft/ with the names below.
  // The ImageGallery component hides any figure whose file fails to load.
  gallery: [
    {
      src: "/project-images/graft/01-architecture.png",
      alt: {
        en: "GRAFT end-to-end architecture overview",
        zh: "GRAFT 端到端整体架构",
      },
    },
    {
      src: "/project-images/graft/02-attention-heatmap.png",
      alt: {
        en: "Cross-modal attention heatmap between text tokens and load horizons",
        zh: "文本 token 与负荷预测步长之间的跨模态注意力热力图",
      },
    },
    {
      src: "/project-images/graft/03-results.png",
      alt: {
        en: "Forecasting error across horizons vs. time-series-only baselines",
        zh: "各预测步长下相对纯时序基线的预测误差对比",
      },
    },
  ],
  links: {
    // Fill in when the repository, preprint, or demo is public.
    // github: "https://github.com/CrimsonFZ/graft",
    // paper: "https://doi.org/...",
  },
};

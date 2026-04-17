import type { Project } from "@/types";

export const graft: Project = {
  slug: "graft",
  title: {
    en: "GRAFT: Multi-Source Text Alignment for Short-Term Load Forecasting",
    zh: "GRAFT：面向短期负荷预测的多源文本对齐方法",
  },
  subtitle: {
    en: "Cross-modal fusion of operational text and numerical load signals.",
    zh: "运行文本与负荷数值信号的跨模态融合。",
  },
  period: "2024 – 2025",
  featured: true,
  summary: {
    en: "A cross-modal learning framework that aligns heterogeneous textual sources with load time-series in order to improve short-term forecasting. Manuscript submitted to Applied Energy.",
    zh: "一套跨模态学习框架，将异构文本源与负荷时序进行对齐，以提升短期负荷预测性能；成果投稿 Applied Energy。",
  },
  background: {
    en: "Modern grid operation produces a rich stream of textual context — dispatch notes, weather bulletins, demand-response events, outage reports — that carries information complementary to numerical load measurements. Conventional load forecasters ignore this signal or consume it as coarse categorical features, leaving substantial explanatory capacity unused.",
    zh: "现代电网运行持续产生大量文本类上下文：调度记录、气象公告、需求响应事件、停电报告等，其中蕴含着与负荷数值测量互补的信息。传统负荷预测模型要么忽略这些信号，要么仅将其作为粗粒度的类别特征使用，从而损失了可观的解释能力。",
  },
  coreWork: {
    en: [
      "Designed a multi-source text alignment module that projects heterogeneous textual sources into a shared representation aligned with the load signal",
      "Built an end-to-end training pipeline combining pre-trained text encoders with time-series backbones",
      "Curated a multi-source dataset pairing textual context with regional load measurements",
      "Benchmarked the method against strong pure-time-series baselines on real operational data",
    ],
    zh: [
      "设计多源文本对齐模块，将异构文本源投影到与负荷信号对齐的共享表示空间",
      "构建结合预训练文本编码器与时序主干网络的端到端训练流水线",
      "整理将文本上下文与区域负荷测量对齐的多源数据集",
      "在真实运行数据上与强时序基线进行对比评估",
    ],
  },
  methods: {
    en: [
      "Pre-trained text encoders (BERT-family)",
      "Cross-modal attention & representation alignment",
      "Time-series forecasting backbones (Transformer / TCN)",
      "Multi-horizon evaluation with ablation studies",
    ],
    zh: [
      "预训练文本编码器（BERT 系）",
      "跨模态注意力与表示对齐",
      "时序预测主干（Transformer / TCN）",
      "多预测步长的评估与消融实验",
    ],
  },
  outcomes: {
    en: [
      "Consistent improvement over time-series-only baselines across forecasting horizons",
      "Manuscript submitted to Applied Energy",
      "Reproducible codebase with configs and evaluation scripts",
    ],
    zh: [
      "在各预测步长上相对纯时序基线取得一致性提升",
      "成果投稿 Applied Energy",
      "发布配置与评估脚本完整的可复现代码库",
    ],
  },
  tags: ["Forecasting", "AI / NLP", "Multimodal", "Power Systems"],
  tech: ["Python", "PyTorch", "Transformers"],
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

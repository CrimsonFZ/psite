import type { Project } from "@/types";

export const lastBo: Project = {
  slug: "last-bo",
  title: {
    en: "LaST-BO: Charging Load Forecasting & Bayesian Optimisation Platform",
    zh: "LaST-BO：充电负荷预测与贝叶斯优化平台",
  },
  subtitle: {
    en: "Forecasting and hyperparameter search, delivered as an internal research platform.",
    zh: "集预测建模与贝叶斯超参搜索于一体的内部科研平台。",
  },
  period: "2023 – 2024",
  featured: true,
  summary: {
    en: "A research platform that pairs EV charging-load forecasting with Bayesian optimisation for model selection and tuning. Produced a registered software copyright.",
    zh: "一套面向电动汽车充电负荷预测的科研平台，内置贝叶斯优化完成模型选择与超参调优，并已取得软件著作权。",
  },
  background: {
    en: "Electric-vehicle charging load exhibits strong multi-scale temporal patterns — daily commuting cycles, weekday / weekend shifts, and weather-driven demand. Manually tuning forecasting models for each substation or scenario is slow and error-prone, which motivated an integrated platform that wraps the training loop in Bayesian optimisation and exposes a usable interface for experiment comparison.",
    zh: "电动汽车充电负荷具有显著的多尺度时间模式：日通勤周期、工作日与周末的结构性差异，以及受天气驱动的需求变化。为每一个变电站或场景人工调参效率低且易出错，因此我们将训练流程封装进贝叶斯优化循环，并配套可用的前端界面用于实验对比，形成一体化平台。",
  },
  coreWork: {
    en: [
      "Implemented baseline and advanced charging-load forecasters over a unified data pipeline",
      "Integrated Bayesian optimisation for hyperparameter and model selection with warm-start support",
      "Built a platform UI covering experiment launch, tracking, and comparison across datasets",
      "Prepared documentation and submitted materials for software copyright registration",
    ],
    zh: [
      "在统一的数据流水线上实现基线与进阶的充电负荷预测模型",
      "集成贝叶斯优化用于超参数与模型选择，并支持热启动",
      "开发覆盖实验启动、追踪与跨数据集对比的平台前端",
      "完成文档编写并提交软件著作权登记材料",
    ],
  },
  methods: {
    en: [
      "Time-series forecasting (statistical, tree-based, deep neural)",
      "Bayesian optimisation for hyperparameter search",
      "Full-stack platform development with experiment tracking",
    ],
    zh: [
      "时序预测（统计、树模型与深度神经网络）",
      "面向超参搜索的贝叶斯优化",
      "全栈平台开发与实验追踪",
    ],
  },
  outcomes: {
    en: [
      "Registered software copyright",
      "Reusable in-lab research platform adopted across follow-up studies",
      "Measurable reduction in tuning effort for new forecasting tasks",
    ],
    zh: [
      "取得软件著作权",
      "成为课题组可复用的科研平台，被后续研究沿用",
      "在新的预测任务上显著降低调参工作量",
    ],
  },
  tags: ["Forecasting", "Optimization", "Web Platform", "Power Systems"],
  tech: ["Python", "PyTorch", "scikit-optimize", "JavaScript"],
  coverImage: "/project-images/last-bo/cover.png",
  gallery: [
    {
      src: "/project-images/last-bo/01-platform-overview.png",
      alt: {
        en: "LaST-BO platform dashboard showing active experiments",
        zh: "LaST-BO 平台主界面与正在进行的实验列表",
      },
    },
    {
      src: "/project-images/last-bo/02-bo-trajectory.png",
      alt: {
        en: "Bayesian optimisation trajectory over the hyperparameter landscape",
        zh: "贝叶斯优化在超参数空间中的搜索轨迹",
      },
    },
    {
      src: "/project-images/last-bo/03-forecast-vs-actual.png",
      alt: {
        en: "Representative charging-load forecast vs. actual measurements",
        zh: "一段代表性充电负荷预测与实际值对比",
      },
    },
  ],
  links: {
    // Fill in when the repository or software-copyright certificate is shareable.
  },
};

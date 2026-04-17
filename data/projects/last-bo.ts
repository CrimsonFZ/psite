import type { Project } from "@/types";

export const lastBo: Project = {
  slug: "last-bo",
  title: {
    en: "LaST-BO: Charging Load Forecasting",
    zh: "基于 LaST-BO 的充电负荷预测",
  },
  subtitle: {
    en: "Charging-station load forecasting under realistic scenarios, paired with publication acceptance and software copyright.",
    zh: "面向真实复杂场景的充电负荷预测研究，已形成论文录用与软著成果。",
  },
  period: "2025.6 – 2025.11",
  featured: true,
  summary: {
    en: "A LaST-BO charging-load forecasting study for complex real-world EV-charging scenarios. The work combined decoupled representation learning with Bayesian optimization, led to an acceptance from Zhejiang Electric Power in 2025, and produced a registered software copyright.",
    zh: "面向复杂真实情境下的电动汽车充电站负荷预测需求，构建融合解耦表示学习与贝叶斯优化的 LaST-BO 模型。论文于 2025 年被《浙江电力》录用，并取得相关软件著作权。",
  },
  background: {
    en: "To meet the demand for EV charging-station load forecasting under complex realistic scenarios, this project built a LaST-BO model that combines decoupled representation learning and Bayesian optimization.",
    zh: "面向复杂真实情境下的电动汽车充电站负荷预测需求，构建融合解耦表示学习与贝叶斯优化的 LaST-BO 模型。",
  },
  coreWork: {
    en: [
      "Developed the forecasting-results display platform, including frontend design and implementation",
      "Integrated data interaction, charging-station geographic cloud maps, and an AI assistant module",
    ],
    zh: [
      "负责预测结果展示平台开发，完成前端设计与实现",
      "集成数据交互功能、充电站地理云图与 AI 助手模块",
    ],
  },
  methods: {
    en: [
      "Participated in parameter design and experimental validation",
      "Built the modeling analysis on real charging-station data from Wuhan",
    ],
    zh: [
      "参与参数设计与实验验证",
      "基于武汉市实际充电站数据进行建模分析",
    ],
  },
  outcomes: {
    en: [
      'Paper accepted by Zhejiang Electric Power in 2025: "LaST-BO Charging Load Forecasting Model Improved by Bayesian Optimization"',
      "Co-second author",
      'Registered software copyright: "Power Load Forecasting System Based on the LaST-BO Model V1.0"',
    ],
    zh: [
      "论文《基于贝叶斯优化改进的 LaST-BO 充电负荷预测模型》于 2025 年被《浙江电力》录用",
      "共同二作",
      "获得软件著作权《基于 LaST-BO 模型的电力负荷预测系统 V1.0》",
    ],
  },
  tags: ["Forecasting", "Optimization", "Web Platform", "Power Systems"],
  tech: ["JavaScript", "Python", "Bayesian Optimization"],
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

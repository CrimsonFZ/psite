import type { Project } from "@/types";

export const dcGis: Project = {
  slug: "dc-gis",
  title: {
    en: "DC-GIS: Dynamic Electric-Field Distribution Simulation for Gas-Solid Insulation Systems",
    zh: "直流 GIS 气固绝缘系统电场动态分布仿真模型",
  },
  subtitle: {
    en: "COMSOL simulation and software development for a DC-GIS gas-solid insulation system.",
    zh: "面向直流 GIS 气固绝缘系统的 COMSOL 仿真与软件开发。",
  },
  period: "2024.9 – 2025.12",
  featured: true,
  summary: {
    en: "A DC-GIS gas-solid insulation-system simulation project focused on parameter analysis, structural optimization, COMSOL modeling, and software development.",
    zh: "面向直流 GIS 气固绝缘系统电场分析需求，开发仿真软件，实现参数分析与结构优化。",
  },
  background: {
    en: "To meet the need for electric-field analysis in DC-GIS gas-solid insulation systems, this project developed simulation software for parameter analysis and structural optimization.",
    zh: "面向直流 GIS 气固绝缘系统电场分析需求，开发仿真软件，实现参数分析与结构优化。",
  },
  coreWork: {
    en: [
      "Built physics models of basin insulators on the COMSOL platform",
      "Developed simulation software for the gas-solid insulation system",
    ],
    zh: [
      "负责基于 COMSOL 平台的盆式绝缘子物理建模及气固系统仿真软件开发",
      "开展直流 GIS 气固绝缘系统的仿真建模与软件实现",
    ],
  },
  methods: {
    en: [
      "Collaborated with TBEA Co., Ltd. on model validation and software deployment",
      "Delivered a cross-platform application workflow",
    ],
    zh: [
      "与特变电工股份有限公司合作，完成模型验证与软件部署",
      "实现跨平台应用",
    ],
  },
  outcomes: {
    en: [
      'Registered software copyright: "DC GIS Gas-Solid Insulation System Simulation Platform V1.0"',
      "Delivered COMSOL-based simulation and software development for the project",
    ],
    zh: [
      "获得软件著作权《直流 GIS 气固绝缘系统仿真平台 V1.0》",
      "完成 COMSOL 仿真与软件开发交付",
    ],
  },
  tags: ["Simulation", "Power Systems"],
  tech: ["COMSOL Multiphysics", "MATLAB", "Software Development"],
  coverImage: "/project-images/dc-gis/cover.png",
  gallery: [
    {
      src: "/project-images/dc-gis/01-field-distribution.png",
      alt: {
        en: "Simulated electric-field distribution inside a representative DC-GIS enclosure",
        zh: "代表性 DC-GIS 腔体内仿真得到的电场分布",
      },
    },
    {
      src: "/project-images/dc-gis/02-thermal-coupling.png",
      alt: {
        en: "Multiphysics thermal-coupling view of a DC-GIS configuration",
        zh: "DC-GIS 配置下的多物理场热耦合视图",
      },
    },
    {
      src: "/project-images/dc-gis/03-software-ui.png",
      alt: {
        en: "Auxiliary-software UI driving an automated COMSOL parameter sweep",
        zh: "辅助软件界面：驱动 COMSOL 自动化参数扫描",
      },
    },
  ],
  links: {
    // Industry-partner deliverable; links intentionally omitted.
  },
};

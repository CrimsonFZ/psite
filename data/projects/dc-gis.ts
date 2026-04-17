import type { Project } from "@/types";

export const dcGis: Project = {
  slug: "dc-gis",
  title: {
    en: "DC-GIS: Simulation & Engineering Software for DC Gas-Insulated Switchgear",
    zh: "直流 GIS：直流气体绝缘开关的仿真与工程软件",
  },
  subtitle: {
    en: "COMSOL-based physical modelling wrapped into a usable engineering tool.",
    zh: "基于 COMSOL 的物理建模，封装为可直接使用的工程软件。",
  },
  period: "2023 – 2024",
  featured: true,
  summary: {
    en: "A simulation and auxiliary-software project for DC gas-insulated switchgear, developed in collaboration with an industrial partner.",
    zh: "面向直流气体绝缘开关（DC-GIS）的仿真与辅助软件项目，与企业合作方共同开展。",
  },
  background: {
    en: "DC-GIS behaviour under transient and quasi-steady conditions — electric-field distribution, thermal coupling, insulation margin — is difficult to capture analytically, so engineering practice relies on repeated finite-element simulations per device configuration. Building each case from scratch in a general-purpose solver is slow and inconsistent across engineers, which motivated a scripted simulation workflow with a thin application layer on top.",
    zh: "直流 GIS 在暂态与准稳态工况下的行为 —— 电场分布、热耦合、绝缘裕度 —— 难以解析求解，工程实践需针对不同装置配置反复进行有限元仿真。逐案在通用求解器中从零搭建模型效率低且工程师之间难以保持一致，因此我们构建了脚本化的仿真工作流，并在其上叠加一层薄应用层。",
  },
  coreWork: {
    en: [
      "Built COMSOL multiphysics models for representative DC-GIS configurations",
      "Developed an auxiliary software layer to automate common simulation setups and parameter sweeps",
      "Coordinated with the industrial partner on engineering requirements, acceptance criteria, and case validation",
      "Documented usage and handed over a reproducible workflow to the engineering team",
    ],
    zh: [
      "针对代表性的直流 GIS 配置构建 COMSOL 多物理场模型",
      "开发辅助软件层，自动化常见的仿真配置与参数扫描",
      "与企业合作方对齐工程需求、验收标准与案例验证",
      "编写使用文档，向工程团队交付可复现的工作流",
    ],
  },
  methods: {
    en: [
      "Finite-element simulation with multiphysics coupling",
      "Scripted automation around a commercial solver",
      "Engineering software design for domain users",
    ],
    zh: [
      "多物理场耦合的有限元仿真",
      "针对商业求解器的脚本化自动化",
      "面向领域用户的工程软件设计",
    ],
  },
  outcomes: {
    en: [
      "Industry-facing deliverable accepted by the partner",
      "Automated simulation workflow replacing ad-hoc case setup",
      "Shared platform enabling consistent results across engineers",
    ],
    zh: [
      "面向企业方的可交付成果并获验收",
      "以自动化仿真流程替代零散的逐案配置",
      "形成工程师之间结果一致的共享平台",
    ],
  },
  tags: ["Simulation", "Power Systems"],
  tech: ["COMSOL", "MATLAB", "Python"],
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

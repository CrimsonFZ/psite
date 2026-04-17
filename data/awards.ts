import type { Award } from "@/types";

/**
 * Awards inferred from docs/07_content_mapping_from_resume.md.
 * Specific competition names and exact dates should be filled in once confirmed.
 */
export const awards: Award[] = [
  {
    period: "2024",
    category: { en: "National", zh: "国家级" },
    title: {
      en: "Grand Prize, National Undergraduate Competition",
      zh: "全国大学生学科竞赛 · 特等奖",
    },
    description: {
      en: "Highest-tier award at a national-level undergraduate competition, recognising a team project on power-system applications.",
      zh: "国家级大学生学科竞赛的最高等级奖项，表彰一项面向电力系统应用的团队成果。",
    },
  },
  {
    period: "2024",
    category: { en: "Provincial", zh: "省级" },
    title: {
      en: "Provincial Completion — Innovation & Entrepreneurship Training Program (CUC)",
      zh: "大学生创新创业训练计划 · 省级结项",
    },
    description: {
      en: "Completed a CUC-funded student research project as principal investigator, delivering a working prototype and technical report.",
      zh: "作为负责人承担并完成一项大创资助的本科生科研项目，交付可运行原型与技术报告。",
    },
  },
  {
    period: "2023 – 2024",
    category: { en: "Scholarship", zh: "奖学金" },
    title: {
      en: "University Scholarship",
      zh: "校级奖学金",
    },
    description: {
      en: "Awarded for academic performance at Wuhan University.",
      zh: "因在校期间的学业表现而获授。",
    },
  },
  {
    period: "2023",
    category: { en: "Exchange", zh: "国际交流" },
    title: {
      en: "International Academic Exchange Programme",
      zh: "国际学术交流项目",
    },
    description: {
      en: "Participated in an international academic exchange programme, with short-term study and research activities abroad.",
      zh: "参与一项国际学术交流项目，赴境外开展短期学习与科研活动。",
    },
  },
];

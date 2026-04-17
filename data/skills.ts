import type { SkillGroup } from "@/types";

export const skills: SkillGroup[] = [
  {
    category: { en: "Programming", zh: "编程语言" },
    items: ["Python", "MATLAB", "JavaScript / TypeScript"],
  },
  {
    category: { en: "ML Frameworks", zh: "机器学习框架" },
    items: ["PyTorch", "TensorFlow"],
  },
  {
    category: { en: "Scientific Tools", zh: "科研工具" },
    items: ["COMSOL", "ArcGIS", "Origin", "LaTeX"],
  },
  {
    category: { en: "Engineering", zh: "工程能力" },
    items: ["Git", "Next.js", "Docker", "Linux"],
  },
];

import type { EducationItem } from "@/types";

/**
 * NOTE: Adjust `gpa` / `score` / `description` once final numbers are confirmed.
 * Structure mirrors docs/07_content_mapping_from_resume.md.
 */
export const education: EducationItem[] = [
  {
    institution: { en: "Wuhan University", zh: "武汉大学" },
    program: {
      en: "B.Eng. in Electrical Engineering and Automation",
      zh: "电气工程及其自动化（本科）",
    },
    period: "2022 – 2026 (expected)",
    description: {
      en: "Coursework in power systems, control, signals, machine learning, and numerical methods; research training in time-series forecasting and physical-system simulation.",
      zh: "主修电力系统、控制理论、信号处理、机器学习与数值方法；在时序预测与物理系统仿真方向接受科研训练。",
    },
  },
];

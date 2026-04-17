import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Projects",
  description:
    "Projects synchronized with Fangzhou Lin's CV, covering GRAFT, LaST-BO, and DC-GIS across load forecasting, multimodal energy data modeling, and simulation software development.",
  path: "/projects",
});

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

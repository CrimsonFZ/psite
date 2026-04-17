import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Projects",
  description:
    "Selected research projects by Fangzhou Lin across power forecasting, multimodal learning, and scientific computing.",
  path: "/projects",
});

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

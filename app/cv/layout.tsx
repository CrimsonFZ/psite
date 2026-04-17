import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "CV",
  description: "Curriculum vitae of Fangzhou Lin — education, research, projects, and awards.",
  path: "/cv",
});

export default function CvLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

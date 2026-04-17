import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "CV",
  description:
    "Curriculum vitae of Fangzhou Lin, including education, research interests, projects, awards, and skills synchronized with the latest resume.",
  path: "/cv",
});

export default function CvLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

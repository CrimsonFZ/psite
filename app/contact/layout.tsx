import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Contact",
  description: "Contact information for Fangzhou Lin — email and GitHub.",
  path: "/contact",
});

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

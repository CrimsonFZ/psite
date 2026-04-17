"use client";

import { ExternalLink, FileText, Github, PlayCircle } from "lucide-react";
import { buttonVariants } from "@/components/ui/Button";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import type { ProjectLinks } from "@/types";

interface QuickLinksProps {
  links: ProjectLinks;
}

export function QuickLinks({ links }: QuickLinksProps) {
  const { t } = useLang();

  const entries: {
    key: keyof ProjectLinks;
    href?: string;
    label: string;
    icon: React.ReactNode;
  }[] = [
    {
      key: "github",
      href: links.github,
      label: "GitHub",
      icon: <Github className="h-3.5 w-3.5" />,
    },
    {
      key: "paper",
      href: links.paper,
      label: t({ en: "Paper", zh: "论文" }),
      icon: <FileText className="h-3.5 w-3.5" />,
    },
    {
      key: "pdf",
      href: links.pdf,
      label: "PDF",
      icon: <FileText className="h-3.5 w-3.5" />,
    },
    {
      key: "demo",
      href: links.demo,
      label: t({ en: "Demo", zh: "演示" }),
      icon: <PlayCircle className="h-3.5 w-3.5" />,
    },
  ];

  const present = entries.filter((e) => !!e.href);
  if (present.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {present.map((e) => (
        <a
          key={e.key}
          href={e.href}
          target="_blank"
          rel="noreferrer noopener"
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "no-underline"
          )}
        >
          {e.icon}
          {e.label}
          <ExternalLink className="h-3 w-3 opacity-60" />
        </a>
      ))}
    </div>
  );
}

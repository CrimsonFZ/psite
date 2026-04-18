"use client";

import { ExternalLink, FileText, Github, PlayCircle } from "lucide-react";
import { useLang } from "@/lib/i18n";
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
    meta: string;
    icon: React.ReactNode;
  }[] = [
    {
      key: "github",
      href: links.github,
      label: "GitHub",
      meta: t({ en: "Code repository", zh: "代码仓库" }),
      icon: <Github className="h-3.5 w-3.5" />,
    },
    {
      key: "paper",
      href: links.paper,
      label: t({ en: "Paper", zh: "论文" }),
      meta: t({ en: "Research publication", zh: "研究论文" }),
      icon: <FileText className="h-3.5 w-3.5" />,
    },
    {
      key: "pdf",
      href: links.pdf,
      label: "PDF",
      meta: t({ en: "Document resource", zh: "文档资源" }),
      icon: <FileText className="h-3.5 w-3.5" />,
    },
    {
      key: "demo",
      href: links.demo,
      label: t({ en: "Demo", zh: "演示" }),
      meta: t({ en: "Interactive artifact", zh: "交互演示" }),
      icon: <PlayCircle className="h-3.5 w-3.5" />,
    },
  ];

  const present = entries.filter((entry) => !!entry.href);
  if (present.length === 0) return null;

  return (
    <div className="space-y-3">
      <p className="academic-label">{t({ en: "Resources", zh: "相关资源" })}</p>
      <div className="grid gap-2">
        {present.map((entry) => (
          <a
            key={entry.key}
            href={entry.href}
            target="_blank"
            rel="noreferrer noopener"
            className="resource-link"
          >
            <span className="flex min-w-0 items-center gap-3">
              <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-full border border-border/70 bg-card/72 text-muted-foreground">
                {entry.icon}
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-medium text-foreground/86">
                  {entry.label}
                </span>
                <span className="block truncate text-xs text-muted-foreground">
                  {entry.meta}
                </span>
              </span>
            </span>

            <ExternalLink className="h-3.5 w-3.5 flex-none text-muted-foreground" />
          </a>
        ))}
      </div>
    </div>
  );
}

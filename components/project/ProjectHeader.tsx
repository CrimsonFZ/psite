"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { useLang } from "@/lib/i18n";
import type { Project } from "@/types";
import { QuickLinks } from "./QuickLinks";

interface ProjectHeaderProps {
  project: Project;
}

export function ProjectHeader({ project }: ProjectHeaderProps) {
  const { t } = useLang();
  const hasLinks = project.links && Object.values(project.links).some(Boolean);

  return (
    <header className="space-y-6">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground no-underline"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        {t({ en: "All projects", zh: "全部项目" })}
      </Link>

      <div className="space-y-4">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground tabular-nums">
          {project.period}
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1]">
          {t(project.title)}
        </h1>
        {project.subtitle ? (
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            {t(project.subtitle)}
          </p>
        ) : null}
      </div>

      <div className="flex flex-wrap items-center gap-1.5">
        {project.tags.map((tag) => (
          <Badge key={tag} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>

      {hasLinks && project.links ? (
        <div className="pt-2">
          <QuickLinks links={project.links} />
        </div>
      ) : null}
    </header>
  );
}

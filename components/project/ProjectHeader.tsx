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
        className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/58 px-4 py-2 text-sm text-muted-foreground no-underline transition-all duration-200 ease-academic hover:-translate-y-0.5 hover:border-foreground/14 hover:bg-card/80 hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        {t({ en: "All projects", zh: "全部项目" })}
      </Link>

      <div className="surface-panel p-6 md:p-8 lg:p-10">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(18rem,21rem)] xl:items-start">
          <div className="section-stack">
            <div className="space-y-3">
              <p className="section-kicker">
                {typeof project.period === "string" ? project.period : t(project.period)}
              </p>
              <h1 className="text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-balance md:text-5xl">
                {t(project.title)}
              </h1>
              {project.subtitle ? (
                <p className="max-w-3xl text-lg leading-8 text-muted-foreground md:text-[1.18rem]">
                  {t(project.subtitle)}
                </p>
              ) : null}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="border-border/70 bg-background/60 px-3 py-1 text-[0.72rem] text-foreground/78"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <aside className="surface-panel surface-panel-muted p-5 md:p-6">
            <div className="section-stack">
              <div className="space-y-4">
                <p className="academic-label">
                  {t({ en: "Project Snapshot", zh: "项目概览" })}
                </p>

                <dl className="space-y-4">
                  <SnapshotRow
                    label={t({ en: "Period", zh: "时间" })}
                    value={typeof project.period === "string" ? project.period : t(project.period)}
                  />
                  <SnapshotRow
                    label={t({ en: "Themes", zh: "主题" })}
                    value={project.tags.slice(0, 3).join(" / ")}
                  />
                  <SnapshotRow
                    label={t({ en: "Stack", zh: "技术" })}
                    value={project.tech.slice(0, 3).join(" / ")}
                  />
                </dl>
              </div>

              {hasLinks && project.links ? (
                <>
                  <div className="soft-divider" />
                  <QuickLinks links={project.links} />
                </>
              ) : null}
            </div>
          </aside>
        </div>
      </div>
    </header>
  );
}

function SnapshotRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-1.5">
      <dt className="academic-label">{label}</dt>
      <dd className="text-sm leading-7 text-foreground/84">{value}</dd>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useLang();
  const [coverFailed, setCoverFailed] = useState(false);

  const methods = t(project.methods);
  const outcomes = t(project.outcomes);
  const stack = project.tech.slice(0, 3).join(" / ");
  const coverLabel = project.slug.replace(/-/g, " ").toUpperCase();

  return (
    <Link href={`/projects/${project.slug}`} className="group block h-full no-underline">
      <Card className="flex h-full flex-col overflow-hidden border-border/70 bg-card/84 transition-all duration-300 ease-academic group-hover:-translate-y-1 group-hover:border-foreground/20 group-hover:shadow-[0_26px_52px_-34px_hsl(var(--shadow-color)/0.85)]">
        <div className="p-4 pb-0">
          <div className="project-media-frame aspect-[16/10]">
            {project.coverImage && !coverFailed ? (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.coverImage}
                  alt={t(project.title)}
                  className="h-full w-full object-cover transition-transform duration-500 ease-academic group-hover:scale-[1.04]"
                  loading="lazy"
                  onError={() => setCoverFailed(true)}
                />
                <div className="absolute inset-x-4 top-4 z-10 flex items-center justify-between gap-3">
                  <span className="rounded-full border border-white/20 bg-black/20 px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
                    {typeof project.period === "string" ? project.period : t(project.period)}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-white/85 transition-transform duration-300 ease-academic group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </>
            ) : (
              <div className="flex h-full flex-col justify-between p-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full border border-border/70 bg-background/72 px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    {typeof project.period === "string" ? project.period : t(project.period)}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-300 ease-academic group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                </div>
                <div className="space-y-2">
                  <p className="academic-label">{t({ en: "Research Project", zh: "研究项目" })}</p>
                  <p className="text-lg font-semibold tracking-[-0.04em] text-foreground/15">
                    {coverLabel}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <CardHeader className="pb-4">
          <div className="flex items-start justify-between gap-3">
            <p className="academic-label">{t({ en: "Project Record", zh: "项目记录" })}</p>
            {project.coverImage && !coverFailed ? (
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-300 ease-academic group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground sm:hidden" />
            ) : null}
          </div>

          <CardTitle className="mt-3 text-lg leading-snug md:text-[1.15rem]">
            {t(project.title)}
          </CardTitle>

          <CardDescription className="mt-3 line-clamp-3 leading-7">
            {t(project.summary)}
          </CardDescription>
        </CardHeader>

        <CardContent className="mt-auto space-y-5 pt-0">
          <dl className="grid gap-3 text-sm">
            <InfoRow
              label={t({ en: "Method", zh: "方法" })}
              value={methods[0]}
            />
            <InfoRow
              label={t({ en: "Outcome", zh: "成果" })}
              value={outcomes[0]}
            />
            <InfoRow
              label={t({ en: "Stack", zh: "技术" })}
              value={stack}
              clamp={false}
            />
          </dl>

          <div className="soft-divider" />

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className={cn(
                  "border-border/70 bg-background/56 px-3 py-1 text-[0.72rem] text-foreground/78",
                  "group-hover:border-foreground/14 group-hover:bg-card/72"
                )}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

function InfoRow({
  label,
  value,
  clamp = true,
}: {
  label: string;
  value?: string;
  clamp?: boolean;
}) {
  if (!value) return null;

  return (
    <div className="grid gap-1">
      <dt className="academic-label">{label}</dt>
      <dd className={cn("text-sm leading-6 text-foreground/80", clamp && "line-clamp-2")}>
        {value}
      </dd>
    </div>
  );
}

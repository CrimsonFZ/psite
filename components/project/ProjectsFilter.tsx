"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { useLang } from "@/lib/i18n";
import { ProjectCard } from "@/components/project/ProjectCard";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import type { Project, ProjectTag } from "@/types";

interface ProjectsFilterProps {
  projects: Project[];
}

export function ProjectsFilter({ projects }: ProjectsFilterProps) {
  const { t } = useLang();
  const [activeTag, setActiveTag] = useState<ProjectTag | null>(null);

  const tagCounts = useMemo(() => {
    const map = new Map<ProjectTag, number>();

    for (const project of projects) {
      for (const tag of project.tags) {
        map.set(tag, (map.get(tag) ?? 0) + 1);
      }
    }

    return [...map.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  }, [projects]);

  const visibleProjects =
    activeTag === null
      ? projects
      : projects.filter((project) => project.tags.includes(activeTag));

  const handleTagClick = (tag: ProjectTag | null) => {
    setActiveTag((currentTag) => (currentTag === tag ? null : tag));
  };

  return (
    <div className="section-stack">
      <div className="surface-panel p-5 md:p-6">
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="space-y-2">
            <p className="academic-label">{t({ en: "Tag Filter", zh: "标签筛选" })}</p>
            <p className="max-w-2xl text-sm leading-7 text-foreground/82 md:text-[0.95rem]">
              {t({
                en: "Filter projects by research topic, method, or development context. The list updates immediately while preserving the underlying project data structure.",
                zh: "可按研究主题、方法或开发场景筛选项目。筛选仅改变展示结果，不影响底层项目数据结构。",
              })}
            </p>
          </div>

          <div className="rounded-full border border-border/70 bg-background/60 px-4 py-2 text-sm text-muted-foreground">
            {t({ en: "Results", zh: "结果" })}{" "}
            <span className="font-semibold text-foreground">
              {String(visibleProjects.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          <TagChip active={activeTag === null} onClick={() => handleTagClick(null)}>
            {t({ en: "All", zh: "全部" })}
            <span className="ml-1 tabular-nums text-muted-foreground/90">
              {projects.length}
            </span>
          </TagChip>

          {tagCounts.map(([tag, count]) => (
            <TagChip
              key={tag}
              active={activeTag === tag}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
              <span className="ml-1 tabular-nums text-muted-foreground/90">{count}</span>
            </TagChip>
          ))}
        </div>
      </div>

      {visibleProjects.length === 0 ? (
        <div key={`empty-${activeTag ?? "all"}`} className="surface-panel p-6 md:p-8">
          <p className="text-sm leading-7 text-muted-foreground">
            {t({
              en: "No projects match this filter yet.",
              zh: "当前没有符合该筛选条件的项目。",
            })}
          </p>
        </div>
      ) : (
        <Stagger key={activeTag ?? "all"} className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project) => (
            <StaggerItem key={project.slug}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </Stagger>
      )}
    </div>
  );
}

function TagChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "inline-flex items-center rounded-full border px-3.5 py-2 text-xs font-medium transition-all duration-200 ease-academic",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        active
          ? "border-primary bg-primary text-primary-foreground shadow-[0_14px_28px_-22px_hsl(var(--shadow-color)/0.9)]"
          : "border-border/75 bg-background/58 text-foreground/82 hover:-translate-y-0.5 hover:border-foreground/16 hover:bg-card/82 hover:text-foreground"
      )}
    >
      {children}
    </button>
  );
}

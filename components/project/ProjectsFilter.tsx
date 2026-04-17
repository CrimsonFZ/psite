"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { useLang } from "@/lib/i18n";
import { ProjectCard } from "@/components/project/ProjectCard";
import type { Project, ProjectTag } from "@/types";

interface ProjectsFilterProps {
  projects: Project[];
}

export function ProjectsFilter({ projects }: ProjectsFilterProps) {
  const { t } = useLang();
  const [active, setActive] = useState<ProjectTag | null>(null);

  const tagCounts = useMemo(() => {
    const map = new Map<ProjectTag, number>();
    for (const p of projects) {
      for (const tag of p.tags) {
        map.set(tag, (map.get(tag) ?? 0) + 1);
      }
    }
    return [...map.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  }, [projects]);

  const filtered = active ? projects.filter((p) => p.tags.includes(active)) : projects;

  return (
    <div>
      <div className="mb-10 flex flex-wrap items-center gap-2">
        <span className="mr-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
          {t({ en: "Filter", zh: "筛选" })}
        </span>
        <TagChip
          active={active === null}
          onClick={() => setActive(null)}
        >
          {t({ en: "All", zh: "全部" })}
          <span className="ml-1 tabular-nums text-muted-foreground">
            ({projects.length})
          </span>
        </TagChip>
        {tagCounts.map(([tag, count]) => (
          <TagChip
            key={tag}
            active={active === tag}
            onClick={() => setActive(active === tag ? null : tag)}
          >
            {tag}
            <span className="ml-1 tabular-nums text-muted-foreground">
              ({count})
            </span>
          </TagChip>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          {t({
            en: "No projects match this filter yet.",
            zh: "暂无符合该筛选条件的项目。",
          })}
        </p>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
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
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-transparent text-foreground/80 hover:border-foreground/40 hover:text-foreground"
      )}
    >
      {children}
    </button>
  );
}

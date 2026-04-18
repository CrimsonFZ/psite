"use client";

import { type ReactNode } from "react";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Badge } from "@/components/ui/Badge";
import { useLang } from "@/lib/i18n";
import type { Localized, Project } from "@/types";

interface ProjectTimelineProps {
  project: Project;
}

export function ProjectTimeline({ project }: ProjectTimelineProps) {
  const { t } = useLang();

  const sections: Array<{
    index: number;
    title: string;
    body: ReactNode;
  }> = [
    {
      index: 1,
      title: t({ en: "Background", zh: "项目背景" }),
      body: (
        <p className="max-w-3xl text-base leading-8 text-foreground/84 md:text-[1.02rem]">
          {t(project.background)}
        </p>
      ),
    },
    {
      index: 2,
      title: t({ en: "Core Work", zh: "核心工作" }),
      body: <NarrativeList items={project.coreWork} t={t} />,
    },
    {
      index: 3,
      title: t({ en: "Methods", zh: "方法" }),
      body: <NarrativeList items={project.methods} t={t} />,
    },
    {
      index: 4,
      title: t({ en: "Outcomes", zh: "成果" }),
      body: <NarrativeList items={project.outcomes} t={t} />,
    },
  ];

  if (project.tech.length > 0) {
    sections.push({
      index: 5,
      title: t({ en: "Tech Stack", zh: "技术栈" }),
      body: (
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="border-border/70 bg-background/58 px-3 py-1 text-[0.72rem] text-foreground/82"
            >
              {tech}
            </Badge>
          ))}
        </div>
      ),
    });
  }

  return (
    <Stagger className="space-y-8 md:space-y-10">
      {sections.map((section) => (
        <StaggerItem key={section.index}>
          <NarrativeSection
            index={section.index}
            title={section.title}
            body={section.body}
          />
        </StaggerItem>
      ))}
    </Stagger>
  );
}

function NarrativeSection({
  index,
  title,
  body,
}: {
  index: number;
  title: string;
  body: ReactNode;
}) {
  return (
    <section className="grid gap-4 lg:grid-cols-[9rem_minmax(0,1fr)] lg:gap-8">
      <div className="lg:pt-6">
        <p className="section-kicker tabular-nums">{String(index).padStart(2, "0")}</p>
        <h2 className="mt-2 text-xl font-semibold tracking-[-0.03em] md:text-[1.7rem]">
          {title}
        </h2>
      </div>

      <div className="surface-panel p-6 md:p-8">{body}</div>
    </section>
  );
}

function NarrativeList({
  items,
  t,
}: {
  items: Localized<string[]>;
  t: <T>(value: Localized<T>) => T;
}) {
  const list = t(items);

  return (
    <ol className="space-y-3">
      {list.map((line, index) => (
        <li
          key={index}
          className="grid gap-3 rounded-[1.15rem] border border-border/65 bg-background/54 p-4 md:grid-cols-[2.5rem_minmax(0,1fr)] md:items-start"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-foreground/[0.08] text-xs font-semibold text-foreground">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-sm leading-7 text-foreground/82 md:text-[0.95rem]">
            {line}
          </span>
        </li>
      ))}
    </ol>
  );
}

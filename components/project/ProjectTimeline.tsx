"use client";

import { type ReactNode } from "react";
import { useLang } from "@/lib/i18n";
import type { Localized, Project } from "@/types";

interface ProjectTimelineProps {
  project: Project;
}

/**
 * Renders the four narrative sections of a research project
 * (Background, Core Work, Methods, Outcomes) with a consistent
 * academic layout: numeral label · section title · rule · content.
 *
 * The name "Timeline" follows docs/05_component_spec.md — these are
 * thematic sections, not chronological.
 */
export function ProjectTimeline({ project }: ProjectTimelineProps) {
  const { t } = useLang();

  return (
    <div className="space-y-14 md:space-y-16">
      <Section
        index={1}
        title={t({ en: "Background", zh: "项目背景" })}
        body={<p className="prose-academic max-w-prose leading-relaxed">{t(project.background)}</p>}
      />
      <Section
        index={2}
        title={t({ en: "Core Work", zh: "核心工作" })}
        body={<BulletList items={project.coreWork} t={t} />}
      />
      <Section
        index={3}
        title={t({ en: "Methods", zh: "方法" })}
        body={<BulletList items={project.methods} t={t} />}
      />
      <Section
        index={4}
        title={t({ en: "Outcomes", zh: "成果" })}
        body={<BulletList items={project.outcomes} t={t} />}
      />

      {project.tech && project.tech.length > 0 ? (
        <Section
          index={5}
          title={t({ en: "Tech Stack", zh: "技术栈" })}
          body={
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-md border border-border bg-muted px-2 py-0.5 text-xs font-medium text-foreground/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          }
        />
      ) : null}
    </div>
  );
}

function Section({
  index,
  title,
  body,
}: {
  index: number;
  title: ReactNode;
  body: ReactNode;
}) {
  return (
    <section className="grid gap-4 md:grid-cols-[7rem_minmax(0,1fr)] md:gap-10">
      <div className="md:pt-1">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground tabular-nums">
          {String(index).padStart(2, "0")}
        </p>
        <h2 className="mt-1.5 text-lg md:text-xl font-semibold tracking-tight">
          {title}
        </h2>
      </div>
      <div className="border-t border-border md:border-t-0 md:border-l md:pl-10 pt-4 md:pt-0">
        {body}
      </div>
    </section>
  );
}

function BulletList({
  items,
  t,
}: {
  items: Localized<string[]>;
  t: <T>(v: Localized<T>) => T;
}) {
  const list = t(items);
  return (
    <ul className="space-y-2.5 prose-academic">
      {list.map((line, i) => (
        <li key={i} className="pl-5 relative leading-relaxed">
          <span
            aria-hidden
            className="absolute left-0 top-[0.6em] h-1 w-2.5 bg-primary/70"
          />
          {line}
        </li>
      ))}
    </ul>
  );
}

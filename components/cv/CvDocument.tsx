"use client";

import { type ReactNode } from "react";
import Link from "next/link";
import { Mail, Github, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { education } from "@/data/education";
import { researchInterests } from "@/data/interests";
import { projects } from "@/data/projects";
import { awards } from "@/data/awards";
import { skills } from "@/data/skills";
import { useLang } from "@/lib/i18n";

/**
 * Web-formatted CV. Designed to read as a single document, not a stack of cards.
 * Survives `window.print()` via @media print rules in globals.css and
 * `print:*` utilities applied here.
 */
export function CvDocument() {
  const { t } = useLang();
  return (
    <div className="cv-root max-w-3xl mx-auto text-[15px] leading-relaxed">
      {/* Header */}
      <header className="space-y-2 pb-6 border-b border-border">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          {profile.name}
          <span className="ml-2 text-muted-foreground font-normal text-2xl">
            {profile.chineseName}
          </span>
        </h1>
        <p className="text-foreground/90">
          {t(profile.title)} · {t(profile.university)}
        </p>
        <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted-foreground">
          {profile.location ? (
            <li className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              {t(profile.location)}
            </li>
          ) : null}
          <li className="inline-flex items-center gap-1.5">
            <Mail className="h-3.5 w-3.5" />
            <a href={`mailto:${profile.email}`} className="no-underline hover:text-link">
              {profile.email}
            </a>
          </li>
          <li className="inline-flex items-center gap-1.5">
            <Github className="h-3.5 w-3.5" />
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              className="no-underline hover:text-link"
            >
              {profile.github.replace("https://", "")}
            </a>
          </li>
        </ul>
      </header>

      <CvSection title={t({ en: "Research Interests", zh: "研究兴趣" })}>
        <ul className="grid gap-1.5 sm:grid-cols-2">
          {researchInterests.map((item, i) => (
            <li key={i} className="flex gap-2">
              <span aria-hidden className="text-muted-foreground">•</span>
              <span>{t(item)}</span>
            </li>
          ))}
        </ul>
      </CvSection>

      <CvSection title={t({ en: "Education", zh: "教育经历" })}>
        <ul className="space-y-5">
          {education.map((item, i) => (
            <li key={i} className="space-y-1">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="font-semibold">{t(item.institution)}</h3>
                <p className="text-xs tabular-nums text-muted-foreground">
                  {item.period}
                </p>
              </div>
              <p className="text-sm text-foreground/90">{t(item.program)}</p>
              {(item.gpa || item.score) && (
                <p className="text-xs text-muted-foreground">
                  {[item.gpa && `GPA ${item.gpa}`, item.score].filter(Boolean).join(" · ")}
                </p>
              )}
              {item.description ? (
                <p className="text-sm text-muted-foreground">{t(item.description)}</p>
              ) : null}
            </li>
          ))}
        </ul>
      </CvSection>

      <CvSection title={t({ en: "Selected Projects", zh: "精选项目" })}>
        <ul className="space-y-6">
          {projects.map((p) => (
            <li key={p.slug} className="space-y-2 print:break-inside-avoid">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="font-semibold">
                  <Link
                    href={`/projects/${p.slug}`}
                    className="no-underline hover:text-link print:text-inherit"
                  >
                    {t(p.title)}
                  </Link>
                </h3>
                <p className="text-xs tabular-nums text-muted-foreground">
                  {p.period}
                </p>
              </div>
              <p className="text-sm text-foreground/90">{t(p.summary)}</p>
              {p.tech && p.tech.length > 0 ? (
                <p className="text-xs text-muted-foreground">
                  <span className="uppercase tracking-wider mr-1">
                    {t({ en: "Stack", zh: "技术栈" })}:
                  </span>
                  {p.tech.join(" · ")}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      </CvSection>

      {awards.length > 0 ? (
        <CvSection title={t({ en: "Awards & Honors", zh: "奖项与荣誉" })}>
          <ul className="space-y-3">
            {awards.map((a, i) => (
              <li
                key={i}
                className="grid gap-1 md:grid-cols-[5.5rem_minmax(0,1fr)] md:gap-5 print:break-inside-avoid"
              >
                <p className="text-xs tabular-nums text-muted-foreground md:pt-0.5">
                  {a.period}
                </p>
                <div>
                  <p className="font-medium">{t(a.title)}</p>
                  {a.category ? (
                    <p className="text-xs text-muted-foreground">{t(a.category)}</p>
                  ) : null}
                  {a.description ? (
                    <p className="mt-1 text-sm text-muted-foreground">
                      {t(a.description)}
                    </p>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </CvSection>
      ) : null}

      <CvSection title={t({ en: "Skills", zh: "技术栈" })}>
        <dl className="grid gap-2 sm:grid-cols-[10rem_minmax(0,1fr)]">
          {skills.map((group, i) => (
            <div key={i} className="contents">
              <dt className="text-xs uppercase tracking-wider text-muted-foreground sm:pt-0.5">
                {t(group.category)}
              </dt>
              <dd className="text-sm">{group.items.join(" · ")}</dd>
            </div>
          ))}
        </dl>
      </CvSection>

      <footer className="mt-10 pt-4 border-t border-border text-xs text-muted-foreground print:hidden">
        {t({
          en: "This page is printer-friendly. Use Print / Save as PDF on the right for a clean PDF export.",
          zh: "本页已针对打印进行优化，可使用右上角的 Print / Save as PDF 导出干净版本。",
        })}
      </footer>
    </div>
  );
}

function CvSection({ title, children }: { title: ReactNode; children: ReactNode }) {
  return (
    <section className="pt-8 print:pt-6 print:break-inside-auto">
      <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground border-b border-border pb-2 mb-4">
        {title}
      </h2>
      {children}
    </section>
  );
}

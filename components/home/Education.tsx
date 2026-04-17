"use client";

import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FadeIn } from "@/components/motion/FadeIn";
import { education } from "@/data/education";
import { useLang } from "@/lib/i18n";

export function Education() {
  const { t } = useLang();
  return (
    <section id="education" className="section-tight">
      <Container>
        <FadeIn>
          <SectionTitle
            eyebrow={t({ en: "Education", zh: "教育" })}
            title={t({ en: "Education", zh: "教育经历" })}
          />
          <ol className="relative space-y-8 border-l border-border pl-6">
            {education.map((item, i) => (
              <li key={i} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-primary ring-4 ring-background"
                />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-base md:text-lg font-semibold">
                    {t(item.institution)}
                  </h3>
                  <p className="text-xs tabular-nums text-muted-foreground">
                    {item.period}
                  </p>
                </div>
                <p className="mt-1 text-sm text-foreground/90">{t(item.program)}</p>
                {(item.gpa || item.score) && (
                  <p className="mt-1 text-xs text-muted-foreground">
                    {[item.gpa && `GPA ${item.gpa}`, item.score].filter(Boolean).join(" · ")}
                  </p>
                )}
                {item.description ? (
                  <p className="mt-3 text-sm text-muted-foreground max-w-prose">
                    {t(item.description)}
                  </p>
                ) : null}
              </li>
            ))}
          </ol>
        </FadeIn>
      </Container>
    </section>
  );
}

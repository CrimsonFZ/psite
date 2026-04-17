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
          <ol className="relative space-y-8 overflow-visible border-l border-border pl-10 md:pl-12">
            {education.map((item, i) => (
              <li key={i} className="relative overflow-visible">
                <span
                  aria-hidden
                  className="absolute -left-[1.9rem] top-2 h-3 w-3 rounded-full bg-primary ring-4 ring-background"
                />
                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-base font-semibold md:text-lg">
                      {t(item.institution)}
                    </h3>
                    <p className="text-xs tabular-nums text-muted-foreground">
                      {typeof item.period === "string" ? item.period : t(item.period)}
                    </p>
                  </div>
                  <p className="mt-1 text-sm text-foreground/90">{t(item.program)}</p>
                  {(item.score || item.gpa) && (
                    <p className="mt-1 text-xs text-muted-foreground">
                      {[
                        item.score
                          ? t({
                              en: `Average Score ${item.score}`,
                              zh: `均分 ${item.score}`,
                            })
                          : null,
                        item.gpa ? `GPA ${item.gpa}` : null,
                      ]
                        .filter(Boolean)
                        .join(" · ")}
                    </p>
                  )}
                  {item.description ? (
                    <p className="mt-3 max-w-prose text-sm text-muted-foreground">
                      {t(item.description)}
                    </p>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </FadeIn>
      </Container>
    </section>
  );
}

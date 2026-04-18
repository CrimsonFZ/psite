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

          <div className="surface-panel p-6 md:p-8">
            <ol className="space-y-6">
              {education.map((item, index) => (
                <li
                  key={index}
                  className="grid gap-5 border-t border-border/60 pt-6 first:border-0 first:pt-0 md:grid-cols-[10rem_minmax(0,1fr)]"
                >
                  <div className="space-y-2">
                    <p className="academic-label">
                      {t({ en: "Period", zh: "时间" })}
                    </p>
                    <p className="text-sm font-medium tabular-nums text-foreground/76">
                      {typeof item.period === "string" ? item.period : t(item.period)}
                    </p>
                  </div>

                  <div className="rounded-[1.25rem] border border-border/65 bg-background/56 p-5 md:p-6">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold tracking-[-0.02em]">
                          {t(item.institution)}
                        </h3>
                        <p className="text-sm leading-7 text-foreground/84 md:text-[0.95rem]">
                          {t(item.program)}
                        </p>
                      </div>

                      {(item.score || item.gpa) ? (
                        <div className="rounded-full border border-border/70 bg-card/72 px-3 py-1.5 text-xs text-muted-foreground">
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
                            .join(" / ")}
                        </div>
                      ) : null}
                    </div>

                    {item.description ? (
                      <>
                        <div className="my-4 soft-divider" />
                        <p className="max-w-prose text-sm leading-7 text-muted-foreground">
                          {t(item.description)}
                        </p>
                      </>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

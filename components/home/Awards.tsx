"use client";

import { Award as AwardIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/motion/FadeIn";
import { awards } from "@/data/awards";
import { useLang } from "@/lib/i18n";

export function Awards() {
  const { t } = useLang();

  if (awards.length === 0) return null;

  return (
    <section id="awards" className="section-tight">
      <Container>
        <FadeIn>
          <SectionTitle
            eyebrow={t({ en: "Recognition", zh: "荣誉" })}
            title={t({ en: "Awards & Honors", zh: "奖项与荣誉" })}
          />

          <div className="surface-panel p-6 md:p-8">
            <ul className="divide-y divide-border/60">
              {awards.map((award, index) => (
                <li
                  key={index}
                  className="grid gap-4 py-5 first:pt-0 last:pb-0 md:grid-cols-[9rem_minmax(0,10rem)_1fr] md:gap-6"
                >
                  <div className="space-y-2">
                    <p className="academic-label">
                      {t({ en: "Period", zh: "时间" })}
                    </p>
                    <p className="text-sm font-medium tabular-nums text-foreground/76">
                      {award.period}
                    </p>
                  </div>

                  <div className="md:pt-0.5">
                    {award.category ? (
                      <Badge variant="accent" className="gap-1.5 px-3 py-1">
                        <AwardIcon className="h-3 w-3" />
                        {t(award.category)}
                      </Badge>
                    ) : null}
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-semibold leading-7 text-foreground/88 md:text-[0.95rem]">
                      {t(award.title)}
                    </p>
                    {award.description ? (
                      <p className="max-w-prose text-sm leading-7 text-muted-foreground">
                        {t(award.description)}
                      </p>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

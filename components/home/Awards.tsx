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
          <ul className="divide-y divide-border/70 border-y border-border/70">
            {awards.map((a, i) => (
              <li key={i} className="grid gap-2 py-4 md:grid-cols-[8rem_auto_1fr] md:items-baseline md:gap-6">
                <p className="text-xs tabular-nums text-muted-foreground md:pt-0.5">
                  {a.period}
                </p>
                <div className="md:min-w-[8rem]">
                  {a.category ? (
                    <Badge variant="accent" className="gap-1">
                      <AwardIcon className="h-3 w-3" />
                      {t(a.category)}
                    </Badge>
                  ) : null}
                </div>
                <div>
                  <p className="font-medium">{t(a.title)}</p>
                  {a.description ? (
                    <p className="mt-1 text-sm text-muted-foreground max-w-prose">
                      {t(a.description)}
                    </p>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </FadeIn>
      </Container>
    </section>
  );
}

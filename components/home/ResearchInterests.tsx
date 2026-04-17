"use client";

import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FadeIn } from "@/components/motion/FadeIn";
import { researchInterests } from "@/data/interests";
import { useLang } from "@/lib/i18n";

export function ResearchInterests() {
  const { t } = useLang();
  return (
    <section id="research-interests" className="section-tight">
      <Container>
        <FadeIn>
          <SectionTitle
            eyebrow={t({ en: "Research", zh: "研究" })}
            title={t({ en: "Research Interests", zh: "研究兴趣" })}
            description={t({
              en: "Directions I am actively working on or reading into.",
              zh: "当前我正在研究或持续关注的方向。",
            })}
          />
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {researchInterests.map((item, i) => (
              <li
                key={i}
                className="rounded-lg border border-border bg-card/40 px-4 py-3 text-sm transition-colors hover:border-foreground/30 hover:bg-card"
              >
                <span className="mr-2 text-muted-foreground tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {t(item)}
              </li>
            ))}
          </ul>
        </FadeIn>
      </Container>
    </section>
  );
}

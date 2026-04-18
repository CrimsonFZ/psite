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

          <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {researchInterests.map((item, index) => (
              <li
                key={index}
                className="surface-panel p-5 transition-all duration-300 ease-academic hover:-translate-y-0.5 hover:border-foreground/20"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="academic-label">
                    {t({ en: "Focus", zh: "方向" })} {String(index + 1).padStart(2, "0")}
                  </p>
                  <span
                    className="text-2xl font-semibold tracking-[-0.04em] text-foreground/10"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-5 text-sm leading-7 text-foreground/84 md:text-[0.95rem]">
                  {t(item)}
                </p>
              </li>
            ))}
          </ul>
        </FadeIn>
      </Container>
    </section>
  );
}

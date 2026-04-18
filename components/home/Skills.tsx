"use client";

import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/motion/FadeIn";
import { skills } from "@/data/skills";
import { useLang } from "@/lib/i18n";

export function Skills() {
  const { t } = useLang();

  return (
    <section id="skills" className="section-tight">
      <Container>
        <FadeIn>
          <SectionTitle
            eyebrow={t({ en: "Toolkit", zh: "工具箱" })}
            title={t({ en: "Skills", zh: "技术栈" })}
          />

          <div className="grid gap-4 lg:grid-cols-3">
            {skills.map((group, index) => (
              <div key={index} className="surface-panel p-5 md:p-6">
                <div className="section-stack">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-sm font-semibold tracking-[-0.02em] text-foreground/88">
                      {t(group.category)}
                    </h3>
                    <span className="academic-label">
                      {String(group.items.length).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="soft-divider" />

                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Badge key={item} variant="default" className="px-3 py-1">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

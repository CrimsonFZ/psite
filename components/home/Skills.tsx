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
          <div className="grid gap-6 md:grid-cols-2">
            {skills.map((group, i) => (
              <div key={i} className="space-y-3">
                <h3 className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  {t(group.category)}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <Badge key={item} variant="default">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

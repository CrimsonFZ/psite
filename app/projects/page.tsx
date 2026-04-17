"use client";

import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FadeIn } from "@/components/motion/FadeIn";
import { ProjectsFilter } from "@/components/project/ProjectsFilter";
import { projects } from "@/data/projects";
import { useLang } from "@/lib/i18n";

export default function ProjectsPage() {
  const { t } = useLang();
  return (
    <section className="section">
      <Container>
        <FadeIn onMount>
          <SectionTitle
            as="h1"
            eyebrow={t({ en: "Research Portfolio", zh: "科研作品集" })}
            title={t({ en: "Projects", zh: "项目" })}
            description={t({
              en: "Selected research projects across power forecasting, multimodal learning, and scientific computing. Use the filters to narrow by research direction.",
              zh: "涵盖电力预测、多模态建模与科学计算的精选科研项目。可通过标签按研究方向筛选。",
            })}
          />
          <ProjectsFilter projects={projects} />
        </FadeIn>
      </Container>
    </section>
  );
}

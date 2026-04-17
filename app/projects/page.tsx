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
              en: "Projects synchronized with my CV, covering GRAFT, LaST-BO, and DC-GIS across load forecasting, multimodal energy data modeling, and simulation software development.",
              zh: "与简历同步的项目列表，涵盖 GRAFT、LaST-BO 与 DC-GIS，聚焦负荷预测、多模态能源数据建模与仿真软件开发。",
            })}
          />
          <ProjectsFilter projects={projects} />
        </FadeIn>
      </Container>
    </section>
  );
}

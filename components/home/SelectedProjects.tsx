"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FadeIn } from "@/components/motion/FadeIn";
import { ProjectCard } from "@/components/project/ProjectCard";
import { featuredProjects } from "@/data/projects";
import { useLang } from "@/lib/i18n";

export function SelectedProjects() {
  const { t } = useLang();
  return (
    <section id="projects" className="section-tight">
      <Container>
        <FadeIn>
          <SectionTitle
            eyebrow={t({ en: "Portfolio", zh: "作品集" })}
            title={t({ en: "Selected Projects", zh: "精选项目" })}
            description={t({
              en: "Three CV-aligned projects covering power-load forecasting, charging-load prediction, and DC-GIS simulation software.",
              zh: "三项与简历同步的代表性项目，涵盖电力负荷预测、充电负荷预测与 DC-GIS 仿真软件。",
            })}
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-sm text-link hover:opacity-80 no-underline"
            >
              {t({ en: "View all projects", zh: "查看全部项目" })}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

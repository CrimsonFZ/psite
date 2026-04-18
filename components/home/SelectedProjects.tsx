"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { buttonVariants } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { ProjectCard } from "@/components/project/ProjectCard";
import { featuredProjects } from "@/data/projects";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

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
              zh: "三项与简历内容对应的代表性项目，涵盖电力负荷预测、充电负荷预测与 DC-GIS 仿真软件。",
            })}
          />

          <div className="section-stack">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>

            <div className="flex justify-start md:justify-end">
              <Link
                href="/projects"
                className={cn(buttonVariants({ variant: "outline" }), "group no-underline")}
              >
                {t({ en: "View all projects", zh: "查看全部项目" })}
                <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-academic group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

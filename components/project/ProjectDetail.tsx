"use client";

import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { ProjectHeader } from "@/components/project/ProjectHeader";
import { ProjectTimeline } from "@/components/project/ProjectTimeline";
import { ImageGallery } from "@/components/project/ImageGallery";
import { getProjectBySlug } from "@/data/projects";
import { useLang } from "@/lib/i18n";

interface ProjectDetailProps {
  slug: string;
}

export function ProjectDetail({ slug }: ProjectDetailProps) {
  const project = getProjectBySlug(slug);
  const { t } = useLang();

  if (!project) return null;

  return (
    <article className="section">
      <Container>
        <FadeIn onMount>
          <ProjectHeader project={project} />
        </FadeIn>

        <div className="mt-10 md:mt-14">
          <FadeIn>
            <div className="research-lead">
              <div className="pl-5 md:pl-7">
                <p className="academic-label">
                  {t({ en: "Project Summary", zh: "项目摘要" })}
                </p>
                <p className="mt-3 max-w-4xl text-lg leading-8 text-foreground/88 md:text-[1.14rem] md:leading-9">
                  {t(project.summary)}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="mt-12 md:mt-16">
          <ProjectTimeline project={project} />
        </div>

        {project.gallery && project.gallery.length > 0 ? (
          <div className="mt-14 md:mt-20">
            <FadeIn>
              <ImageGallery
                items={project.gallery}
                index={project.tech.length > 0 ? 6 : 5}
              />
            </FadeIn>
          </div>
        ) : null}
      </Container>
    </article>
  );
}

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

        <div className="mt-12 md:mt-16">
          <FadeIn>
            <p className="prose-academic text-base md:text-lg leading-relaxed max-w-prose border-l-2 border-primary/50 pl-5 text-foreground/90">
              {t(project.summary)}
            </p>
          </FadeIn>
        </div>

        <div className="mt-14 md:mt-20">
          <FadeIn>
            <ProjectTimeline project={project} />
          </FadeIn>
        </div>

        {project.gallery && project.gallery.length > 0 ? (
          <div className="mt-16 md:mt-20">
            <FadeIn>
              <ImageGallery
                items={project.gallery}
                index={project.tech && project.tech.length > 0 ? 6 : 5}
              />
            </FadeIn>
          </div>
        ) : null}
      </Container>
    </article>
  );
}

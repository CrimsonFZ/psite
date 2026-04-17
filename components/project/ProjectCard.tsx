"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { useLang } from "@/lib/i18n";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useLang();
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="no-underline group block h-full"
    >
      <Card className="h-full flex flex-col group-hover:border-foreground/40 group-hover:-translate-y-0.5 group-hover:shadow-md">
        <CardHeader>
          <div className="flex items-start justify-between gap-3">
            <p className="text-xs text-muted-foreground">
              {typeof project.period === "string" ? project.period : t(project.period)}
            </p>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
          <CardTitle className="mt-2 text-base md:text-lg leading-snug">
            {t(project.title)}
          </CardTitle>
          <CardDescription className="mt-2 line-clamp-3">
            {t(project.summary)}
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-auto">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

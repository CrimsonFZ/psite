import type { Project } from "@/types";
import { graft } from "./graft";
import { lastBo } from "./last-bo";
import { dcGis } from "./dc-gis";

export const projects: Project[] = [graft, lastBo, dcGis];

export const featuredProjects: Project[] = projects.filter((p) => p.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export { graft, lastBo, dcGis };

import { profile } from "@/data/profile";
import { siteConfig } from "@/lib/constants";
import { getProjectBySlug } from "@/data/projects";

/**
 * Server-safe components that emit schema.org structured data via
 * <script type="application/ld+json">. English is used as the primary
 * indexing language (language toggle is runtime-only, no separate URL).
 */

function jsonLd(data: Record<string, unknown>) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function PersonJsonLd() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    alternateName: profile.chineseName,
    jobTitle: profile.title.en,
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: profile.university.en,
    },
    url: siteConfig.url,
    email: `mailto:${profile.email}`,
    description: profile.bio.en,
    knowsAbout: profile.interests.en,
    sameAs: [profile.github],
  });
}

export function WebSiteJsonLd() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description.en,
    author: {
      "@type": "Person",
      name: profile.name,
    },
    inLanguage: ["en", "zh-Hans"],
  });
}

export function ProjectJsonLd({ slug }: { slug: string }) {
  const project = getProjectBySlug(slug);
  if (!project) return null;

  return jsonLd({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title.en,
    headline: project.title.en,
    alternativeHeadline: project.title.zh,
    abstract: project.summary.en,
    description: project.background.en,
    keywords: [...project.tags, ...project.tech].join(", "),
    datePublished: project.period,
    author: {
      "@type": "Person",
      name: profile.name,
      url: siteConfig.url,
    },
    url: `${siteConfig.url}/projects/${project.slug}`,
  });
}

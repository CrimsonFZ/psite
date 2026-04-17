import { ProjectDetail } from "@/components/project/ProjectDetail";
import { ProjectJsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { lastBo } from "@/data/projects/last-bo";

export const metadata = buildMetadata({
  title: "LaST-BO",
  description: lastBo.summary.en,
  path: `/projects/${lastBo.slug}`,
});

export default function LastBoPage() {
  return (
    <>
      <ProjectJsonLd slug={lastBo.slug} />
      <ProjectDetail slug={lastBo.slug} />
    </>
  );
}

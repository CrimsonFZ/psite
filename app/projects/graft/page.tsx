import { ProjectDetail } from "@/components/project/ProjectDetail";
import { ProjectJsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { graft } from "@/data/projects/graft";

export const metadata = buildMetadata({
  title: "GRAFT",
  description: graft.summary.en,
  path: `/projects/${graft.slug}`,
});

export default function GraftPage() {
  return (
    <>
      <ProjectJsonLd slug={graft.slug} />
      <ProjectDetail slug={graft.slug} />
    </>
  );
}

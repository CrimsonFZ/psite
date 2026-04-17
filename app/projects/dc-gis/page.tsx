import { ProjectDetail } from "@/components/project/ProjectDetail";
import { ProjectJsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { dcGis } from "@/data/projects/dc-gis";

export const metadata = buildMetadata({
  title: "DC-GIS",
  description: dcGis.summary.en,
  path: `/projects/${dcGis.slug}`,
});

export default function DcGisPage() {
  return (
    <>
      <ProjectJsonLd slug={dcGis.slug} />
      <ProjectDetail slug={dcGis.slug} />
    </>
  );
}

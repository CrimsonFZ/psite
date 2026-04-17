import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";

interface BuildMetadataInput {
  title?: string;
  description?: string;
  path?: string;
  /** Explicit image URL (optional). If omitted, Next's file-system convention
   *  (`app/opengraph-image.tsx` and nested overrides) supplies og:image automatically. */
  image?: string;
}

export function buildMetadata({
  title,
  description,
  path = "/",
  image,
}: BuildMetadataInput = {}): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} | Academic Personal Website`;
  const desc = description ?? siteConfig.description.en;
  const url = new URL(path, siteConfig.url).toString();

  const openGraphImages = image ? [{ url: image }] : undefined;
  const twitterImages = image ? [image] : undefined;

  return {
    metadataBase: new URL(siteConfig.url),
    title: fullTitle,
    description: desc,
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.author,
    openGraph: {
      type: "website",
      url,
      title: fullTitle,
      description: desc,
      siteName: siteConfig.name,
      locale: "en_US",
      ...(openGraphImages ? { images: openGraphImages } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      ...(twitterImages ? { images: twitterImages } : {}),
    },
    alternates: { canonical: url },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

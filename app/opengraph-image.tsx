import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

// Next.js App Router convention: generates /opengraph-image at 1200×630 PNG.
// Used automatically as og:image and twitter:image for every route that
// doesn't override it with its own opengraph-image file.

export const alt = `${profile.name} — Academic Personal Website`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0F172A",
          color: "#F8FAFC",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 20,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#94A3B8",
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              background: "#F8FAFC",
              color: "#0F172A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: -1,
            }}
          >
            FL
          </div>
          Academic Personal Website
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 24,
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                fontSize: 104,
                fontWeight: 700,
                letterSpacing: -3,
                lineHeight: 1,
              }}
            >
              {profile.name}
            </div>
            <div
              style={{
                fontSize: 48,
                fontWeight: 500,
                color: "#94A3B8",
                letterSpacing: 1,
              }}
            >
              {profile.chineseName}
            </div>
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#CBD5E1",
              lineHeight: 1.4,
              maxWidth: 960,
            }}
          >
            {`${profile.title.en} · ${profile.university.en}`}
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#94A3B8",
              lineHeight: 1.5,
              maxWidth: 960,
            }}
          >
            {profile.tagline.en}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 18,
            color: "#64748B",
          }}
        >
          <span>{profile.email}</span>
          <span>{profile.github.replace("https://", "")}</span>
        </div>
      </div>
    ),
    { ...size }
  );
}

"use client";

import { Github, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/constants";
import { useLang } from "@/lib/i18n";

export function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();
  const tagline = t({
    en: "Built with Next.js, Tailwind, and Framer Motion.",
    zh: "使用 Next.js、Tailwind 与 Framer Motion 构建。",
  });
  return (
    <footer className="mt-24 border-t border-border/70 py-10 text-sm text-muted-foreground print:hidden">
      <Container className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p>
          © {year} {siteConfig.name}. {tagline}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 no-underline hover:text-foreground transition-colors"
          >
            <Github className="h-3.5 w-3.5" />
            GitHub
          </a>
          <a
            href={`mailto:${siteConfig.links.email}`}
            className="inline-flex items-center gap-1.5 no-underline hover:text-foreground transition-colors"
          >
            <Mail className="h-3.5 w-3.5" />
            Email
          </a>
        </div>
      </Container>
    </footer>
  );
}

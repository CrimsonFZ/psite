"use client";

import Link from "next/link";
import { ArrowRight, FileText, Github, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { buttonVariants } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { profile } from "@/data/profile";
import { siteConfig } from "@/lib/constants";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Hero() {
  const { t, lang } = useLang();
  return (
    <section className="relative border-b border-border/70 section">
      <Container>
        <FadeIn onMount className="max-w-3xl space-y-6">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            {t({ en: "Academic Personal Website", zh: "学术个人主页" })}
          </p>
          <h1 className="text-display font-semibold">
            {profile.name}
            <span
              className={
                lang === "zh"
                  ? "ml-3 align-middle text-muted-foreground font-normal text-3xl md:text-4xl"
                  : "sr-only"
              }
            >
              {profile.chineseName}
            </span>
          </h1>
          <p className="text-lg text-muted-foreground">
            {t(profile.title)} · {t(profile.university)}
          </p>
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed max-w-prose">
            {t(profile.tagline)}
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/projects"
              className={cn(buttonVariants({ variant: "primary" }), "no-underline")}
            >
              {t({ en: "View Projects", zh: "查看项目" })}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/cv"
              className={cn(buttonVariants({ variant: "outline" }), "no-underline")}
            >
              <FileText className="h-4 w-4" />
              {t({ en: "CV", zh: "简历" })}
            </Link>
            <Link
              href="/contact"
              className={cn(buttonVariants({ variant: "ghost" }), "no-underline")}
            >
              <Mail className="h-4 w-4" />
              {t({ en: "Contact", zh: "联系" })}
            </Link>
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer noopener"
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "no-underline text-muted-foreground hover:text-foreground"
              )}
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

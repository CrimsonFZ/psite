"use client";

import Link from "next/link";
import {
  ArrowRight,
  FileText,
  Github,
  GraduationCap,
  Mail,
  MapPin,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { buttonVariants } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { profile } from "@/data/profile";
import { siteConfig } from "@/lib/constants";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Hero() {
  const { t, lang } = useLang();
  const interests = t(profile.interests).slice(0, 3);

  return (
    <section className="section relative overflow-hidden border-b border-border/60">
      <div className="hero-grid absolute inset-0" aria-hidden="true">
        <div className="absolute inset-x-0 top-0 h-[30rem] bg-[radial-gradient(circle_at_top_left,_hsl(var(--hero-glow)/0.58),_transparent_56%)]" />
        <div className="absolute right-0 top-16 h-64 w-64 rounded-full bg-[radial-gradient(circle,_hsl(var(--hero-accent)/0.24),_transparent_72%)] blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] lg:items-center">
          <FadeIn onMount className="max-w-3xl space-y-8 lg:flex lg:min-h-[520px] lg:flex-col lg:justify-center">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-3 rounded-full border border-border/70 bg-background/72 px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-muted-foreground backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-foreground/70" />
                {t({ en: "Academic Personal Website", zh: "学术个人主页" })}
              </div>

              <div className="space-y-4">
                <p className="text-sm font-medium tracking-[0.16em] text-muted-foreground">
                  {t(profile.title)}
                </p>
                <h1 className="text-display font-semibold tracking-[-0.04em] text-balance">
                  {profile.name}
                </h1>
                {lang === "zh" ? (
                  <p className="text-xl font-medium tracking-[0.08em] text-muted-foreground md:text-2xl">
                    {profile.chineseName}
                  </p>
                ) : null}
                <p className="max-w-2xl text-lg leading-8 text-foreground/84 md:text-[1.2rem] md:leading-9">
                  {t(profile.tagline)}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/projects"
                className={cn(
                  buttonVariants({ variant: "primary", size: "lg" }),
                  "group no-underline"
                )}
              >
                {t({ en: "View Projects", zh: "查看项目" })}
                <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-academic group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="/cv"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "no-underline")}
              >
                <FileText className="h-4 w-4" />
                {t({ en: "Curriculum Vitae", zh: "学术简历" })}
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
                className={cn(buttonVariants({ variant: "outline" }), "no-underline")}
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              {profile.location ? (
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{t(profile.location)}</span>
                </div>
              ) : null}
              <div className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                <span>{t(profile.university)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  {t({ en: "Personal", zh: "个人" })}
                </span>
                <a href={`mailto:${profile.email}`} className="no-underline hover:text-link">
                  {profile.email}
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn onMount delay={0.12} className="lg:justify-self-end lg:self-center">
            <div className="hero-panel relative overflow-hidden rounded-[1.75rem] p-6 md:p-7">
              <div
                className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent"
                aria-hidden="true"
              />

              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="section-kicker">
                    {t({ en: "Research Focus", zh: "研究聚焦" })}
                  </p>
                  <p className="text-base leading-7 text-foreground/86">
                    {t({
                      en: "Current work spans energy forecasting, multimodal modeling, and practical AI-driven software development.",
                      zh: "当前工作聚焦于能源预测、多模态建模，以及面向科研场景的 AI 软件开发。",
                    })}
                  </p>
                </div>

                <ul className="space-y-3">
                  {interests.map((interest, index) => (
                    <li
                      key={interest}
                      className="flex items-start gap-3 rounded-2xl border border-border/70 bg-background/62 px-4 py-3"
                    >
                      <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-foreground/[0.08] text-[0.72rem] font-semibold text-foreground">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm leading-6 text-foreground/82">{interest}</span>
                    </li>
                  ))}
                </ul>

                <div className="soft-divider" />

                <div className="grid gap-3 text-sm sm:grid-cols-2">
                  <div className="rounded-2xl border border-border/70 bg-background/54 p-4">
                    <p className="mb-2 section-kicker">{t({ en: "Affiliation", zh: "机构" })}</p>
                    <p className="leading-6 text-foreground/84">{t(profile.university)}</p>
                  </div>
                  <div className="rounded-2xl border border-border/70 bg-background/54 p-4">
                    <p className="mb-2 section-kicker">
                      {t({ en: "Research Keywords", zh: "研究关键词" })}
                    </p>
                    <p className="leading-6 text-foreground/84">
                      {t({
                        en: "Forecasting, energy data, AI methods",
                        zh: "预测、能源数据、人工智能方法",
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

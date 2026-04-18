"use client";

import { Github, Mail, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FadeIn } from "@/components/motion/FadeIn";
import { profile } from "@/data/profile";
import { useLang } from "@/lib/i18n";

export function About() {
  const { t } = useLang();

  return (
    <section id="about" className="section-tight">
      <Container>
        <FadeIn>
          <SectionTitle
            eyebrow={t({ en: "About", zh: "关于" })}
            title={t({ en: "About Me", zh: "关于我" })}
          />

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)]">
            <div className="surface-panel surface-panel-muted p-6 md:p-8">
              <div className="section-stack">
                <p className="academic-label">
                  {t({ en: "Profile", zh: "个人概述" })}
                </p>
                <p className="prose-academic max-w-prose text-base md:text-lg md:leading-8">
                  {t(profile.bio)}
                </p>
              </div>
            </div>

            <div className="surface-panel p-6 md:p-7">
              <div className="section-stack">
                <p className="academic-label">
                  {t({ en: "Academic Identity", zh: "学术信息" })}
                </p>

                <dl className="space-y-5">
                  {profile.location ? (
                    <div className="border-b border-border/60 pb-5 last:border-0 last:pb-0">
                      <dt className="flex items-center gap-2 academic-label">
                        <MapPin className="h-3.5 w-3.5" />
                        {t({ en: "Location", zh: "位置" })}
                      </dt>
                      <dd className="mt-2 pl-[1.35rem] text-sm leading-7 text-foreground/84 md:text-[0.95rem]">
                        {t(profile.location)}
                      </dd>
                    </div>
                  ) : null}

                  <div className="border-b border-border/60 pb-5 last:border-0 last:pb-0">
                    <dt className="flex items-center gap-2 academic-label">
                      <Mail className="h-3.5 w-3.5" />
                      Email
                    </dt>
                    <dd className="mt-2 pl-[1.35rem] text-sm leading-7 text-foreground/84 md:text-[0.95rem]">
                      <a
                        href={`mailto:${profile.email}`}
                        className="no-underline hover:text-link"
                      >
                        {profile.email}
                      </a>
                    </dd>
                  </div>

                  <div>
                    <dt className="flex items-center gap-2 academic-label">
                      <Github className="h-3.5 w-3.5" />
                      GitHub
                    </dt>
                    <dd className="mt-2 pl-[1.35rem] text-sm leading-7 text-foreground/84 md:text-[0.95rem]">
                      <a
                        href={profile.github}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="no-underline hover:text-link"
                      >
                        {profile.github.replace("https://github.com/", "@")}
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

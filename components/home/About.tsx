"use client";

import { MapPin, Mail, Github } from "lucide-react";
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
          <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_auto]">
            <p className="prose-academic max-w-prose text-base md:text-lg">
              {t(profile.bio)}
            </p>
            <dl className="space-y-2 text-sm md:min-w-[14rem]">
              {profile.location ? (
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
                  <div>
                    <dt className="sr-only">
                      {t({ en: "Location", zh: "位置" })}
                    </dt>
                    <dd>{t(profile.location)}</dd>
                  </div>
                </div>
              ) : null}
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <div>
                  <dt className="sr-only">Email</dt>
                  <dd>
                    <a href={`mailto:${profile.email}`} className="no-underline hover:text-link">
                      {profile.email}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Github className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <div>
                  <dt className="sr-only">GitHub</dt>
                  <dd>
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
              </div>
            </dl>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

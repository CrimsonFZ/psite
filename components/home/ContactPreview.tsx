"use client";

import Link from "next/link";
import { ArrowRight, Github, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { buttonVariants } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { contact } from "@/data/contact";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function ContactPreview() {
  const { t } = useLang();

  return (
    <section id="contact" className="section-tight">
      <Container>
        <FadeIn>
          <SectionTitle
            eyebrow={t({ en: "Get in touch", zh: "取得联系" })}
            title={t({ en: "Contact", zh: "联系方式" })}
            description={contact.note ? t(contact.note) : undefined}
          />

          <div className="surface-panel p-6 md:p-8">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
              <div className="space-y-3">
                <p className="academic-label">
                  {t({ en: "Contact Channels", zh: "联系渠道" })}
                </p>
                <p className="max-w-2xl text-sm leading-7 text-foreground/82 md:text-[0.95rem]">
                  {t({
                    en: "For research discussion, collaboration, or academic exchange, email remains the most direct channel.",
                    zh: "如需科研交流、合作沟通或学术讨论，电子邮件仍是最直接的联系方式。",
                  })}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${contact.email}`}
                  className={cn(buttonVariants({ variant: "primary" }), "no-underline")}
                >
                  <Mail className="h-4 w-4" />
                  {contact.email}
                </a>
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={cn(buttonVariants({ variant: "outline" }), "no-underline")}
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <Link
                  href="/contact"
                  className={cn(buttonVariants({ variant: "ghost" }), "group no-underline")}
                >
                  {t({ en: "More ways to reach me", zh: "更多联系方式" })}
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-academic group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

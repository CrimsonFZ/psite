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
              className="inline-flex items-center gap-1.5 px-2 text-sm text-muted-foreground hover:text-foreground no-underline"
            >
              {t({ en: "More ways to reach me", zh: "更多联系方式" })}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

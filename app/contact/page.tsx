"use client";

import { Building2, Clock, Github, Mail, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card, CardContent } from "@/components/ui/Card";
import { CopyButton } from "@/components/ui/CopyButton";
import { FadeIn } from "@/components/motion/FadeIn";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { contact } from "@/data/contact";
import { profile } from "@/data/profile";
import { useLang } from "@/lib/i18n";

export default function ContactPage() {
  const { t } = useLang();

  const mailSubject = t({
    en: "[Website] Getting in touch with Fangzhou",
    zh: "[来自主页] 与方舟联系",
  });

  const emailContacts = [
    {
      key: "personal",
      label: t({ en: "Personal Email", zh: "个人邮箱" }),
      description: t({
        en: "Preferred for general inquiries and the fastest reply.",
        zh: "建议优先用于日常联系，通常回复更快。",
      }),
      value: contact.email,
      highlighted: true,
    },
    {
      key: "academic",
      label: t({ en: "Academic Email", zh: "学术邮箱" }),
      description: t({
        en: "Available for university-related or academic contact.",
        zh: "保留用于校内事务或学术相关联系。",
      }),
      value: contact.academicEmail,
      highlighted: false,
    },
  ];

  return (
    <section className="section relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-[54%] right-0 z-0 hidden md:block"
      >
        <div className="absolute inset-y-10 right-[6%] w-[min(28rem,92%)] rounded-[2.5rem] bg-[radial-gradient(circle_at_top_right,_hsl(var(--hero-glow)/0.24),_transparent_44%),linear-gradient(180deg,_hsl(var(--background)/0.02),_hsl(var(--hero-accent)/0.08)_45%,_transparent)] opacity-90 dark:bg-[radial-gradient(circle_at_top_right,_hsl(var(--hero-accent)/0.14),_transparent_42%),linear-gradient(180deg,_hsl(var(--background)/0.02),_hsl(var(--hero-glow)/0.06)_46%,_transparent)]" />
      </div>

      <Container className="relative z-10">
        <FadeIn onMount>
          <SectionTitle
            as="h1"
            eyebrow={t({ en: "Get in touch", zh: "取得联系" })}
            title={t({ en: "Contact", zh: "联系方式" })}
            description={contact.note ? t(contact.note) : undefined}
          />
        </FadeIn>

        <div className="grid max-w-4xl gap-6 lg:grid-cols-2">
          <FadeIn className="h-full lg:col-span-2">
            <Card className="h-full hover:shadow-[0_18px_42px_-34px_hsl(var(--shadow-color)/0.85)]">
              <CardContent className="p-0">
                <div className="grid gap-6">
                  <div className="flex items-start gap-3 px-6 pt-6 leading-relaxed md:px-7 md:pt-7">
                    <Mail className="mt-0.5 h-5 w-5 text-muted-foreground" />
                    <div className="flex-1 space-y-2">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">
                        {t({ en: "Email Channels", zh: "邮箱联系方式" })}
                      </p>
                      <p className="text-sm leading-relaxed text-foreground/82">
                        {t({
                          en: "Two email channels are available. Personal email is the primary contact, while the academic address remains available for university and research communication.",
                          zh: "当前保留两个邮箱渠道。个人邮箱作为主要联系入口，学术邮箱继续用于校内与科研沟通。",
                        })}
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-6 px-6 pb-6 md:px-7 md:pb-7 lg:grid-cols-2 lg:px-6">
                    {emailContacts.map((emailItem) => (
                      <div
                        key={emailItem.key}
                        className={cn(
                          "h-full w-full rounded-2xl border border-border/70 bg-background/58 p-4 md:p-5",
                          emailItem.highlighted &&
                            "border-foreground/12 bg-foreground/[0.03]"
                        )}
                      >
                        <div className="space-y-2">
                          <div className="flex items-center justify-between gap-3">
                            <p className="text-xs uppercase tracking-wider text-muted-foreground">
                              {emailItem.label}
                            </p>
                            {emailItem.highlighted ? (
                              <span className="rounded-full border border-border/70 px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                                {t({ en: "Primary", zh: "主要" })}
                              </span>
                            ) : null}
                          </div>
                          <a
                            href={`mailto:${emailItem.value}?subject=${encodeURIComponent(mailSubject)}`}
                            className="break-all font-medium no-underline hover:text-link"
                          >
                            {emailItem.value}
                          </a>
                          <p className="text-sm leading-relaxed text-muted-foreground">
                            {emailItem.description}
                          </p>
                        </div>
                        <div className="pt-3">
                          <CopyButton
                            value={emailItem.value}
                            ariaLabel={`Copy email ${emailItem.value}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.05} className="h-full">
            <Card className="h-full hover:shadow-[0_18px_42px_-34px_hsl(var(--shadow-color)/0.85)]">
              <CardContent className="flex h-full items-start gap-3 p-6 leading-relaxed md:p-7">
                <Github className="mt-0.5 h-5 w-5 text-muted-foreground" />
                <div className="flex-1 space-y-2">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    GitHub
                  </p>
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-medium no-underline hover:text-link"
                  >
                    {contact.github.replace("https://github.com/", "@")}
                  </a>
                  <div className="pt-1">
                    <a
                      href={contact.github}
                      target="_blank"
                      rel="noreferrer noopener"
                      className={cn(
                        buttonVariants({ variant: "outline", size: "sm" }),
                        "h-8 px-2.5 text-xs no-underline"
                      )}
                    >
                      {t({ en: "Open on GitHub", zh: "在 GitHub 打开" })}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.1} className="h-full">
            <Card className="h-full hover:shadow-[0_18px_42px_-34px_hsl(var(--shadow-color)/0.85)]">
              <CardContent className="flex h-full items-start gap-3 p-6 leading-relaxed md:p-7">
                <Building2 className="mt-0.5 h-5 w-5 text-muted-foreground" />
                <div className="flex-1 space-y-2">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    {t({ en: "Affiliation", zh: "所属机构" })}
                  </p>
                  <p className="font-medium">{t(profile.university)}</p>
                  <p className="text-sm text-muted-foreground">{t(profile.title)}</p>
                  {profile.location ? (
                    <p className="inline-flex items-center gap-1 pt-0.5 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      {t(profile.location)}
                    </p>
                  ) : null}
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.15} className="h-full lg:col-span-2">
            <Card className="h-full hover:shadow-[0_18px_42px_-34px_hsl(var(--shadow-color)/0.85)]">
              <CardContent className="flex h-full items-start gap-3 p-6 leading-relaxed md:p-7">
                <Clock className="mt-0.5 h-5 w-5 text-muted-foreground" />
                <div className="flex h-full flex-1 flex-col justify-between space-y-3">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    {t({ en: "Response", zh: "回复说明" })}
                  </p>
                  <p className="text-sm leading-relaxed text-foreground/90">
                    {t({
                      en: "I usually reply within 1–2 working days. For academic discussions, adding a short context line helps me respond more usefully.",
                      zh: "通常在 1–2 个工作日内回复。若为学术交流，烦请在邮件中附一句背景说明，便于我给出更贴合的回复。",
                    })}
                  </p>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

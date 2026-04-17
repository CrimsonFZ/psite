"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { siteConfig } from "@/lib/constants";
import { useLang } from "@/lib/i18n";

export default function NotFound() {
  const { t } = useLang();
  return (
    <section className="section">
      <Container>
        <FadeIn onMount className="max-w-xl space-y-6">
          <p className="text-[96px] md:text-[128px] leading-none font-semibold tracking-tight text-muted-foreground/40 tabular-nums select-none">
            404
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
            {t({ en: "Page not found", zh: "未找到此页面" })}
          </h1>
          <p className="text-muted-foreground max-w-prose">
            {t({
              en: "The page you are looking for doesn't exist or has been moved. Try one of the links below.",
              zh: "该页面不存在，或已被移动。可以从下面的链接继续访问。",
            })}
          </p>
          <nav className="pt-2">
            <ul className="divide-y divide-border/70 border-y border-border/70">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center justify-between gap-4 py-3 text-sm no-underline group"
                  >
                    <span className="font-medium group-hover:text-link">
                      {t(item.label)}
                    </span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </FadeIn>
      </Container>
    </section>
  );
}

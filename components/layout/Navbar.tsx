"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { LanguageToggle } from "@/components/layout/LanguageToggle";

export function Navbar() {
  const pathname = usePathname();
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 pt-3 print:hidden">
      <Container className="relative">
        <div
          className={cn(
            "flex min-h-[4.25rem] items-center justify-between gap-3 rounded-[1.5rem] border px-3 md:px-4 transition-all duration-300 ease-academic",
            scrolled
              ? "border-border/80 bg-background/78 shadow-[0_18px_45px_-30px_hsl(var(--shadow-color)/0.85)] backdrop-blur-xl supports-[backdrop-filter]:bg-background/68"
              : "border-border/40 bg-background/55 shadow-[0_10px_30px_-28px_hsl(var(--shadow-color)/0.45)] backdrop-blur-lg supports-[backdrop-filter]:bg-background/40"
          )}
        >
          <Link
            href="/"
            className="group flex min-w-0 items-center gap-3 rounded-full px-3 py-2 no-underline transition-colors hover:text-foreground"
            onClick={() => setOpen(false)}
          >
            <span
              className="flex h-9 w-9 flex-none items-center justify-center rounded-full border border-border/70 bg-card/80 text-xs font-semibold tracking-[0.18em] text-muted-foreground transition-colors group-hover:border-foreground/15 group-hover:text-foreground"
              aria-hidden="true"
            >
              FL
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-semibold tracking-[-0.02em]">
                {siteConfig.name}
              </span>
              <span className="block truncate text-[0.72rem] uppercase tracking-[0.2em] text-muted-foreground">
                {t({ en: "Academic Website", zh: "学术主页" })}
              </span>
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
            {siteConfig.nav.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm no-underline transition-all duration-200 ease-academic",
                    active
                      ? "bg-foreground/[0.08] text-foreground ring-1 ring-inset ring-foreground/10"
                      : "text-muted-foreground hover:bg-foreground/[0.04] hover:text-foreground"
                  )}
                >
                  {t(item.label)}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-1 rounded-full border border-border/70 bg-card/70 p-1 md:flex">
            <LanguageToggle />
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <div className="flex items-center gap-1 rounded-full border border-border/70 bg-card/70 p-1">
              <LanguageToggle />
              <ThemeToggle />
            </div>
            <Button
              variant="outline"
              size="icon"
              aria-label={open ? "Close menu" : "Open menu"}
              className="bg-card/70"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {open ? (
          <div className="absolute inset-x-0 top-[calc(100%+0.75rem)] z-50 md:hidden">
            <div className="rounded-[1.5rem] border border-border/80 bg-background/88 p-2 shadow-[0_22px_60px_-34px_hsl(var(--shadow-color)/0.9)] backdrop-blur-xl supports-[backdrop-filter]:bg-background/76">
              <nav aria-label="Mobile" className="flex flex-col gap-1">
                {siteConfig.nav.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "rounded-[1rem] px-4 py-3 text-sm no-underline transition-all duration-200 ease-academic",
                        active
                          ? "bg-foreground/[0.08] text-foreground ring-1 ring-inset ring-foreground/10"
                          : "text-muted-foreground hover:bg-foreground/[0.04] hover:text-foreground"
                      )}
                    >
                      {t(item.label)}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        ) : null}
      </Container>
    </header>
  );
}

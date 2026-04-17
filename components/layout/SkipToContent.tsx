"use client";

import { useLang } from "@/lib/i18n";

/**
 * Keyboard-only shortcut to the main content. Visually hidden until focused.
 * Place as the first focusable element inside <body>.
 */
export function SkipToContent() {
  const { t } = useLang();
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-3 focus:py-2 focus:rounded-md focus:border focus:border-border focus:bg-background focus:text-foreground focus:shadow-md focus:outline-none focus:ring-2 focus:ring-ring"
    >
      {t({ en: "Skip to content", zh: "跳到主内容" })}
    </a>
  );
}

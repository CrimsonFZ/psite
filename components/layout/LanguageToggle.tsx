"use client";

import { Languages } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useLang } from "@/lib/i18n";

export function LanguageToggle() {
  const { lang, toggle } = useLang();
  const next = lang === "en" ? "中文" : "EN";
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggle}
      aria-label={`Switch language to ${next}`}
      className="gap-1.5 text-xs tracking-wide"
    >
      <Languages className="h-3.5 w-3.5" />
      <span>{next}</span>
    </Button>
  );
}

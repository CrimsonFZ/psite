"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLang } from "@/lib/i18n";

interface CopyButtonProps {
  value: string;
  /** Override the default aria label ("Copy <value> to clipboard"). */
  ariaLabel?: string;
  /** Visual variant. */
  variant?: "outline" | "ghost";
  className?: string;
}

export function CopyButton({
  value,
  ariaLabel,
  variant = "outline",
  className,
}: CopyButtonProps) {
  const { t } = useLang();
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  const onClick = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      // Fallback for older browsers or insecure contexts
      const el = document.createElement("textarea");
      el.value = value;
      el.setAttribute("readonly", "");
      el.style.position = "fixed";
      el.style.opacity = "0";
      document.body.appendChild(el);
      el.select();
      try {
        document.execCommand("copy");
      } finally {
        document.body.removeChild(el);
      }
    }
    setCopied(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setCopied(false), 1800);
  }, [value]);

  const label = copied
    ? t({ en: "Copied", zh: "已复制" })
    : t({ en: "Copy", zh: "复制" });

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel ?? `Copy ${value}`}
      aria-live="polite"
      className={cn(
        "inline-flex items-center gap-1.5 h-8 px-2.5 rounded-md text-xs font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        variant === "outline"
          ? "border border-border bg-transparent text-foreground/80 hover:text-foreground hover:bg-muted"
          : "bg-transparent text-muted-foreground hover:text-foreground",
        className
      )}
    >
      {copied ? (
        <Check className="h-3.5 w-3.5 text-green-600 dark:text-green-400" />
      ) : (
        <Copy className="h-3.5 w-3.5" />
      )}
      <span>{label}</span>
    </button>
  );
}

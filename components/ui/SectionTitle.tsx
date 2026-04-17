import { type ReactNode, createElement } from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  /** Rendered heading level. Page-top titles should be "h1"; in-page sections stay "h2" (default). */
  as?: "h1" | "h2";
  className?: string;
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  as = "h2",
  className,
}: SectionTitleProps) {
  const headingClasses =
    as === "h1"
      ? "text-3xl md:text-4xl font-semibold tracking-tight"
      : "text-2xl md:text-3xl font-semibold tracking-tight";

  return (
    <div
      className={cn(
        "space-y-3 mb-10",
        align === "center" && "text-center mx-auto",
        className
      )}
    >
      {eyebrow ? (
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          {eyebrow}
        </p>
      ) : null}
      {createElement(as, { className: headingClasses }, title)}
      {description ? (
        <p className="max-w-2xl text-sm md:text-base text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  );
}

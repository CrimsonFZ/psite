import { type ReactNode, createElement } from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
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
      ? "text-3xl font-semibold tracking-[-0.03em] md:text-5xl text-balance"
      : "text-2xl font-semibold tracking-[-0.03em] md:text-[2rem] text-balance";

  return (
    <div
      className={cn(
        "mb-10 space-y-4",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <div
          className={cn(
            "flex items-center gap-3",
            align === "center" && "justify-center"
          )}
        >
          <span className="h-px w-10 bg-border/80" aria-hidden="true" />
          <p className="section-kicker">{eyebrow}</p>
          {align === "center" ? (
            <span className="h-px w-10 bg-border/80" aria-hidden="true" />
          ) : null}
        </div>
      ) : null}

      <div className={cn("space-y-3", align === "center" && "mx-auto max-w-3xl")}>
        {createElement(as, { className: headingClasses }, title)}
        {description ? (
          <p
            className={cn(
              "max-w-2xl text-sm leading-7 text-muted-foreground md:text-base md:leading-8",
              align === "center" && "mx-auto"
            )}
          >
            {description}
          </p>
        ) : null}
      </div>

      <div
        className={cn(
          "soft-divider max-w-5xl",
          align === "center" && "mx-auto max-w-3xl"
        )}
        aria-hidden="true"
      />
    </div>
  );
}

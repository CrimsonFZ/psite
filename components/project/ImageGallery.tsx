"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import type { Localized } from "@/types";

interface GalleryItem {
  src: string;
  alt: Localized<string>;
}

interface ImageGalleryProps {
  items?: GalleryItem[];
  heading?: boolean;
  index?: number;
}

export function ImageGallery({ items, heading = true, index }: ImageGalleryProps) {
  const { t } = useLang();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [brokenIndices, setBrokenIndices] = useState<Set<number>>(new Set());

  const visible = (items ?? [])
    .map((item, originalIndex) => ({ item, originalIndex }))
    .filter(({ originalIndex }) => !brokenIndices.has(originalIndex));

  useEffect(() => {
    if (activeIndex === null) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") {
        setActiveIndex((current) =>
          current === null ? current : Math.min(current + 1, visible.length - 1)
        );
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((current) => (current === null ? current : Math.max(current - 1, 0)));
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [activeIndex, visible.length]);

  if (!items || items.length === 0 || visible.length === 0) return null;

  const active = activeIndex !== null ? visible[activeIndex] : null;

  return (
    <section className="section-stack">
      {heading ? (
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            {typeof index === "number" ? (
              <p className="section-kicker tabular-nums">{String(index).padStart(2, "0")}</p>
            ) : null}
            <h2 className="mt-2 text-xl font-semibold tracking-[-0.03em] md:text-[1.7rem]">
              {t({ en: "Figures", zh: "图示" })}
            </h2>
          </div>
          <p className="text-sm text-muted-foreground">
            {String(visible.length).padStart(2, "0")}{" "}
            {t({ en: "images", zh: "张图像" })}
          </p>
        </div>
      ) : null}

      <div className="grid gap-4 lg:grid-cols-12">
        {visible.map(({ item, originalIndex }, position) => (
          <button
            key={originalIndex}
            type="button"
            onClick={() => setActiveIndex(position)}
            className={cn(
              "group surface-panel overflow-hidden text-left",
              visible.length > 1 && position === 0
                ? "lg:col-span-7"
                : "sm:col-span-1 lg:col-span-5"
            )}
            aria-label={t(item.alt)}
          >
            <div
              className={cn(
                "relative overflow-hidden bg-muted",
                visible.length > 1 && position === 0 ? "aspect-[16/10]" : "aspect-[4/3]"
              )}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={t(item.alt)}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 ease-academic group-hover:scale-[1.03]"
                onError={() =>
                  setBrokenIndices((previous) => new Set(previous).add(originalIndex))
                }
              />
              <div className="absolute inset-x-4 top-4 flex items-center justify-between gap-3">
                <span className="rounded-full border border-white/20 bg-black/20 px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
                  {String(position + 1).padStart(2, "0")}
                </span>
                <span className="rounded-full border border-white/20 bg-black/20 px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
                  {t({ en: "Open", zh: "查看" })}
                </span>
              </div>
            </div>

            <div className="p-4">
              <p className="text-sm leading-7 text-foreground/84">{t(item.alt)}</p>
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {active ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/92 p-4 backdrop-blur-md md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setActiveIndex(null)}
            role="dialog"
            aria-modal="true"
            aria-label={t(active.item.alt)}
          >
            <motion.figure
              className="relative w-full max-w-6xl"
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <p className="text-sm text-muted-foreground">
                  {String((activeIndex ?? 0) + 1).padStart(2, "0")} /{" "}
                  {String(visible.length).padStart(2, "0")}
                </p>

                <div className="flex items-center gap-2">
                  <ModalNavButton
                    label={t({ en: "Previous image", zh: "上一张图像" })}
                    onClick={() => setActiveIndex((current) => Math.max((current ?? 0) - 1, 0))}
                    disabled={(activeIndex ?? 0) === 0}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </ModalNavButton>
                  <ModalNavButton
                    label={t({ en: "Next image", zh: "下一张图像" })}
                    onClick={() =>
                      setActiveIndex((current) =>
                        Math.min((current ?? 0) + 1, visible.length - 1)
                      )
                    }
                    disabled={(activeIndex ?? 0) >= visible.length - 1}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </ModalNavButton>
                  <ModalNavButton
                    label={t({ en: "Close", zh: "关闭" })}
                    onClick={() => setActiveIndex(null)}
                  >
                    <X className="h-4 w-4" />
                  </ModalNavButton>
                </div>
              </div>

              <div className="surface-panel overflow-hidden p-3 md:p-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={active.item.src}
                  alt={t(active.item.alt)}
                  className="max-h-[76vh] w-full rounded-[1rem] bg-muted object-contain"
                />
              </div>

              <figcaption className="mt-4 text-center text-sm leading-7 text-muted-foreground">
                {t(active.item.alt)}
              </figcaption>
            </motion.figure>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}

function ModalNavButton({
  label,
  onClick,
  disabled = false,
  children,
}: {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      disabled={disabled}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-background/78 text-muted-foreground transition-all duration-200 ease-academic hover:border-foreground/16 hover:bg-card/84 hover:text-foreground disabled:cursor-not-allowed disabled:opacity-40"
    >
      {children}
    </button>
  );
}

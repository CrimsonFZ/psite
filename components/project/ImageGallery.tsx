"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useLang } from "@/lib/i18n";
import type { Localized } from "@/types";

interface GalleryItem {
  src: string;
  alt: Localized<string>;
}

interface ImageGalleryProps {
  items?: GalleryItem[];
  heading?: boolean;
  /** Optional section index to display (e.g. 05, 06) to keep numbering continuous with ProjectTimeline. */
  index?: number;
}

export function ImageGallery({ items, heading = true, index }: ImageGalleryProps) {
  const { t } = useLang();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [brokenIndices, setBrokenIndices] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight" && items && activeIndex < items.length - 1) {
        setActiveIndex(activeIndex + 1);
      }
      if (e.key === "ArrowLeft" && activeIndex > 0) {
        setActiveIndex(activeIndex - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, items]);

  if (!items || items.length === 0) return null;

  const visible = items
    .map((item, i) => ({ item, i }))
    .filter(({ i }) => !brokenIndices.has(i));

  if (visible.length === 0) return null;

  const active = activeIndex !== null ? items[activeIndex] : null;

  return (
    <section>
      {heading ? (
        <div className="mb-6">
          {typeof index === "number" ? (
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground tabular-nums">
              {String(index).padStart(2, "0")}
            </p>
          ) : null}
          <h2 className="mt-1.5 text-lg md:text-xl font-semibold tracking-tight">
            {t({ en: "Figures", zh: "图示" })}
          </h2>
        </div>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map(({ item, i }) => (
          <figure
            key={i}
            className="group cursor-zoom-in overflow-hidden rounded-lg border border-border bg-muted"
            onClick={() => setActiveIndex(i)}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={t(item.alt)}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 ease-academic group-hover:scale-[1.02]"
                onError={() =>
                  setBrokenIndices((prev) => new Set(prev).add(i))
                }
              />
            </div>
            <figcaption className="px-3 py-2 text-xs text-muted-foreground line-clamp-2">
              {t(item.alt)}
            </figcaption>
          </figure>
        ))}
      </div>

      <AnimatePresence>
        {active ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm p-4 md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setActiveIndex(null)}
            role="dialog"
            aria-modal="true"
            aria-label={t(active.alt)}
          >
            <motion.figure
              className="relative max-w-5xl w-full"
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Close"
                className="absolute -top-10 right-0 inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background text-muted-foreground hover:text-foreground"
                onClick={() => setActiveIndex(null)}
              >
                <X className="h-4 w-4" />
              </button>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={active.src}
                alt={t(active.alt)}
                className="max-h-[80vh] w-full rounded-md object-contain bg-muted"
              />
              <figcaption className="mt-3 text-center text-sm text-muted-foreground">
                {t(active.alt)}
              </figcaption>
            </motion.figure>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}

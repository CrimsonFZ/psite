"use client";

import { Download, Printer } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { buttonVariants } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { CvDocument } from "@/components/cv/CvDocument";
import { cn } from "@/lib/utils";
import { useLang } from "@/lib/i18n";

export default function CvPage() {
  const { t } = useLang();
  return (
    <section className="section print:py-0">
      <Container>
        <div className="flex justify-end gap-2 mb-8 print:hidden">
          <button
            type="button"
            onClick={() => window.print()}
            className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
          >
            <Printer className="h-3.5 w-3.5" />
            {t({ en: "Print / Save as PDF", zh: "打印 / 另存为 PDF" })}
          </button>
          <a
            href="/resume.pdf"
            download
            className={cn(buttonVariants({ variant: "primary", size: "sm" }), "no-underline")}
          >
            <Download className="h-3.5 w-3.5" />
            {t({ en: "Download PDF", zh: "下载 PDF" })}
          </a>
        </div>

        <FadeIn onMount>
          <CvDocument />
        </FadeIn>
      </Container>
    </section>
  );
}

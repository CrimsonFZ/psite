import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-transparent text-sm font-medium transition-[background-color,border-color,color,transform,box-shadow] duration-200 ease-academic focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-[0_14px_34px_-22px_hsl(var(--shadow-color)/0.9)] hover:-translate-y-0.5 hover:bg-primary/94 hover:shadow-[0_18px_40px_-24px_hsl(var(--shadow-color)/0.95)]",
        outline:
          "border-border/80 bg-background/72 text-foreground shadow-[0_10px_24px_-24px_hsl(var(--shadow-color)/0.8)] backdrop-blur-sm hover:-translate-y-0.5 hover:border-foreground/18 hover:bg-card/88 hover:shadow-[0_16px_32px_-26px_hsl(var(--shadow-color)/0.85)]",
        ghost:
          "bg-transparent text-foreground/78 shadow-none hover:-translate-y-0.5 hover:bg-foreground/[0.06] hover:text-foreground",
        link:
          "rounded-none border-transparent bg-transparent px-0 text-link underline underline-offset-4 shadow-none hover:text-link/80",
      },
      size: {
        sm: "h-9 px-3.5 text-[0.78rem]",
        md: "h-10 px-[1.125rem]",
        lg: "h-11 px-6",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
);
Button.displayName = "Button";

export { buttonVariants };

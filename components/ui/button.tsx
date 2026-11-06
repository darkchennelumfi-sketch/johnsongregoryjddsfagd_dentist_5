import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-[0.78rem] font-bold uppercase tracking-[0.13em] transition-all duration-300 ease-out disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-pine text-cream shadow-[0_10px_30px_-14px_rgba(8,36,33,.7)] hover:-translate-y-0.5 hover:bg-pine-deep hover:shadow-[0_16px_34px_-16px_rgba(8,36,33,.8)]",
        clay:
          "bg-clay text-cream shadow-[0_10px_30px_-14px_rgba(188,96,69,.7)] hover:-translate-y-0.5 hover:bg-[#a85139]",
        outline:
          "border border-pine/25 bg-transparent text-pine hover:border-pine hover:bg-pine hover:text-cream",
        light:
          "bg-cream text-pine hover:-translate-y-0.5 hover:bg-white",
        ghost:
          "text-pine hover:bg-pine/5",
      },
      size: {
        sm: "h-10 px-4",
        default: "h-12 px-6",
        lg: "h-14 px-8",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { buttonVariants };

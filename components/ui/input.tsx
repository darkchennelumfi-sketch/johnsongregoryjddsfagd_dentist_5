import * as React from "react";
import { cn } from "@/lib/utils";

export function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-12 w-full rounded-xl border border-line bg-cream/70 px-4 text-[0.95rem] text-ink shadow-[inset_0_1px_0_rgba(255,255,255,.7)] outline-none transition-colors placeholder:text-muted focus:border-teal focus:bg-cream aria-invalid:border-clay",
        className,
      )}
      {...props}
    />
  );
}

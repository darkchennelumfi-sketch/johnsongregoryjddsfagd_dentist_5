import * as React from "react";
import { cn } from "@/lib/utils";

export function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "min-h-28 w-full resize-y rounded-xl border border-line bg-cream/70 px-4 py-3 text-[0.95rem] text-ink shadow-[inset_0_1px_0_rgba(255,255,255,.7)] outline-none transition-colors placeholder:text-muted focus:border-teal focus:bg-cream aria-invalid:border-clay",
        className,
      )}
      {...props}
    />
  );
}

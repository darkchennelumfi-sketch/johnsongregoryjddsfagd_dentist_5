"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export function Accordion({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn("divide-y divide-line", className)}
      {...props}
    />
  );
}

export function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("group", className)}
      {...props}
    />
  );
}

export function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "flex flex-1 items-center justify-between gap-6 py-6 text-left font-display text-[1.35rem] leading-tight text-pine transition-colors hover:text-clay data-[state=open]:text-clay",
          className,
        )}
        {...props}
      >
        <span>{children}</span>
        <span className="grid size-9 shrink-0 place-items-center rounded-full border border-line bg-cream text-pine transition-transform duration-300 group-data-[state=open]:rotate-45">
          <Plus className="size-4" aria-hidden="true" />
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

export function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="overflow-hidden text-[0.98rem] leading-7 text-muted data-[state=closed]:animate-[accordion-up_.3s_ease-out] data-[state=open]:animate-[accordion-down_.35s_ease-out]"
      {...props}
    >
      <div className={cn("max-w-3xl pb-7 pr-12", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

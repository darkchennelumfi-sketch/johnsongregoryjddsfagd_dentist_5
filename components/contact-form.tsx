"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle2, Loader2, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { contactSchema, type ContactValues } from "@/lib/contact-schema";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = React.useState<Status>("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      phone: "",
      email: "",
    },
  });

  const onSubmit = async (values: ContactValues) => {
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Unable to send the message.");
      }

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        className="rounded-[1.5rem] border border-teal/20 bg-mint/50 p-7 sm:p-9"
        aria-live="polite"
      >
        <span className="grid size-12 place-items-center rounded-full bg-pine text-cream">
          <CheckCircle2 className="size-5" aria-hidden="true" />
        </span>
        <h3 className="mt-5 font-display text-[1.8rem] leading-tight text-pine">
          We appreciate you contacting us.
        </h3>
        <p className="mt-3 text-[0.98rem] leading-7 text-muted">
          One of our colleagues will get back in touch with you soon! Have a
          great day!
        </p>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          <RotateCcw aria-hidden="true" />
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <p className="text-[0.95rem] leading-7 text-muted">
        Please fill out this short form and we&apos;ll contact you shortly.
      </p>

      <div>
        <Label htmlFor="name">
          Name <span className="text-clay">*</span>
        </Label>
        <Input
          id="name"
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          {...register("name")}
        />
        {errors.name ? (
          <p id="name-error" className="mt-2 text-xs font-semibold text-clay">
            {errors.name.message}
          </p>
        ) : null}
      </div>

      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          type="tel"
          autoComplete="tel"
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          {...register("phone")}
        />
        {errors.phone ? (
          <p id="phone-error" className="mt-2 text-xs font-semibold text-clay">
            {errors.phone.message}
          </p>
        ) : null}
      </div>

      <div>
        <Label htmlFor="email">
          Email <span className="text-clay">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          {...register("email")}
        />
        {errors.email ? (
          <p id="email-error" className="mt-2 text-xs font-semibold text-clay">
            {errors.email.message}
          </p>
        ) : null}
      </div>

      {status === "error" ? (
        <div
          className="rounded-xl border border-clay/25 bg-clay/5 px-4 py-3 text-sm leading-6 text-clay"
          aria-live="assertive"
        >
          Oops, there was an error sending your message. Please try again later,
          or call the clinic at (701) 974-2118.
        </div>
      ) : null}

      <Button
        type="submit"
        size="lg"
        disabled={status === "sending"}
        className="w-full sm:w-auto"
      >
        {status === "sending" ? (
          <Loader2 className="animate-spin" aria-hidden="true" />
        ) : (
          <ArrowRight aria-hidden="true" />
        )}
        {status === "sending" ? "Sending" : "Send message"}
      </Button>

      <p className="text-[0.68rem] leading-5 text-muted">
        By submitting this form you agree to be contacted by Richardton Dental
        Clinic about your message.
      </p>
    </form>
  );
}

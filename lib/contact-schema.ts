import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Please enter your name.")
    .max(120, "Please use a shorter name."),
  phone: z
    .string()
    .trim()
    .max(40, "Please use a shorter phone number.")
    .refine(
      (value) => value.length === 0 || /^[\d\s+.\-()]*\d[\d\s+.\-()]*$/.test(value),
      "Please enter a valid phone number.",
    ),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email address.")
    .email("Please enter a valid email address.")
    .max(180, "Please use a shorter email address."),
});

export type ContactValues = z.infer<typeof contactSchema>;

import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";

export async function POST(request: Request) {
  const payload: unknown = await request.json().catch(() => null);
  const result = contactSchema.safeParse(payload);

  if (!result.success) {
    return NextResponse.json(
      {
        ok: false,
        errors: result.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  // The clinic's existing contact form is handled by its hosting provider.
  // This endpoint validates the message and gives the interface a production-ready
  // seam for connecting an email or CRM integration later.
  return NextResponse.json({ ok: true });
}

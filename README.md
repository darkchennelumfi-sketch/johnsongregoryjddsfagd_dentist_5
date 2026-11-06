# Richardton Dental Clinic

A modern website for Richardton Dental Clinic in Richardton, North Dakota.

## Stack

- Next.js 16 (App Router) with TypeScript
- Tailwind CSS v4
- Radix UI primitives (navigation menu, dialog, accordion, label)
- Motion, React Hook Form, Zod, Lucide, and `next/image`

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run typecheck` | Run TypeScript checks |
| `npm run lint` | Run ESLint |

## Routes

- `/` — home
- `/dental-services` — services overview
- `/family-dentistry`
- `/holistic-dentistry`
- `/orthodontics`
- `/periodontal-dentistry`
- `/reviews`
- `/about`
- `/contact`
- `/patient-info`
- `/faq`

## Content and contact form

Clinic details, services, payment options, hours, and rating information are
sourced from the previous site. The visual identity and layout are new.

The contact form validates submissions on the client and through
`app/api/contact/route.ts`, then shows the confirmation message. The API route
does not send email yet. To deliver messages in production, connect the route
to the clinic's email service or CRM where indicated in that file.

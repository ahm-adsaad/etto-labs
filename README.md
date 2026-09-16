# Etto Labs

Marketing site for Etto Labs — AI workflow deployment for the GCC mid-market.

One AI workflow live in production in 45 days. Fixed fee. Final tranche withheld if we miss.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4 (`@theme` tokens)
- shadcn/ui primitives + Framer Motion (`motion`) for deferred islands
- Cal.com embed (intersection-loaded)
- Self-hosted fonts via `next/font/local`
- Vercel Analytics (production only)

## Develop

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
pnpm start
```

## Before publish

1. Set the real Cal.com link in `src/lib/constants.ts` (`CAL_LINK`).
2. Confirm the AED 90,000–140,000 build band in `src/lib/strings.ts`.
3. Update WhatsApp (`WHATSAPP_URL`) and email (`CONTACT_EMAIL`).
4. Point `SITE_URL` at the production domain.
5. Deploy to Vercel so Analytics mounts (`VERCEL=1`).

## Routes

| Route | Purpose |
|-------|---------|
| `/` | Landing page |
| `/booked` | Booking confirmation |
| `/privacy` | Privacy stub |
| `/terms` | Terms stub |

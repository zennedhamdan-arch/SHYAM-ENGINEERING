# SHYAM-ENGINEERING

Production-quality demo website for **Shyam Engineering Equipment Ltd** — heavy
construction equipment and material supply, Kigali, Rwanda.

## Stack

- Next.js 15 (App Router, static prerender)
- TypeScript
- Tailwind CSS 3
- No additional runtime dependencies

## Scripts

```bash
npm install
npm run dev        # development server on 0.0.0.0:3000
npm run build      # production build
npm run start      # serve the production build on 0.0.0.0:3000
npm run typecheck  # tsc --noEmit
```

## Configuration (demo rules)

This is a sales demo. No company facts are invented — anything not yet provided
by the client is a clearly-marked placeholder, centralised so it can be replaced
in one place:

- `lib/site.ts` — company name, location, phone / email / business-hours
  placeholders, WhatsApp number, demo disclaimer.
  - Set `NEXT_PUBLIC_WHATSAPP_NUMBER` (international digits, e.g. `250788123456`)
    to activate real `wa.me` WhatsApp CTAs. Until then WhatsApp CTAs route to the
    contact page.
  - Set `NEXT_PUBLIC_SITE_URL` for canonical/OG/sitemap URLs.
- `lib/data/stats.ts` — company statistics ("years", "projects", …) are
  intentional `—` placeholders awaiting verified figures.
- `lib/data/projects.ts` — project cards are labelled *illustrative examples*
  until the real portfolio is supplied.
- `app/actions/quote.ts` — the quote form validates enquiries only (it is an
  enquiry, not a booking). Connect it to the company inbox/WhatsApp before launch.

## Routes

`/` home · `/about` · `/equipment` · `/equipment/[slug]` · `/material-supply` ·
`/projects` · `/contact` · `/quote` · `/sitemap.xml` · `/robots.txt`

## Images

Hero, fleet, material and about imagery is photorealistic generated artwork
(`public/images/`); two project cards use real stock-style photos. All imagery is
served through `next/image` (WebP/AVIF, lazy loading below the fold).

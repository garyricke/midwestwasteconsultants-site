# Midwest Waste Consultants — Website

The **consulting / brokering / sustainability** site (the "boardroom" half of the
two-site strategy). The transactional dumpster-ordering side lives separately at
**[midwestwaste.app](https://midwestwaste.app)**.

- **Stack:** Astro + Tailwind v4 (static), deployed on Netlify.
- **Brand:** Navy `#1B365D`, Action Orange `#FF8200`, Montserrat + Open Sans
  (self-hosted via `@fontsource`). Tokens live in `src/styles/global.css`.
- **Content/data:** `src/config/site.ts` (company info, nav, services, service
  areas, reviews, FAQ) and `src/data/serviceDetails.ts` (long-form service copy).

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview
```

## Structure

```
src/
  config/site.ts          # single source of truth for site data
  data/serviceDetails.ts  # per-service long-form content
  layouts/Layout.astro    # SEO meta, OG, JSON-LD injection
  components/              # Header, Footer, PageHero, CtaBand, Stars
  pages/                   # routes (services & areas are dynamic [slug] routes)
public/
  _redirects              # 301 map from the old live-site URLs
  robots.txt
  images/                 # logo, marketing, concept art
netlify/edge-functions/
  gate.ts                 # pre-launch password gate (remove block at go-live)
```

## Pre-launch gate

A branded cookie-session gate (`netlify/edge-functions/gate.ts`, wired in
`netlify.toml`) keeps the site private during development. **At go-live, remove
the `[[edge_functions]]` block in `netlify.toml`** (or delete the function).

## Launch checklist

- [ ] Replace `[PLACEHOLDER]` copy: founder bios/team photo, proof numbers,
      LIV Golf results + photos/drone video, podcast name/host/feed.
- [ ] Confirm contact inbox email (`SITE.email`) and wire Netlify Forms
      notification for the `quote` form.
- [ ] Replace `public/images/og-default.png` with a designed 1200×630 OG card.
- [ ] Swap placeholder gallery art for real fleet/project photos.
- [ ] Point `midwestwasteconsultants.com` DNS at this Netlify site.
- [ ] Remove the pre-launch gate.
- [ ] Verify the `_redirects` map against the old site's indexed URLs.
- [ ] Submit `sitemap-index.xml` in Google Search Console.
```

# FlowAI

A premium SaaS landing page for FlowAI — an AI-powered workflow automation platform. Dark glassmorphism design with aurora gradients, bento grid features, animated hero dashboard, multi-currency pricing, and testimonials.

## Run & Operate

- `pnpm --filter @workspace/flowai run dev` — run the landing page (port auto-assigned)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 8080)
- `pnpm run typecheck` — full typecheck across all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React 19 + Vite + Tailwind CSS v4
- No animation libraries (pure CSS keyframes + Web Animations API)
- API: Express 5 (for health endpoint only)

## Where things live

- `artifacts/flowai/src/components/` — all page sections (Navbar, Hero, TrustedBy, Features, Pricing, Testimonials, CTA, Footer)
- `artifacts/flowai/src/data/` — all content data (features, pricing, testimonials, companies)
- `artifacts/flowai/src/hooks/` — useScrolled, useActiveSection
- `artifacts/flowai/src/index.css` — theme tokens, keyframes (aurora, float, marquee, pulse-glow), utility classes

## Architecture decisions

- Presentation-first build: no backend DB needed; all content is static data in `src/data/`
- Tailwind v4: custom utilities defined as raw CSS in `@layer utilities` (no `@apply` chaining between custom classes — Tailwind v4 does not support that)
- Pricing computation: always `monthly * 12 * 0.8` for annual — never hardcoded; PricingCard is React.memo'd
- Dark mode: forced via `className="dark"` on the root div in App.tsx

## Product

FlowAI landing page with 8 sections: sticky glassmorphism navbar, animated hero with dashboard mockup, marquee trusted-by logos, bento grid features (accordion on mobile), multi-currency pricing toggle, testimonials, CTA banner, and footer with newsletter signup.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- Tailwind v4 `@apply` cannot reference other custom utilities defined in `@layer utilities`. Use raw CSS properties instead.
- The `.glass` and `.glass-card` utilities use raw CSS (backdrop-filter, border, box-shadow) — not `@apply`.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details

# GST on MRP — Design System

This document is the single source of truth for every design decision in the
project. All components and pages must adhere to these rules.

## 1. Brand & Voice

- **Product name:** GST on MRP
- **Personality:** Modern, trustworthy, precise, calm. A financial utility that
  feels premium and effortless.
- **Reference quality bar:** Vercel-grade polish (clean surfaces, generous
  whitespace, crisp typography, restrained motion) — original, never copied.

## 2. Color Palette

White and neutral first. Color is used sparingly, only as an accent.

### Neutrals (primary surface system)

| Token             | Value     | Usage                        |
| ----------------- | --------- | ---------------------------- |
| `--color-bg`      | `#ffffff` | Page background              |
| `--color-surface` | `#ffffff` | Cards, header                |
| `--color-muted`   | `#fafafa` | Subtle section background    |
| `--color-border`  | `#ededed` | Hairline borders, dividers   |
| `--color-ink`     | `#0a0a0a` | Primary text / headings      |
| `--color-ink-2`   | `#404040` | Body text                    |
| `--color-ink-3`   | `#737373` | Secondary / muted text       |
| `--color-ink-4`   | `#a3a3a3` | Placeholder, disabled        |

### Accent (used sparingly)

| Token                | Value     | Usage                             |
| -------------------- | --------- | --------------------------------- |
| `--color-accent`     | `#16a34a` | Primary actions, active states    |
| `--color-accent-ink` | `#0f7a37` | Accent text on light              |
| `--color-accent-bg`  | `#f0fdf4` | Accent tinted surfaces            |

Rule: the default aesthetic is monochrome neutral; green signals
"money / trust / go" and should never dominate a viewport.

## 3. Typography

- **Font:** `Inter Variable` (self-hosted via @fontsource) with a system-ui
  fallback stack. Zero layout shift, no render-blocking network request.
- **Numeric:** tabular figures (`.tnum`) on every calculator/number display.
- **Scale (fluid, mobile-first):** Display `clamp(2.5rem,6vw,4.25rem)`,
  H1 `clamp(2rem,4vw,3rem)`, H2 `clamp(1.5rem,2.5vw,2rem)`, H3 `1.25rem`,
  Body `1rem`/`1.125rem`, Small `0.875rem`, Eyebrow `0.8125rem` uppercase.
- **Line-height:** headings `1.1`, body `1.65`. Prose max width `65ch`.

## 4. Spacing & Layout

- **Base unit:** 4px (Tailwind scale).
- **Container:** max-width `72rem`, padding `1.25rem` → `2rem`, centered.
- **Section rhythm:** `clamp(4rem, 8vw, 7rem)` vertical padding.
- Mobile-first from 360px, enhanced at `sm`, `md`, `lg`, `xl`.

## 5. Radii

`--radius-sm` 0.5rem, `--radius-md` 0.75rem, `--radius-lg` 1rem,
`--radius-xl` 1.5rem, full 9999px. Cards are always `lg` or larger.

## 6. Shadows (soft, layered, low-contrast)

- `--shadow-xs` — border lift
- `--shadow-sm` — resting cards
- `--shadow-md` — raised / hover
- `--shadow-lg` — popovers

Always diffuse, never harsh; pair with a 1px hairline border.

## 7. Motion

- Durations: micro 150ms, standard 200ms, entrance 400ms.
- Easing: `cubic-bezier(0.4,0,0.2,1)` standard; `cubic-bezier(0.16,1,0.3,1)`
  entrance.
- Hover: cards lift `translateY(-2px)` + shadow step; buttons `active:scale`.
- Always honor `prefers-reduced-motion`.

## 8. Components

Buttons (primary/secondary/ghost, 44px min target), Cards (white, hairline
border, rounded-lg, soft shadow, hover lift), Tabs (segmented pill control,
active = white surface + shadow), Header (sticky 72px, translucent + blur,
border appears on scroll, mobile hamburger panel), Footer (muted, multi-column
link groups + legal row).

## 9. Accessibility

Contrast ≥ 4.5:1 body / ≥ 3:1 large. Visible 2px accent focus ring with 2px
offset. Semantic landmarks. Keyboard reachable, 44px targets. `aria-*` on
icon-only controls, tabs (roving tabindex, `aria-selected`), and accordions.

## 10. SEO & Performance

One `<h1>` per page, logical heading order. Full meta (title, description,
canonical, Open Graph, Twitter, robots, theme-color). JSON-LD: WebSite,
WebApplication, FAQPage. Sitemap via @astrojs/sitemap + robots.txt. Static
prerendered HTML, self-hosted variable font, minimal JS (one small vanilla
island for the calculator), no layout shift.

# Zoom Project Instructions

## Project Overview
This is a Next.js clone/mirror of zoom.us called "Zoom". It replicates Zoom's public information architecture, page coverage, and visual design using original Zoom-branded content and shared layouts.

## Core Rules

### 1. Match Zoom Exactly
- When building or fixing any page, always reference the live Zoom equivalent using Playwright to extract exact computed styles (font sizes, weights, colors, padding, margins, widths, heights, border-radius, backgrounds).
- Never guess layout values. Always extract them programmatically from zoom.us.
- Compare screenshots side-by-side (Zoom vs Zoom) before considering a task done.

### 2. Use Real Assets
- Download icons, badges, and SVGs from Zoom's CDN (`st1.zoom.us`) and save them locally in `public/`.
- Never use text placeholders for icons (no "OL", "BR", "A", "P" etc.).
- Store badges (App Store, Google Play, Microsoft AppSource) must use actual SVG badge images with black backgrounds.
- QR codes should be real PNGs, not SVG placeholders.

### 3. Layout Architecture
- The project uses Next.js App Router with **route groups**:
  - `src/app/(main)/` — standard pages with global Header + Footer
  - `src/app/(minimal)/` — pages like `/join` with their own minimal header/footer, no global chrome
- Root `layout.tsx` only provides `<html>`, `<body>`, and `globals.css`.
- Never use `useEffect` hacks to hide/show the global header/footer. Use route groups instead.

### 4. Zoom's Layout System
- Zoom does NOT use a constrained `max-width` container for download-style pages. Sections are full viewport width with `padding: 48px 56px` (`px-14 py-12`).
- The main marketing pages use full-width sections, not centered narrow containers.
- Cards, desktop/mobile download sections all sit within this full-width padded layout.
- For pages like `/join` that use Zoom's `.mini-layout`, the form is `360px` wide centered within a `480px` body.

### 5. Styling Conventions
- Use exact hex colors extracted from Zoom (e.g., `#222325`, `#232333`, `#0d6bde`, `#0b5cff`, `#00031f`, `#d7e6fc`, `#f8f8fa`, `#39394d`).
- Use exact font sizes and weights from Zoom's computed styles.
- Zoom's font stack: `"Almaden Sans", Helvetica, Arial`.
- Footer background: `#39394d` (rgb(57, 57, 77)).
- Hero/dark sections: `#00031f`.
- Blue accent bar: 6px height.

### 6. Component Patterns
- Social icons in the footer must use inline SVGs (LinkedIn, X, YouTube, Facebook, Instagram, Blog), not text letters.
- Card icons must use downloaded SVGs from Zoom's CDN, stored in `public/download/`.
- Buttons follow Zoom's `zoom-button--primary` (solid blue) and `zoom-button--secondary` (outlined blue) patterns.

### 7. Playwright Usage
- Playwright is available via the project's node_modules: `require('/Users/trams/Documents/zoom/node_modules/playwright')`.
- Use it to:
  - Extract computed styles from any zoom.us page
  - Take screenshots for comparison
  - Download assets (QR codes, badges, icons)
- Always extract layout values before building/fixing a page.

### 8. File Organization
- Page assets go in `public/download/` (or `public/{section}/` for other sections).
- Components in `src/components/`.
- Site structure data in `src/lib/site-structure.ts`.
- Marketing page helpers in `src/lib/marketing-page-helpers.ts`.

### 9. Source of Truth — Exact Replication
- The user will always provide the design, layout, HTML, CSS, assets, or screenshots from the live Zoom site (zoom.us) as the source of truth.
- Replicate the design exactly as-is. No additions, no modifications, no "improvements", no extra styling. What Zoom has is what Zoom gets.
- When the user shares HTML or CSS from zoom.us, translate it 1:1 into React/Next.js — same structure, same values, same order.
- If the user provides an asset URL from Zoom's CDN, download it and store it locally rather than creating a custom version.
- Do not add elements, spacing, borders, shadows, or any visual treatment that doesn't exist on the Zoom original.
- Do not remove or simplify anything from the Zoom original unless explicitly told to.
- "As-is" means as-is. No interpretation, no design opinions.

### 10. What NOT to Do
- Don't add `max-width` containers unless Zoom actually uses one (check with Playwright first).
- Don't guess font sizes — extract them.
- Don't use CSS hacks (useEffect to hide elements, display:none toggles).
- Don't create placeholder text icons when real SVG assets are available.
- Don't hardcode version numbers differently from what Zoom shows without reason.

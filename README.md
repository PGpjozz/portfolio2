# Alex Morgan — Developer Portfolio

A modern, animated developer portfolio built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**. Designed for a senior full-stack developer with 10+ years of experience.

## Tech Stack

- **Framework** — Next.js 14 (App Router)
- **Language** — TypeScript
- **Styling** — Tailwind CSS v3
- **Animations** — Framer Motion
- **Icons** — Lucide React
- **Type animation** — react-type-animation
- **Scroll detection** — react-intersection-observer
- **Fonts** — Inter + JetBrains Mono (Google Fonts)

## Sections

| Section | Description |
|---|---|
| **Hero** | Two-column layout with animated code card, type animation, floating stats badges |
| **Tech Marquee** | Infinite scrolling dual-row tech strip |
| **About** | Bio, animated stats cards (years, projects, clients) |
| **Skills** | Skill bars by category + tech badge cloud |
| **Experience** | 4-role timeline spanning 10 years with highlights |
| **Projects** | 6 projects with filter tabs and live/GitHub links |
| **Testimonials** | 4 peer/manager quotes in gradient-bordered cards |
| **Contact** | Contact form with loading/success states + info cards |
| **Footer** | Links, socials, back-to-top |

## Features

- Scroll progress bar (top of page)
- Custom animated cursor (desktop only)
- Sticky navbar with active section highlight
- Intersection observer entrance animations
- `gradient-border` and `glass` utility classes
- Fully responsive (mobile-first)
- SEO metadata via Next.js Metadata API

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Personalisation Checklist

- [ ] Replace `"Alex Morgan"` in `layout.tsx`, `Navbar.tsx`, `Footer.tsx`, `Hero.tsx`
- [ ] Update social links (`href`) in `Hero.tsx` and `Footer.tsx`
- [ ] Edit experience entries in `components/Experience.tsx`
- [ ] Edit project cards in `components/Projects.tsx`
- [ ] Edit testimonials in `components/Testimonials.tsx`
- [ ] Add `public/resume.pdf` for the Resume button
- [ ] Update contact email in `Contact.tsx` and `Footer.tsx`

## Deploy

```bash
npm run build
```

Deploy to [Vercel](https://vercel.com) with zero config — just connect your repo.

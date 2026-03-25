# CLAUDE.md — Hunter Solutions AI-Native Platform

## Project Overview

**Hunter Solutions** is a 100% AI-Native leadership and development firm serving B2B/C-Level executives. This codebase is the public-facing platform for the company's three core service pillars and BOAT (Business Orchestration and Automation Technologies) methodology.

**Core Positioning:**
- Not a technology vendor — a **results-driven orchestration firm**
- Proposes value: ROI through AI-driven automation, not software implementation
- Target audience: C-suite executives, enterprise operations leaders
- Geographic focus: Latin America (100% remote)

---

## Brand & Messaging Framework

### The Three Pillars of Service

1. **Consultoría Estratégica en IA** — Fractional CTO/CIO leadership (15+ years exec experience)
2. **Desarrollo Impulsado por IA** — 10x execution capacity for legacy modernization
3. **Orquestación de Agentes (Agéntica)** — Autonomous agent ecosystems for end-to-end process automation

### BOAT Methodology (NOT a service — an architectural philosophy)

- **Unificación**: Convergence of AI, Process Automation, and Data Fabric
- **Resiliencia**: Distributed systems with 99.99% uptime guarantees
- **Gobernanza Humana**: Human-in-the-Loop decision-making, ethical AI governance

### Key Messaging Rules

- ✅ **Lead with ROI and business results** — always quantify impact
- ✅ **Use "orquestación" metaphor** — orchestration, not implementation
- ✅ **Emphasize 10x capacity and speed** — 3x faster, 40% cost savings, 98% precision
- ✅ **Reference internal "motor de ejecución 10x"** — no Kairos Lab brand exposure
- ❌ **Never position technology as the end goal** — it's always a catalyst
- ❌ **No generic IT consulting language** — avoid "digital transformation," use "orchestration"
- ❌ **No mention of "product features"** — talk about architectural advantages

---

## Technical Stack

### Core Technologies
- **Framework**: Next.js 16+ (React with App Router)
- **Styling**: Tailwind CSS + CSS modules
- **Internationalization**: Custom i18n system (Spanish/English)
- **Icons**: Lucide React
- **Form Handling**: Typeform embeds (contact forms)
- **Email**: Resend API (contact submissions)
- **Deployment**: Vercel (or any Next.js-compatible hosting)

### Key Files & Architecture

```
src/
├── app/
│   ├── page.tsx              # Main landing page (all sections)
│   ├── layout.tsx            # Root layout with providers
│   └── api/
│       ├── contact/route.ts  # Contact form API
│       └── apply/route.ts    # Consultant application API
├── components/
│   ├── hero-section.tsx      # Hero with new "Stop implementing" messaging
│   ├── about-section.tsx     # Company positioning (AI-Native DNA)
│   ├── services-section.tsx  # 3 pillars grid (Brain, Layers, Network icons)
│   ├── why-us-section.tsx    # Comparison: Traditional IT vs AI-Native
│   ├── manifesto-section.tsx # BOAT Motor de Certeza (3 pillars)
│   ├── community-section.tsx # Team/consultant network
│   ├── contact-section.tsx   # Diagnostic session booking
│   ├── footer.tsx            # Footer with updated navigation
│   └── navigation.tsx        # Header with language toggle
├── lib/
│   ├── i18n.tsx              # Centralized translations (ES + EN)
│   └── utils.ts              # Utility functions
└── styles/
    └── globals.css           # Global Tailwind directives
```

### i18n Structure

All page copy is **centralized in `lib/i18n.tsx`** in bilingual form (Spanish primary, English mirrored):

```typescript
const es = {
  nav: { ... },
  hero: { badge, title, subtitle, ctaPrimary, ctaSecondary, stats },
  about: { title, subtitle, floatingCard, highlights },
  services: { label, title, items: [{ title, description, features, detail }] },
  whyUs: { title, comparison: [], stats: [] },
  manifesto: { label, version, title, pillars: [] }, // BOAT Motor de Certeza
  community: { title, clientTitle, consultantTitle, ... },
  contact: { title, ctaTitle, ... },
  footer: { services: [], company: [], legal: [] },
};

const en: Translations = { /* mirror of es with English translations */ };
```

### Component Pattern

Components pull from `useI18n()` hook:

```typescript
export function HeroSection() {
  const { t } = useI18n();

  return (
    <section>
      <h1>{t.hero.title}</h1>
      <p>{t.hero.subtitle}</p>
      <button>{t.hero.ctaPrimary}</button>
    </section>
  );
}
```

This makes **translation changes instant** — no component rewrites needed.

---

## Development Workflow

### When Adding/Updating Content

1. **Update `lib/i18n.tsx`** with new copy (Spanish first, then English)
2. Components automatically reflect changes via `t` object
3. Test both languages using the language toggle in the navigation

### When Changing Service Descriptions

1. Edit `services.items[]` array in `lib/i18n.tsx`
2. Only modify 3 items (Consultoría, Desarrollo, Orquestación)
3. Keep features, benefits, approach, idealFor, caseStudy structure intact

### When Updating BOAT Methodology

The "Manifesto" section (`manifesto.*` in i18n) is **NOT a manifesto** — it's the BOAT Motor de Certeza:
- Label: "Metodología BOAT"
- Title: "El Motor de Certeza que Garantiza su ROI"
- **Always** position as architectural philosophy, not a service
- 3 pillars: Unificación, Resiliencia, Gobernanza Humana

### When Adding New Icons

Service icons:
- Located in `components/services-section.tsx`
- Current: `Brain` (Consultoría), `Layers` (Desarrollo), `Network` (Orquestación)
- Must import from lucide-react only

BOAT (Manifesto) icons:
- Located in `components/manifesto-section.tsx`
- Current: `GitMerge` (Unificación), `Shield` (Resiliencia), `Users` (Gobernanza Humana)

---

## Key Constraints

### Brand Rules
- ✅ Always use "Hunter Solutions" (singular)
- ✅ Refer to internal team as "motor de ejecución 10x" or "célula de ejecución"
- ❌ Never mention "Kairos Lab" (kept internal)
- ❌ Never position as a "product company" or "software vendor"

### Messaging Rules
- ✅ Lead with ROI: "40% savings," "3x faster," "99.99% uptime"
- ✅ Use "orquestación," "agentes autónomos," "gobernanza ética"
- ❌ Avoid generic: "digital transformation," "IT consulting," "software solutions"
- ❌ No tech-first language: always frame around business outcomes

### Navigation Structure
- Home (Inicio)
- About Us (Nosotros)
- Services (Servicios) — the 3 pillars
- Advantages (Ventajas) — Why Us comparison table
- Methodology (Metodología) — BOAT Motor de Certeza
- Team (Equipo) — Community/consultant network
- Toolbox (Herramientas) — Curated tools
- Contact (Contacto) — Diagnostic session booking

---

## Performance & SEO

### Current Lighthouse Targets
- Performance: **90+**
- Accessibility: **95+**
- Best Practices: **95+**
- SEO: **95+**

### Key Optimizations
- Image lazy loading via Next.js `<Image>`
- CSS-in-JS via Tailwind (no external CSS file)
- Font optimization via Google Fonts preconnect
- Zero JavaScript frameworks except React (required)

### SEO Metadata
- **Title**: "Hunter Solutions — Firma AI-Native de Liderazgo y Desarrollo"
- **Description**: "Orquestamos resultados de negocio mediante Agéntica avanzada, metodología BOAT y liderazgo ejecutivo de 15+ años. Ahorro 40%, implementación 3x más rápida."
- **OG Image**: Use `/images/og-image.jpg` (1200x630px)
- **Canonical**: Always present for each route

---

## Testing Checklist Before Deployment

- [ ] Both Spanish and English render correctly (use language toggle)
- [ ] Hero title is "Deje de implementar software. Empiece a orquestar resultados de negocio."
- [ ] 3 service pillars display (not 4 or 6)
- [ ] BOAT section shows Unificación, Resiliencia, Gobernanza Humana
- [ ] Navigation shows "Metodología" (not "Manifiesto")
- [ ] Navigation shows "Equipo" (not "Comunidad")
- [ ] All CTAs say "Diagnóstico Estratégico" (not "Consulta Gratis")
- [ ] No "Kairos Lab" text anywhere on site
- [ ] Contact form works (Typeform embed loads)
- [ ] Language toggle switches between ES/EN seamlessly
- [ ] Mobile responsive on iPhone 12, Android phone
- [ ] Lighthouse scores 90+ across all categories

---

## Future Development Guide

### Adding a New Section

1. Create component in `components/new-section.tsx`
2. Add copy to `lib/i18n.tsx` (both `es` and `en`)
3. Import in `app/page.tsx`
4. Add section ID for navigation anchor (lowercase, hyphenated)
5. Add navigation link to `nav.*` in i18n
6. Test bilingual rendering

### Changing the Hero Image

- Replace `/public/images/hero-bg.jpg`
- Update alt text in `HeroSection` component
- Ensure image is optimized (<200KB)
- Test lazy loading in Chrome DevTools

### Updating Consultant Application Modal

- Edit `community.applyModal.*` in `lib/i18n.tsx`
- Modal form is in `ConsultantApplyModal` component
- Update form fields if needed (currently: name, email, phone, LinkedIn, years, specialization, availability, bio)
- Form submits to `/api/apply` endpoint

### Adding Analytics

- Open Graph meta tags are in `app/layout.tsx`
- Add Google Analytics 4 script in `<head>` when ready
- Track conversion events for "Diagnóstico Estratégico" clicks

---

## Common Mistakes to Avoid

❌ **Changing service count from 3** — The 3-pillar structure is intentional and brand-defining
❌ **Using "Manifiesto" instead of "Metodología BOAT"** — Repositioned content, update everywhere
❌ **Mentioning "Kairos Lab"** — Internal division, not public brand
❌ **Generic IT consulting language** — Always connect to business orchestration/ROI
❌ **Adding more stats than 3** — Current: 21+ years, 3x faster, 40% savings
❌ **Forgetting bilingual updates** — Every content change must be ES + EN
❌ **Changing icon counts** — Services must stay 3, BOAT must stay 3

---

## Contact & Deployments

- **Netlify Analytics**: monitor site performance
- **Formspree / Resend**: contact form backend (already configured)
- **Vercel**: recommended deployment platform for Next.js
- **GitHub**: source of truth for all code

---

## Version History

- **v1.0** (2026-03-23): AI-Native rebrand complete
  - 4 services → 3 pillars
  - Manifesto → BOAT Motor de Certeza
  - Updated all CTAs to "Diagnóstico Estratégico"
  - Removed Kairos Lab references
  - Updated navigation (Metodología, Equipo)
  - Bilingual content verified (ES + EN)

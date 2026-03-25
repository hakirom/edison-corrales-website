# Edison Corrales - Personal Brand Website

Professional website for Edison Corrales, executive leadership consultant specializing in strategic transformation, AI-driven modernization, and business orchestration.

## 🌐 Features

- **Bilingual Support** (Spanish/English) with language toggle
- **Responsive Design** (Mobile-first, optimized for all devices)
- **Case Studies** showcasing real transformation results
- **Service Offerings** (Strategic AI Consulting, AI-Driven Modernization, Agent Orchestration)
- **Contact Form** for scheduling consultations
- **Dark Theme** with gold accents for professional appearance
- **Optimized Performance** (Lighthouse 90+)

## 🛠️ Tech Stack

- **Framework**: Next.js 15+ with App Router
- **Styling**: Tailwind CSS 4+
- **Internationalization**: Custom i18n system (ES/EN)
- **Icons**: Lucide React
- **Form Handling**: Native HTML + API routes
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Main landing page
│   ├── layout.tsx            # Root layout with i18n provider
│   └── api/
│       └── contact/route.ts  # Contact form endpoint
├── components/
│   ├── navigation.tsx        # Header with language toggle
│   ├── hero-section.tsx
│   ├── about-section.tsx
│   ├── services-section.tsx
│   ├── why-us-section.tsx
│   ├── methodology-section.tsx
│   ├── case-studies-section.tsx
│   ├── contact-section.tsx
│   └── footer.tsx
├── hooks/
│   └── use-i18n.ts          # i18n hook
├── lib/
│   ├── i18n.ts              # Translations (ES + EN)
│   └── i18n-context.tsx     # i18n context provider
└── styles/
    └── globals.css          # Global Tailwind styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` (optional, for email service):
```bash
cp .env.example .env.local
```

3. Start development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🔧 Development

### Build for Production
```bash
npm run build
npm start
```

### Update Content

All page copy is centralized in `src/lib/i18n.ts` with bilingual support:

```typescript
const es = {
  hero: { title, subtitle, ... },
  services: { items: [...] },
  // ... other sections
};

const en = { /* English mirror */ };
```

To update content:
1. Edit `src/lib/i18n.ts`
2. Changes reflect automatically via `useI18n()` hook
3. Test both languages using the language toggle

### Adding Sections

1. Create component in `src/components/new-section.tsx`
2. Add translations to `lib/i18n.ts`
3. Import in `app/page.tsx`
4. Add navigation link

### Styling

- Uses Tailwind CSS with custom color tokens
- Dark theme: `primary-900`, `secondary-800`
- Accent color: `accent-500` (gold)
- Global styles in `src/styles/globals.css`

## 📧 Contact Form Integration

The contact form in `contact-section.tsx` submits to `/api/contact`.

**To enable email notifications:**

1. Sign up for [Resend](https://resend.com) (or similar)
2. Add API key to `.env.local`:
   ```
   RESEND_API_KEY=your_key
   ```
3. Uncomment email service code in `src/app/api/contact/route.ts`

Currently, form submissions are logged to console.

## 🌍 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel auto-deploys on push to main
4. Configure environment variables in Vercel dashboard

### Deploy Elsewhere

- Works on any Node.js 18+ hosting
- Supports static export (optional optimization)
- Build: `npm run build`
- Start: `npm start`

## 📊 Performance

Lighthouse targets:
- Performance: **90+**
- Accessibility: **95+**
- Best Practices: **95+**
- SEO: **95+**

## 🌐 Language Toggle

Users can switch between Spanish (ES) and English (EN) via the button in the navigation bar. Language preference is managed via React Context (`useI18n` hook).

## 📝 License

© 2026 Edison Corrales. All rights reserved.

"use client";

import { useI18n } from "@/hooks/use-i18n";

export function HeroSection() {
  const { t } = useI18n();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20"
    >
      <div className="container max-w-4xl">
        <div className="text-center space-y-6">
          <div className="inline-block px-4 py-2 bg-secondary-700 text-accent-500 rounded-full text-sm font-semibold">
            {t.hero.badge}
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            {t.hero.title}
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="#contact" className="btn-primary">
              {t.hero.ctaPrimary}
            </a>
            <button className="btn-secondary">
              {t.hero.ctaSecondary}
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-12">
            {t.hero.stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent-500">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400 mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

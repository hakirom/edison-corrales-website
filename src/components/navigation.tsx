"use client";

import { useI18n } from "@/hooks/use-i18n";

export function Navigation() {
  const { t, language, setLanguage } = useI18n();

  return (
    <nav className="sticky top-0 z-50 bg-primary-900/95 backdrop-blur-sm border-b border-secondary-700">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="text-2xl font-bold text-accent-500">
          Edison
        </a>

        <div className="hidden md:flex gap-8">
          <a href="#home" className="text-sm hover:text-accent-500 transition">
            {t.nav.home}
          </a>
          <a href="#about" className="text-sm hover:text-accent-500 transition">
            {t.nav.about}
          </a>
          <a
            href="#services"
            className="text-sm hover:text-accent-500 transition"
          >
            {t.nav.services}
          </a>
          <a
            href="#advantages"
            className="text-sm hover:text-accent-500 transition"
          >
            {t.nav.advantages}
          </a>
          <a
            href="#methodology"
            className="text-sm hover:text-accent-500 transition"
          >
            {t.nav.methodology}
          </a>
          <a
            href="#caseStudies"
            className="text-sm hover:text-accent-500 transition"
          >
            {t.nav.caseStudies}
          </a>
          <a
            href="#contact"
            className="text-sm hover:text-accent-500 transition"
          >
            {t.nav.contact}
          </a>
        </div>

        <button
          onClick={() => setLanguage(language === "es" ? "en" : "es")}
          className="px-4 py-2 border border-accent-500 text-accent-500 rounded hover:bg-accent-500 hover:text-primary-900 transition text-sm"
        >
          {language === "es" ? "EN" : "ES"}
        </button>
      </div>
    </nav>
  );
}

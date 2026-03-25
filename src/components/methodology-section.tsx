"use client";

import { useI18n } from "@/hooks/use-i18n";

export function MethodologySection() {
  const { t } = useI18n();

  return (
    <section id="methodology" className="bg-primary-900">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{t.methodology.title}</h2>
          <p className="text-slate-300">{t.methodology.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {t.methodology.phases.map((phase, idx) => (
            <div key={idx} className="relative">
              <div className="bg-secondary-800 p-8 rounded-lg border border-secondary-700 h-full">
                <div className="text-accent-500 text-4xl font-bold mb-4">
                  {idx + 1}
                </div>
                <h3 className="font-bold mb-3 text-lg">{phase.title}</h3>
                <p className="text-slate-400 text-sm">{phase.description}</p>
              </div>
              {idx < t.methodology.phases.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-accent-500 transform -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

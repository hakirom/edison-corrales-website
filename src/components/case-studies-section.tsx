"use client";

import { useI18n } from "@/hooks/use-i18n";
import { TrendingUp } from "lucide-react";

export function CaseStudiesSection() {
  const { t } = useI18n();

  return (
    <section id="caseStudies" className="bg-secondary-800">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{t.caseStudies.title}</h2>
          <p className="text-slate-300">{t.caseStudies.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.caseStudies.items.map((caseStudy, idx) => (
            <div
              key={idx}
              className="bg-primary-900 p-8 rounded-lg border border-secondary-700 hover:border-accent-500 transition"
            >
              <h3 className="text-lg font-bold text-accent-500 mb-4">
                {caseStudy.company}
              </h3>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-xs text-slate-400 uppercase font-semibold mb-2">
                    Desafío
                  </p>
                  <p className="text-sm text-slate-300">{caseStudy.challenge}</p>
                </div>

                <div>
                  <p className="text-xs text-slate-400 uppercase font-semibold mb-2">
                    Solución
                  </p>
                  <p className="text-sm text-slate-300">{caseStudy.solution}</p>
                </div>

                <div>
                  <p className="text-xs text-slate-400 uppercase font-semibold mb-2">
                    Resultado
                  </p>
                  <p className="text-sm text-accent-400">{caseStudy.result}</p>
                </div>
              </div>

              <div className="pt-6 border-t border-secondary-700">
                <div className="space-y-2">
                  {caseStudy.metrics.map((metric, midx) => (
                    <div
                      key={midx}
                      className="flex items-start gap-2 text-xs text-slate-300"
                    >
                      <TrendingUp className="w-3 h-3 text-accent-500 mt-0.5 flex-shrink-0" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

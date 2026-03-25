"use client";

import { useI18n } from "@/hooks/use-i18n";
import { Check } from "lucide-react";

export function WhyUsSection() {
  const { t } = useI18n();

  return (
    <section id="advantages" className="bg-secondary-800">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{t.whyUs.title}</h2>
          <p className="text-slate-300">{t.whyUs.subtitle}</p>
        </div>

        <div className="mb-16 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-secondary-700">
              <tr>
                <th className="pb-4 font-bold text-accent-500">Aspecto</th>
                <th className="pb-4 font-bold">Consultores Tradicionales</th>
                <th className="pb-4 font-bold text-accent-500">Edison</th>
              </tr>
            </thead>
            <tbody>
              {t.whyUs.comparison.map((row, idx) => (
                <tr key={idx} className="border-b border-secondary-700">
                  <td className="py-4 font-semibold">{row.aspect}</td>
                  <td className="py-4 text-slate-400">{row.traditional}</td>
                  <td className="py-4 text-slate-300">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" />
                      <span>{row.edison}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {t.whyUs.stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl font-bold text-accent-500 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

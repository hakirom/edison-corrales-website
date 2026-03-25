"use client";

import { useI18n } from "@/hooks/use-i18n";
import { Brain, Layers, Network } from "lucide-react";

const serviceIcons = [
  <Brain key="brain" className="w-10 h-10" />,
  <Layers key="layers" className="w-10 h-10" />,
  <Network key="network" className="w-10 h-10" />,
];

export function ServicesSection() {
  const { t } = useI18n();

  return (
    <section id="services" className="bg-primary-900">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{t.services.title}</h2>
          <p className="text-slate-300">{t.services.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.services.items.map((service, idx) => (
            <div
              key={idx}
              className="bg-secondary-800 p-8 rounded-lg border border-secondary-700 hover:border-accent-500 transition"
            >
              <div className="text-accent-500 mb-4">{serviceIcons[idx]}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-300 text-sm mb-6">
                {service.description}
              </p>

              <div className="space-y-3 mb-6">
                {service.features.map((feature, fidx) => (
                  <div key={fidx} className="flex items-start gap-2">
                    <span className="text-accent-500 text-xs mt-1">•</span>
                    <span className="text-slate-400 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-secondary-700">
                <p className="text-xs text-accent-500 font-semibold">
                  {service.idealFor}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

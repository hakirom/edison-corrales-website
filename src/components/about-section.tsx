"use client";

import { useI18n } from "@/hooks/use-i18n";
import { Target, Zap, Users } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Target: <Target className="w-8 h-8" />,
  Zap: <Zap className="w-8 h-8" />,
  Users: <Users className="w-8 h-8" />,
};

export function AboutSection() {
  const { t } = useI18n();

  return (
    <section id="about" className="bg-secondary-800">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">{t.about.title}</h2>
            <p className="text-accent-500 font-semibold mb-4">
              {t.about.subtitle}
            </p>
            <p className="text-slate-300 mb-6">{t.about.bio}</p>

            <div className="space-y-3">
              {t.about.achievements.map((achievement, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="text-accent-500 mt-1">✓</div>
                  <p className="text-slate-300">{achievement}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            {t.about.highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="bg-primary-900 p-6 rounded-lg border border-secondary-700 hover:border-accent-500 transition"
              >
                <div className="text-accent-500 mb-3">
                  {
                    iconMap[
                      highlight.icon as keyof typeof iconMap
                    ]
                  }
                </div>
                <h3 className="font-bold mb-2">{highlight.title}</h3>
                <p className="text-slate-400 text-sm">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

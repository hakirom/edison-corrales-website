"use client";

import { useI18n } from "@/hooks/use-i18n";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-primary-950 border-t border-secondary-700">
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h4 className="font-bold text-accent-500 mb-4">Edison Corrales</h4>
            <p className="text-sm text-slate-400">{t.footer.credentials}</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Navegación</h4>
            <div className="space-y-2">
              {t.footer.nav.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="text-sm text-slate-400 hover:text-accent-500 transition block"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Conexiones</h4>
            <div className="space-y-2">
              <a
                href="https://www.linkedin.com/in/edisoncorrales"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-400 hover:text-accent-500 transition block"
              >
                LinkedIn
              </a>
              <a
                href="mailto:edison.corrales@gmail.com"
                className="text-sm text-slate-400 hover:text-accent-500 transition block"
              >
                Email
              </a>
              <a
                href="https://www.youtube.com/watch"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-400 hover:text-accent-500 transition block"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-700 pt-8">
          <p className="text-sm text-slate-400 text-center">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import React, { createContext, ReactNode, useState } from "react";
import { es, en } from "./i18n";
import type { Translations } from "./i18n";

type Language = "es" | "en";

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

export const I18nContext = createContext<I18nContextType | undefined>(
  undefined
);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");

  const t = language === "es" ? es : en;

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

import type { Metadata } from "next";
import { I18nProvider } from "@/lib/i18n-context";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Edison Corrales — Consultor de Liderazgo Estratégico",
  description:
    "Asesor ejecutivo especializado en transformación estratégica, modernización con IA y orquestación de procesos empresariales. 15+ años liderando Fortune 500.",
  icons: "/favicon.ico",
  openGraph: {
    title: "Edison Corrales — Consultor de Liderazgo Estratégico",
    description:
      "Asesor ejecutivo especializado en transformación estratégica, modernización con IA y orquestación de procesos empresariales.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}

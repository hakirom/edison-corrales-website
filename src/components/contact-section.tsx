"use client";

import { useI18n } from "@/hooks/use-i18n";
import { useState } from "react";

export function ContactSection() {
  const { t } = useI18n();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    challenge: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create WhatsApp message with form data
    const message = `¡Hola Edison! 👋\n\nMe gustaría conectar contigo:\n\n*Nombre:* ${formData.name}\n*Email:* ${formData.email}\n*Empresa:* ${formData.company}\n*Cargo:* ${formData.role}\n*Desafío:* ${formData.challenge}`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);

    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/573168315059?text=${encodedMessage}`, "_blank");

    // Reset form and show success message
    setStatus("success");
    setFormData({ name: "", email: "", company: "", role: "", challenge: "" });
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section id="contact" className="bg-secondary-800">
      <div className="container max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{t.contact.title}</h2>
          <p className="text-slate-300">{t.contact.subtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder={t.contact.formFields.name}
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-primary-900 border border-secondary-700 rounded px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-accent-500"
            />
            <input
              type="email"
              name="email"
              placeholder={t.contact.formFields.email}
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-primary-900 border border-secondary-700 rounded px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-accent-500"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="company"
              placeholder={t.contact.formFields.company}
              value={formData.company}
              onChange={handleChange}
              required
              className="bg-primary-900 border border-secondary-700 rounded px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-accent-500"
            />
            <input
              type="text"
              name="role"
              placeholder={t.contact.formFields.role}
              value={formData.role}
              onChange={handleChange}
              required
              className="bg-primary-900 border border-secondary-700 rounded px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-accent-500"
            />
          </div>

          <textarea
            name="challenge"
            placeholder={t.contact.formFields.challenge}
            value={formData.challenge}
            onChange={handleChange}
            required
            rows={5}
            className="w-full bg-primary-900 border border-secondary-700 rounded px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-accent-500"
          />

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full btn-primary disabled:opacity-50"
          >
            {status === "loading"
              ? "Enviando..."
              : t.contact.formFields.button}
          </button>

          {status === "success" && (
            <p className="text-center text-green-400 text-sm">
              {t.contact.successMessage}
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-red-400 text-sm">
              {t.contact.errorMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

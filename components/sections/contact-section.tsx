"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/lib/site-config";

type FormStatus = "idle" | "sending" | "success" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      phone: data.get("phone"),
      email: data.get("email"),
      plan: data.get("plan"),
      consent: data.get("consent") === "on",
      website: data.get("website"),
    };

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "Não foi possível enviar seus dados.");
      }

      form.reset();
      setStatus("success");
      setMessage("Recebemos seus dados. Em breve nossa equipe entrará em contato.");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Não foi possível enviar seus dados.",
      );
    }
  }

  return (
    <section aria-labelledby="contact-title" className="section contact" id="contato">
      <div className="container contact-grid">
        <div className="contact-copy">
          <span className="eyebrow">Vamos conversar</span>
          <h2 id="contact-title">Dê o primeiro passo.</h2>
          <p>
            Conte qual é seu objetivo e nossa equipe vai indicar a melhor opção
            para sua rotina.
          </p>
          <dl className="contact-details">
            <div>
              <dt>Telefone</dt>
              <dd>{siteConfig.phoneDisplay}</dd>
            </div>
            <div>
              <dt>E-mail</dt>
              <dd><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></dd>
            </div>
            <div>
              <dt>Endereço</dt>
              <dd>{siteConfig.address}</dd>
            </div>
            <div>
              <dt>Horário</dt>
              <dd>{siteConfig.openingHours}</dd>
            </div>
          </dl>
        </div>

        <form className="lead-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="lead-name">Nome</label>
            <input id="lead-name" name="name" type="text" autoComplete="name" required minLength={2} />
          </div>
          <div className="form-field">
            <label htmlFor="lead-phone">Telefone / WhatsApp</label>
            <input id="lead-phone" name="phone" type="tel" autoComplete="tel" required minLength={8} />
          </div>
          <div className="form-field">
            <label htmlFor="lead-email">E-mail <span>(opcional)</span></label>
            <input id="lead-email" name="email" type="email" autoComplete="email" />
          </div>
          <div className="form-field">
            <label htmlFor="lead-plan">Plano de interesse</label>
            <select id="lead-plan" name="plan" defaultValue="">
              <option value="" disabled>Selecione</option>
              <option>Essencial</option>
              <option>Gaviões Total</option>
              <option>Flexível</option>
            </select>
          </div>
          <div className="honeypot" aria-hidden="true">
            <label htmlFor="lead-website">Não preencher</label>
            <input id="lead-website" name="website" tabIndex={-1} autoComplete="off" />
          </div>
          <label className="consent">
            <input name="consent" type="checkbox" required />
            <span>Li e aceito a <a href="/privacidade">Política de Privacidade</a>.</span>
          </label>
          <button className="button" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Enviando..." : "Quero conversar"}
          </button>
          {message && (
            <p className={`form-status ${status}`} role="status" aria-live="polite">
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

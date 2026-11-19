"use client";

import { useCallback, useEffect, useSyncExternalStore } from "react";

const STORAGE_KEY = "academia-gavioes-cookie-consent";
const CONSENT_EVENT = "academia-gavioes-cookie-consent-change";

function subscribeToConsent(onStoreChange: () => void) {
  window.addEventListener(CONSENT_EVENT, onStoreChange);
  window.addEventListener("storage", onStoreChange);

  return () => {
    window.removeEventListener(CONSENT_EVENT, onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

function getConsentSnapshot() {
  return localStorage.getItem(STORAGE_KEY);
}

function getServerConsentSnapshot() {
  return null;
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function CookieConsent({ gaId }: { gaId?: string }) {
  const consentValue = useSyncExternalStore(
    subscribeToConsent,
    getConsentSnapshot,
    getServerConsentSnapshot,
  );

  const loadAnalytics = useCallback(() => {
    if (!gaId || document.querySelector(`script[data-ga-id="${gaId}"]`)) return;

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };
    window.gtag("js", new Date());
    window.gtag("config", gaId, { anonymize_ip: true });

    const script = document.createElement("script");
    script.async = true;
    script.dataset.gaId = gaId;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script);
  }, [gaId]);

  useEffect(() => {
    if (consentValue === "accepted") loadAnalytics();
  }, [consentValue, loadAnalytics]);

  function consent(value: "accepted" | "declined") {
    localStorage.setItem(STORAGE_KEY, value);
    window.dispatchEvent(new Event(CONSENT_EVENT));

    if (value === "accepted") {
      loadAnalytics();
    }
  }

  if (consentValue !== null) return null;

  return (
    <aside className="cookie-banner" role="dialog" aria-label="Preferências de cookies">
      <p>
        Usamos cookies opcionais para analisar o uso do site e melhorar sua experiência.
        <a href="/privacidade"> Saiba mais.</a>
      </p>
      <div className="cookie-actions">
        <button className="cookie-button cookie-button-secondary" type="button" onClick={() => consent("declined")}>
          Apenas essenciais
        </button>
        <button className="cookie-button" type="button" onClick={() => consent("accepted")}>
          Aceitar cookies
        </button>
      </div>
    </aside>
  );
}

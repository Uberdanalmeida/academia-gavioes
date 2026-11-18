import { plans } from "@/lib/data/plans";
import { siteConfig } from "@/lib/site-config";

export function PlansSection() {
  const whatsappUrl = siteConfig.whatsapp
    ? `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Olá! Tenho interesse em conhecer os planos da Academia Gaviões.")}`
    : `mailto:${siteConfig.email}`;

  return (
    <section aria-labelledby="plans-title" className="section plans" id="planos">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Seu treino começa com um passo</span>
          <h2 id="plans-title">Um plano para cada objetivo.</h2>
          <p>
            Escolha a opção que combina com a sua rotina e fale com a nossa
            equipe para saber mais.
          </p>
        </div>
        <div className="plan-grid">
          {plans.map((plan) => (
            <article
              className={`plan-card${plan.featured ? " plan-card-featured" : ""}`}
              key={plan.name}
            >
              <span className="plan-label">{plan.label}</span>
              <h3>{plan.name}</h3>
              <p className="plan-description">{plan.description}</p>
              <p className="plan-price">
                {plan.price}
                <small> {plan.period}</small>
              </p>
              <a
                className={`button${plan.featured ? "" : " button-secondary"}`}
                href={whatsappUrl}
                target={siteConfig.whatsapp ? "_blank" : undefined}
                rel={siteConfig.whatsapp ? "noopener noreferrer" : undefined}
              >
                Tenho interesse <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Como a Academia Gaviões coleta, utiliza e protege dados pessoais.",
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="policy-page">
        <div className="container">
          <span className="eyebrow">Privacidade e LGPD</span>
          <h1>Política de Privacidade</h1>
          <p className="policy-intro">
            Esta página explica como tratamos os dados informados neste site.
          </p>

          <section>
            <h2>Dados coletados</h2>
            <p>
              Podemos coletar nome, telefone, e-mail, plano de interesse e dados
              técnicos de navegação quando enviados voluntariamente pelos formulários.
            </p>
          </section>

          <section>
            <h2>Finalidade</h2>
            <p>
              Os dados são usados para responder solicitações de contato, apresentar
              planos e realizar atendimento comercial.
            </p>
          </section>

          <section>
            <h2>Cookies e análise</h2>
            <p>
              Cookies de análise só são utilizados após consentimento. Você pode
              revogar sua escolha removendo o armazenamento local deste navegador.
            </p>
          </section>

          <section>
            <h2>Compartilhamento e retenção</h2>
            <p>
              Os dados podem ser enviados ao provedor de atendimento configurado pela
              academia e serão mantidos apenas pelo tempo necessário às finalidades
              informadas ou obrigações legais.
            </p>
          </section>

          <section>
            <h2>Contato</h2>
            <p>
              Para solicitar acesso, correção ou exclusão dos dados, entre em contato
              pelo e-mail <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

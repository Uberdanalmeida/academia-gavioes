import { siteConfig } from "@/lib/site-config";
import Link from "next/link";

export function SiteHeader() {
  const whatsappUrl = siteConfig.whatsapp
    ? `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Olá! Gostaria de conhecer a Academia Gaviões.")}`
    : `mailto:${siteConfig.email}`;

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link aria-label="Academia Gaviões - início" className="brand" href="/">
          <span aria-hidden="true" className="brand-mark">
            G
          </span>
          <span>
            GAVIÕES
            <small>ACADEMIA</small>
          </span>
        </Link>

        <nav aria-label="Navegação principal" className="main-nav">
          <Link href="/#estrutura">Estrutura</Link>
          <Link href="/#aulas">Aulas</Link>
          <Link href="/#planos">Planos</Link>
          <Link href="/#contato">Contato</Link>
        </nav>

        <a className="header-cta" href={whatsappUrl} target={siteConfig.whatsapp ? "_blank" : undefined} rel={siteConfig.whatsapp ? "noopener noreferrer" : undefined}>
          Venha treinar <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}

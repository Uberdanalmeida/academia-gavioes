import { siteConfig } from "@/lib/site-config";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer" id="contato">
      <div className="container footer-inner">
        <div>
          <Link aria-label="Academia Gaviões - início" className="brand" href="/">
            <span aria-hidden="true" className="brand-mark">
              G
            </span>
            <span>
              GAVIÕES
              <small>ACADEMIA</small>
            </span>
          </Link>
          <p className="footer-copy">
            © 2026 Academia Gaviões. Todos os direitos reservados.
          </p>
        </div>
        <div className="footer-links">
          <a href={`mailto:${siteConfig.email}`}>Fale com a gente</a>
          <Link href="/#planos">Conheça os planos</Link>
          <Link href="/privacidade">Privacidade</Link>
        </div>
      </div>
    </footer>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer" id="contato">
      <div className="container footer-inner">
        <div>
          <a aria-label="Academia Gaviões - início" className="brand" href="#">
            <span aria-hidden="true" className="brand-mark">
              G
            </span>
            <span>
              GAVIÕES
              <small>ACADEMIA</small>
            </span>
          </a>
          <p className="footer-copy">
            © Academia Gaviões. Todos os direitos reservados.
          </p>
        </div>
        <div className="footer-links">
          <a href="mailto:contato@academiagavioes.com.br">Fale com a gente</a>
          <a href="#planos">Conheça os planos</a>
        </div>
      </div>
    </footer>
  );
}

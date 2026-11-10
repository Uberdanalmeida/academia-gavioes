export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a aria-label="Academia Gaviões - início" className="brand" href="#">
          <span aria-hidden="true" className="brand-mark">
            G
          </span>
          <span>
            GAVIÕES
            <small>ACADEMIA</small>
          </span>
        </a>

        <nav aria-label="Navegação principal" className="main-nav">
          <a href="#estrutura">Estrutura</a>
          <a href="#aulas">Aulas</a>
          <a href="#planos">Planos</a>
        </nav>

        <a className="header-cta" href="#contato">
          Venha treinar <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}

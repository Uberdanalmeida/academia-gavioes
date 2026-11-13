export function HeroSection() {
  return (
    <section aria-labelledby="hero-title" className="hero">
      <div className="container hero-inner">
        <span className="eyebrow">Seu próximo nível começa aqui</span>
        <h1 id="hero-title">
          Mais força.
          <br />
          Mais <span>você.</span>
        </h1>
        <p className="hero-copy">
          Um espaço para superar limites, construir hábitos e celebrar cada
          conquista. Seu treino, no seu ritmo, com a energia dos Gaviões.
        </p>
        <div className="hero-actions">
          <a className="button" href="#planos">
            Escolha seu plano <span aria-hidden="true">→</span>
          </a>
          <a className="button button-secondary" href="#estrutura">
            Conheça a academia
          </a>
        </div>
        <div className="hero-note">
          <span aria-hidden="true" className="status-dot" />
          <span>Treino para todos. Evolução para cada um.</span>
        </div>
      </div>
    </section>
  );
}

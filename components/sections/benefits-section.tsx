const benefits = [
  {
    number: "01",
    title: "Estrutura completa",
    description:
      "Equipamentos para musculação e cardio em um espaço pensado para o seu treino.",
  },
  {
    number: "02",
    title: "Acompanhamento de perto",
    description:
      "Profissionais preparados para orientar seus exercícios e ajudar você a evoluir.",
  },
  {
    number: "03",
    title: "No seu ritmo",
    description:
      "Uma rotina flexível e modalidades variadas para encaixar o treino no seu dia.",
  },
];

export function BenefitsSection() {
  return (
    <section aria-labelledby="benefits-title" className="section benefits" id="estrutura">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">A academia do seu jeito</span>
          <h2 id="benefits-title">Feita para você evoluir.</h2>
          <p>
            O que você precisa para começar, manter o foco e chegar mais longe
            em cada treino.
          </p>
        </div>
        <div className="benefit-grid">
          {benefits.map((benefit) => (
            <article className="benefit-card" key={benefit.number}>
              <span className="card-number">{benefit.number}</span>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

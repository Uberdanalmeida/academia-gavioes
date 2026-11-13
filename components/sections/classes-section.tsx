const classes = [
  {
    icon: "↗",
    name: "Musculação",
    description:
      "Treino de força com equipamentos completos e orientação da nossa equipe.",
  },
  {
    icon: "✳",
    name: "Treino funcional",
    description:
      "Movimento, condicionamento e energia em aulas dinâmicas para todos os níveis.",
  },
  {
    icon: "◉",
    name: "Cardio",
    description:
      "Uma variedade de equipamentos para trabalhar seu ritmo e sua resistência.",
  },
];

export function ClassesSection() {
  return (
    <section aria-labelledby="classes-title" className="section classes" id="aulas">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Encontre seu movimento</span>
          <h2 id="classes-title">Treinos que acompanham você.</h2>
          <p>
            Explore diferentes modalidades e descubra o que faz você querer
            voltar amanhã.
          </p>
        </div>
        <div className="class-grid">
          {classes.map((gymClass) => (
            <article className="class-card" key={gymClass.name}>
              <span aria-hidden="true" className="class-icon">
                {gymClass.icon}
              </span>
              <h3>{gymClass.name}</h3>
              <p>{gymClass.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

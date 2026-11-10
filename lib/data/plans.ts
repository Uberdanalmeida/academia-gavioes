export type GymPlan = {
  name: string;
  label: string;
  description: string;
  price: string;
  period: string;
  featured?: boolean;
};

export const plans: GymPlan[] = [
  {
    name: "Essencial",
    label: "Para começar",
    description: "Acesso à musculação e à estrutura da academia.",
    price: "Consulte",
    period: "nossos valores",
  },
  {
    name: "Gaviões Total",
    label: "Mais completo",
    description: "Musculação, cardio e modalidades selecionadas.",
    price: "Consulte",
    period: "nossos valores",
    featured: true,
  },
  {
    name: "Flexível",
    label: "Do seu jeito",
    description: "Uma opção que acompanha a sua rotina de treinos.",
    price: "Consulte",
    period: "nossos valores",
  },
];

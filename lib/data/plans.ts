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
    price: process.env.NEXT_PUBLIC_PLAN_ESSENTIAL_PRICE || "Consulte",
    period: process.env.NEXT_PUBLIC_PLAN_ESSENTIAL_PERIOD || "nossos valores",
  },
  {
    name: "Gaviões Total",
    label: "Mais completo",
    description: "Musculação, cardio e modalidades selecionadas.",
    price: process.env.NEXT_PUBLIC_PLAN_TOTAL_PRICE || "Consulte",
    period: process.env.NEXT_PUBLIC_PLAN_TOTAL_PERIOD || "nossos valores",
    featured: true,
  },
  {
    name: "Flexível",
    label: "Do seu jeito",
    description: "Uma opção que acompanha a sua rotina de treinos.",
    price: process.env.NEXT_PUBLIC_PLAN_FLEX_PRICE || "Consulte",
    period: process.env.NEXT_PUBLIC_PLAN_FLEX_PERIOD || "nossos valores",
  },
];

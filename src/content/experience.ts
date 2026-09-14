export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export const experiences: ExperienceItem[] = [
  {
    id: 'camtel',
    role: 'Développeur IA / Revenue Assurance',
    company: 'CAMTEL',
    period: '2024',
    description:
      "Conception et développement de GBLRecover — une plateforme de Revenue Assurance traitant 50 606+ comptes avec détection d'anomalies automatisée.",
  },
  {
    id: 'supptic',
    role: 'Fondateur & Lead',
    company: "SUP'PTIC Computer Club",
    period: '2023 — Présent',
    description:
      "Création et animation d'une communauté technique à SUP'PTIC — ateliers Python, IA, développement web, hackathons et mentorat entre étudiants.",
  },
  {
    id: 'claude-cameroon',
    role: 'Community Builder',
    company: 'Claude Cameroon',
    period: '2024 — Présent',
    description:
      "Animation d'une communauté IA locale explorant Claude et les LLMs — ateliers de prompt engineering, littératie IA et opportunités pour les builders camerounais.",
  },
  {
    id: 'independent',
    role: 'Développeur Full-Stack',
    company: 'Indépendant',
    period: '2022 — Présent',
    description:
      "Conception et développement de produits logiciels pour clients et projets personnels — du back-end à l'interface, en passant par l'IA.",
  },
];

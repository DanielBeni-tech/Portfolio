export interface CommunityItem {
  id: string;
  organization: string;
  role: string;
  description: string;
  period: string;
  activities: string[];
}

export const communityActivities: CommunityItem[] = [
  {
    id: 'supptic',
    organization: "SUP'PTIC Computer Club",
    role: 'Fondateur & Lead',
    description:
      "Une communauté technique à SUP'PTIC qui rassemble les étudiants autour du logiciel, de l'IA et de la construction pratique.",
    period: '2023 — Présent',
    activities: [
      'Ateliers Python, IA et développement web',
      'Hackathons et sprints de projets',
      'Mentorat entre pairs et revues de code',
      'Connexion des étudiants à des projets réels',
    ],
  },
  {
    id: 'claude-cameroon',
    organization: 'Claude Cameroon',
    role: 'Community Builder',
    description:
      "Une communauté IA locale explorant Claude et les outils LLM — rendre l'éducation IA accessible au Cameroun.",
    period: '2024 — Présent',
    activities: [
      'Sessions de littératie IA',
      'Ateliers de prompt engineering',
      'Exploration IA en langues locales',
      'Connexion des builders avec des opportunités',
    ],
  },
];

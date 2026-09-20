import { pick } from '@/lib/locale';

export interface CommunityItem {
  id: string;
  organization: string;
  role: string;
  description: string;
  period: string;
  activities: string[];
  image?: string;
}

export const communityActivities: CommunityItem[] = [
  {
    id: 'supptic',
    organization: "SUP'PTIC Computer Club",
    role: 'Président (2026)',
    image: '/community/president-2026.jpg',
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
    role: 'Fondateur',
    image: '/community/collab-club.jpg',
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

const communityEn: CommunityItem[] = [
  {
    ...communityActivities[0],
    role: 'President (2026)',
    description:
      "A technical community at SUP'PTIC that brings students together around software, AI and building in practice.",
    period: '2023 — Present',
    activities: [
      'Python, AI and web development workshops',
      'Hackathons and project sprints',
      'Peer mentoring and code reviews',
      'Connecting students to real projects',
    ],
  },
  {
    ...communityActivities[1],
    role: 'Founder',
    description:
      'A local AI community exploring Claude and LLM tools — making AI education accessible in Cameroon.',
    period: '2024 — Present',
    activities: [
      'AI literacy sessions',
      'Prompt-engineering workshops',
      'AI exploration in local languages',
      'Connecting builders with opportunities',
    ],
  },
];

export function getCommunity() {
  return pick(communityActivities, communityEn);
}

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
    role: 'Président — élu 2026',
    image: '/photos/daniel-event.webp',
    description:
      "Club informatique de l'École nationale supérieure des postes et télécommunications (SUP'PTIC). Membre depuis 2023, président depuis 2026 : logiciel, IA et construction pratique.",
    period: '2023 — Présent · président depuis 2026',
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
    image: '/community/collab-club.webp',
    description:
      "Communauté IA née début 2026 : explorer Claude et les outils LLM, et rendre l'éducation IA accessible au Cameroun.",
    period: 'Début 2026 — Présent',
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
    role: 'President — elected 2026',
    description:
      "Computer club of the National Advanced School of Posts and Telecommunications (SUP'PTIC). Member since 2023, president since 2026: software, AI and building in practice.",
    period: '2023 — Present · president since 2026',
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
      'AI community born in early 2026: exploring Claude and LLM tools, and making AI education accessible in Cameroon.',
    period: 'Early 2026 — Present',
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

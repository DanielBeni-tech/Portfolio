import { pick } from '@/lib/locale';

export interface CompetitionItem {
  id: string;
  name: string;
  edition: string;
  project: string;
  projectHref?: string;
  description: string;
  image: string;
  imageNote?: string;
}

export const competitions: CompetitionItem[] = [
  {
    id: 'orange-business-game',
    name: 'Orange Business Game',
    edition: '2026 · #2CDYS2026',
    project: 'Orange Mboa Business',
    projectHref: '#projects',
    description:
      "Compétition business et produit Orange Cameroun : conception d'une offre digitale data-driven pour PME camerounaises, en équipe, sous contrainte de temps.",
    image: '/competitions/orange-business-game.webp',
  },
  {
    id: 'juin-cursor',
    name: 'JUIN',
    edition: 'Journée Universitaire de l’Informatique Numérique · Cursor Cameroun',
    project: 'SYNTRA',
    projectHref: '#projects',
    description:
      "Hackathon Cursor Cameroun : SYNTRA, messagerie d'entreprise livrée en conditions de compétition.",
    image: '/competitions/juin-syntra.webp',
  },
  {
    id: 'hackverse',
    name: 'Hackverse',
    edition: '2026 · Sujet 07',
    project: 'SANGO',
    projectHref: '#projects',
    description:
      "Routage intelligent pour véhicules de secours — « Les routes qui sauvent des vies ».",
    image: '/competitions/hackverse.webp',
    imageNote: 'Remplace ce visuel par tes photos',
  },
];

const competitionsEn: CompetitionItem[] = [
  {
    ...competitions[0],
    edition: '2026 · #2CDYS2026',
    description:
      'Orange Cameroon business and product competition: design of a data-driven digital offer for Cameroonian SMEs, in a team, under time pressure.',
  },
  {
    ...competitions[1],
    edition: 'University Digital Computing Day · Cursor Cameroon',
    description:
      'Cursor Cameroon hackathon: SYNTRA, an enterprise messenger shipped under competition conditions.',
  },
  {
    ...competitions[2],
    edition: '2026 · Topic 07',
    description: 'Intelligent routing for emergency vehicles — “The roads that save lives”.',
    imageNote: undefined,
  },
];

export function getCompetitions() {
  return pick(competitions, competitionsEn);
}

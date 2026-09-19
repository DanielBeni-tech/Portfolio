export interface CompetitionItem {
  id: string;
  name: string;
  edition: string;
  project: string;
  projectHref?: string;
  description: string;
  image: string;
  imageNote: string;
}

export const competitions: CompetitionItem[] = [
  {
    id: 'orange-business-game',
    name: 'Orange Business Game',
    edition: '2026',
    project: 'À documenter',
    description:
      "Compétition business et produit. Photo à remplacer par tes clichés de l'événement.",
    image: '/competitions/orange-business-game.svg',
    imageNote: 'Remplace ce visuel par tes photos',
  },
  {
    id: 'juin-cursor',
    name: 'JUIN',
    edition: 'Journée Universitaire de l’Informatique Numérique · Cursor Cameroun',
    project: 'SYNTRA',
    projectHref: '#projects',
    description:
      "Hackathon Cursor Cameroun : SYNTRA, messagerie d'entreprise livrée en conditions de compétition.",
    image: '/competitions/juin-cursor-cameroun.svg',
    imageNote: 'Remplace ce visuel par tes photos',
  },
  {
    id: 'hackverse',
    name: 'Hackverse',
    edition: '2026 · Sujet 07',
    project: 'SANGO',
    projectHref: '#projects',
    description:
      "Routage intelligent pour véhicules de secours — « Les routes qui sauvent des vies ».",
    image: '/competitions/hackverse-sango.svg',
    imageNote: 'Remplace ce visuel par tes photos',
  },
];

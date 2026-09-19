export interface HobbyItem {
  id: string;
  title: string;
  detail: string;
}

export const hobbies: HobbyItem[] = [
  {
    id: 'chess',
    title: 'Échecs',
    detail: '1600 Elo',
  },
  {
    id: 'football',
    title: 'Football',
    detail: 'Sur le terrain',
  },
  {
    id: 'scrabble',
    title: 'Scrabble',
    detail: 'Prix interscolaire — enseignement secondaire',
  },
  {
    id: 'games',
    title: 'Jeux vidéo',
    detail: 'Hors écran de code',
  },
];

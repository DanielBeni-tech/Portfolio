import { pick } from '@/lib/locale';

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

const hobbiesEn: HobbyItem[] = [
  { id: 'chess', title: 'Chess', detail: '1600 Elo' },
  { id: 'football', title: 'Football', detail: 'On the pitch' },
  { id: 'scrabble', title: 'Scrabble', detail: 'Interschool prize — secondary education' },
  { id: 'games', title: 'Video games', detail: 'Off the code screen' },
];

export function getHobbies() {
  return pick(hobbies, hobbiesEn);
}

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
  {
    id: 'cooking',
    title: 'Cuisine',
    detail: 'Plats créatifs et expérimentaux',
  },
  {
    id: 'events',
    title: "Animation d'événements",
    detail: 'Maître de cérémonie et organisateur',
  },
];

const hobbiesEn: HobbyItem[] = [
  { id: 'chess', title: 'Chess', detail: '1600 Elo' },
  { id: 'football', title: 'Football', detail: 'On the pitch' },
  { id: 'scrabble', title: 'Scrabble', detail: 'Interschool prize — secondary education' },
  { id: 'games', title: 'Video games', detail: 'Off the code screen' },
  { id: 'cooking', title: 'Cooking', detail: 'Creative and experimental dishes' },
  { id: 'events', title: 'Event Hosting', detail: 'Master of ceremonies and organizer' },
];

export function getHobbies() {
  return pick(hobbies, hobbiesEn);
}

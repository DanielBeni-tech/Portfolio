import { getLocale } from '@/lib/locale';
import { profileEn } from '@/content/en';

export type SkillLevel = 'Maîtrise' | 'Intermédiaire' | 'En apprentissage';
export type SkillChip = { name: string; level: SkillLevel };

const profileFr = {
  name: 'Daniel Beni Mpodol Welisan',
  firstName: 'DANIEL BENI',
  lastName: 'MPODOL WELISAN',
  alias: 'Étudiant ingénieur · Fullstack & Lead Developer · UX/UI · IA',
  title: 'Fullstack & Lead Developer · Frontend & UX/UI · IA Engineer',
  fullTitle: 'Télécommunications · Fullstack · Frontend & UX/UI · IA',
  location: 'Yaoundé / Cameroun',
  description:
    "Étudiant ingénieur en télécommunications, lead développeur fullstack (JavaScript et Python), avec un vrai focus frontend, UI/UX et parcours utilisateur.",
  summary: 'Je conçois, connecte et fais fonctionner des systèmes — du parcours utilisateur jusqu’au réseau.',
  bio: "Étudiant ingénieur en 3e année à SUP'PTIC, freelance depuis 2023. Je mène les projets en fullstack et lead developer : interface, appflow, API et mise en production. La formation télécom ajoute une lecture réseaux, embarquée/IoT et cybersécurité.",
  aboutStory: [
    {
      year: '2022 — 2023',
      title: 'Développement web',
      text: "Passage au web : bases frontend et produits, puis le freelance en 2023.",
      image: '/community/clubinfo.png',
    },
    {
      year: '2023 — 2025',
      title: 'Robotique et systèmes embarqués',
      text: "Première formation pratique : robotique et embarqué, déjà les mains dans le matériel.",
      image: '/photos/electronique.jpg',
    },
    {
      year: '2024 — présent',
      title: 'Ingénierie des télécommunications',
      text: "À SUP'PTIC Yaoundé, 3e année — Ingénieur des Travaux de Télécommunication, Informatique & Réseaux.",
      image: '/photos/daniel-portrait.jpeg',
    },
    {
      year: '2026',
      title: 'Stage CAMTEL, compétitions & AMD',
      text: "Lead fullstack de CARBURFLOW, compétitions (Orange Business Game, JUIN / Cursor Cameroun, Hackverse), puis AMD AI Academy Challenge.",
      image: '/projects/carburflow.jpeg',
    },
  ],
  whatIOffer:
    "Je prends le lead fullstack des produits que je livre : frontend, UX/UI, backend et déploiement. Le challenge AMD prolonge ce profil vers les LLMs, le RAG et les agents IA, avec une culture réseau et sécurité héritée du télécom.",
  currentFocus: [
    'Lead fullstack — frontend, UX/UI et backend',
    'AMD AI Academy Challenge — LLMs, RAG, agents',
    'Réseaux VPN, systèmes embarqués et cybersécurité',
  ],
  stats: [
    { label: 'Projets choisis', value: '9', project: 'CV · GitHub · compétitions', image: '/projects/carburflow.jpeg' },
    { label: 'Année de formation', value: '3e', project: "SUP'PTIC · Informatique & Réseaux", image: '/community/president-2026.jpg' },
    { label: 'Échecs', value: '1600', project: 'Elo · plus football, scrabble, jeux', image: '/photos/chess.png' },
    { label: 'Langues', value: 'FR · B1', project: 'Français · Anglais' },
  ],
  skills: [
    {
      label: 'Développement',
      items: [
        { name: 'Python', level: 'Maîtrise' as const },
        { name: 'JavaScript', level: 'Maîtrise' as const },
        { name: 'React', level: 'Maîtrise' as const },
        { name: 'Node.js', level: 'Intermédiaire' as const },
        { name: 'PostgreSQL', level: 'Intermédiaire' as const },
        { name: 'Docker', level: 'Intermédiaire' as const },
      ],
    },
    {
      label: 'UX/UI & Design',
      items: [
        { name: 'Figma', level: 'Maîtrise' as const },
        { name: 'Design System', level: 'Intermédiaire' as const },
        { name: 'Prototypage', level: 'Maîtrise' as const },
        { name: 'Appflow', level: 'Intermédiaire' as const },
      ],
    },
    {
      label: 'Réseaux',
      items: [
        { name: 'IPv4 / IPv6', level: 'Intermédiaire' as const },
        { name: 'VLAN', level: 'Intermédiaire' as const },
        { name: 'OSPF', level: 'En apprentissage' as const },
        { name: 'ACL', level: 'Intermédiaire' as const },
        { name: 'VPN site-à-site', level: 'En apprentissage' as const },
      ],
    },
    {
      label: 'Embarqué & IoT',
      items: [
        { name: 'C / C++', level: 'Intermédiaire' as const },
        { name: 'Arduino', level: 'Intermédiaire' as const },
        { name: 'ESP32', level: 'Intermédiaire' as const },
        { name: 'Capteurs', level: 'Intermédiaire' as const },
      ],
    },
    {
      label: 'IA & Data',
      items: [
        { name: 'LLMs', level: 'En apprentissage' as const },
        { name: 'RAG', level: 'En apprentissage' as const },
        { name: 'Agents IA', level: 'En apprentissage' as const },
        { name: 'Fine-tuning', level: 'En apprentissage' as const },
        { name: 'Scikit-learn', level: 'Intermédiaire' as const },
      ],
    },
    {
      label: 'Cybersécurité',
      items: [
        { name: 'Wireshark', level: 'Intermédiaire' as const },
        { name: 'Nmap', level: 'Intermédiaire' as const },
      ],
    },
  ],
  softSkills: ['Communication', "Travail d'équipe", 'Gestion de projet', 'Leadership'],
  languages: [
    { name: 'Français', level: 'Natif' },
    { name: 'Anglais', level: 'B1' },
  ],
  phone: '+237 654 516 028',
  email: 'daniel100beni@gmail.com',
  github: 'https://github.com/DanielBeni-tech',
  linkedin: 'https://linkedin.com/in/daniel-beni',
  cvUrl: '/CV-Daniel-Beni.pdf',
  socials: [
    { label: 'GitHub', href: 'https://github.com/DanielBeni-tech', icon: 'github' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/daniel-beni', icon: 'linkedin' },
  ],
  available: true,
};

export const profile = new Proxy(profileFr, {
  get(_target, prop) {
    const src = getLocale() === 'en' ? profileEn : profileFr;
    return Reflect.get(src, prop);
  },
}) as typeof profileFr;

export type Profile = typeof profileFr;

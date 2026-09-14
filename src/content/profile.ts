export const profile = {
  name: 'Daniel Beni',
  firstName: 'DANIEL',
  lastName: 'BENI',
  alias: 'AI Engineer · Builder',
  title: 'AI Engineer · Software Builder',
  fullTitle: 'AI Engineer · Software Builder · Community Builder',
  location: 'Yaoundé / Cameroon',
  description:
    "Je conçois des systèmes intelligents, des produits logiciels et des communautés techniques — de l'IA à l'impact réel.",
  summary: 'Je construis des logiciels intelligents, des produits, et des communautés techniques depuis Yaoundé.',
  bio: "Le chemin va du web et des produits vers l'ingénierie IA. Je suis aussi étudiant en ingénierie des télécommunications, niveau 3, à SUP'PTIC — c'est le terrain. L'identité, c'est ce que je construis.",
  aboutStory: [
    {
      year: '2022',
      title: 'Les premiers produits',
      text: "Je commence par construire des produits web et mobiles pour des clients — du back-end à l'interface. Chaque projet m'apprend que le code sans impact ne sert à rien.",
    },
    {
      year: '2023',
      title: 'Le terrain télécom',
      text: "J'entre en ingénierie des télécommunications à SUP'PTIC. Je fonde le Computer Club — un lieu où les étudiants construisent au lieu de seulement étudier.",
    },
    {
      year: '2024',
      title: "L'IA au service du réel",
      text: "Avec CAMTEL, je conçois GBLRecover — 50 606+ comptes analysés en continu. Je lance Camtel AI, je construis des agents autonomes, des systèmes RAG, et j'explore l'IA locale pour l'Afrique.",
    },
  ],
  whatIOffer: "Je ne livre pas du code. Je livre des systèmes qui fonctionnent, des produits qui durent, et des communautés qui grandissent. Du problème réel à la solution déployée — avec l'IA comme levier, pas comme gadget.",
  currentFocus: [
    'Systèmes IA et produits logiciels',
    'Communautés techniques au Cameroun',
    'Documenter le travail réel, sans chiffres inventés',
  ],
  stats: [
    { label: 'Comptes analysés', value: '50 606+', project: 'GBLRecover' },
    { label: 'Projets réels livrés', value: '3+', project: 'CAMTEL, CARBURFLOW' },
    { label: 'Communautés techniques', value: '2', project: "SUP'PTIC, Claude Cameroon" },
    { label: "Années d'ingénierie", value: '3+', project: 'Télécommunications · IA' },
  ],
  email: 'daniel100beni@gmail.com',
  github: 'https://github.com/DanielBeni-tech',
  linkedin: 'https://linkedin.com/in/daniel-beni',
  socials: [
    { label: 'GitHub', href: 'https://github.com/DanielBeni-tech', icon: 'github' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/daniel-beni', icon: 'linkedin' },
  ],
  available: true,
};

export type Profile = typeof profile;

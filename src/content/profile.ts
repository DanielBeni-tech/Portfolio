export const profile = {
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
  bio: "Étudiant ingénieur en 3e année à SUP'PTIC, je mène les projets en fullstack et lead developer : interface, appflow, API et mise en production. La formation télécom ajoute une lecture réseaux, embarquée/IoT et cybersécurité.",
  aboutStory: [
    {
      year: '2021 — 2023',
      title: 'Développement web & robotique',
      text: "Formation TIC Summit : premières bases en développement web et en robotique, déjà orientées pratique.",
    },
    {
      year: '2024 — présent',
      title: 'Ingénierie des télécommunications',
      text: "À SUP'PTIC Yaoundé, 3e année — Ingénieur des Travaux de Télécommunication, Informatique & Réseaux.",
    },
    {
      year: '2026',
      title: 'Stage CAMTEL & AMD AI Academy',
      text: "Fullstack & lead developer de CARBURFLOW au Service de la Lutte contre la Fraude, puis sélection au AMD AI Academy Challenge (LabLab.ai × AMD).",
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
    { label: 'Projets choisis', value: '8', project: 'CV · GitHub · produits livrés' },
    { label: 'Année de formation', value: '3e', project: "SUP'PTIC · Informatique & Réseaux" },
    { label: 'Challenge en cours', value: 'AMD', project: 'AI Academy · LabLab.ai × AMD' },
    { label: 'Langues', value: 'FR · B1', project: 'Français · Anglais' },
  ],
  skills: [
    {
      label: 'Développement',
      items: ['Python', 'JavaScript', 'React', 'Node.js', 'PostgreSQL', 'Docker'],
    },
    {
      label: 'UX/UI & Design',
      items: ['Figma', 'Design System', 'Prototypage', 'Appflow'],
    },
    {
      label: 'Réseaux',
      items: ['IPv4 / IPv6', 'VLAN', 'OSPF', 'ACL', 'VPN site-à-site'],
    },
    {
      label: 'Embarqué & IoT',
      items: ['C / C++', 'Arduino', 'ESP32', 'Capteurs'],
    },
    {
      label: 'IA & Data',
      items: ['LLMs', 'RAG', 'Agents IA', 'Fine-tuning', 'Scikit-learn'],
    },
    {
      label: 'Cybersécurité',
      items: ['Wireshark', 'Nmap'],
    },
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

export type Profile = typeof profile;

export const profile = {
  name: 'Daniel Beni Mpodoul Wefisan',
  firstName: 'DANIEL BENI',
  lastName: 'MPODOUL WEFISAN',
  alias: 'Étudiant ingénieur · Informatique & Réseaux',
  title: 'Ingénieur Télécommunications · Software Builder',
  fullTitle: 'Télécommunications · Informatique & Réseaux · IA',
  location: 'Yaoundé / Cameroun',
  description:
    "Je conçois, connecte et fais fonctionner des systèmes : réseaux, logiciels, systèmes embarqués et solutions IA.",
  summary: "Je transforme des problèmes concrets en systèmes utiles, du réseau jusqu'à l'application.",
  bio: "Étudiant ingénieur en 3e année à SUP'PTIC, je construis des produits en binôme avec mes camarades et j'explore les réseaux, le développement logiciel, les systèmes embarqués/IoT, l'IA et la cybersécurité.",
  aboutStory: [
    {
      year: '2021 — 2023',
      title: 'Développement web & robotique',
      text: "La formation TIC Summit m'a permis de poser mes premières bases en développement web et en robotique, avec une approche très orientée pratique.",
    },
    {
      year: '2024 — présent',
      title: "Ingénierie des télécommunications",
      text: "À SUP'PTIC Yaoundé, je me forme en télécommunications, informatique et réseaux, tout en construisant des projets avec mes camarades de promotion.",
    },
    {
      year: '2025 — 2026',
      title: 'Systèmes embarqués & projets IA',
      text: "Je complète mon parcours avec une certification en programmation électronique et systèmes embarqués, puis je développe LEKKI, SUPONEAI et CARBURFLOW.",
    },
  ],
  whatIOffer: "Je peux intervenir sur un produit de bout en bout : comprendre le besoin, concevoir le backend, construire l'interface, connecter les données et intégrer les contraintes réseau, sécurité ou embarquées.",
  currentFocus: [
    'Développement backend et full-stack',
    'Réseaux, systèmes embarqués et IoT',
    'IA appliquée, RAG et cybersécurité',
  ],
  stats: [
    { label: 'Projets présentés', value: '3', project: 'CARBURFLOW · LEKKI · SUPONEAI' },
    { label: 'Année de formation', value: '3e', project: "SUP'PTIC · Yaoundé" },
    { label: 'Certification', value: '400 h', project: 'Électronique & systèmes embarqués' },
    { label: 'Langues', value: 'FR · B1', project: 'Français · Anglais' },
  ],
  skills: [
    {
      label: 'Développement',
      items: ['Python', 'React', 'PostgreSQL', 'Docker'],
    },
    {
      label: 'Réseaux',
      items: ['IPv4 / IPv6', 'VLAN', 'OSPF', 'ACL'],
    },
    {
      label: 'Embarqué & IoT',
      items: ['C / C++', 'Arduino', 'ESP32', 'Capteurs'],
    },
    {
      label: 'IA & sécurité',
      items: ['NLP', 'RAG', 'Scikit-learn', 'Wireshark', 'Nmap'],
    },
  ],
  phone: '+237 654 516 028',
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

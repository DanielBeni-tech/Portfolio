import { pick } from '@/lib/locale';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

const servicesFr: ServiceItem[] = [
  {
    id: 'frontend-ux',
    title: 'Frontend & UX/UI',
    description:
      "Interfaces React, design systems, prototypage Figma et parcours applicatif (appflow) — le point où je mène les projets livrés.",
    image: '/photos/daniel-desk.jpeg',
  },
  {
    id: 'fullstack',
    title: 'Fullstack JS & Python',
    description:
      "Produits complets en JavaScript et Python : Node.js, React, Django, PostgreSQL et Docker, de l'API jusqu'à l'écran.",
    image: '/projects/carburflow.jpeg',
  },
  {
    id: 'ai',
    title: 'Ingénierie IA',
    description:
      "LLMs, RAG, agents IA, fine-tuning et recherche sémantique — prolongé par le AMD AI Academy Challenge.",
    image: '/projects/sango.jpeg',
  },
  {
    id: 'networks',
    title: 'Réseaux, IoT & sécurité',
    description:
      "IPv4/IPv6, VLAN, OSPF, ACL, VPN site-à-site, Arduino, ESP32, capteurs, Wireshark et Nmap — le socle télécom.",
    image: '/photos/electronique.jpg',
  },
];

const servicesEn: ServiceItem[] = [
  {
    id: 'frontend-ux',
    title: 'Frontend & UX/UI',
    description:
      'React interfaces, design systems, Figma prototyping and appflow — where I lead the products I ship.',
    image: '/photos/daniel-desk.jpeg',
  },
  {
    id: 'fullstack',
    title: 'Fullstack JS & Python',
    description:
      'Complete products in JavaScript and Python: Node.js, React, Django, PostgreSQL and Docker, from the API to the screen.',
    image: '/projects/carburflow.jpeg',
  },
  {
    id: 'ai',
    title: 'AI engineering',
    description:
      'LLMs, RAG, AI agents, fine-tuning and semantic search — extended by the AMD AI Academy Challenge.',
    image: '/projects/sango.jpeg',
  },
  {
    id: 'networks',
    title: 'Networks, IoT & security',
    description:
      'IPv4/IPv6, VLAN, OSPF, ACL, site-to-site VPN, Arduino, ESP32, sensors, Wireshark and Nmap — the telecom base.',
    image: '/photos/electronique.jpg',
  },
];

export function getServices() {
  return pick(servicesFr, servicesEn);
}

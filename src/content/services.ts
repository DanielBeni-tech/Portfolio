import { pick } from '@/lib/locale';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

const tags = {
  frontend: ['React', 'Next.js', 'Figma', 'Design system', 'Appflow', 'Prototypage'],
  fullstack: ['JavaScript', 'Python', 'Node.js', 'Django', 'PostgreSQL', 'Docker'],
  ai: ['LLMs', 'RAG', 'Agents IA', 'Fine-tuning', 'Scikit-learn'],
  networks: ['IPv4 / IPv6', 'VLAN', 'OSPF', 'VPN site-à-site', 'Arduino', 'ESP32', 'Wireshark', 'Nmap'],
};

const servicesFr: ServiceItem[] = [
  {
    id: 'frontend-ux',
    title: 'Frontend & UX/UI',
    description:
      "Interfaces React, design systems, prototypage Figma et parcours applicatif (appflow) — le point où je mène les projets livrés.",
    tags: tags.frontend,
  },
  {
    id: 'fullstack',
    title: 'Fullstack JS & Python',
    description:
      "Produits complets en JavaScript et Python : Node.js, React, Django, PostgreSQL et Docker, de l'API jusqu'à l'écran.",
    tags: tags.fullstack,
  },
  {
    id: 'ai',
    title: 'Ingénierie IA',
    description:
      "LLMs, RAG, agents IA, fine-tuning et recherche sémantique — prolongé par le AMD AI Academy Challenge.",
    tags: tags.ai,
  },
  {
    id: 'networks',
    title: 'Réseaux, IoT & sécurité',
    description:
      "IPv4/IPv6, VLAN, OSPF, ACL, VPN site-à-site, Arduino, ESP32, capteurs, Wireshark et Nmap — le socle télécom.",
    tags: tags.networks,
  },
];

const servicesEn: ServiceItem[] = [
  {
    id: 'frontend-ux',
    title: 'Frontend & UX/UI',
    description:
      'React interfaces, design systems, Figma prototyping and appflow — where I lead the products I ship.',
    tags: ['React', 'Next.js', 'Figma', 'Design system', 'Appflow', 'Prototyping'],
  },
  {
    id: 'fullstack',
    title: 'Fullstack JS & Python',
    description:
      'Complete products in JavaScript and Python: Node.js, React, Django, PostgreSQL and Docker, from the API to the screen.',
    tags: tags.fullstack,
  },
  {
    id: 'ai',
    title: 'AI engineering',
    description:
      'LLMs, RAG, AI agents, fine-tuning and semantic search — extended by the AMD AI Academy Challenge.',
    tags: ['LLMs', 'RAG', 'AI agents', 'Fine-tuning', 'Scikit-learn'],
  },
  {
    id: 'networks',
    title: 'Networks, IoT & security',
    description:
      'IPv4/IPv6, VLAN, OSPF, ACL, site-to-site VPN, Arduino, ESP32, sensors, Wireshark and Nmap — the telecom base.',
    tags: ['IPv4 / IPv6', 'VLAN', 'OSPF', 'Site-to-site VPN', 'Arduino', 'ESP32', 'Wireshark', 'Nmap'],
  },
];

export function getServices() {
  return pick(servicesFr, servicesEn);
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const services: ServiceItem[] = [
  {
    id: 'frontend-ux',
    title: 'Frontend & UX/UI',
    description:
      "Interfaces React, design systems, prototypage Figma et parcours applicatif (appflow) — le point où je mène les projets livrés.",
    icon: 'web',
  },
  {
    id: 'fullstack',
    title: 'Fullstack JS & Python',
    description:
      "Produits complets en JavaScript et Python : Node.js, React, Django, PostgreSQL et Docker, de l'API jusqu'à l'écran.",
    icon: 'code',
  },
  {
    id: 'ai',
    title: 'Ingénierie IA',
    description:
      "LLMs, RAG, agents IA, fine-tuning et recherche sémantique — prolongé par le AMD AI Academy Challenge.",
    icon: 'ai',
  },
  {
    id: 'networks',
    title: 'Réseaux, IoT & sécurité',
    description:
      "IPv4/IPv6, VLAN, OSPF, ACL, VPN site-à-site, Arduino, ESP32, capteurs, Wireshark et Nmap — le socle télécom.",
    icon: 'network',
  },
];

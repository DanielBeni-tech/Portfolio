export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const services: ServiceItem[] = [
  {
    id: 'backend',
    title: 'Backend & APIs',
    description:
      "Conception de services backend, APIs et bases de données avec Python, Django, FastAPI et PostgreSQL.",
    icon: 'code',
  },
  {
    id: 'fullstack',
    title: 'Produits Full-Stack',
    description:
      "Interfaces React et produits web complets, de la compréhension du besoin jusqu'à une solution déployable avec Docker.",
    icon: 'web',
  },
  {
    id: 'ai-data',
    title: 'IA & Data appliquées',
    description:
      "Chatbots, recherche sémantique, pipelines RAG et outils de connaissance qui rendent les données plus faciles à exploiter.",
    icon: 'ai',
  },
  {
    id: 'networks-iot',
    title: 'Réseaux & IoT',
    description:
      "Bases solides en IPv4/IPv6, VLAN, OSPF, ACL, systèmes embarqués, Arduino, ESP32 et capteurs.",
    icon: 'network',
  },
];

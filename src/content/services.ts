export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const services: ServiceItem[] = [
  {
    id: 'ai',
    title: 'Systèmes IA & LLM',
    description:
      "Applications LLM, pipelines RAG, agents autonomes et IA locale — des systèmes qui raisonnent et assistent.",
    icon: 'ai',
  },
  {
    id: 'fullstack',
    title: 'Développement Full-Stack',
    description:
      "Produits web et mobiles de l'idée au déploiement — APIs, applications Flutter et plateformes Next.js.",
    icon: 'code',
  },
  {
    id: 'data',
    title: 'Produits Data & Automation',
    description:
      "Transformation de données brutes en pipelines automatisés, analytics et systèmes de Revenue Assurance.",
    icon: 'data',
  },
  {
    id: 'community',
    title: 'Communauté & Formation Tech',
    description:
      "Ateliers, mentorat et littératie IA — construire des communautés techniques au Cameroun.",
    icon: 'community',
  },
];

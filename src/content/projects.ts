export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  category: 'real' | 'experiment';
  tags: string[];
  cover: string;
  image: string;
  year: string;
  link?: string;
  github?: string;
  outcomes?: string[];
}

export const projects: ProjectItem[] = [
  {
    id: 'gblrecover',
    title: 'GBLRecover',
    subtitle: 'Revenue Assurance Platform',
    description:
      "Plateforme de Revenue Assurance pour CAMTEL — détection automatisée des fuites de revenus sur 50 606+ comptes.",
    longDescription:
      "GBLRecover est une plateforme de Revenue Assurance conçue pour CAMTEL, l'opérateur télécom national camerounais. Le système analyse automatiquement plus de 50 606 comptes pour détecter les fuites de revenus, les anomalies de facturation et les incohérences tarifaires — transformant un audit manuel de semaines en un processus continu et automatisé.",
    category: 'real',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Data Analysis'],
    cover: 'cover-blue',
    image: 'https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    year: '2024',
    link: '#',
    github: 'https://github.com/DanielBeni-tech',
    outcomes: [
      '50 606+ comptes analysés en continu',
      'Détection automatisée des anomalies de revenus',
      "Réduction du temps d'audit de semaines à temps réel",
    ],
  },
  {
    id: 'carburflow',
    title: 'CARBURFLOW',
    subtitle: 'Fuel Management System',
    description:
      "Système de gestion de carburant en temps réel — suivi de consommation, rapports et alertes pour stations et flottes.",
    longDescription:
      "CARBURFLOW est un système complet de gestion de carburant pour stations-service et flottes de véhicules. L'application Flutter suit la consommation en temps réel, génère des rapports détaillés et déclenche des alertes automatiques en cas d'anomalie — donnant aux gestionnaires une visibilité totale sur leurs stocks et leurs coûts.",
    category: 'real',
    tags: ['Flutter', 'Firebase', 'Dart'],
    cover: 'cover-orange',
    image: 'https://images.pexels.com/photos/21811094/pexels-photo-21811094.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    year: '2023',
    link: '#',
    github: 'https://github.com/DanielBeni-tech',
    outcomes: [
      'Suivi de consommation en temps réel',
      'Alertes automatiques sur seuils et anomalies',
      'Rapports détaillés pour stations et flottes',
    ],
  },
  {
    id: 'camtel-ai',
    title: 'Camtel AI',
    subtitle: 'AI Support & Document Layer',
    description:
      "Couche IA pour le support client et le traitement de documents — conçue pour augmenter les équipes humaines, pas les remplacer.",
    longDescription:
      "Camtel AI est une couche d'intelligence artificielle intégrée pour le support client et le traitement de documents chez CAMTEL. Le système utilise des LLMs pour répondre aux requêtes courantes, classer et extraire des informations documentaires, et assister les équipes humaines — augmentant leur efficacité sans les remplacer.",
    category: 'real',
    tags: ['Python', 'LLM', 'FastAPI', 'NLP'],
    cover: 'cover-mixed',
    image: 'https://images.pexels.com/photos/32021560/pexels-photo-32021560.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    year: '2024',
    link: '#',
    github: 'https://github.com/DanielBeni-tech',
    outcomes: [
      'Assistance IA pour le support client',
      'Extraction et classification automatique de documents',
      'Conçu pour augmenter les équipes, pas les remplacer',
    ],
  },
  {
    id: 'local-ai',
    title: 'Local AI',
    subtitle: 'Offline LLM Inference',
    description:
      "Exécution de LLMs en local avec Ollama pour l'inférence privée et hors ligne.",
    longDescription:
      "Local AI est un projet d'expérimentation autour de l'exécution de LLMs en local avec Ollama. L'objectif : rendre l'IA accessible hors ligne, dans des contextes où la confidentialité ou la connectivité limitée rendent les API cloud inutilisables — un enjeu crucial en Afrique.",
    category: 'experiment',
    tags: ['Ollama', 'Python', 'llama.cpp'],
    cover: 'cover-green',
    image: 'https://images.pexels.com/photos/17489160/pexels-photo-17489160.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    year: '2024',
    link: '#',
    github: 'https://github.com/DanielBeni-tech',
  },
  {
    id: 'ai-agents',
    title: 'AI Agents',
    subtitle: 'Autonomous Planning Systems',
    description:
      "Agents autonomes qui planifient, exécutent et apprennent à partir de tâches complexes.",
    longDescription:
      "AI Agents explore la construction d'agents autonomes capables de planifier, d'exécuter et d'apprendre à partir de tâches complexes. Les agents enchaînent des étapes de raisonnement, utilisent des outils externes et adaptent leur stratégie en fonction des résultats — une approche au-delà du simple prompt.",
    category: 'experiment',
    tags: ['Python', 'LangChain', 'OpenAI'],
    cover: 'cover-purple',
    image: 'https://images.pexels.com/photos/18799044/pexels-photo-18799044.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    year: '2024',
    link: '#',
    github: 'https://github.com/DanielBeni-tech',
  },
  {
    id: 'rag',
    title: 'RAG System',
    subtitle: 'Retrieval-Augmented Generation',
    description:
      "Système de génération augmentée par récupération sur des bases de connaissances curées.",
    longDescription:
      "RAG System est un système de génération augmentée par récupération (Retrieval-Augmented Generation) construit sur pgvector. Il permet d'interroger des bases de connaissances curées avec des réponses contextisées — combinant la précision de la recherche vectorielle avec la fluidité des LLMs.",
    category: 'experiment',
    tags: ['pgvector', 'Python', 'Embeddings'],
    cover: 'cover-teal',
    image: 'https://images.pexels.com/photos/6549358/pexels-photo-6549358.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    year: '2024',
    link: '#',
    github: 'https://github.com/DanielBeni-tech',
  },
];

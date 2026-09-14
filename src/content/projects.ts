export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  category: 'real' | 'experiment';
  tags: string[];
  cover: string;
  link?: string;
}

export const projects: ProjectItem[] = [
  {
    id: 'gblrecover',
    title: 'GBLRecover',
    description:
      "Plateforme de Revenue Assurance pour CAMTEL — détection automatisée des fuites de revenus sur 50 606+ comptes.",
    category: 'real',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Data Analysis'],
    cover: 'cover-blue',
  },
  {
    id: 'carburflow',
    title: 'CARBURFLOW',
    description:
      "Système de gestion de carburant en temps réel — suivi de consommation, rapports et alertes pour stations et flottes.",
    category: 'real',
    tags: ['Flutter', 'Firebase', 'Dart'],
    cover: 'cover-orange',
  },
  {
    id: 'camtel-ai',
    title: 'Camtel AI',
    description:
      "Couche IA pour le support client et le traitement de documents — conçue pour augmenter les équipes humaines, pas les remplacer.",
    category: 'real',
    tags: ['Python', 'LLM', 'FastAPI', 'NLP'],
    cover: 'cover-mixed',
  },
  {
    id: 'local-ai',
    title: 'Local AI',
    description:
      "Exécution de LLMs en local avec Ollama pour l'inférence privée et hors ligne.",
    category: 'experiment',
    tags: ['Ollama', 'Python', 'llama.cpp'],
    cover: 'cover-green',
  },
  {
    id: 'ai-agents',
    title: 'AI Agents',
    description:
      "Agents autonomes qui planifient, exécutent et apprennent à partir de tâches complexes.",
    category: 'experiment',
    tags: ['Python', 'LangChain', 'OpenAI'],
    cover: 'cover-purple',
  },
  {
    id: 'rag',
    title: 'RAG System',
    description:
      "Système de génération augmentée par récupération sur des bases de connaissances curées.",
    category: 'experiment',
    tags: ['pgvector', 'Python', 'Embeddings'],
    cover: 'cover-teal',
  },
];

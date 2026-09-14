import type { Experiment } from '@/lib/types';

export const experiments: Experiment[] = [
  {
    id: 'local-ai',
    title: 'Local AI',
    description: 'Exécution de LLMs en local avec Ollama pour une inférence privée et hors ligne.',
    status: 'building',
    technologies: ['Ollama', 'Python', 'llama.cpp'],
  },
  {
    id: 'ai-agents',
    title: 'AI Agents',
    description: "Agents autonomes qui planifient, exécutent et apprennent à partir de tâches complexes.",
    status: 'experimental',
    technologies: ['Python', 'LangChain', 'OpenAI'],
  },
  {
    id: 'rag',
    title: 'RAG / Embeddings',
    description: 'Génération augmentée par récupération sur des bases de connaissances curées.',
    status: 'building',
    technologies: ['pgvector', 'Python', 'Embeddings'],
  },
  {
    id: 'robotics',
    title: 'Robotics / HUGO',
    description: "Expériences de physical computing et un assistant IA nommé HUGO.",
    status: 'experimental',
    technologies: ['Arduino', 'Python', 'Sensors'],
  },
  {
    id: 'flutter',
    title: 'Flutter Experiments',
    description: "Expériences UI cross-platform et prototypes mobiles.",
    status: 'shipped',
    technologies: ['Flutter', 'Dart', 'Firebase'],
  },
  {
    id: 'automation',
    title: 'Automation',
    description: "Pipelines qui connectent APIs, sources de données et notifications.",
    status: 'building',
    technologies: ['Python', 'cron', 'REST APIs'],
  },
];

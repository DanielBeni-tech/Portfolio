import type { Experiment } from '@/lib/types';

export const experiments: Experiment[] = [
  {
    id: 'local-ai',
    title: 'Local AI',
    description: 'Running LLMs locally with Ollama for private, offline inference.',
    status: 'building',
    technologies: ['Ollama', 'Python', 'llama.cpp'],
  },
  {
    id: 'ai-agents',
    title: 'AI Agents',
    description: 'Building autonomous agents that plan, execute, and learn from tasks.',
    status: 'experimental',
    technologies: ['Python', 'LangChain', 'OpenAI'],
  },
  {
    id: 'rag',
    title: 'RAG / Embeddings',
    description: 'Retrieval-augmented generation over curated knowledge bases.',
    status: 'building',
    technologies: ['pgvector', 'Python', 'Embeddings'],
  },
  {
    id: 'robotics',
    title: 'Robotics / HUGO',
    description: 'Physical computing experiments and an AI assistant concept named HUGO.',
    status: 'experimental',
    technologies: ['Arduino', 'Python', 'Sensors'],
  },
  {
    id: 'flutter',
    title: 'Flutter Experiments',
    description: 'Cross-platform UI experiments and mobile prototypes.',
    status: 'shipped',
    technologies: ['Flutter', 'Dart', 'Firebase'],
  },
  {
    id: 'automation',
    title: 'Automation',
    description: 'Pipelines that connect APIs, data sources, and notifications.',
    status: 'building',
    technologies: ['Python', 'cron', 'REST APIs'],
  },
];

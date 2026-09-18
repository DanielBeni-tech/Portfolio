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
    id: 'carburflow',
    title: 'CARBURFLOW',
    subtitle: 'Supervision de carburant · Projet de stage livré',
    description:
      "Système de supervision des niveaux et consommations de carburant sur plusieurs sites, avec détection d'anomalies.",
    longDescription:
      "CARBURFLOW est le projet développé pendant mon stage au sein du Service de la Lutte contre la Fraude de CAMTEL. La plateforme centralise la supervision des niveaux et des consommations de carburant sur plusieurs sites et aide à repérer les anomalies, notamment les fuites et les vols.",
    category: 'real',
    tags: ['PostgreSQL', 'Django', 'React', 'Docker'],
    cover: 'cover-orange',
    image: 'https://images.pexels.com/photos/21811094/pexels-photo-21811094.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    year: 'Juillet — Septembre 2026',
    outcomes: [
      'Supervision de plusieurs sites',
      'Suivi des niveaux et consommations',
      'Détection des anomalies, fuites et vols',
    ],
  },
  {
    id: 'lekki',
    title: 'LEKKI',
    subtitle: "Wiki d'entreprise avec IA",
    description:
      "Base de connaissances intelligente permettant d'interroger sa documentation via un chatbot avec réponses sourcées.",
    longDescription:
      "LEKKI est un wiki d'entreprise augmenté par l'IA. Le produit permet de rechercher dans la documentation avec un chatbot, tout en conservant les sources, un score de confiance et une bascule automatique entre plusieurs modèles comme Gemini, Groq et Cerebras.",
    category: 'real',
    tags: ['FastAPI', 'React', 'TypeScript', 'RAG'],
    cover: 'cover-blue',
    image: 'https://images.pexels.com/photos/6549358/pexels-photo-6549358.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    year: 'Juin 2026',
    outcomes: [
      'Pipeline RAG complet avec réponses sourcées',
      'Score de confiance visible pour chaque réponse',
      'Bascule entre Gemini, Groq et Cerebras',
    ],
  },
  {
    id: 'suponeai',
    title: 'SUPONEAI',
    subtitle: "Chatbot SUP'PTIC",
    description:
      "Assistant intelligent permettant aux étudiants d'interroger une base de plus de 1 000 questions/réponses par recherche sémantique.",
    longDescription:
      "SUPONEAI est un assistant conçu pour les étudiants de SUP'PTIC. Il s'appuie sur une base de plus de 1 000 questions et réponses et utilise la recherche sémantique pour retrouver les informations pertinentes et faciliter l'accès aux connaissances de l'établissement.",
    category: 'real',
    tags: ['Django', 'Scikit-learn', 'Pandas', 'React'],
    cover: 'cover-mixed',
    image: 'https://images.pexels.com/photos/32021560/pexels-photo-32021560.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    year: 'Février — Mars 2026',
    outcomes: [
      'Base de connaissances de plus de 1 000 questions/réponses',
      'Recherche sémantique pour les étudiants',
      'Assistant web construit avec une équipe étudiante',
    ],
  },
];

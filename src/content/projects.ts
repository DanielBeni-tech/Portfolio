export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  category: 'real' | 'github';
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
    subtitle: 'Fullstack & Lead Developer · Stage CAMTEL',
    description:
      "Plateforme d'analyse des consommations de carburant pour la BUF / SFF de CAMTEL : sites, cuves, GES et anomalies.",
    longDescription:
      "Projet de stage mené en lead fullstack au Service de la Lutte contre la Fraude. Backend Django, dashboard React/TypeScript, PostgreSQL et Docker : import des fiches terrain, KPI, historiques et détection des niveaux critiques.",
    category: 'real',
    tags: ['React', 'Django', 'PostgreSQL', 'Docker'],
    cover: 'cover-orange',
    image: 'https://images.pexels.com/photos/21811094/pexels-photo-21811094.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    year: 'Juillet — Septembre 2026',
    github: 'https://github.com/DanielBeni-tech/carbureflows',
    outcomes: [
      'Lead fullstack : API Django + dashboard React',
      'Supervision multi-sites des niveaux et consommations',
      'Import des fiches terrain et lecture des anomalies',
    ],
  },
  {
    id: 'syntra',
    title: 'SYNTRA',
    subtitle: 'Fullstack & Lead Developer · JUIN / Cursor Cameroun',
    description:
      "Messagerie d'entreprise née à JUIN (Cursor Cameroun) : canaux, Markdown, code, bot IA — communication privée hors liaison opérateur classique.",
    longDescription:
      "Construit à JUIN (Cursor Cameroun). SYNTRA (CommHQ) : espaces de travail, canaux, messages en temps réel, Markdown/code et résumé IA. Le CV la relie à un canal privé inter-entreprises. Frontend React, backend Python/TypeScript, démo en ligne.",
    category: 'real',
    tags: ['React', 'TypeScript', 'Python', 'Temps réel'],
    cover: 'cover-blue',
    image: 'https://images.pexels.com/photos/2881232/pexels-photo-2881232.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    year: '2026',
    github: 'https://github.com/DanielBeni-tech/Syntra',
    link: 'https://comm-hq.vercel.app',
    outcomes: [
      'Lead fullstack JS / Python',
      'Chat temps réel, Markdown et bot IA',
      'Démo publique en ligne',
    ],
  },
  {
    id: 'suponeai',
    title: 'SUPONEAI',
    subtitle: "Fullstack & Lead Developer · Chatbot SUP'PTIC",
    description:
      "Assistant intelligent pour interroger une base de plus de 1 000 questions/réponses via recherche sémantique.",
    longDescription:
      "SUPONEAI aide les étudiants de SUP'PTIC à interroger une base de plus de 1 000 questions et réponses par recherche sémantique. Lead fullstack : interface conversationnelle, frontend, UX et intégration du modèle.",
    category: 'real',
    tags: ['React', 'UI/UX', 'Django', 'Scikit-learn'],
    cover: 'cover-mixed',
    image: 'https://images.pexels.com/photos/32021560/pexels-photo-32021560.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    year: 'Février — Mai 2026',
    outcomes: [
      'Lead fullstack, interface conversationnelle',
      'Plus de 1 000 questions/réponses',
      'Recherche sémantique pour les étudiants',
    ],
  },
  {
    id: 'sango',
    title: 'SANGO',
    subtitle: 'Fullstack & Lead Developer · Hackverse',
    description:
      "Routage intelligent pour ambulances et pompiers : meilleur chemin sous incertitude, adaptation temps réel, décisions explicables.",
    longDescription:
      "Projet Hackverse 2026 (sujet 07). Dans une grande ville, le retard des secours vient surtout de l'incertitude terrain — pas du manque de véhicules. SANGO choisit un itinéraire avec des données imparfaites, s'adapte quand les conditions changent, et explique chaque décision. Repo : Les routes qui sauvent des vies.",
    category: 'real',
    tags: ['Python', 'Routage', 'Hackverse'],
    cover: 'cover-green',
    image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    year: '2026',
    github: 'https://github.com/DanielBeni-tech/Sango',
    outcomes: [
      'Compétition Hackverse',
      'Décision sous incertitude, pas le plus court chemin classique',
      'Code public sur GitHub',
    ],
  },
  {
    id: 'sone',
    title: 'SONE / Sup’Zone',
    subtitle: 'Fullstack & Lead Developer · Messagerie campus',
    description:
      "PWA de messagerie académique SUP'PTIC : chats privés, zones thématiques, ressources et événements, temps réel.",
    longDescription:
      "Sup'Zone (repo SONE) : messagerie intranet/internet pour le campus. React + FastAPI, WebSockets, JWT. Zones (admin, AE, matières), ressources pédagogiques et emplois du temps.",
    category: 'github',
    tags: ['React', 'FastAPI', 'WebSockets', 'Docker'],
    cover: 'cover-teal',
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    year: '2025 — 2026',
    github: 'https://github.com/DanielBeni-tech/SONE',
    outcomes: [
      'Frontend React + backend FastAPI',
      'Chat privé et Zones en WebSocket',
      'Ressources et événements campus',
    ],
  },
  {
    id: 'clubinfo',
    title: 'Club Info',
    subtitle: 'Fullstack & Lead Developer · Site officiel',
    description:
      "Site du club informatique — vitrine publique, déjà en ligne.",
    longDescription:
      "Application TypeScript déployée sur Vercel : le site officiel du club info, avec une base code substantielle (frontend + backend léger).",
    category: 'github',
    tags: ['TypeScript', 'React', 'Vercel'],
    cover: 'cover-green',
    image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    year: '2026',
    github: 'https://github.com/DanielBeni-tech/clubinfo',
    link: 'https://clubinfo.vercel.app',
    outcomes: [
      'Site officiel en production',
      'Stack TypeScript',
      'Code public sur GitHub',
    ],
  },
  {
    id: 'mabbtek',
    title: 'Mabbtek',
    subtitle: 'Fullstack & Lead Developer · Site officiel',
    description:
      "Site vitrine de Mabbtek : pages, services et contact, déployé en production.",
    longDescription:
      "Site officiel HTML / SCSS / JavaScript, avec une direction visuelle soignée. En ligne sur mabbtek.vercel.app.",
    category: 'github',
    tags: ['HTML', 'SCSS', 'JavaScript'],
    cover: 'cover-purple',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    year: '2025',
    github: 'https://github.com/DanielBeni-tech/Mabbtek-',
    link: 'https://mabbtek.vercel.app',
    outcomes: [
      'Site officiel livré',
      'Pages services, about, contact',
      'Déploiement Vercel',
    ],
  },
  {
    id: 'wone',
    title: 'Wone',
    subtitle: 'Fullstack & Lead Developer · E-learning + chat',
    description:
      "Application Next.js d'e-learning et de chat, avec Prisma côté données.",
    longDescription:
      "Repo Wone : app Next.js (TypeScript) pensée comme plateforme d'apprentissage et de discussion, avec Prisma pour le modèle de données.",
    category: 'github',
    tags: ['Next.js', 'TypeScript', 'Prisma'],
    cover: 'cover-blue',
    image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    year: '2026',
    github: 'https://github.com/DanielBeni-tech/Wone',
    outcomes: [
      'App Next.js + Prisma',
      'E-learning et chat',
      'Code public sur GitHub',
    ],
  },
  {
    id: 'alerte',
    title: 'Alerte',
    subtitle: 'Fullstack & Lead Developer · Telecom watch',
    description:
      "Interface et backend d'un site de veille télécom : opérateurs, plaintes, tableaux de bord.",
    longDescription:
      "Alerte est une version UI/UX + backend PHP d'un site de veille télécom : pages opérateurs, dépôt de plaintes, admin et graphiques.",
    category: 'github',
    tags: ['HTML', 'PHP', 'JavaScript', 'UX/UI'],
    cover: 'cover-orange',
    image: 'https://images.pexels.com/photos/2881233/pexels-photo-2881233.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    year: '2025',
    github: 'https://github.com/DanielBeni-tech/Alerte',
    outcomes: [
      'UI/UX de veille télécom',
      'Pages admin, opérateurs, plaintes',
      'Backend PHP + JS',
    ],
  },
];

import { pick } from '@/lib/locale';

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
  featured?: boolean;
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
    image: '/projects/carburflow.jpeg',
    featured: true,
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
    image: '/projects/syntra.jpeg',
    featured: true,
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
    image: '/projects/sango.jpeg',
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
    image: '/community/clubinfo.png',
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
    featured: true,
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
  {
    id: 'orange-mboa-business',
    title: 'ORANGE MBOA BUSINESS',
    subtitle: 'Lead Product & Fullstack · Orange Business Game #2CDYS2026',
    description:
      "PWA mobile-first pour micro-entrepreneurs camerounais (commerçants, snack-bars) : encaissement, suivi des ventes, gestion clients et assistant IA, pensée pour la connectivité limitée.",
    longDescription:
      "Conçu et prototypé pour le Orange Business Game (#2CDYS2026) : application mobile-first et offline-first ciblant les micro-entrepreneurs à faible littératie numérique. Tableau de bord du jour (gains, tendance), encaissement par QR code / Orange Money, gestion de clients avec relances, historique des ventes filtrable, assistant IA conversationnel façon WhatsApp (« J'ai vendu combien aujourd'hui ? »), et conseils automatiques (promo, alerte stock bas). Direction visuelle aux couleurs Orange, accessibilité WCAG 2.1 AA, langage simple en français. Prototypé sur Base44 pour aller vite sur le produit dans le temps imparti de la compétition.",
    category: 'real',
    featured: false,
    tags: ['React Native', 'Supabase', 'FastAPI', 'PWA', 'Base44'],
    cover: 'cover-orange',
    image: '/projects/orange-mboa-business.png',
    year: '2026',
    outcomes: [
      'Conception produit complète : dashboard, encaissement, clients, ventes, assistant IA',
      'Pensé offline-first pour connectivité limitée',
      'Participant #2CDYS2026 — Orange Cameroun',
    ],
  },
];

const projectsEn: ProjectItem[] = [
  {
    ...projects[0],
    subtitle: 'Fullstack & Lead Developer · CAMTEL internship',
    description:
      'Fuel-consumption analysis platform for CAMTEL BUF / SFF: sites, tanks, GHG and anomalies.',
    longDescription:
      'Internship project led as fullstack lead at the Fraud Control service. Django backend, React/TypeScript dashboard, PostgreSQL and Docker: field-sheet import, KPIs, history and critical-level detection.',
    year: 'July — September 2026',
    outcomes: [
      'Fullstack lead: Django API + React dashboard',
      'Multi-site monitoring of levels and consumption',
      'Field-sheet import and anomaly reading',
    ],
  },
  {
    ...projects[1],
    subtitle: 'Fullstack & Lead Developer · JUIN / Cursor Cameroon',
    description:
      'Enterprise messenger born at JUIN (Cursor Cameroon): channels, Markdown, code, AI bot — private communication off a classic operator link.',
    longDescription:
      'Built at JUIN (Cursor Cameroon). SYNTRA (CommHQ): workspaces, channels, realtime messages, Markdown/code and AI summary. The CV ties it to a private inter-company channel. React frontend, Python/TypeScript backend, live demo.',
    tags: ['React', 'TypeScript', 'Python', 'Realtime'],
    outcomes: [
      'Fullstack lead JS / Python',
      'Realtime chat, Markdown and AI bot',
      'Public demo online',
    ],
  },
  {
    ...projects[2],
    subtitle: "Fullstack & Lead Developer · SUP'PTIC chatbot",
    description:
      'Intelligent assistant to query a base of more than 1,000 questions/answers via semantic search.',
    longDescription:
      "SUPONEAI helps SUP'PTIC students query a base of more than 1,000 questions and answers through semantic search. Fullstack lead: conversational interface, frontend, UX and model integration.",
    year: 'February — May 2026',
    outcomes: [
      'Fullstack lead, conversational interface',
      'More than 1,000 questions/answers',
      'Semantic search for students',
    ],
  },
  {
    ...projects[3],
    subtitle: 'Fullstack & Lead Developer · Hackverse',
    description:
      'Intelligent routing for ambulances and firefighters: best path under uncertainty, realtime adaptation, explainable decisions.',
    longDescription:
      'Hackverse 2026 project (topic 07). In a large city, emergency delay comes mostly from field uncertainty — not a lack of vehicles. SANGO picks a route with imperfect data, adapts when conditions change, and explains each decision. Repo: The roads that save lives.',
    outcomes: [
      'Hackverse competition',
      'Decision under uncertainty, not the classic shortest path',
      'Public code on GitHub',
    ],
  },
  {
    ...projects[4],
    subtitle: 'Fullstack & Lead Developer · Campus messenger',
    description:
      "SUP'PTIC academic messaging PWA: private chats, topic zones, resources and events, realtime.",
    longDescription:
      "Sup'Zone (SONE repo): intranet/internet messenger for campus. React + FastAPI, WebSockets, JWT. Zones (admin, AE, subjects), teaching resources and timetables.",
    outcomes: [
      'React frontend + FastAPI backend',
      'Private chat and Zones over WebSocket',
      'Campus resources and events',
    ],
  },
  {
    ...projects[5],
    subtitle: 'Fullstack & Lead Developer · Official site',
    description: 'Computer club site — public showcase, already online.',
    longDescription:
      'TypeScript app deployed on Vercel: the official club site, with a substantial codebase (frontend + light backend).',
    outcomes: [
      'Official site in production',
      'TypeScript stack',
      'Public code on GitHub',
    ],
  },
  {
    ...projects[6],
    subtitle: 'Fullstack & Lead Developer · Official site',
    description: 'Mabbtek showcase site: pages, services and contact, deployed in production.',
    longDescription:
      'Official HTML / SCSS / JavaScript site, with a careful visual direction. Live on mabbtek.vercel.app.',
    outcomes: [
      'Official site shipped',
      'Services, about, contact pages',
      'Vercel deploy',
    ],
  },
  {
    ...projects[7],
    subtitle: 'Fullstack & Lead Developer · Telecom watch',
    description: 'Interface and backend of a telecom watch site: operators, complaints, dashboards.',
    longDescription:
      'Alerte is a UI/UX + PHP backend version of a telecom watch site: operator pages, complaint filing, admin and charts.',
    outcomes: [
      'Telecom-watch UI/UX',
      'Admin, operators, complaints pages',
      'PHP + JS backend',
    ],
  },
  {
    ...projects[8],
    subtitle: 'Lead Product & Fullstack · Orange Business Game #2CDYS2026',
    description:
      'Mobile-first PWA for Cameroonian micro-entrepreneurs (shopkeepers, snack bars): checkout, sales tracking, clients and an AI assistant, designed for limited connectivity.',
    longDescription:
      'Designed and prototyped for the Orange Business Game (#2CDYS2026): mobile-first and offline-first app for micro-entrepreneurs with low digital literacy. Day dashboard (earnings, trend), QR / Orange Money checkout, client follow-up, filterable sales history, WhatsApp-style AI assistant, and automatic tips (promo, low stock). Orange visual direction, WCAG 2.1 AA, simple French. Prototyped on Base44 to move fast on the product in the competition window.',
    outcomes: [
      'Full product design: dashboard, checkout, clients, sales, AI assistant',
      'Thought offline-first for limited connectivity',
      'Participant #2CDYS2026 — Orange Cameroon',
    ],
  },
];

export function getProjects() {
  return pick(projects, projectsEn);
}

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
      "Plateforme d'analyse des consommations de carburant pour la BUF / SFF de CAMTEL : sites, cuves, groupes électrogènes et anomalies.",
    longDescription:
      "Stage en lead fullstack au Service de la Lutte contre la Fraude (CAMTEL, Douala). CARBURFLOW importe les fiches hebdomadaires terrain (.doc) — sites, GES, cuves, niveaux, compteurs horaires, observations — puis les transforme en KPI et historiques. Le dashboard suit le volume total des cuves, les heures de fonctionnement, la consommation moyenne par groupe, l'état F / P / HS et les niveaux critiques. Backend Django + DRF, frontend React/TypeScript (Recharts), PostgreSQL et Docker.",
    category: 'real',
    tags: ['React', 'Django', 'PostgreSQL', 'Docker'],
    cover: 'cover-orange',
    image: '/projects/carburflow.webp',
    featured: true,
    year: 'Juillet — Septembre 2026',
    github: 'https://github.com/DanielBeni-tech/carbureflows',
    outcomes: [
      'Import idempotent des fiches terrain (.doc → base)',
      'KPI multi-sites : volumes, heures, consommation, états GES',
      'Alertes sur cuves critiques et observations terrain',
    ],
  },
  {
    id: 'syntra',
    title: 'SYNTRA',
    subtitle: 'Fullstack & Lead Developer · JUIN / Cursor Cameroun',
    description:
      "Messager électronique pour codeurs et entreprises : un chat avec des fonctions d'IDE, et un canal privé inter-sites via VPN site-à-site.",
    longDescription:
      "Né à JUIN (Cursor Cameroun). Pour les codeurs, SYNTRA est un chat de discussion où l'on partage du code, des previews et du Markdown avec coloration syntaxique — des fonctions d'IDE, dans une conversation. Pour les entreprises et startups, elle permet d'échanger avec un confrère ou un site dans une autre région, gratuitement et en privé, en s'appuyant sur un VPN site-à-site : un tunnel privé de site à site, hors liaison opérateur classique. Côté produit : workspaces, canaux, temps réel, bot IA (résumé en 3 phrases), invitations. React / TypeScript, NestJS, Socket.IO, MongoDB. Démo : comm-hq.vercel.app.",
    category: 'real',
    tags: ['React', 'TypeScript', 'NestJS', 'VPN site-à-site'],
    cover: 'cover-blue',
    image: '/projects/syntra.webp',
    featured: true,
    year: '2026',
    github: 'https://github.com/DanielBeni-tech/Syntra',
    link: 'https://comm-hq.vercel.app',
    outcomes: [
      'Chat technique : code, Markdown, previews',
      'Canal privé inter-entreprises via VPN site-à-site',
      'Bot IA de résumé + démo publique',
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
      "Hackverse 2026, sujet 07 — « Les routes qui sauvent des vies ». Dans une grande ville africaine de 2 millions d'habitants, les ambulances mettent en moyenne 23 minutes à arriver : le retard vient de l'incertitude terrain (goudron vs latérite, trafic, pluie, inondations, infos retardées), pas du manque de véhicules. SANGO ne calcule pas le plus court chemin classique : il choisit un itinéraire avec des données imparfaites, s'adapte quand les conditions changent, et explique chaque décision pour la traçabilité.",
    category: 'real',
    tags: ['Python', 'Routage', 'Hackverse'],
    cover: 'cover-green',
    image: '/projects/sango.webp',
    year: '2026',
    github: 'https://github.com/DanielBeni-tech/Sango',
    outcomes: [
      'Décision sous incertitude, pas le plus court chemin',
      'Adaptation temps réel aux conditions terrain',
      'Chaque choix d’itinéraire est explicable',
    ],
  },
  {
    id: 'sone',
    title: 'SONE / Sup’Zone',
    subtitle: 'Fullstack & Lead Developer · Messagerie campus',
    description:
      "Ma première chatapp complète — du design jusqu'au backend. Messagerie académique SUP'PTIC : chats, Zones, ressources et événements.",
    longDescription:
      "Sup'Zone (repo SONE) est ma première application de chat complète, et l'une de mes fiertés : j'ai géré le design jusqu'au backend. J'en ai fait d'autres ensuite (Wone, SUP-HUB), mais celle-ci tient tout le fil. PWA intranet/internet pour le campus : chats privés, Zones thématiques (admin, AE, matières), ressources pédagogiques et emplois du temps. React 19 + FastAPI, WebSockets, JWT, Docker.",
    category: 'github',
    tags: ['React', 'FastAPI', 'WebSockets', 'Docker'],
    cover: 'cover-teal',
    image: '/projects/sone.webp',
    year: '2025 — 2026',
    github: 'https://github.com/DanielBeni-tech/SONE',
    outcomes: [
      'Design + backend menés de bout en bout',
      'Chat privé et Zones en WebSocket',
      'Ressources, événements et emplois du temps',
    ],
  },
  {
    id: 'clubinfo',
    title: 'Club Info',
    subtitle: 'Fullstack & Lead Developer · Site officiel',
    description:
      "Site de présentation du club informatique de SUP'PTIC : membres, activités et vie du club.",
    longDescription:
      "Site officiel du club informatique de l'École nationale supérieure des postes et télécommunications (SUP'PTIC, Yaoundé). Il présente le club, ses membres, ses activités et sa vie associative. TypeScript / React, en ligne sur clubinfo.vercel.app. J'en suis président depuis 2026.",
    category: 'github',
    tags: ['TypeScript', 'React', 'Vercel'],
    cover: 'cover-green',
    image: '/community/clubinfo.webp',
    year: '2026',
    github: 'https://github.com/DanielBeni-tech/clubinfo',
    link: 'https://clubinfo.vercel.app',
    outcomes: [
      'Vitrine du club, des membres et des activités',
      'En production sur Vercel',
      'Code public sur GitHub',
    ],
  },
  {
    id: 'mabbtek',
    title: 'Mabbtek',
    subtitle: 'CTO & Lead Developer · Site officiel v1',
    description:
      "Site officiel v1 de la startup Mabbtek — pages, services et contact, en production.",
    longDescription:
      "Mabbtek est née en 2024 d'une communauté d'élèves ingénieurs de SUP'PTIC ; j'en suis le CTO. Ce site est la v1 officielle de la startup : services, à propos, contact, direction visuelle soignée. HTML / SCSS / JavaScript, en ligne sur mabbtek.vercel.app.",
    category: 'github',
    tags: ['HTML', 'SCSS', 'JavaScript'],
    cover: 'cover-purple',
    image: '/projects/mabbtek.webp',
    featured: true,
    year: '2024 — présent',
    github: 'https://github.com/DanielBeni-tech/Mabbtek-',
    link: 'https://mabbtek.vercel.app',
    outcomes: [
      'Site officiel v1 livré',
      'Pages services, about, contact',
      'Déploiement Vercel',
    ],
  },
  {
    id: 'alerte',
    title: 'Alerte qualité services télécom',
    subtitle: 'Fullstack & Lead Developer · Premier projet télécom × web',
    description:
      "L'un de mes premiers projets jumelant télécom et web : le public signale un déficit ou une mauvaise qualité réseau dans sa zone.",
    longDescription:
      "Alerte est l'un de mes premiers projets à croiser la télécom et le web. Elle permet au public de signaler un déficit ou une mauvaise qualité du réseau dans la zone où il se trouve. Côté produit : pages opérateurs, dépôt de signalements, administration et tableaux de bord. UI/UX + backend PHP / JavaScript.",
    category: 'github',
    tags: ['HTML', 'PHP', 'JavaScript', 'UX/UI'],
    cover: 'cover-orange',
    image: 'https://images.pexels.com/photos/2881233/pexels-photo-2881233.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    year: '2025',
    github: 'https://github.com/DanielBeni-tech/Alerte',
    outcomes: [
      'Signalement public d’un déficit réseau par zone',
      'Pages opérateurs, plaintes et admin',
      'Premier pont télécom × compétences web',
    ],
  },
  {
    id: 'orange-mboa-business',
    title: 'ORANGE MBOA BUSINESS',
    subtitle: 'Lead Product & Fullstack · Orange Business Game #2CDYS2026',
    description:
      "Proposition pour Orange Cameroun : PWA mobile-first pour micro-entrepreneurs — ventes, clients, caisse et assistant IA « Oby ».",
    longDescription:
      "Repo OBM. Proposition pour Orange Cameroun afin d'élargir sa portée auprès des PME et startups : application mobile-first, en français et en FCFA, pensée pour une connectivité limitée. Tableau de bord du jour, encaissement, clients et relances, historique des ventes, assistant conversationnel Oby (intentions en français : ventes, dettes, stats). React + Express + PostgreSQL, prototypé sur Base44 pour le Orange Business Game (#2CDYS2026).",
    category: 'real',
    featured: false,
    tags: ['React', 'Express', 'PostgreSQL', 'PWA'],
    cover: 'cover-orange',
    image: '/projects/orange-mboa-business.webp',
    year: '2026',
    github: 'https://github.com/DanielBeni-tech/OBM',
    outcomes: [
      'Proposition produit pour le portefeuille PME Orange',
      'Assistant Oby + caisse / clients / ventes',
      'Participant #2CDYS2026 — Orange Cameroun',
    ],
  },
];

const projectsEn: ProjectItem[] = [
  {
    ...projects[0],
    subtitle: 'Fullstack & Lead Developer · CAMTEL internship',
    description:
      'Fuel-consumption analysis platform for CAMTEL BUF / SFF: sites, tanks, generators and anomalies.',
    longDescription:
      'Internship as fullstack lead at CAMTEL Fraud Control (Douala). CARBURFLOW imports weekly field sheets (.doc) — sites, generators, tanks, levels, hour meters, notes — and turns them into KPIs and history. The dashboard tracks total tank volume, running hours, average consumption per generator, F / P / down status and critical levels. Django + DRF, React/TypeScript (Recharts), PostgreSQL and Docker.',
    year: 'July — September 2026',
    outcomes: [
      'Idempotent import of field sheets (.doc → database)',
      'Multi-site KPIs: volumes, hours, consumption, generator status',
      'Alerts on critical tanks and field observations',
    ],
  },
  {
    ...projects[1],
    subtitle: 'Fullstack & Lead Developer · JUIN / Cursor Cameroon',
    description:
      'Electronic messenger for developers and companies: IDE-like features in a chat, and a private inter-site channel over site-to-site VPN.',
    longDescription:
      'Born at JUIN (Cursor Cameroon). For developers, SYNTRA is a discussion chat where you share code, previews and Markdown with syntax highlighting — IDE-like functions, inside a conversation. For companies and startups, it lets you talk with a counterpart or a site in another region, free and private, over a site-to-site VPN: a private tunnel from site to site, off a classic operator link. Product: workspaces, channels, realtime, AI bot (3-sentence summary), invites. React / TypeScript, NestJS, Socket.IO, MongoDB. Demo: comm-hq.vercel.app.',
    tags: ['React', 'TypeScript', 'NestJS', 'Site-to-site VPN'],
    outcomes: [
      'Technical chat: code, Markdown, previews',
      'Private inter-company channel over site-to-site VPN',
      'AI summary bot + public demo',
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
      'Hackverse 2026, topic 07 — “The roads that save lives”. In a large African city of 2 million people, ambulances take 23 minutes on average: delay comes from field uncertainty (paved vs laterite, traffic, rain, floods, late data), not a lack of vehicles. SANGO is not classic shortest path: it picks a route with imperfect data, adapts when conditions change, and explains each decision for traceability.',
    outcomes: [
      'Decision under uncertainty, not shortest path',
      'Realtime adaptation to field conditions',
      'Every routing choice is explainable',
    ],
  },
  {
    ...projects[4],
    subtitle: 'Fullstack & Lead Developer · Campus messenger',
    description:
      "My first complete chat app — from design to backend. SUP'PTIC academic messenger: chats, Zones, resources and events.",
    longDescription:
      "Sup'Zone (SONE repo) is my first complete chat application, and one I am proud of: I owned design through backend. I later built others (Wone, SUP-HUB), but this one holds the whole thread. Intranet/internet PWA for campus: private chats, topic Zones (admin, student union, subjects), teaching resources and timetables. React 19 + FastAPI, WebSockets, JWT, Docker.",
    outcomes: [
      'Design + backend owned end to end',
      'Private chat and Zones over WebSocket',
      'Resources, events and timetables',
    ],
  },
  {
    ...projects[5],
    subtitle: 'Fullstack & Lead Developer · Official site',
    description:
      "Presentation site of SUP'PTIC's computer club: members, activities and club life.",
    longDescription:
      "Official site of the computer club at the National Advanced School of Posts and Telecommunications (SUP'PTIC, Yaoundé). It presents the club, its members, its activities and campus life. TypeScript / React, live at clubinfo.vercel.app. I have been president since 2026.",
    outcomes: [
      'Showcase of the club, members and activities',
      'In production on Vercel',
      'Public code on GitHub',
    ],
  },
  {
    ...projects[6],
    subtitle: 'CTO & Lead Developer · Official site v1',
    description: 'Official v1 site of the Mabbtek startup — pages, services and contact, in production.',
    longDescription:
      "Mabbtek was born in 2024 from a community of SUP'PTIC engineering students; I am its CTO. This is the official v1 site of the startup: services, about, contact, careful visual direction. HTML / SCSS / JavaScript, live on mabbtek.vercel.app.",
    year: '2024 — present',
    outcomes: [
      'Official v1 site shipped',
      'Services, about, contact pages',
      'Vercel deploy',
    ],
  },
  {
    ...projects[7],
    subtitle: 'Fullstack & Lead Developer · First telecom × web project',
    description:
      'One of my first projects joining telecom and the web: the public reports a network gap or poor quality in their area.',
    longDescription:
      'Alerte is one of my first projects that joins telecom and the web. It lets the public report a network deficit or poor quality in the area where they are. Product: operator pages, reports, admin and dashboards. UI/UX + PHP / JavaScript backend.',
    outcomes: [
      'Public report of a network gap by area',
      'Operator, complaints and admin pages',
      'First telecom × web bridge',
    ],
  },
  {
    ...projects[8],
    subtitle: 'Lead Product & Fullstack · Orange Business Game #2CDYS2026',
    description:
      'Proposal for Orange Cameroon: mobile-first PWA for micro-entrepreneurs — sales, clients, checkout and the “Oby” AI assistant.',
    longDescription:
      'OBM repo. A proposal for Orange Cameroon to widen its reach with SMEs and startups: mobile-first app, in French and FCFA, designed for limited connectivity. Day dashboard, checkout, clients and follow-ups, sales history, conversational assistant Oby (French intents: sales, debts, stats). React + Express + PostgreSQL, prototyped on Base44 for the Orange Business Game (#2CDYS2026).',
    outcomes: [
      'Product proposal for Orange’s SME portfolio',
      'Oby assistant + checkout / clients / sales',
      'Participant #2CDYS2026 — Orange Cameroon',
    ],
  },
];

export function getProjects() {
  return pick(projects, projectsEn);
}

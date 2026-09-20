import { pick } from '@/lib/locale';

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export const experiences: ExperienceItem[] = [
  {
    id: 'freelance',
    role: 'Freelance Developer',
    company: 'Indépendant',
    period: '2023 — présent',
    description:
      "Développement fullstack en indépendant : sites, applications et interfaces, en parallèle de la formation.",
  },
  {
    id: 'mabbtek',
    role: 'CTO',
    company: 'Mabbtek · Yaoundé',
    period: '2024 — présent',
    description:
      "Mabbtek est née en 2024 d'une communauté d'élèves ingénieurs de SUP'PTIC. Direction technique : choix de stack, architecture des produits et site officiel.",
  },
  {
    id: 'camtel',
    role: 'Stagiaire — Fullstack & Lead Developer',
    company: 'CAMTEL · Service de la Lutte contre la Fraude · Douala',
    period: 'Juillet — Septembre 2026',
    description:
      "Lead fullstack de CARBURFLOW : frontend, UX/UI, API Django et dashboard, pour le Service de la Lutte contre la Fraude (Délégation Régionale du Littoral, Business Unit Fixe, Bepanda).",
  },
  {
    id: 'amd',
    role: 'Participant — AMD AI Academy Challenge',
    company: 'LabLab.ai × AMD',
    period: 'Septembre — Décembre 2026',
    description:
      "Sélectionné pour un challenge individuel de trois mois sur l'IA accélérée par GPU : LLMs, RAG, agents IA, MCP, IA multimodale, web agents, systèmes multi-agents et fine-tuning.",
  },
];

export const education = [
  {
    period: '2024 — présent · 3e année',
    title: 'Ingénieur des Travaux de Télécommunication — Informatique & Réseaux',
    institution: "SUP'PTIC · Yaoundé",
    status: 'En cours',
    location: 'Yaoundé',
  },
  {
    period: '2024',
    title: 'Baccalauréat C',
    institution: 'Lycée de Biyem-Assi',
    status: 'Terminé',
    location: 'Yaoundé',
  },
  {
    period: '2022 — 2023',
    title: 'Développement web',
    institution: 'Formation pratique',
    status: 'Terminé',
  },
  {
    period: '2021 — 2022',
    title: 'Robotique et systèmes embarqués',
    institution: 'Formation pratique',
    status: 'Terminé',
  },
];

export const certifications: { period: string; title: string; institution: string }[] = [
  {
    period: '2026 — en cours',
    title: 'Hugging Face LLM Course',
    institution: 'Hugging Face',
  },
];

const certificationsEn: typeof certifications = [
  {
    period: '2026 — in progress',
    title: 'Hugging Face LLM Course',
    institution: 'Hugging Face',
  },
];

export function getCertifications() {
  return pick(certifications, certificationsEn);
}

const experiencesEn: ExperienceItem[] = [
  {
    ...experiences[0],
    role: 'Freelance Developer',
    company: 'Independent',
    period: '2023 — present',
    description:
      'Independent fullstack development: sites, apps and interfaces, alongside studies.',
  },
  {
    ...experiences[1],
    role: 'CTO',
    company: 'Mabbtek · Yaoundé',
    period: '2024 — present',
    description:
      "Mabbtek was born in 2024 from a community of SUP'PTIC engineering students. Technical lead: stack choices, product architecture and the official site.",
  },
  {
    ...experiences[2],
    role: 'Intern — Fullstack & Lead Developer',
    company: 'CAMTEL · Fraud Control Service · Douala',
    period: 'July — September 2026',
    description:
      'Fullstack lead on CARBURFLOW: frontend, UX/UI, Django API and dashboard, for the Fraud Control Service (Littoral Regional Delegation, Fixed Business Unit, Bepanda).',
  },
  {
    ...experiences[3],
    role: 'Participant — AMD AI Academy Challenge',
    period: 'September — December 2026',
    description:
      'Selected for a three-month individual challenge on GPU-accelerated AI: LLMs, RAG, AI agents, MCP, multimodal AI, web agents, multi-agent systems and fine-tuning.',
  },
];

const educationEn = [
  {
    ...education[0],
    period: '2024 — present · 3rd year',
    title: 'Telecommunications Works Engineer — Computing & Networks',
    status: 'En cours',
  },
  {
    ...education[1],
    title: 'Baccalauréat C',
    institution: 'Lycée de Biyem-Assi',
    status: 'Terminé',
  },
  {
    ...education[2],
    title: 'Web development',
    institution: 'Hands-on training',
    status: 'Terminé',
  },
  {
    ...education[3],
    title: 'Robotics and embedded systems',
    institution: 'Hands-on training',
    status: 'Terminé',
  },
];

export function getExperiences() {
  return pick(experiences, experiencesEn);
}

export function getEducation() {
  return pick(education, educationEn);
}

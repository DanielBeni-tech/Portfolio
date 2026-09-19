export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export const experiences: ExperienceItem[] = [
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
  },
  {
    period: '2024',
    title: 'Baccalauréat C',
    institution: 'Lycée de Biyem-Assi',
  },
];

export const certifications = [
  {
    period: '2021 — 2023',
    title: 'Développement Web & Robotique',
    institution: 'TIC Summit',
  },
];

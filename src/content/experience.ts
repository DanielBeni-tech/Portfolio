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
    role: 'Stagiaire — Développement full-stack',
    company: 'CAMTEL · Service de la Lutte contre la Fraude',
    period: 'Juillet — Septembre 2026',
    description:
      "Conception et développement de CARBURFLOW pour la Business Unit Fixe et le Service de la Lutte contre la Fraude : supervision des niveaux et consommations de carburant, avec détection d'anomalies.",
  },
];

export const education = [
  {
    period: '2024 — présent · 3e année',
    title: "Ingénieur des Travaux en Télécommunications — Informatique & Réseaux",
    institution: "SUP'PTIC · Yaoundé",
  },
  {
    period: '2024',
    title: 'Baccalauréat C',
    institution: 'Lycée de Biyem-Assi',
  },
  {
    period: '2021 — 2023',
    title: 'Formation en développement web et robotique',
    institution: 'TIC Summit · Attestation en cours d’obtention',
  },
];

export const certifications = [
  {
    period: 'Octobre 2025 — Avril 2026 · 400 h',
    title: 'Programmeur Électronique & Systèmes Embarqués',
    institution: 'OIF / D-CLIC · CNFPP',
  },
];

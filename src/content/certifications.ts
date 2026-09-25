import { pick } from '@/lib/locale';

export interface CertificationItem {
  id: string;
  /** 'skill' : prouve un savoir-faire · 'loisir' : activité personnelle */
  category: 'skill' | 'loisir';
  period: string;
  title: string;
  institution: string;
  description: string;
  image?: string;
  status?: 'Terminé' | 'En cours';
  tags?: string[];
}

export const certifications: CertificationItem[] = [
  {
    id: 'hackverse-2026',
    category: 'skill',
    period: '25 — 26 avril 2026',
    title: 'HackVerse 2026',
    institution: 'Club GI · ENSPY (Université de Yaoundé I)',
    description:
      "Certificat de participation active et réussie au HackVerse 2026, organisé dans l'esprit « Apprendre, Innover et Accomplir ». Compétition du club Génie Informatique — projet SANGO (sujet 07, routage secours).",
    image: '/certifications/hackverse.webp',
    status: 'Terminé',
    tags: ['Hackathon', 'SANGO', 'Club GI'],
  },
  {
    id: 'huggingface-llm',
    category: 'skill',
    period: '2026 — en cours',
    title: 'Hugging Face LLM Course',
    institution: 'Hugging Face',
    description:
      "Formation en ligne sur les grands modèles de langage : transformers, fine-tuning, déploiement et bonnes pratiques MLOps. En parallèle du challenge AMD et des projets IA du portfolio.",
    image: '/certifications/huggingface.webp',
    status: 'En cours',
    tags: ['LLMs', 'Transformers', 'IA'],
  },
  {
    id: 'webdev-tic-2023',
    category: 'skill',
    period: '2023 · 6 semaines',
    title: 'Bootcamp développement web',
    institution: 'TiC Foundation (Tech Innovation Center)',
    description:
      "Certificate of Completion — parcours web development du bootcamp TiC Foundation 2023 : HTML, CSS, JavaScript et Node.js sur six semaines. Développement et pitch d'un projet web en fin de programme.",
    image: '/certifications/webdev-tic.webp',
    status: 'Terminé',
    tags: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
  },
  {
    id: 'robotics-tic-2022',
    category: 'skill',
    period: '2022 · 2e édition TIC Bootcamp',
    title: 'Formation robotique — pitching & teamwork',
    institution: 'TiC Foundation · OpenDreams',
    description:
      "Certificate of Completion — formation robotique pratique et orientée projet lors de la 2e édition du TIC Bootcamp 2022. Acquisition de soft skills : pitching et travail d'équipe.",
    image: '/certifications/pitching-teamwork-tic.webp',
    status: 'Terminé',
    tags: ['Robotique', 'Pitching', 'Teamwork'],
  },
  {
    id: 'robotic-tme-2022',
    category: 'skill',
    period: '15 — 19 août 2022',
    title: 'Électronique, robotique & IoT',
    institution: 'TME Education Africa · TIC Summit Yaoundé',
    description:
      "Certificate of Participation — ateliers pratiques sur l'électronique, la robotique et l'IoT avec le kit pédagogique Arduino TME Education. Organisé au TIC Summit Yaoundé, présenté par les ambassadeurs Dessap Loic et Wafo Yannick.",
    image: '/certifications/robotic-tme.webp',
    status: 'Terminé',
    tags: ['Arduino', 'IoT', 'Robotique', 'Électronique'],
  },
  {
    id: 'scrabble-2024',
    category: 'loisir',
    period: '13 mars 2024',
    title: 'Finale interscolaire Scrabble — Semaine de la Francophonie',
    institution: 'Ministère des Relations Extérieures · FECASCRAB · OIF',
    description:
      "Attestation de participation à la finale du tournoi interscolaire de simultané jeunes, co-organisée par la Fédération Camerounaise de Scrabble et la Direction des Relations avec l'OIF, lors de la Semaine Nationale de la Francophonie 2024 — Musée National de Yaoundé.",
    image: '/certifications/scrabble-2024.webp',
    status: 'Terminé',
    tags: ['Scrabble', 'Francophonie', 'Stratégie'],
  },
  {
    id: 'scrabble-2023',
    category: 'loisir',
    period: '18 mars 2023',
    title: 'Finale interscolaire Scrabble — Semaine de la Francophonie',
    institution: 'Ministère des Relations Extérieures · FECASCRAB · OIF',
    description:
      "Attestation de participation à la finale du tournoi interscolaire de simultané jeunes, co-organisée par la FECASCRAB et la Direction des Relations avec l'OIF, lors de la Semaine Nationale de la Francophonie 2023 — Ministère des Relations Extérieures, Yaoundé.",
    image: '/certifications/scrabble-2023.webp',
    status: 'Terminé',
    tags: ['Scrabble', 'Francophonie', 'Stratégie'],
  },
];

const certificationsEn: CertificationItem[] = [
  {
    ...certifications[0],
    period: '25 — 26 April 2026',
    title: 'HackVerse 2026',
    institution: 'Computer Club · ENSPY (University of Yaoundé I)',
    description:
      'Certificate of active and successful participation in HackVerse 2026, held in the spirit of “Learn, Innovate, Accomplish”. Computer Engineering club competition — SANGO project (topic 07, emergency routing).',
    tags: ['Hackathon', 'SANGO', 'Computer Club'],
  },
  {
    ...certifications[1],
    period: '2026 — in progress',
    description:
      'Online training on large language models: transformers, fine-tuning, deployment and MLOps best practices. Alongside the AMD challenge and AI projects in the portfolio.',
    tags: ['LLMs', 'Transformers', 'AI'],
  },
  {
    ...certifications[2],
    period: '2023 · 6 weeks',
    title: 'Web development bootcamp',
    description:
      'Certificate of Completion — web development track of the TiC Foundation 2023 bootcamp: HTML, CSS, JavaScript and Node.js over six weeks. Built and pitched a web project at the end of the program.',
  },
  {
    ...certifications[3],
    period: '2022 · 2nd TIC Bootcamp edition',
    title: 'Robotics training — pitching & teamwork',
    description:
      'Certificate of Completion — hands-on, project-driven robotics training at the 2nd TIC Bootcamp 2022. Soft skills acquired: pitching and teamwork.',
    tags: ['Robotics', 'Pitching', 'Teamwork'],
  },
  {
    ...certifications[4],
    period: '15 — 19 August 2022',
    title: 'Electronics, robotics & IoT',
    description:
      'Certificate of Participation — practical workshops on electronics, robotics and IoT with the TME Educational Arduino kit. Held at TIC Summit Yaoundé, presented by ambassadors Dessap Loic and Wafo Yannick.',
    tags: ['Arduino', 'IoT', 'Robotics', 'Electronics'],
  },
  {
    ...certifications[5],
    period: '13 March 2024',
    title: 'Interschool Scrabble final — Francophonie Week',
    institution: 'Ministry of External Relations · FECASCRAB · OIF',
    description:
      'Certificate of participation in the interschool simultaneous youth tournament final, co-organized by the Cameroonian Scrabble Federation and the OIF Relations Directorate, during Francophonie Week 2024 — National Museum of Yaoundé.',
    tags: ['Scrabble', 'Francophonie', 'Strategy'],
  },
  {
    ...certifications[6],
    period: '18 March 2023',
    title: 'Interschool Scrabble final — Francophonie Week',
    institution: 'Ministry of External Relations · FECASCRAB · OIF',
    description:
      'Certificate of participation in the interschool simultaneous youth tournament final, co-organized by FECASCRAB and the OIF Relations Directorate, during Francophonie Week 2023 — Ministry of External Relations, Yaoundé.',
    tags: ['Scrabble', 'Francophonie', 'Strategy'],
  },
];

export function getCertifications() {
  return pick(certifications, certificationsEn).filter((c) => c.category === 'skill');
}

export function getCertificationsLoisirs() {
  return pick(certifications, certificationsEn).filter((c) => c.category === 'loisir');
}

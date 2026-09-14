import type { CommunityActivity } from '@/lib/types';

export const communityActivities: CommunityActivity[] = [
  {
    id: 'supptic',
    organization: "SUP'PTIC Computer Club",
    role: 'Founder & Lead',
    description: 'A technical community at SUP\u2019PTIC that brings students together around software, AI, and hands-on building.',
    year: '2023 — Present',
    activities: [
      'Workshops on Python, AI, and web development',
      'Hackathons and project sprints',
      'Peer mentoring and code reviews',
      'Connecting students with real-world projects',
    ],
  },
  {
    id: 'claude-cameroon',
    organization: 'Claude Cameroon',
    role: 'Community Builder',
    description: 'A local AI community exploring Claude and LLM tools — making AI education accessible across Cameroon.',
    year: '2024 — Present',
    activities: [
      'AI literacy sessions',
      'Prompt engineering workshops',
      'Local language AI exploration',
      'Connecting builders with opportunities',
    ],
  },
];

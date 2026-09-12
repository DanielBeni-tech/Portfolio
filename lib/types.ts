export type Project = { name: string; slug: string; description: string; category: string; stack: string[]; github: string; live?: string; featured?: boolean; tags: string[] }
export type HugoResult = { answer: string; projects: Project[] }

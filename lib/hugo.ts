import { projects } from '@/content/projects'
import { HugoResult } from './types'

const profileTerms = ['daniel', 'profil', 'qui es', 'compétence', 'skill', 'contact', 'github']

export function askHugo(question: string): HugoResult {
  const normalized = question.toLowerCase().trim()
  const matches = projects.filter((project) => [project.name, project.description, project.category, ...project.stack, ...project.tags].join(' ').toLowerCase().includes(normalized) || project.tags.some((tag) => normalized.includes(tag)))
  if (matches.length) return { answer: `Voici les projets qui correspondent le mieux à « ${question} ». J’ai privilégié les dépôts documentés et je n’ajoute pas de lien live lorsqu’il n’est pas vérifiable.`, projects: matches.slice(0, 3) }
  if (profileTerms.some((term) => normalized.includes(term))) return { answer: 'Daniel Beni est un développeur orienté produit qui relie interface, données, IA et impact. Son travail explore surtout les outils utiles, les expériences web et les systèmes intelligents.', projects: projects.slice(0, 3) }
  return { answer: 'Je n’ai pas assez d’informations documentées pour répondre précisément à cette question. Essaie « quels projets utilisent l’IA ? » ou « montre-moi les projets web ».', projects: [] }
}

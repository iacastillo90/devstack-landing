/**
 * Tipos e interfaces para portafolio
 */

export type ProjectCategory = 'web' | 'mobile' | 'backend' | 'devops' | 'all'

export interface Project {
  id: string
  title: string
  description: string
  shortDescription: string
  image: string
  thumbnail: string
  category: ProjectCategory
  tags: string[]
  technologies: string[]
  link?: string
  github?: string
  featured: boolean
  order: number
}

export interface PortfolioFilter {
  category: ProjectCategory
  search: string
}


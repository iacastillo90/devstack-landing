/**
 * Tipos e interfaces para servicios
 */

export type ServiceType = 'web' | 'mobile' | 'backend' | 'devops'

export interface Service {
  id: string
  title: string
  description: string
  shortDescription: string
  icon: string
  color: string
  features: string[]
  technologies: string[]
  order: number
}

export interface ServiceCategory {
  id: ServiceType
  name: string
  services: Service[]
}


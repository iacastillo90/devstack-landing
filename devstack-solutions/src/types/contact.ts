/**
 * Tipos e interfaces para contacto
 */

export type BudgetRange = 'small' | 'medium' | 'large' | 'enterprise'

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  service: string
  budget: BudgetRange
  message: string
}

export interface ContactResponse {
  success: boolean
  message: string
  data?: {
    id: string
    timestamp: string
    status: 'pending' | 'sent' | 'error'
  }
}

export interface ContactInfo {
  email: string
  phone: string
  location: string
  timezone: string
}


/**
 * Validadores personalizados
 */

export const validators = {
  email: (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  },

  phone: (phone: string): boolean => {
    const regex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/
    return regex.test(phone)
  },

  url: (url: string): boolean => {
    try {
      new URL(url)
      return true
    } catch {
      return false
    }
  },

  minLength: (text: string, min: number): boolean => text.length >= min,

  maxLength: (text: string, max: number): boolean => text.length <= max,

  required: (value: any): boolean => {
    if (typeof value === 'string') return value.trim().length > 0
    return value !== null && value !== undefined
  },

  alphanumeric: (text: string): boolean => /^[a-zA-Z0-9]*$/.test(text),

  noSpecialChars: (text: string): boolean => /^[a-zA-Z0-9\s]*$/.test(text),
}


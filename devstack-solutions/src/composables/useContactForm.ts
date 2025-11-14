/**
 * Composable para manejo de formulario de contacto
 */

import { ref, computed, reactive } from 'vue'
import type { ContactFormData } from '@/types/contact'
import { validators } from '@utils/validators'

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  service?: string
  budget?: string
  message?: string
}

export const useContactForm = () => {
  const isLoading = ref(false)
  const submitted = ref(false)
  const errors = reactive<FormErrors>({})

  const form = reactive<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: 'medium',
    message: '',
  })

  // Validar email
  const validateEmail = (email: string): boolean => {
    return validators.email(email)
  }

  // Validar teléfono (opcional pero si se ingresa debe ser válido)
  const validatePhone = (phone: string): boolean => {
    if (!phone) return true // Es opcional
    return validators.phone(phone)
  }

  // Validar formulario completo
  const validate = (): boolean => {
    errors.name = undefined
    errors.email = undefined
    errors.phone = undefined
    errors.service = undefined
    errors.budget = undefined
    errors.message = undefined

    // Nombre
    if (!validators.required(form.name)) {
      errors.name = 'El nombre es requerido'
    }

    // Email
    if (!validators.required(form.email)) {
      errors.email = 'El email es requerido'
    } else if (!validateEmail(form.email)) {
      errors.email = 'El email no es válido'
    }

    // Teléfono (opcional pero validar si existe)
    if (form.phone && !validatePhone(form.phone)) {
      errors.phone = 'El teléfono no es válido'
    }

    // Servicio
    if (!validators.required(form.service)) {
      errors.service = 'Debe seleccionar un servicio'
    }

    // Mensaje
    if (!validators.required(form.message)) {
      errors.message = 'El mensaje es requerido'
    } else if (!validators.minLength(form.message, 20)) {
      errors.message = 'El mensaje debe tener al menos 20 caracteres'
    }

    return Object.keys(errors).length === 0
  }

  // Enviar formulario
  const submitForm = async (): Promise<boolean> => {
    if (!validate()) {
      return false
    }

    isLoading.value = true

    try {
      // Aquí iría la lógica para enviar el formulario
      // Por ahora simulamos un envío exitoso
      await new Promise((resolve) => setTimeout(resolve, 1500))

      submitted.value = true
      resetForm()
      return true
    } catch (error) {
      console.error('Error al enviar formulario:', error)
      return false
    } finally {
      isLoading.value = false
    }
  }

  // Resetear formulario
  const resetForm = () => {
    form.name = ''
    form.email = ''
    form.phone = ''
    form.service = ''
    form.budget = 'medium'
    form.message = ''
    submitted.value = false
  }

  // Computado para verificar si hay errores
  const hasErrors = computed(() => Object.keys(errors).length > 0)

  // Computado para verificar si el formulario es válido
  const isValid = computed(() => {
    return (
      validators.required(form.name) &&
      validators.required(form.email) &&
      validateEmail(form.email) &&
      (!form.phone || validatePhone(form.phone)) &&
      validators.required(form.service) &&
      validators.required(form.message) &&
      validators.minLength(form.message, 20)
    )
  })

  return {
    form,
    errors,
    isLoading,
    submitted,
    hasErrors,
    isValid,
    validate,
    submitForm,
    resetForm,
    validateEmail,
    validatePhone,
  }
}


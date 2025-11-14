/**
 * Pinia Store para UI
 */

import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUIStore = defineStore('ui', () => {
  // Estado
  const isMenuOpen = ref(false)
  const isLoading = ref(false)
  const notification = ref<{
    type: 'success' | 'error' | 'warning' | 'info'
    message: string
  } | null>(null)

  const scrollPosition = ref(0)

  // Acciones
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
  }

  const openMenu = () => {
    isMenuOpen.value = true
  }

  const closeMenu = () => {
    isMenuOpen.value = false
  }

  const setLoading = (loading: boolean) => {
    isLoading.value = loading
  }

  const showNotification = (type: 'success' | 'error' | 'warning' | 'info', message: string) => {
    notification.value = { type, message }
    setTimeout(() => {
      notification.value = null
    }, 5000)
  }

  const setScrollPosition = (position: number) => {
    scrollPosition.value = position
  }

  return {
    isMenuOpen,
    isLoading,
    notification,
    scrollPosition,
    toggleMenu,
    openMenu,
    closeMenu,
    setLoading,
    showNotification,
    setScrollPosition,
  }
})


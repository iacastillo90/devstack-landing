/**
 * Composable para manejo de tema oscuro/claro
 */

import { ref, computed, onMounted } from 'vue'

export const useDarkMode = () => {
  const isDark = ref(true) // Default a modo oscuro

  // Inicializar tema desde localStorage
  onMounted(() => {
    const saved = localStorage.getItem('theme')
    if (saved) {
      isDark.value = saved === 'dark'
    } else {
      // Detectar preferencia del sistema
      isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    applyTheme()
  })

  // Aplicar tema
  const applyTheme = () => {
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  }

  // Toggle tema
  const toggleTheme = () => {
    isDark.value = !isDark.value
    applyTheme()
  }

  const theme = computed(() => (isDark.value ? 'dark' : 'light'))

  return {
    isDark,
    theme,
    toggleTheme,
  }
}


/**
 * Composable para animaciones al hacer scroll
 */

import { onMounted, onUnmounted } from 'vue'
import { animateFadeInOnScroll } from '@utils/animations'

export const useScrollAnimation = () => {
  onMounted(() => {
    // Importar AOS dinámicamente para evitar problemas de tipos
    // @ts-ignore
    import('aos').then((AOSModule) => {
      const AOS = AOSModule.default
      AOS.init({
        duration: 800,
        offset: 100,
        delay: 0,
        once: true,
        easing: 'ease-in-out-quad',
        mirror: false,
        throttleDelay: 99,
        startEvent: 'DOMContentLoaded',
      })

      setTimeout(() => {
        AOS.refresh()
      }, 100)
    })
  })

  onUnmounted(() => {
    // Limpiar AOS
    try {
      // @ts-ignore
      import('aos').then((AOSModule) => {
        const AOS = AOSModule.default
        AOS.refreshHard()
      })
    } catch {
      // Silenciar errores
    }
  })

  // Función para animar elementos específicos
  const animateElement = (element: Element | null) => {
    if (element) {
      animateFadeInOnScroll(element)
    }
  }

  return {
    animateElement,
  }
}


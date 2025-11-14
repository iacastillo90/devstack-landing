/**
 * Composable para usar el mouse y parallax
 */

import { ref, onMounted, onUnmounted } from 'vue'

export interface MousePosition {
  x: number
  y: number
  deltaX: number
  deltaY: number
}

export const useMouse = () => {
  const mousePosition = ref<MousePosition>({
    x: 0,
    y: 0,
    deltaX: 0,
    deltaY: 0,
  })

  const handleMouseMove = (event: MouseEvent) => {
    const prevX = mousePosition.value.x
    const prevY = mousePosition.value.y

    mousePosition.value = {
      x: event.clientX,
      y: event.clientY,
      deltaX: event.clientX - prevX,
      deltaY: event.clientY - prevY,
    }
  }

  onMounted(() => {
    window.addEventListener('mousemove', handleMouseMove)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove)
  })

  // Calcular parallax offset
  const getParallaxOffset = (depth: number = 1) => {
    return {
      x: (mousePosition.value.x / window.innerWidth - 0.5) * depth * 50,
      y: (mousePosition.value.y / window.innerHeight - 0.5) * depth * 50,
    }
  }

  return {
    mousePosition,
    getParallaxOffset,
  }
}


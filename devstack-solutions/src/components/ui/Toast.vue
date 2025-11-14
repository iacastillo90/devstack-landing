<template>
  <div
    v-if="show"
    :class="[
      'fixed top-4 right-4 z-50 p-4 rounded-lg border',
      'max-w-sm w-full animate-slide-in-right',
      {
        'bg-green-900 border-green-700 text-green-100': type === 'success',
        'bg-red-900 border-red-700 text-red-100': type === 'error',
        'bg-yellow-900 border-yellow-700 text-yellow-100': type === 'warning',
        'bg-blue-900 border-blue-700 text-blue-100': type === 'info',
      },
    ]"
  >
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <span class="mr-3">{{ icon }}</span>
        <p class="font-medium">{{ message }}</p>
      </div>
      <button
        class="text-current opacity-70 hover:opacity-100 transition-opacity"
        @click="close"
      >
        ✕
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  show: boolean
  type?: 'success' | 'error' | 'warning' | 'info'
  message: string
  duration?: number
}

const props = withDefaults(defineProps<Props>(), {
  type: 'info',
  duration: 5000,
})

const emit = defineEmits<{
  'close': []
}>()

const icon = computed(() => {
  switch (props.type) {
    case 'success':
      return '✓'
    case 'error':
      return '✕'
    case 'warning':
      return '⚠'
    case 'info':
    default:
      return 'ℹ'
  }
})

const close = () => {
  emit('close')
}

// Auto close
if (props.show && props.duration > 0) {
  setTimeout(() => {
    close()
  }, props.duration)
}
</script>


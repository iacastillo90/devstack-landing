<template>
  <button
    :class="[
      'btn-base',
      {
        'btn-primary': variant === 'primary',
        'btn-secondary': variant === 'secondary',
        'btn-accent': variant === 'accent',
        'btn-outline': variant === 'outline',
      },
      {
        'opacity-50 cursor-not-allowed': disabled,
        'text-sm px-4 py-2': size === 'sm',
        'text-base px-6 py-3': size === 'md',
        'text-lg px-8 py-4': size === 'lg',
      },
    ]"
    :disabled="disabled || loading"
  >
    <span v-if="loading" class="inline-block mr-2 animate-spin">⏳</span>
    <slot>{{ label }}</slot>
  </button>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  label?: string
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
})
</script>


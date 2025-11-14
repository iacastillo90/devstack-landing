<template>
  <div
    :class="[
      'inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold',
      {
        'badge-primary': variant === 'primary',
        'badge-secondary': variant === 'secondary',
        'badge-accent': variant === 'accent',
      },
    ]"
  >
    <slot>{{ label }}</slot>
  </div>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'accent'
  label?: string
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
})
</script>


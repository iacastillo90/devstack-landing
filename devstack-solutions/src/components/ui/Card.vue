<template>
  <div
    :class="[
      'card',
      {
        'card-hover': hover,
      },
    ]"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
interface Props {
  hover?: boolean
}

withDefaults(defineProps<Props>(), {
  hover: true,
})
</script>


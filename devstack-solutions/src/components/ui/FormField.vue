<template>
  <div class="flex flex-col gap-2 w-full">
    <label v-if="label" class="text-sm font-semibold text-slate-200">
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>
    <slot></slot>
    <p v-if="error" class="text-red-400 text-sm">{{ error }}</p>
    <p v-if="hint" class="text-slate-400 text-sm">{{ hint }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  label?: string
  error?: string
  hint?: string
  required?: boolean
}

withDefaults(defineProps<Props>(), {
  required: false,
})
</script>


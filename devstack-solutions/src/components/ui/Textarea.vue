<template>
  <textarea
    :value="modelValue"
    :placeholder="placeholder"
    :disabled="disabled"
    :rows="rows"
    class="input-base resize-none"
    @input="emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
  ></textarea>
</template>

<script setup lang="ts">
interface Props {
  modelValue: string
  placeholder?: string
  disabled?: boolean
  rows?: number
}

withDefaults(defineProps<Props>(), {
  disabled: false,
  rows: 5,
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>


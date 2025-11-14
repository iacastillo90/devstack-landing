<template>
  <div
    v-if="show"
    :class="[
      'fixed inset-0 z-50 flex items-center justify-center',
      'bg-black bg-opacity-50 backdrop-blur-sm',
    ]"
    @click.self="close"
  >
    <div
      :class="[
        'bg-slate-800 rounded-xl border border-slate-700 p-8',
        'max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto',
        'transform transition-all duration-300',
        show ? 'scale-100 opacity-100' : 'scale-95 opacity-0',
      ]"
    >
      <div class="flex items-center justify-between mb-4">
        <h2 class="heading-md">{{ title }}</h2>
        <button
          class="text-slate-400 hover:text-white transition-colors"
          @click="close"
        >
          ✕
        </button>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  show: boolean
  title?: string
}

defineProps<Props>()

const emit = defineEmits<{
  'close': []
}>()

const close = () => {
  emit('close')
}
</script>


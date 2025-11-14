<template>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
    <div
      v-for="stat in STATS"
      :key="stat.label"
      class="text-center"
      data-aos="fade-up"
    >
      <div
        class="text-5xl font-bold text-gradient mb-2"
        ref="el"
      >
        {{ stat.value }}
      </div>
      <p class="text-slate-400">{{ stat.label }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { STATS } from '@utils/constants'

const el = ref<HTMLDivElement>()

onMounted(() => {
  // Los contadores se animan con scroll
})
</script>


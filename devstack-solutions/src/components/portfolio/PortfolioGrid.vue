<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div
      v-for="project in projects"
      :key="project.id"
      data-aos="fade-up"
      :data-aos-delay="`${project.order * 100}`"
    >
      <PortfolioCard :project="project" />
    </div>
  </div>

  <!-- Empty State -->
  <div v-if="projects.length === 0" class="text-center py-12">
    <p class="text-slate-400 text-lg">No se encontraron proyectos</p>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '@/types/portfolio'
import PortfolioCard from './PortfolioCard.vue'

interface Props {
  projects: Project[]
}

defineProps<Props>()
</script>


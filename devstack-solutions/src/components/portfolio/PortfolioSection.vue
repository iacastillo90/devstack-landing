<template>
  <section id="portfolio" class="section relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-accent-500 rounded-full filter blur-3xl opacity-5"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-primary-500 rounded-full filter blur-3xl opacity-5"></div>

    <div class="container-custom relative z-10">
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="heading-lg mb-4">Portafolio 🎨</h2>
        <p class="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Proyectos destacados que demuestran mi experiencia y capacidad para entregar soluciones de calidad.
        </p>
      </div>

      <!-- Filtros -->
      <div class="flex flex-wrap justify-center gap-3 mb-12" data-aos="fade-up" data-aos-delay="100">
        <button
          v-for="cat in ['all', ...categories]"
          :key="cat"
          :class="[
            'px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105',
            selectedCategory === cat
              ? 'bg-gradient-primary text-white shadow-lg-glow'
              : 'bg-slate-700 text-slate-300 hover:bg-slate-600 border border-slate-600',
          ]"
          @click="setCategory(cat as any)"
        >
          {{ formatCategory(cat) }}
        </button>
      </div>

      <!-- Grid -->
      <PortfolioGrid :projects="filteredProjects" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { usePortfolioStore } from '@stores/portfolioStore'
import PortfolioGrid from './PortfolioGrid.vue'

const store = usePortfolioStore()
const selectedCategory = store.selectedCategory
const filteredProjects = store.filteredProjects
const categories = store.categories

const setCategory = store.setCategory

const formatCategory = (cat: string) => {
  const map: Record<string, string> = {
    all: 'Todos',
    web: 'Web',
    mobile: 'Mobile',
    backend: 'Backend',
    devops: 'DevOps',
  }
  return map[cat] || cat
}
</script>


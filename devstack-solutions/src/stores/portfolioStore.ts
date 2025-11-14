/**
 * Pinia Store para Portafolio
 */

import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { PROJECTS } from '@utils/constants'
import type { Project, ProjectCategory } from '@/types/portfolio'

export const usePortfolioStore = defineStore('portfolio', () => {
  // Estado
  const projects = ref<Project[]>(PROJECTS)
  const selectedCategory = ref<ProjectCategory>('all')
  const searchQuery = ref('')

  // Computados
  const filteredProjects = computed(() => {
    return projects.value.filter((project) => {
      const matchCategory = selectedCategory.value === 'all' || project.category === selectedCategory.value
      const matchSearch = searchQuery.value === '' || project.title.toLowerCase().includes(searchQuery.value.toLowerCase()) || project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.value.toLowerCase()))

      return matchCategory && matchSearch
    })
  })

  const featuredProjects = computed(() => {
    return projects.value.filter((project) => project.featured).slice(0, 3)
  })

  const categories = computed(() => {
    const cats = new Set<ProjectCategory>(projects.value.map((p) => p.category))
    return Array.from(cats)
  })

  // Acciones
  const setCategory = (category: ProjectCategory) => {
    selectedCategory.value = category
  }

  const setSearchQuery = (query: string) => {
    searchQuery.value = query
  }

  const getProjectById = (id: string) => {
    return projects.value.find((p) => p.id === id)
  }

  const resetFilters = () => {
    selectedCategory.value = 'all'
    searchQuery.value = ''
  }

  return {
    projects,
    selectedCategory,
    searchQuery,
    filteredProjects,
    featuredProjects,
    categories,
    setCategory,
    setSearchQuery,
    getProjectById,
    resetFilters,
  }
})


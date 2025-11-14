<template>
  <Card class="group overflow-hidden h-full flex flex-col card-hover relative">
    <!-- Glow effect -->
    <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(6, 182, 212, 0.05) 100%)"></div>

    <!-- Imagen -->
    <div class="relative mb-4 overflow-hidden rounded-2xl bg-slate-700 aspect-video group/img">
      <img
        :src="project.thumbnail || '/placeholder.jpg'"
        :alt="project.title"
        class="w-full h-full object-cover group-hover/img:scale-125 transition-transform duration-500"
      />
      <div class="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300"></div>
      <div class="absolute inset-0 bg-gradient-dark opacity-0 group-hover/img:opacity-30 transition-opacity duration-300"></div>
    </div>

    <!-- Contenido -->
    <div class="flex-1 flex flex-col relative z-10">
      <h3 class="heading-sm mb-2 line-clamp-1 group-hover:text-gradient transition-colors">{{ project.title }}</h3>

      <p class="text-slate-400 text-sm mb-4 flex-1 line-clamp-2">
        {{ project.shortDescription }}
      </p>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mb-4">
        <Badge v-for="tag in project.tags.slice(0, 2)" :key="tag" :label="tag" variant="accent" />
      </div>

      <!-- Tecnologías -->
      <div class="flex flex-wrap gap-1 mb-4">
        <span
          v-for="tech in project.technologies.slice(0, 3)"
          :key="tech"
          class="text-xs px-2 py-1 bg-slate-700 text-slate-300 rounded-lg hover:bg-slate-600 hover:text-white transition-all"
        >
          {{ tech }}
        </span>
      </div>

      <!-- Links -->
      <div class="flex gap-2">
        <Button
          v-if="project.link"
          variant="primary"
          size="sm"
          class="flex-1"
          @click="openLink(project.link)"
        >
          Ver Demo
        </Button>
        <Button
          v-if="project.github"
          variant="secondary"
          size="sm"
          class="flex-1"
          @click="openLink(project.github)"
        >
          GitHub
        </Button>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import type { Project } from '@/types/portfolio'
import Card from '@components/ui/Card.vue'
import Badge from '@components/ui/Badge.vue'
import Button from '@components/ui/Button.vue'
import { openInNewTab } from '@utils/index'

interface Props {
  project: Project
}

defineProps<Props>()

const openLink = (url: string) => {
  openInNewTab(url)
}
</script>


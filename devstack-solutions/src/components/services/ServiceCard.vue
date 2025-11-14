<template>
  <Card class="h-full card-hover group relative overflow-hidden">
    <!-- Background Accent -->
    <div class="absolute top-0 right-0 w-24 h-24 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500" :style="{ backgroundColor: service.color }"></div>
    
    <div class="mb-4 relative z-10">
      <div
        class="w-16 h-16 rounded-2xl flex-center text-4xl mb-4 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1"
        :style="{ backgroundColor: service.color + '15', borderColor: service.color, borderWidth: '2px' }"
      >
        {{ getIcon(service.icon) }}
      </div>
      <h3 class="heading-sm mb-2 group-hover:text-gradient transition-colors">{{ service.title }}</h3>
      <p class="text-slate-400 text-sm mb-4">{{ service.shortDescription }}</p>
    </div>

    <p class="text-slate-300 text-sm mb-4 relative z-10">{{ service.description }}</p>

    <div class="mb-4 relative z-10">
      <h4 class="font-semibold text-white mb-2">Características:</h4>
      <ul class="space-y-1">
        <li v-for="(feature, idx) in service.features.slice(0, 3)" :key="idx" class="text-slate-400 text-sm">
          ✓ {{ feature }}
        </li>
      </ul>
    </div>

    <div class="relative z-10">
      <h4 class="font-semibold text-white mb-2">Tecnologías:</h4>
      <div class="flex flex-wrap gap-2">
        <Badge v-for="tech in service.technologies.slice(0, 4)" :key="tech" :label="tech" />
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import type { Service } from '@/types/services'
import Card from '@components/ui/Card.vue'
import Badge from '@components/ui/Badge.vue'

interface Props {
  service: Service
}

defineProps<Props>()

const getIcon = (icon: string): string => {
  const icons: Record<string, string> = {
    globe: '🌐',
    smartphone: '📱',
    server: '⚙️',
    cloud: '☁️',
  }
  return icons[icon] || '⭐'
}
</script>


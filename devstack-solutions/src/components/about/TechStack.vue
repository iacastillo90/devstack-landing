<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <!-- Frontend -->
    <div data-aos="fade-right">
      <h3 class="heading-sm mb-6 flex items-center gap-3">
        <span class="text-3xl">🎨</span> Frontend
      </h3>
      <div class="space-y-4">
        <div v-for="tech in TECH_STACK.frontend" :key="tech.name">
          <div class="flex items-center justify-between mb-2">
            <span class="font-semibold flex items-center gap-2">
              <span>{{ tech.icon }}</span>
              {{ tech.name }}
            </span>
            <Badge :label="tech.level" variant="accent" />
          </div>
          <div class="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
            <div
              class="h-full bg-gradient-accent transition-all duration-500"
              :style="{
                width: getLevelPercentage(tech.level),
              }"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Backend -->
    <div data-aos="fade-left">
      <h3 class="heading-sm mb-6 flex items-center gap-3">
        <span class="text-3xl">⚙️</span> Backend
      </h3>
      <div class="space-y-4">
        <div v-for="tech in TECH_STACK.backend" :key="tech.name">
          <div class="flex items-center justify-between mb-2">
            <span class="font-semibold flex items-center gap-2">
              <span>{{ tech.icon }}</span>
              {{ tech.name }}
            </span>
            <Badge :label="tech.level" variant="primary" />
          </div>
          <div class="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
            <div
              class="h-full bg-gradient-primary transition-all duration-500"
              :style="{
                width: getLevelPercentage(tech.level),
              }"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <div data-aos="fade-right" data-aos-delay="100">
      <h3 class="heading-sm mb-6 flex items-center gap-3">
        <span class="text-3xl">📱</span> Mobile
      </h3>
      <div class="space-y-4">
        <div v-for="tech in TECH_STACK.mobile" :key="tech.name">
          <div class="flex items-center justify-between mb-2">
            <span class="font-semibold flex items-center gap-2">
              <span>{{ tech.icon }}</span>
              {{ tech.name }}
            </span>
            <Badge :label="tech.level" variant="secondary" />
          </div>
          <div class="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
            <div
              class="h-full bg-gradient-to-r from-secondary-500 to-secondary-600 transition-all duration-500"
              :style="{
                width: getLevelPercentage(tech.level),
              }"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <!-- DevOps -->
    <div data-aos="fade-left" data-aos-delay="100">
      <h3 class="heading-sm mb-6 flex items-center gap-3">
        <span class="text-3xl">☁️</span> DevOps
      </h3>
      <div class="space-y-4">
        <div v-for="tech in TECH_STACK.devops" :key="tech.name">
          <div class="flex items-center justify-between mb-2">
            <span class="font-semibold flex items-center gap-2">
              <span>{{ tech.icon }}</span>
              {{ tech.name }}
            </span>
            <Badge :label="tech.level" variant="accent" />
          </div>
          <div class="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
            <div
              class="h-full bg-gradient-to-r from-accent-400 to-accent-600 transition-all duration-500"
              :style="{
                width: getLevelPercentage(tech.level),
              }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TECH_STACK } from '@utils/constants'
import Badge from '@components/ui/Badge.vue'

const getLevelPercentage = (level: string): string => {
  const map: Record<string, string> = {
    Expert: '100%',
    Advanced: '85%',
    Intermediate: '65%',
  }
  return map[level] || '50%'
}
</script>


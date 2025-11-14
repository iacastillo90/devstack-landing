<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    <!-- Email -->
    <Card>
      <div class="flex items-center gap-4 mb-4">
        <div class="w-12 h-12 bg-primary-600 rounded-lg flex-center text-2xl">📧</div>
        <div>
          <h3 class="font-bold text-white">Email</h3>
          <p class="text-slate-400 text-sm">Te responderé en 24 horas</p>
        </div>
      </div>
      <a
        :href="`mailto:${DEVELOPER.email}`"
        class="link-base text-lg"
      >
        {{ DEVELOPER.email }}
      </a>
    </Card>

    <!-- Teléfono -->
    <Card>
      <div class="flex items-center gap-4 mb-4">
        <div class="w-12 h-12 bg-accent-500 rounded-lg flex-center text-2xl">📱</div>
        <div>
          <h3 class="font-bold text-white">Teléfono</h3>
          <p class="text-slate-400 text-sm">Llamadas y WhatsApp</p>
        </div>
      </div>
      <a
        :href="`tel:${DEVELOPER.phone}`"
        class="link-base text-lg"
      >
        {{ DEVELOPER.phone }}
      </a>
    </Card>

    <!-- Ubicación -->
    <Card>
      <div class="flex items-center gap-4 mb-4">
        <div class="w-12 h-12 bg-secondary-600 rounded-lg flex-center text-2xl">📍</div>
        <div>
          <h3 class="font-bold text-white">Ubicación</h3>
          <p class="text-slate-400 text-sm">Zona horaria CST</p>
        </div>
      </div>
      <p class="text-white text-lg">{{ DEVELOPER.location }}</p>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { DEVELOPER } from '@utils/constants'
import Card from '@components/ui/Card.vue'
</script>


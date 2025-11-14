<template>
  <footer class="bg-slate-950 border-t border-slate-700 py-16">
    <div class="container-custom">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <!-- Brand -->
        <div>
          <a href="#home" class="flex items-center gap-2 text-2xl font-bold text-gradient mb-4">
            <span class="text-primary-500">&lt;</span>DevStack<span class="text-accent-500">/&gt;</span>
          </a>
          <p class="text-slate-400 text-sm">
            {{ DEVELOPER.tagline }}
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="font-bold text-white mb-4">Navegación</h3>
          <ul class="space-y-2">
            <li v-for="link in NAV_LINKS" :key="link.id">
              <a
                :href="link.href"
                class="text-slate-400 hover:text-primary-400 transition-colors text-sm"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h3 class="font-bold text-white mb-4">Servicios</h3>
          <ul class="space-y-2">
            <li v-for="service in SERVICES" :key="service.id">
              <a
                href="#services"
                class="text-slate-400 hover:text-primary-400 transition-colors text-sm"
              >
                {{ service.title }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="font-bold text-white mb-4">Contacto</h3>
          <ul class="space-y-3 text-sm">
            <li>
              <a
                :href="`mailto:${DEVELOPER.email}`"
                class="text-slate-400 hover:text-primary-400 transition-colors"
              >
                {{ DEVELOPER.email }}
              </a>
            </li>
            <li>
              <a
                :href="`tel:${DEVELOPER.phone}`"
                class="text-slate-400 hover:text-primary-400 transition-colors"
              >
                {{ DEVELOPER.phone }}
              </a>
            </li>
            <li class="text-slate-400">{{ DEVELOPER.location }}</li>
          </ul>
        </div>
      </div>

      <!-- Social Links -->
      <div class="border-t border-slate-700 pt-8">
        <div class="flex items-center justify-between flex-col md:flex-row gap-4">
          <p class="text-slate-400 text-sm">
            © {{ currentYear }} DevStack Solutions. Todos los derechos reservados.
          </p>
          <div class="flex items-center gap-4">
            <a
              v-if="DEVELOPER.social.github"
              :href="DEVELOPER.social.github"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 flex-center bg-slate-700 rounded-lg hover:bg-primary-600 transition-colors"
              title="GitHub"
            >
              <span class="text-white">⚙️</span>
            </a>
            <a
              v-if="DEVELOPER.social.linkedin"
              :href="DEVELOPER.social.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 flex-center bg-slate-700 rounded-lg hover:bg-primary-600 transition-colors"
              title="LinkedIn"
            >
              <span class="text-white">💼</span>
            </a>
            <a
              v-if="DEVELOPER.social.twitter"
              :href="DEVELOPER.social.twitter"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 flex-center bg-slate-700 rounded-lg hover:bg-primary-600 transition-colors"
              title="Twitter"
            >
              <span class="text-white">🐦</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { DEVELOPER, SERVICES, NAV_LINKS } from '@utils/constants'

const currentYear = computed(() => new Date().getFullYear())
</script>


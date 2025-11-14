<template>
  <section id="about" class="section-with-bg relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full filter blur-3xl opacity-5"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-accent-500 rounded-full filter blur-3xl opacity-5"></div>

    <div class="container-custom relative z-10">
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="heading-lg mb-4">Sobre Mí 👨‍💻</h2>
        <p class="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {{ DEVELOPER.description }}
        </p>
      </div>

      <!-- Stats -->
      <div class="mb-20">
        <StatsCounter />
      </div>

      <!-- Tech Stack -->
      <div data-aos="fade-up">
        <h3 class="heading-md mb-12 text-center">Mi Stack Tecnológico ⚙️</h3>
        <TechStack />
      </div>

      <!-- About Text -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
        <div data-aos="fade-right" class="group">
          <h3 class="heading-sm mb-4 group-hover:text-gradient transition-colors">Experiencia 📈</h3>
          <p class="text-slate-300 mb-4 leading-relaxed">
            Con más de 5 años de experiencia en desarrollo web y aplicaciones, he trabajado en diversos
            proyectos que van desde startups hasta empresas grandes. Mi pasión es crear soluciones que sean
            no solo funcionales, sino también hermosas y escalables.
          </p>
          <p class="text-slate-300 leading-relaxed">
            Soy un autodidacta continuo que se mantiene actualizado con las últimas tecnologías y tendencias
            en el desarrollo de software. Me encanta trabajar en equipo y compartir conocimiento.
          </p>
        </div>

        <div data-aos="fade-left" class="group">
          <h3 class="heading-sm mb-4 group-hover:text-gradient transition-colors">Enfoque 🎯</h3>
          <ul class="space-y-3">
            <li class="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-700/50 transition-all">
              <span class="text-primary-400 mt-1 text-lg">✓</span>
              <span class="text-slate-300">Código limpio y mantenible</span>
            </li>
            <li class="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-700/50 transition-all">
              <span class="text-accent-400 mt-1 text-lg">✓</span>
              <span class="text-slate-300">Performance y optimización</span>
            </li>
            <li class="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-700/50 transition-all">
              <span class="text-secondary-400 mt-1 text-lg">✓</span>
              <span class="text-slate-300">Experiencia del usuario primera</span>
            </li>
            <li class="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-700/50 transition-all">
              <span class="text-primary-400 mt-1 text-lg">✓</span>
              <span class="text-slate-300">Escalabilidad y seguridad</span>
            </li>
            <li class="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-700/50 transition-all">
              <span class="text-accent-400 mt-1 text-lg">✓</span>
              <span class="text-slate-300">Testing y documentación</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { DEVELOPER } from '@utils/constants'
import StatsCounter from './StatsCounter.vue'
import TechStack from './TechStack.vue'
</script>


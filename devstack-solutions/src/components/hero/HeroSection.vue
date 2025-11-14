<template>
  <section id="home" class="relative w-full bg-slate-950">
    <!-- 3D Background Container -->
    <div class="w-full h-screen lg:h-[600px] xl:h-screen overflow-hidden relative">
      <Hero3DBackground />
      
      <!-- Gradient Overlays -->
      <div class="absolute inset-0 bg-gradient-mesh opacity-30"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-slate-950/10 via-transparent to-slate-950/80"></div>
      
      <!-- Decorative Floating Elements -->
      <div class="absolute top-10 left-5 md:top-20 md:left-10 w-40 h-40 md:w-72 md:h-72 bg-primary-500 rounded-full filter blur-3xl opacity-5 md:opacity-10"></div>
      <div class="absolute -bottom-20 right-5 md:bottom-10 md:right-10 w-48 h-48 md:w-96 md:h-96 bg-accent-500 rounded-full filter blur-3xl opacity-5 md:opacity-10"></div>
    </div>

    <!-- Content Section - Positioned below 3D -->
    <div class="relative z-20 w-full bg-gradient-to-b from-slate-950 to-slate-900 px-4 sm:px-6 lg:px-8">
      <div class="container mx-auto max-w-6xl py-16 sm:py-20 md:py-24 lg:py-32">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <!-- Text Content -->
          <div class="text-center lg:text-left" data-aos="fade-up" data-aos-duration="800">
            <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4 sm:mb-6 text-gradient animate-fade-in">
              Transformando Ideas en Soluciones Digitales
            </h1>

            <p class="text-base sm:text-lg md:text-xl text-slate-300 mb-6 sm:mb-8 leading-relaxed animate-fade-in" style="animation-delay: 0.1s">
              Full Stack Developer especializado en crear experiencias web modernas, aplicaciones móviles, backends robustos y soluciones cloud escalables.
            </p>

            <!-- Tech Stack Preview -->
            <div class="mb-8 hidden sm:block animate-fade-in" style="animation-delay: 0.15s">
              <p class="text-sm text-slate-400 mb-3">Tecnologías principales:</p>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 text-xs sm:text-sm bg-primary-500/10 text-primary-400 rounded-full border border-primary-500/30">Vue.js</span>
                <span class="px-3 py-1 text-xs sm:text-sm bg-secondary-500/10 text-secondary-400 rounded-full border border-secondary-500/30">TypeScript</span>
                <span class="px-3 py-1 text-xs sm:text-sm bg-accent-500/10 text-accent-400 rounded-full border border-accent-500/30">Three.js</span>
                <span class="px-3 py-1 text-xs sm:text-sm bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/30">Node.js</span>
                <span class="px-3 py-1 text-xs sm:text-sm bg-orange-500/10 text-orange-400 rounded-full border border-orange-500/30">Cloud</span>
              </div>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 sm:gap-4 animate-fade-in" style="animation-delay: 0.2s">
              <Button
                variant="primary"
                size="lg"
                @click="scrollToSection('#portfolio')"
                class="w-full sm:w-auto"
              >
                Ver Portafolio
              </Button>
              <Button
                variant="outline"
                size="lg"
                @click="scrollToSection('#contact')"
                class="w-full sm:w-auto"
              >
                Contáctame
              </Button>
            </div>

            <!-- Stats -->
            <div class="mt-12 sm:mt-16 grid grid-cols-3 gap-4 sm:gap-6 pt-8 sm:pt-12 border-t border-slate-700/50">
              <div class="text-center lg:text-left">
                <div class="text-2xl sm:text-3xl font-bold text-primary-400">5+</div>
                <p class="text-xs sm:text-sm text-slate-400">Años Experiencia</p>
              </div>
              <div class="text-center lg:text-left">
                <div class="text-2xl sm:text-3xl font-bold text-accent-400">50+</div>
                <p class="text-xs sm:text-sm text-slate-400">Proyectos</p>
              </div>
              <div class="text-center lg:text-left">
                <div class="text-2xl sm:text-3xl font-bold text-secondary-400">30+</div>
                <p class="text-xs sm:text-sm text-slate-400">Clientes</p>
              </div>
            </div>
          </div>

          <!-- Code Display / Feature Showcase -->
          <div class="hidden lg:flex items-center justify-center">
            <div class="relative w-full max-w-md">
              <!-- Code Block Mockup -->
              <div class="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-xl overflow-hidden shadow-2xl animate-fade-in" style="animation-delay: 0.25s">
                <div class="bg-slate-900/80 px-4 py-3 border-b border-slate-700/50 flex items-center gap-2">
                  <div class="flex gap-2">
                    <div class="w-3 h-3 rounded-full bg-red-500"></div>
                    <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div class="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span class="ml-auto text-xs text-slate-400">code.jsx</span>
                </div>
                <div class="p-4 sm:p-6 font-mono text-xs sm:text-sm overflow-auto max-h-64">
                  <div class="text-accent-400">{'<'}Component<span class="text-slate-400"> /{'>'}</span></div>
                  <div class="ml-4 text-slate-300">
                    <div><span class="text-primary-400">const</span> <span class="text-emerald-400">solutions</span> <span class="text-slate-400">=</span> <span class="text-secondary-400">[</span></div>
                    <div class="ml-4 text-slate-400">'Web Development',</div>
                    <div class="ml-4 text-slate-400">'Mobile Apps',</div>
                    <div class="ml-4 text-slate-400">'3D Experiences',</div>
                    <div class="ml-4 text-slate-400">'Cloud Solutions'</div>
                    <div><span class="text-secondary-400">]</span></div>
                  </div>
                  <div class="mt-2">
                    <span class="text-slate-400">solutions.map(</span><span class="text-primary-400">build</span><span class="text-slate-400">)</span>
                  </div>
                </div>
              </div>

              <!-- Floating Badge -->
              <div class="absolute -top-4 -right-4 bg-gradient-primary px-4 py-2 rounded-lg text-white text-sm font-semibold shadow-lg">
                💻 Full Stack
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
      <div class="text-3xl sm:text-4xl text-primary-500 animate-float">↓</div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Hero3DBackground from './Hero3DBackground.vue'
import Button from '@components/ui/Button.vue'
import { smoothScrollTo } from '@utils/index'
import { useScrollAnimation } from '@composables/useScrollAnimation'

useScrollAnimation()

const scrollToSection = (id: string) => {
  smoothScrollTo(id.replace('#', ''), 80)
}
</script>

<style scoped>
.animate-fade-in {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 640px) {
  .animate-fade-in {
    animation-duration: 0.6s;
  }
}
</style>


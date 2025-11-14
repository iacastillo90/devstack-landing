<template>
  <section class="section py-32 relative overflow-hidden bg-gradient-primary-to-secondary">
    <!-- Animated background elements -->
    <div class="absolute inset-0 opacity-20">
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-accent-500 rounded-full filter blur-3xl opacity-30 animate-pulse-slow"></div>
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-pulse-slow" style="animation-delay: 1s"></div>
    </div>

    <!-- Content -->
    <div class="container-custom relative z-10">
      <div class="text-center max-w-3xl mx-auto" data-aos="zoom-in" data-aos-duration="600">
        <h2 class="heading-lg mb-6 text-white drop-shadow-lg">
          ¿Listo para dar vida a tu proyecto? 🚀
        </h2>
        <p class="text-lg text-white/90 mb-10 leading-relaxed">
          Estoy disponible para proyectos nuevos, colaboraciones y consultoría. Contáctame hoy para
          discutir cómo podemos trabajar juntos.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Button
            variant="primary"
            size="lg"
            class="bg-white text-primary-600 hover:bg-slate-800 hover:text-white hover:shadow-lg transform transition-all"
            @click="scrollToSection('#contact')"
          >
            📧 Contactame Ahora
          </Button>
          <Button
            variant="outline"
            size="lg"
            class="border-2 border-white text-white hover:bg-white hover:text-primary-600 transition-all"
            @click="openInNewTab('mailto:iacastillo.ili2@gmail.com')"
          >
            ✉️ Enviar Email
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from '@components/ui/Button.vue'
import { openInNewTab, smoothScrollTo } from '@utils/index'

const scrollToSection = (id: string) => {
  smoothScrollTo(id.replace('#', ''), 80)
}
</script>


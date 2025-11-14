<template>
  <section id="services" class="section-with-bg relative overflow-hidden">
    <!-- Decorative elements -->
    <div class="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full filter blur-3xl opacity-5"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-accent-500 rounded-full filter blur-3xl opacity-5"></div>

    <div class="container-custom relative z-10">
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="heading-lg mb-4">Mis Servicios 💼</h2>
        <p class="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Ofrezco soluciones completas de desarrollo, desde aplicaciones web modernas hasta infraestructura
          en la nube, adaptadas a tus necesidades específicas.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="service in SERVICES"
          :key="service.id"
          data-aos="fade-up"
          :data-aos-delay="`${service.order * 100}`"
          class="hover-lift"
        >
          <ServiceCard :service="service" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { SERVICES } from '@utils/constants'
import ServiceCard from './ServiceCard.vue'
</script>


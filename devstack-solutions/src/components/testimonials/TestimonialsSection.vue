<template>
  <section class="section-with-bg">
    <div class="container-custom">
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="heading-lg mb-4">Testimonios</h2>
        <p class="text-lg text-slate-300 max-w-2xl mx-auto">
          Lo que mis clientes dicen sobre mi trabajo
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          v-for="(testimonial, idx) in TESTIMONIALS"
          :key="testimonial.id"
          data-aos="fade-up"
          :data-aos-delay="`${idx * 100}`"
        >
          <!-- Estrellas -->
          <div class="flex gap-1 mb-4">
            <span v-for="n in testimonial.rating" :key="n" class="text-yellow-400">⭐</span>
          </div>

          <!-- Texto -->
          <p class="text-slate-300 mb-6">{{ testimonial.content }}</p>

          <!-- Autor -->
          <div class="border-t border-slate-700 pt-4">
            <p class="font-bold text-white">{{ testimonial.name }}</p>
            <p class="text-primary-400 text-sm">{{ testimonial.role }}</p>
            <p class="text-slate-400 text-sm">{{ testimonial.company }}</p>
          </div>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { TESTIMONIALS } from '@utils/constants'
import Card from '@components/ui/Card.vue'
</script>


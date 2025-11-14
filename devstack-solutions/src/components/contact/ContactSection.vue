<template>
  <section id="contact" class="section">
    <div class="container-custom">
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="heading-lg mb-4">Contacto</h2>
        <p class="text-lg text-slate-300 max-w-2xl mx-auto">
          ¿Tienes un proyecto en mente? Me encantaría escucharte. Completa el formulario o contactame directamente.
        </p>
      </div>

      <!-- Info de Contacto -->
      <div class="mb-16" data-aos="fade-up" data-aos-delay="100">
        <ContactInfo />
      </div>

      <!-- Formulario -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="200">
        <ContactForm />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ContactForm from './ContactForm.vue'
import ContactInfo from './ContactInfo.vue'
</script>


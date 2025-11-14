<script setup lang="ts">
import { useScrollAnimation } from '@composables/useScrollAnimation'
import AppHeader from '@components/common/AppHeader.vue'
import AppFooter from '@components/common/AppFooter.vue'
import HeroSection from '@components/hero/HeroSection.vue'
import ServicesSection from '@components/services/ServicesSection.vue'
import PortfolioSection from '@components/portfolio/PortfolioSection.vue'
import AboutSection from '@components/about/AboutSection.vue'
import TestimonialsSection from '@components/testimonials/TestimonialsSection.vue'
import ContactSection from '@components/contact/ContactSection.vue'
import CTASection from '@components/cta/CTASection.vue'

// Inicializar animaciones de scroll
useScrollAnimation()
</script>

<template>
  <div class="min-h-screen bg-slate-950">
    <!-- Header -->
    <AppHeader />

    <!-- Main Content -->
    <main>
      <!-- Hero Section -->
      <HeroSection />

      <!-- Services Section -->
      <ServicesSection />

      <!-- Portfolio Section -->
      <PortfolioSection />

      <!-- About Section -->
      <AboutSection />

      <!-- Testimonials Section -->
      <TestimonialsSection />

      <!-- CTA Section -->
      <CTASection />

      <!-- Contact Section -->
      <ContactSection />
    </main>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<style>
@import '@assets/styles/main.css';
</style>


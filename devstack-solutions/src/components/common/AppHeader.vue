<template>
  <header
    :class="[
      'sticky top-0 z-40 transition-all duration-500',
      'glass-effect',
      { 'shadow-xl-glow border-primary-500 border-opacity-30': scrolled },
    ]"
  >
    <nav class="container-custom flex items-center justify-between h-20">
      <!-- Logo -->
      <a href="#home" class="flex items-center gap-2 text-2xl font-bold text-gradient">
        <span class="text-primary-500">&lt;</span>DevStack<span class="text-accent-500">/&gt;</span>
      </a>

      <!-- Menu Desktop -->
      <ul class="hidden md:flex items-center gap-8">
        <li v-for="link in NAV_LINKS" :key="link.id">
          <a
            :href="link.href"
            class="link-base hover:text-primary-400 transition-colors"
            @click.prevent="scrollToSection(link.href)"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>

      <!-- CTA Button + Mobile Menu -->
      <div class="flex items-center gap-4">
        <Button
          variant="primary"
          size="sm"
          class="hidden md:inline-flex"
          @click="scrollToSection('#contact')"
        >
          Contactar
        </Button>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden p-2 hover:bg-slate-700 rounded-lg transition-colors"
          @click="toggleMenu"
        >
          <span class="block w-6 h-0.5 bg-white mb-1.5"></span>
          <span class="block w-6 h-0.5 bg-white mb-1.5"></span>
          <span class="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div
      v-if="isMenuOpen"
      class="md:hidden bg-slate-800 border-t border-slate-700 animate-slide-in-down"
    >
      <ul class="container-custom py-4 space-y-2">
        <li v-for="link in NAV_LINKS" :key="link.id">
          <a
            :href="link.href"
            class="block px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors"
            @click.prevent="scrollToSection(link.href)"
          >
            {{ link.label }}
          </a>
        </li>
        <li class="pt-2 border-t border-slate-700">
          <Button
            variant="primary"
            size="sm"
            class="w-full"
            @click="handleContactClick"
          >
            Contactar
          </Button>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useUIStore } from '@stores/uiStore'
import { NAV_LINKS } from '@utils/constants'
import Button from '@components/ui/Button.vue'
import { throttle } from '@utils/index'

const uiStore = useUIStore()
const scrolled = ref(false)

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const handleContactClick = () => {
  scrollToSection('#contact')
  closeMenu()
}

const scrollToSection = (href: string) => {
  const id = href.replace('#', '')
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
  closeMenu()
}

const handleScroll = throttle(() => {
  scrolled.value = window.scrollY > 50
  uiStore.setScrollPosition(window.scrollY)
}, 100)

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>


import { createRouter, createWebHistory, type RouteLocationNormalized, type NavigationGuardNext } from 'vue-router'
import { useUIStore } from '@stores/uiStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
  ],
  scrollBehavior: (to, _from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0, behavior: 'smooth' }
  },
})

// Cerrar menú al navegar
router.beforeEach((_to: RouteLocationNormalized, _from: RouteLocationNormalized, next: NavigationGuardNext) => {
  const uiStore = useUIStore()
  uiStore.closeMenu()
  next()
})

export default router


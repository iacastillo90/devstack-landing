/**
 * Utilidades de animación GSAP
 */

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Animación de fade in con scroll
export const animateFadeInOnScroll = (element: Element | Element[], duration = 0.8) => {
  gsap.from(element, {
    opacity: 0,
    y: 30,
    duration,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'top 20%',
      scrub: false,
    },
  })
}

// Animación de escala
export const animateScaleOnScroll = (element: Element | Element[], duration = 0.8) => {
  gsap.from(element, {
    scale: 0.9,
    opacity: 0,
    duration,
    ease: 'back.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'top 20%',
      scrub: false,
    },
  })
}

// Animación de slide in desde la izquierda
export const animateSlideInLeft = (element: Element | Element[], duration = 0.8, delay = 0) => {
  gsap.from(element, {
    x: -100,
    opacity: 0,
    duration,
    delay,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'top 20%',
      scrub: false,
    },
  })
}

// Animación de slide in desde la derecha
export const animateSlideInRight = (element: Element | Element[], duration = 0.8, delay = 0) => {
  gsap.from(element, {
    x: 100,
    opacity: 0,
    duration,
    delay,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'top 20%',
      scrub: false,
    },
  })
}

// Animación de rotación con escala
export const animateRotateScale = (element: Element | Element[], duration = 0.8) => {
  gsap.from(element, {
    rotate: 10,
    scale: 0.8,
    opacity: 0,
    duration,
    ease: 'back.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'top 20%',
      scrub: false,
    },
  })
}

// Contador animado
export const animateCounter = (element: HTMLElement, target: number, duration = 2) => {
  const obj = { value: 0 }
  gsap.to(obj, {
    value: target,
    duration,
    ease: 'power2.out',
    onUpdate: () => {
      element.textContent = Math.floor(obj.value).toString()
    },
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'top 20%',
      scrub: false,
      once: true,
    },
  })
}

// Animación de progreso
export const animateProgressBar = (element: HTMLElement, progress: number, duration = 1.5) => {
  gsap.to(element, {
    width: `${progress}%`,
    duration,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'top 20%',
      scrub: false,
      once: true,
    },
  })
}

// Hover animation
export const animateHover = (element: Element) => {
  element.addEventListener('mouseenter', () => {
    gsap.to(element, {
      y: -5,
      boxShadow: '0 20px 25px -5px rgba(99, 102, 241, 0.3)',
      duration: 0.3,
      ease: 'power2.out',
    })
  })

  element.addEventListener('mouseleave', () => {
    gsap.to(element, {
      y: 0,
      boxShadow: 'none',
      duration: 0.3,
      ease: 'power2.out',
    })
  })
}

// Limpieza de animaciones
export const killAllAnimations = () => {
  gsap.globalTimeline.clear()
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
}


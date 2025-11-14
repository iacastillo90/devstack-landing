/// <reference types="vite/client" />

declare module 'aos' {
  interface AOSOptions {
    duration?: number
    offset?: number
    delay?: number
    once?: boolean
    easing?: string
    mirror?: boolean
    throttleDelay?: number
    startEvent?: string
  }

  function init(options?: AOSOptions): void
  function refresh(): void
  function refreshHard(): void
}

export default {}

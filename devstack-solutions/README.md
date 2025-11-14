Promp 

# PROYECTO: DevStack Solutions Landing Page

Eres un desarrollador Full Stack senior. Tu tarea es crear un proyecto Vue.js completo 
desde cero siguiendo las especificaciones exactas del README adjunto.

## FASE 1: SETUP INICIAL (Ejecutar primero)
```bash
npm create vue@latest devstack-solutions -- --typescript --router --pinia --tailwind
cd devstack-solutions
npm install
npm install gsap three @types/three aos vee-validate yup @vueuse/core axios lucide-vue-next @emailjs/browser
npm install -D @tailwindcss/forms @tailwindcss/typography
```

## FASE 2: CONFIGURACIÓN
Crea y configura estos archivos base:
- tailwind.config.js (con paleta de colores custom)
- src/assets/styles/main.css (con estilos globales)
- .env.example (con variables de entorno)
- tsconfig.json (configuración TypeScript)

## FASE 3: ESTRUCTURA DE CARPETAS
Crea TODA la estructura especificada en el README:
- src/components/ (con todas las subcarpetas)
- src/composables/
- src/stores/
- src/types/
- src/utils/
- public/images/ (con subcarpetas)

## FASE 4: IMPLEMENTACIÓN POR SECCIONES
Implementa cada sección en orden, con código FUNCIONAL:

### 1. Componentes Base UI
- src/components/ui/Button.vue
- src/components/ui/Card.vue
- src/components/ui/Input.vue
- etc.

### 2. Header y Footer
- src/components/common/AppHeader.vue (con navegación sticky)
- src/components/common/AppFooter.vue (completo)

### 3. Hero Section
- src/components/hero/HeroSection.vue
- src/components/hero/Hero3DBackground.vue (con Three.js)
- src/components/hero/HeroAnimation.vue (con GSAP)

### 4. Services Section
- src/components/services/ServicesSection.vue
- src/components/services/ServiceCard.vue (con animación 3D)
- Datos de servicios en src/utils/constants.ts

### 5. Portfolio Section
- src/components/portfolio/PortfolioSection.vue
- src/components/portfolio/PortfolioGrid.vue
- src/components/portfolio/PortfolioCard.vue
- Sistema de filtros funcional

### 6. About Section
- src/components/about/AboutSection.vue
- src/components/about/TechStack.vue (logos animados)
- src/components/about/StatsCounter.vue (contador animado)

### 7. Contact Section
- src/components/contact/ContactSection.vue
- src/components/contact/ContactForm.vue (con VeeValidate + Yup)
- src/components/contact/ContactInfo.vue
- Integración con EmailJS

### 8. Testimonials y CTA
- src/components/testimonials/TestimonialsSection.vue
- src/components/cta/CTASection.vue

## FASE 5: STORES Y COMPOSABLES
- src/stores/uiStore.ts (manejo de modals, loading, etc.)
- src/stores/portfolioStore.ts (filtros, proyectos)
- src/composables/useScrollAnimation.ts
- src/composables/useContactForm.ts

## FASE 6: TYPES Y UTILS
- src/types/services.ts (interfaces completas)
- src/types/portfolio.ts
- src/types/contact.ts
- src/utils/validators.ts
- src/utils/animations.ts
- src/utils/constants.ts (datos mock)

## FASE 7: INTEGRACIÓN FINAL
- src/views/HomeView.vue (integrar todas las secciones)
- src/App.vue (layout principal)
- src/router/index.ts (configurar rutas)

## ESPECIFICACIONES TÉCNICAS CRÍTICAS:

### Paleta de Colores
```css
primary: #6366f1
secondary: #8b5cf6
accent: #06b6d4
dark: #0f172a
```

### Hero 3D Background
- Usar Three.js
- Partículas flotantes
- Geometrías animadas (esferas, toroides)
- Parallax con mouse
- Colores con gradientes dinámicos

### Animaciones
- GSAP para animaciones complejas
- AOS para scroll animations
- Hover effects 3D en cards
- Smooth scroll
- Stagger animations

### Formulario de Contacto
```typescript
interface ContactForm {
  name: string          // required
  email: string         // required, email validation
  phone?: string        // optional
  service: ServiceType  // select
  budget: BudgetRange   // select
  message: string       // required, min 20 chars
}
```

### Responsive
- Mobile: 320px-640px
- Tablet: 640px-1024px
- Desktop: 1024px+

## DATOS REALES A USAR:

**Desarrollador:**
- Nombre: Iván Andrés Castillo Iligaray
- Email: iacastillo.ili2@gmail.com
- Teléfono: +56 9 66885788
- Ubicación: Santiago, Chile

**Servicios:**
1. Desarrollo Web (Vue.js, React, Node.js, Spring Boot)
2. Aplicaciones Móviles (Flutter)
3. Backend & APIs (Java/Spring Boot, Node.js, WebSocket)
4. Cloud & DevOps (AWS, OCI, Docker)

**Proyectos:**
1. CMS Cargadores Eléctricos (Morris & Opazo)
2. PetCare Platform (Hackathon)
3. PodSteam E-commerce
4. Asistente Visual con IA (AWS)

**Tecnologías:**
Frontend: Vue.js, React, TypeScript, Tailwind
Backend: Java, Spring Boot, Node.js, Express
Mobile: Flutter
Cloud: AWS, Oracle Cloud (OCI)
Databases: PostgreSQL, MySQL, Oracle
DevOps: Docker, GitHub Actions

## REGLAS IMPORTANTES:
❌ NO uses placeholders como "// TODO" o "// Implementar luego"
❌ NO uses datos ficticios o lorem ipsum
✅ TODO el código debe ser funcional
✅ Usa los datos reales del CV
✅ Implementa TODAS las animaciones
✅ Código TypeScript estricto
✅ Comentarios en español
✅ Manejo de errores completo

## ORDEN DE EJECUCIÓN:
1. Setup inicial (npm create + instalaciones)
2. Configuración (archivos config)
3. Estructura de carpetas
4. Tipos TypeScript
5. Utils y constantes
6. Componentes UI base
7. Stores y composables
8. Componentes de secciones
9. Vistas y routing
10. Integración y pruebas

Comienza con la FASE 1 y avanza secuencialmente. Después de cada fase, 
muéstrame un resumen de lo creado y espera mi confirmación para continuar.

¿Entendido? Comienza con la FASE 1.

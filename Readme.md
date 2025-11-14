# DevStack Solutions - Landing Page

## 🚀 Descripción del Proyecto

Landing page moderna y profesional para **DevStack Solutions**, empresa de desarrollo de software especializada en la creación de páginas web, aplicaciones web y aplicaciones móviles con Flutter. Diseñada para convertir visitantes en clientes mediante una experiencia visual impactante con elementos 3D, animaciones y diseño interactivo.

## 👨‍💻 Desarrollador

**Iván Andrés Castillo Iligaray**
- Full Stack Developer con experiencia en Java, Node.js, React, Vue.js
- Especialista en arquitecturas cloud (AWS & OCI)
- Contacto: iacastillo.ili2@gmail.com | +56 9 66885788
- [LinkedIn](tu-linkedin) | [GitHub](tu-github)

## 🛠️ Stack Tecnológico

- **Framework**: Vue.js 3 con Composition API
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Routing**: Vue Router
- **Estado**: Pinia
- **Animaciones**: 
  - GSAP (animaciones avanzadas)
  - Three.js (elementos 3D)
  - AOS (Animate On Scroll)
- **Formularios**: VeeValidate + Yup
- **Iconos**: Heroicons / Lucide Icons
- **HTTP Client**: Axios
- **Deployment**: Vercel / Netlify

## 📁 Estructura del Proyecto

```
devstack-solutions/
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   └── images/
│       ├── hero/
│       ├── services/
│       ├── portfolio/
│       └── team/
├── src/
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── styles/
│   │       └── main.css
│   ├── components/
│   │   ├── common/
│   │   │   ├── AppHeader.vue
│   │   │   ├── AppFooter.vue
│   │   │   ├── ScrollToTop.vue
│   │   │   └── LoadingSpinner.vue
│   │   ├── hero/
│   │   │   ├── HeroSection.vue
│   │   │   ├── Hero3DBackground.vue
│   │   │   └── HeroAnimation.vue
│   │   ├── services/
│   │   │   ├── ServicesSection.vue
│   │   │   ├── ServiceCard.vue
│   │   │   └── ServiceModal.vue
│   │   ├── portfolio/
│   │   │   ├── PortfolioSection.vue
│   │   │   ├── PortfolioGrid.vue
│   │   │   ├── PortfolioCard.vue
│   │   │   └── PortfolioFilter.vue
│   │   ├── about/
│   │   │   ├── AboutSection.vue
│   │   │   ├── TechStack.vue
│   │   │   └── StatsCounter.vue
│   │   ├── testimonials/
│   │   │   ├── TestimonialsSection.vue
│   │   │   └── TestimonialCard.vue
│   │   ├── contact/
│   │   │   ├── ContactSection.vue
│   │   │   ├── ContactForm.vue
│   │   │   └── ContactInfo.vue
│   │   ├── cta/
│   │   │   └── CTASection.vue
│   │   └── ui/
│   │       ├── Button.vue
│   │       ├── Card.vue
│   │       ├── Input.vue
│   │       ├── TextArea.vue
│   │       └── Modal.vue
│   ├── composables/
│   │   ├── useScrollAnimation.ts
│   │   ├── useIntersectionObserver.ts
│   │   ├── useContactForm.ts
│   │   └── use3DScene.ts
│   ├── stores/
│   │   ├── uiStore.ts
│   │   ├── portfolioStore.ts
│   │   └── contactStore.ts
│   ├── types/
│   │   ├── services.ts
│   │   ├── portfolio.ts
│   │   └── contact.ts
│   ├── utils/
│   │   ├── validators.ts
│   │   ├── animations.ts
│   │   └── constants.ts
│   ├── views/
│   │   └── HomeView.vue
│   ├── router/
│   │   └── index.ts
│   ├── App.vue
│   └── main.ts
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🎨 Secciones de la Landing Page

### 1. **Hero Section** (Sección Principal)
- Título impactante con animación de escritura
- Subtítulo descriptivo de servicios
- CTA buttons (Comenzar Proyecto / Ver Portfolio)
- Fondo 3D animado con Three.js (partículas, geometrías flotantes)
- Efecto parallax en scroll
- Imagen/Ilustración del desarrollador

### 2. **Services Section** (Servicios)
Tarjetas para cada servicio con:
- **Desarrollo Web**
  - Páginas web responsivas
  - E-commerce
  - Aplicaciones web (SPA/MPA)
  - CMS personalizados
  - Stack: Vue.js, React, Node.js, Spring Boot
  
- **Aplicaciones Móviles**
  - Apps nativas con Flutter
  - Desarrollo cross-platform
  - UI/UX moderno
  - Integración con APIs
  
- **Backend & APIs**
  - APIs RESTful
  - Microservicios
  - WebSocket
  - Autenticación JWT
  - Stack: Java/Spring Boot, Node.js

- **Cloud & DevOps**
  - Infraestructura AWS/OCI
  - CI/CD con GitHub Actions
  - Docker containerization
  - Configuración de servidores

Cada tarjeta tendrá:
- Ícono animado
- Descripción breve
- Tecnologías utilizadas
- Hover effect 3D
- Modal con detalles al hacer click

### 3. **Tech Stack Section** (Tecnologías)
Grid interactivo con logos animados:
- Frontend: Vue.js, React, TypeScript, Tailwind
- Backend: Java, Spring Boot, Node.js
- Mobile: Flutter, Dart
- Cloud: AWS, Oracle Cloud (OCI)
- Databases: PostgreSQL, MySQL, Oracle
- DevOps: Docker, GitHub Actions, Git

Animación de "radar" o "pulse" en hover

### 4. **Portfolio Section** (Proyectos)
Sistema de filtros por categoría:
- Todos / Web / Mobile / Backend / Cloud

Cards de proyectos destacados:
1. **CMS para Cargadores Eléctricos** (Morris & Opazo)
   - Java/Spring Boot, Vue.js, MySQL
   - OCPP 1.6, WebSocket
   - AWS Infrastructure

2. **PetCare Platform**
   - React, Spring Boot
   - Gestión de mascotas y citas
   - Hackathon Winner

3. **PodSteam E-commerce**
   - Vue.js, Spring Boot, JWT
   - Sistema de tickets
   - Pasarela de pago

4. **Asistente Visual con IA**
   - Python, AWS Lambda, Rekognition
   - Alexa Skill
   - Accesibilidad

Cada card incluye:
- Imagen/Screenshot
- Título y descripción
- Tags de tecnologías
- Enlace a demo/código
- Animación 3D al hover

### 5. **About Section** (Sobre Mí)
- Foto profesional
- Biografía destacando:
  - 1 año en Morris & Opazo (AWS Partner)
  - Experiencia Full Stack
  - Certificaciones (OCI AI, AWS re/Start)
  - Bootcamps y formación continua
- Estadísticas animadas:
  - +X Proyectos Completados
  - +X Clientes Satisfechos
  - X Tecnologías Dominadas
  - X% Éxito en Entregas

### 6. **Process Section** (Proceso de Trabajo)
Timeline/Roadmap visual con pasos:
1. **Consultoría Inicial** - Análisis de requerimientos
2. **Diseño & Arquitectura** - Wireframes y diagramas
3. **Desarrollo** - Sprints Agile
4. **Testing & QA** - Pruebas exhaustivas
5. **Deployment** - Despliegue en producción
6. **Soporte** - Mantenimiento continuo

### 7. **Testimonials Section** (Testimonios)
Carrusel de testimonios con:
- Foto del cliente
- Nombre y empresa
- Testimonio
- Rating (5 estrellas)
- Proyecto realizado

### 8. **Contact Section** (Contacto)
**Formulario de Contacto:**
```typescript
interface ContactForm {
  name: string;          // Requerido
  email: string;         // Requerido, validación email
  phone?: string;        // Opcional
  service: ServiceType;  // Select: Web | Mobile | Backend | Cloud | Otro
  budget: BudgetRange;   // Select: <$1000 | $1000-$5000 | $5000-$10000 | >$10000
  message: string;       // Requerido, min 20 caracteres
  attachments?: File[];  // Opcional, hasta 3 archivos
}
```

**Validaciones:**
- Tiempo real con VeeValidate
- Mensajes de error personalizados
- Animación de éxito al enviar
- Integración con EmailJS o backend API

**Información de Contacto:**
- Email: iacastillo.ili2@gmail.com
- Teléfono: +56 9 66885788
- LinkedIn y GitHub
- Ubicación: Santiago, Chile
- Disponibilidad: Lun-Vie 9AM-6PM

### 9. **CTA Section** (Call to Action)
Banner final con:
- Título persuasivo: "¿Listo para llevar tu idea al siguiente nivel?"
- Botón principal: "Comenzar mi Proyecto"
- Botón secundario: "Descargar Mi CV"

### 10. **Footer**
- Logo y tagline
- Enlaces rápidos (Servicios, Portfolio, Sobre Mí, Contacto)
- Redes sociales
- Copyright
- Enlaces legales (Política de Privacidad, Términos)

## 🎭 Características de Diseño

### Paleta de Colores (Sugerida)
```css
/* Modo Oscuro (Principal) */
--primary: #6366f1      /* Indigo brillante */
--secondary: #8b5cf6    /* Púrpura */
--accent: #06b6d4       /* Cyan */
--dark: #0f172a         /* Slate 900 */
--darker: #020617       /* Slate 950 */
--light: #f1f5f9        /* Slate 100 */

/* Gradientes */
--gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
--gradient-hero: linear-gradient(to bottom right, #0f172a, #1e293b, #312e81)
```

### Animaciones 3D
1. **Hero Background:**
   - Partículas flotantes con Three.js
   - Geometrías abstractas (esferas, toroides)
   - Efecto parallax al mover mouse
   - Colores con gradientes dinámicos

2. **Service Cards:**
   - Rotación 3D en hover (transform: rotateY())
   - Efecto glassmorphism
   - Sombras dinámicas

3. **Portfolio Cards:**
   - Flip card effect
   - Zoom in en hover
   - Overlay con degradado

### Animaciones de Scroll
- Fade in up para secciones
- Stagger animations para grids
- Counter animations para estadísticas
- Progress bar de lectura en header

### Interactividad
- Cursor personalizado con efecto de seguimiento
- Smooth scroll
- Lazy loading de imágenes
- Skeleton loaders
- Toasts de notificación
- Modal lightbox para proyectos

## 📱 Responsive Design

Breakpoints:
- Mobile: 320px - 640px
- Tablet: 640px - 1024px
- Desktop: 1024px+
- Large Desktop: 1440px+

Adaptaciones:
- Navegación hamburger en mobile
- Grid columns responsivos
- Imágenes optimizadas por dispositivo
- Touch gestures para mobile

## 🚀 Instalación y Configuración

### Prerrequisitos
```bash
node >= 18.0.0
npm >= 9.0.0
```

### Crear el Proyecto
```bash
# Crear proyecto Vue 3 con todas las opciones
npm create vue@latest devstack-solutions -- --typescript --router --pinia --tailwind

cd devstack-solutions
```

### Instalar Dependencias Adicionales
```bash
# Animaciones y 3D
npm install gsap three @types/three aos

# Formularios
npm install vee-validate yup @vee-validate/yup

# HTTP
npm install axios

# Iconos
npm install lucide-vue-next

# Utils
npm install @vueuse/core

# EmailJS (para formulario)
npm install @emailjs/browser
```

### Configurar Variables de Entorno
Crear archivo `.env`:
```env
VITE_APP_TITLE=DevStack Solutions
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
VITE_API_URL=https://tu-api.com
```

### Configurar Tailwind
Actualizar `tailwind.config.js`:
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        secondary: '#8b5cf6',
        accent: '#06b6d4',
        dark: '#0f172a',
        darker: '#020617',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
```

### Inicializar Estilos Globales
`src/assets/styles/main.css`:
```css
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

@layer base {
  * {
    @apply scroll-smooth;
  }
  
  body {
    @apply bg-darker text-light font-sans antialiased;
  }
  
  h1, h2, h3, h4, h5, h6 {
    @apply font-bold tracking-tight;
  }
}

@layer components {
  .btn-primary {
    @apply px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105;
  }
  
  .card-glass {
    @apply bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl;
  }
  
  .section-padding {
    @apply py-20 lg:py-32;
  }
}
```

## 🏃‍♂️ Scripts de Desarrollo

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Linting
npm run lint

# Type checking
npm run type-check
```

## 📦 Deployment

### Vercel (Recomendado)
1. Conectar repositorio GitHub
2. Configurar variables de entorno
3. Deploy automático en push

### Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```

## 📄 Tipos TypeScript

### Services
```typescript
// src/types/services.ts
export enum ServiceType {
  WEB = 'web',
  MOBILE = 'mobile',
  BACKEND = 'backend',
  CLOUD = 'cloud',
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  technologies: string[];
  features: string[];
  type: ServiceType;
}
```

### Portfolio
```typescript
// src/types/portfolio.ts
export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: ServiceType;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  date: string;
}
```

### Contact
```typescript
// src/types/contact.ts
export enum BudgetRange {
  SMALL = 'small',      // <$1000
  MEDIUM = 'medium',    // $1000-$5000
  LARGE = 'large',      // $5000-$10000
  ENTERPRISE = 'enterprise', // >$10000
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service: ServiceType;
  budget: BudgetRange;
  message: string;
  attachments?: File[];
}

export interface ContactFormStatus {
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
}
```

## 🎯 SEO y Optimización

### Meta Tags
```html
<!-- index.html -->
<title>DevStack Solutions | Desarrollo Web, Apps Móviles & Cloud</title>
<meta name="description" content="Desarrollo profesional de páginas web, aplicaciones móviles con Flutter y soluciones cloud. Stack moderno: Vue.js, React, Java, AWS.">
<meta name="keywords" content="desarrollo web, aplicaciones móviles, flutter, vue.js, react, java, spring boot, aws, chile">
<meta property="og:title" content="DevStack Solutions">
<meta property="og:description" content="Soluciones tecnológicas modernas y escalables">
<meta property="og:image" content="/og-image.jpg">
```

### Performance
- Lazy loading de imágenes
- Code splitting por rutas
- Preload de fuentes críticas
- Minificación de assets
- Compresión gzip/brotli

## 📋 Checklist de Implementación

### Fase 1: Setup (Día 1)
- [ ] Crear proyecto con Vue CLI
- [ ] Instalar dependencias
- [ ] Configurar Tailwind
- [ ] Configurar TypeScript
- [ ] Setup de Pinia stores
- [ ] Configurar router
- [ ] Configurar ESLint/Prettier

### Fase 2: Componentes Base (Día 2-3)
- [ ] AppHeader con navegación
- [ ] AppFooter
- [ ] Componentes UI reutilizables (Button, Card, Input, etc.)
- [ ] Sistema de tipos TypeScript
- [ ] Configuración de animaciones

### Fase 3: Secciones Principales (Día 4-7)
- [ ] Hero Section con 3D background
- [ ] Services Section
- [ ] Portfolio Section con filtros
- [ ] About Section
- [ ] Tech Stack Section

### Fase 4: Interactividad (Día 8-10)
- [ ] Contact Form con validaciones
- [ ] Integración EmailJS
- [ ] Testimonials carousel
- [ ] CTA Section
- [ ] Animaciones de scroll
- [ ] Efectos 3D y hover

### Fase 5: Optimización (Día 11-12)
- [ ] Responsive design
- [ ] Performance optimization
- [ ] SEO meta tags
- [ ] Accesibilidad (a11y)
- [ ] Testing en diferentes navegadores

### Fase 6: Deployment (Día 13-14)
- [ ] Build de producción
- [ ] Configuración de dominio
- [ ] Deploy en Vercel/Netlify
- [ ] Configuración SSL
- [ ] Analytics y monitoreo

## 🤝 Contribución

Este es un proyecto personal, pero las sugerencias son bienvenidas.

## 📄 Licencia

MIT License - Iván Castillo © 2025

## 📞 Contacto

**Iván Andrés Castillo Iligaray**
- Email: iacastillo.ili2@gmail.com
- Teléfono: +56 9 66885788
- LinkedIn: [tu-perfil-linkedin]
- GitHub: [tu-perfil-github]
- Ubicación: Santiago, Chile

---

**¿Listo para construir algo increíble juntos? ¡Contáctame!** 🚀
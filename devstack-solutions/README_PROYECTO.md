# DevStack Solutions - Landing Page

Sitio web profesional de portfolio y landing page para Iván Andrés Castillo Iligaray, desarrollador Full Stack.

## 🚀 Características

- **Hero 3D**: Fondo interactivo con Three.js (partículas flotantes, geometrías animadas)
- **Animaciones Suaves**: GSAP + AOS para animaciones de scroll
- **Diseño Responsivo**: Mobile-first, adaptado a todos los dispositivos
- **Formulario de Contacto**: Validación completa con VeeValidate + Yup
- **Portafolio Dinámico**: Filtrable por categorías con búsqueda
- **Tech Stack**: Visualización de tecnologías con barras de progreso
- **Testimonios**: Sección con feedback de clientes
- **Performance**: Optimizado con code-splitting y lazy loading
- **TypeScript**: Código tipado completamente para mayor seguridad

## 📦 Stack Tecnológico

### Frontend
- **Vue.js 3** - Framework progresivo
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool moderno y rápido

### Animaciones & 3D
- **GSAP** - Animaciones complejas
- **AOS** - Animaciones en scroll
- **Three.js** - Gráficos 3D en WebGL

### Formularios & Validación
- **VeeValidate** - Validación de formularios
- **Yup** - Schema validation
- **EmailJS** - Envío de emails

### State Management
- **Pinia** - State management alternativo a Vuex
- **@vueuse/core** - Composables útiles

### Herramientas
- **Vitest** - Testing
- **ESLint** - Linting
- **Prettier** - Code formatting

## 🔧 Instalación

```bash
# Clonar repositorio
git clone <repo-url>
cd devstack-solutions

# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview de producción
npm run preview

# Testing
npm run test
```

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── ui/                 # Componentes base reutilizables
│   ├── common/            # Header, Footer
│   ├── hero/              # Hero Section con 3D
│   ├── services/          # Sección de servicios
│   ├── portfolio/         # Portafolio con filtros
│   ├── about/             # Sección Sobre Mí
│   ├── contact/           # Formulario de contacto
│   ├── testimonials/      # Testimonios
│   └── cta/              # Call to Action
├── composables/           # Vue Composables reutilizables
├── stores/               # Pinia stores
├── types/                # TypeScript interfaces
├── utils/                # Funciones utilitarias
├── views/                # Vistas principales
├── router/               # Vue Router config
├── assets/              # Estilos y recursos
└── main.ts              # Entry point
```

## 🎨 Paleta de Colores

```
Primary:    #6366f1 (Índigo)
Secondary:  #8b5cf6 (Púrpura)
Accent:     #06b6d4 (Cyan)
Dark:       #0f172a (Fondo)
Light:      #f8fafc (Texto claro)
```

## 🔐 Variables de Entorno

Crear `.env.local`:

```env
VITE_API_BASE_URL=http://localhost:3000/api
VITE_EMAILJS_SERVICE_ID=service_xxxxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxx
VITE_CONTACT_EMAIL=iacastillo.ili2@gmail.com
VITE_CONTACT_PHONE=+56 9 66885788
VITE_CONTACT_LOCATION=Santiago, Chile
VITE_APP_NAME=DevStack Solutions
```

## 📝 Componentes Principales

### Componentes UI
- `Button.vue` - Botón reutilizable (primary, secondary, accent, outline)
- `Card.vue` - Tarjeta con efectos hover
- `Input.vue` - Input de texto
- `Textarea.vue` - Área de texto
- `Select.vue` - Dropdown select
- `Badge.vue` - Badge de categorías
- `Modal.vue` - Modal reutilizable
- `Toast.vue` - Notificaciones
- `FormField.vue` - Wrapper para campos

### Secciones Principales
- `HeroSection.vue` - Hero con fondo 3D
- `ServicesSection.vue` - Servicios ofrecidos
- `PortfolioSection.vue` - Proyectos destacados
- `AboutSection.vue` - Información personal
- `TestimonialsSection.vue` - Testimonios de clientes
- `ContactSection.vue` - Formulario de contacto
- `CTASection.vue` - Call to Action final

## 🎯 Composables

- `useScrollAnimation()` - Animaciones al hacer scroll
- `useContactForm()` - Manejo y validación del formulario
- `useDarkMode()` - Toggle tema oscuro/claro
- `useMouse()` - Seguimiento del mouse para parallax

## 🏪 Stores (Pinia)

- `useUIStore()` - Estado de UI (menú, loading, notificaciones)
- `usePortfolioStore()` - Filtros y búsqueda de proyectos

## 🚀 Deployment

### Netlify
```bash
npm run build
# Push a GitHub y conectar repo en Netlify
```

### Vercel
```bash
npm run build
# Importar proyecto en Vercel
```

### Docker
```dockerfile
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## 📞 Contacto

- **Email:** iacastillo.ili2@gmail.com
- **Teléfono:** +56 9 66885788
- **Ubicación:** Santiago, Chile

## 📄 Licencia

Propietario - © 2024 Iván Andrés Castillo Iligaray

## 🙏 Agradecimientos

- [Vue.js](https://vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [GSAP](https://gsap.com/)
- [Three.js](https://threejs.org/)
- [Vite](https://vitejs.dev/)

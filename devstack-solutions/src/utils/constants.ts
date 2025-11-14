/**
 * Constantes y datos de la aplicación
 */

import type { Service, Project } from '@/types'

// Datos del desarrollador
export const DEVELOPER = {
  name: 'Iván Andrés Castillo Iligaray',
  email: 'iacastillo.ili2@gmail.com',
  phone: '+56 9 66885788',
  location: 'Santiago, Chile',
  title: 'Full Stack Developer',
  tagline: 'Transformando ideas en soluciones digitales innovadoras',
  description: 'Desarrollador Full Stack con experiencia en desarrollo web, aplicaciones móviles, backend robusto y DevOps. Especializado en crear soluciones escalables con las tecnologías más modernas.',
  social: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    email: 'iacastillo.ili2@gmail.com',
  },
}

// Servicios
export const SERVICES: Service[] = [
  {
    id: 'web',
    title: 'Desarrollo Web',
    description: 'Aplicaciones web modernas y responsivas con Vue.js, React, TypeScript y Tailwind CSS. Enfoque en performance, accesibilidad y experiencia del usuario.',
    shortDescription: 'Vue.js, React, TypeScript, Tailwind CSS',
    icon: 'globe',
    color: '#6366f1',
    features: [
      'Aplicaciones SPA (Single Page Applications)',
      'Progressive Web Apps (PWA)',
      'Diseño responsive y accesible',
      'Optimización SEO',
      'Testing automatizado',
    ],
    technologies: ['Vue.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Next.js'],
    order: 1,
  },
  {
    id: 'mobile',
    title: 'Aplicaciones Móviles',
    description: 'Desarrollo de aplicaciones móviles nativas con Flutter. Aplicaciones de alto rendimiento para iOS y Android desde una única base de código.',
    shortDescription: 'Flutter, iOS, Android',
    icon: 'smartphone',
    color: '#8b5cf6',
    features: [
      'Aplicaciones nativas para iOS y Android',
      'UI/UX personalizadas',
      'Integración con APIs',
      'Push notifications',
      'Offline-first applications',
    ],
    technologies: ['Flutter', 'Dart', 'Firebase', 'Provider', 'GetX'],
    order: 2,
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    description: 'Desarrollo de backends robustos y escalables con Java Spring Boot, Node.js y Express. APIs RESTful y WebSockets para aplicaciones en tiempo real.',
    shortDescription: 'Java, Spring Boot, Node.js, Express',
    icon: 'server',
    color: '#06b6d4',
    features: [
      'APIs RESTful',
      'GraphQL',
      'Autenticación y autorización',
      'Bases de datos relacionales',
      'Sistemas en tiempo real',
    ],
    technologies: ['Java', 'Spring Boot', 'Node.js', 'Express', 'PostgreSQL', 'MySQL', 'Oracle'],
    order: 3,
  },
  {
    id: 'devops',
    title: 'Cloud & DevOps',
    description: 'Infraestructura en la nube con AWS y Oracle Cloud. Containerización con Docker, CI/CD con GitHub Actions y orquestación con Kubernetes.',
    shortDescription: 'AWS, OCI, Docker, GitHub Actions',
    icon: 'cloud',
    color: '#f59e0b',
    features: [
      'Deployment en AWS y OCI',
      'Containerización Docker',
      'CI/CD pipelines',
      'Monitoreo y logging',
      'Escalabilidad automática',
    ],
    technologies: ['AWS', 'Oracle Cloud', 'Docker', 'Kubernetes', 'GitHub Actions', 'Terraform'],
    order: 4,
  },
]

// Proyectos del portafolio
export const PROJECTS: Project[] = [
  {
    id: 'cms-cargadores',
    title: 'CMS Cargadores Eléctricos',
    description: 'Sistema de gestión de contenidos para Morris & Opazo. Plataforma web completa para administrar información de cargadores eléctricos, con panel administrativo, gestión de usuarios y reportes.',
    shortDescription: 'Sistema de gestión de contenidos con Vue.js y Spring Boot',
    image: '/images/projects/cms-cargadores.jpg',
    thumbnail: '/images/projects/cms-cargadores-thumb.jpg',
    category: 'web',
    tags: ['CMS', 'Admin Panel', 'Energy', 'ERP'],
    technologies: ['Vue.js', 'Spring Boot', 'PostgreSQL', 'Docker'],
    link: 'https://example.com/cms-cargadores',
    github: 'https://github.com',
    featured: true,
    order: 1,
  },
  {
    id: 'petcare-platform',
    title: 'PetCare Platform',
    description: 'Aplicación ganadora de hackathon para cuidado de mascotas. Conecta dueños de mascotas con veterinarios y servicios de cuidado. Incluye citas, historial médico, chat en tiempo real.',
    shortDescription: 'Plataforma de cuidado de mascotas con tiempo real',
    image: '/images/projects/petcare.jpg',
    thumbnail: '/images/projects/petcare-thumb.jpg',
    category: 'web',
    tags: ['Hackathon', 'Pets', 'Marketplace', 'RealTime'],
    technologies: ['Vue.js', 'Node.js', 'Socket.io', 'MongoDB', 'Firebase'],
    link: 'https://example.com/petcare',
    github: 'https://github.com',
    featured: true,
    order: 2,
  },
  {
    id: 'podsteam-ecommerce',
    title: 'PodSteam E-commerce',
    description: 'Plataforma de e-commerce para venta de podcasts y contenido digital. Carrito de compras, sistema de pagos integrado, descarga de archivos, gestión de inventario.',
    shortDescription: 'Plataforma e-commerce para contenido digital',
    image: '/images/projects/podsteam.jpg',
    thumbnail: '/images/projects/podsteam-thumb.jpg',
    category: 'web',
    tags: ['E-commerce', 'Pagos', 'Digital', 'Podcasts'],
    technologies: ['React', 'Node.js', 'Stripe', 'PostgreSQL', 'AWS S3'],
    link: 'https://example.com/podsteam',
    featured: true,
    order: 3,
  },
  {
    id: 'asistente-ia-aws',
    title: 'Asistente Visual con IA',
    description: 'Asistente inteligente con visión por computadora. Utiliza AWS Rekognition para análisis de imágenes, procesamiento con ML y generación de reportes automáticos.',
    shortDescription: 'Asistente con IA y visión por computadora',
    image: '/images/projects/ia-assistant.jpg',
    thumbnail: '/images/projects/ia-assistant-thumb.jpg',
    category: 'backend',
    tags: ['AI', 'AWS', 'ML', 'Vision'],
    technologies: ['Python', 'AWS Rekognition', 'TensorFlow', 'Lambda', 'S3'],
    featured: true,
    order: 4,
  },
]

// Tecnologías y stack
export const TECH_STACK = {
  frontend: [
    { name: 'Vue.js', icon: '🟢', level: 'Expert' },
    { name: 'React', icon: '⚛️', level: 'Advanced' },
    { name: 'TypeScript', icon: '🔵', level: 'Expert' },
    { name: 'Tailwind CSS', icon: '🎨', level: 'Expert' },
    { name: 'Vite', icon: '⚡', level: 'Advanced' },
  ],
  backend: [
    { name: 'Java/Spring Boot', icon: '☕', level: 'Expert' },
    { name: 'Node.js', icon: '🟩', level: 'Advanced' },
    { name: 'Express', icon: '🚀', level: 'Advanced' },
    { name: 'PostgreSQL', icon: '🐘', level: 'Expert' },
    { name: 'MySQL', icon: '🐬', level: 'Advanced' },
  ],
  mobile: [
    { name: 'Flutter', icon: '📱', level: 'Advanced' },
    { name: 'Dart', icon: '🎯', level: 'Advanced' },
  ],
  devops: [
    { name: 'Docker', icon: '🐳', level: 'Advanced' },
    { name: 'AWS', icon: '☁️', level: 'Advanced' },
    { name: 'Oracle Cloud', icon: '🌐', level: 'Intermediate' },
    { name: 'GitHub Actions', icon: '🤖', level: 'Advanced' },
  ],
}

// Testimonios
export const TESTIMONIALS = [
  {
    id: '1',
    name: 'Carlos López',
    role: 'CTO en Morris & Opazo',
    company: 'Morris & Opazo',
    image: '/images/testimonials/carlos.jpg',
    content: 'Excelente desarrollador, muy profesional y dedicado. Entregó el CMS de cargadores eléctricos a tiempo y con excelente calidad.',
    rating: 5,
  },
  {
    id: '2',
    name: 'María García',
    role: 'Product Manager en PetCare',
    company: 'PetCare Platform',
    image: '/images/testimonials/maria.jpg',
    content: 'Iván fue fundamental en ganar el hackathon. Su capacidad para resolver problemas bajo presión fue impresionante.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Roberto Martínez',
    role: 'Founder en PodSteam',
    company: 'PodSteam',
    image: '/images/testimonials/roberto.jpg',
    content: 'Profesional de alto nivel. La plataforma está funcionando perfectamente y con excelente performance.',
    rating: 5,
  },
]

// Estadísticas
export const STATS = [
  { label: 'Proyectos Completados', value: '50+' },
  { label: 'Años de Experiencia', value: '5+' },
  { label: 'Clientes Satisfechos', value: '30+' },
  { label: 'Tecnologías Dominadas', value: '20+' },
]

// Rangos de presupuesto
export const BUDGET_RANGES = [
  { id: 'small', label: 'Pequeño (< $5,000)', range: 'small' },
  { id: 'medium', label: 'Medio ($5,000 - $15,000)', range: 'medium' },
  { id: 'large', label: 'Grande ($15,000 - $50,000)', range: 'large' },
  { id: 'enterprise', label: 'Enterprise (> $50,000)', range: 'enterprise' },
]

// Enlaces de navegación
export const NAV_LINKS = [
  { id: 'home', label: 'Inicio', href: '#home' },
  { id: 'services', label: 'Servicios', href: '#services' },
  { id: 'portfolio', label: 'Portafolio', href: '#portfolio' },
  { id: 'about', label: 'Sobre Mí', href: '#about' },
  { id: 'contact', label: 'Contacto', href: '#contact' },
]


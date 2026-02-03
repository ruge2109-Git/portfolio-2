import type { PortfolioConfig } from '@domain/entities/PersonalInfo';
import type { Project } from '@domain/entities/Project';

const portfolioConfig: PortfolioConfig = {
  personal: {
    name: 'Jonathan Ruge',
    role: 'Software Engineer Fullstack Senior',
    mainStack: ['Angular', 'Spring Boot', 'Python', 'AWS', 'TypeScript'],
    email: 'jonathan.ruge.77@gmail.com',
    github: 'https://github.com/ruge2109-Git',
    linkedin: 'https://www.linkedin.com/in/jonathan-ruge/',
    twitter: '',
    cvUrl: '/CV.pdf',
  },
  about: {
    es: `Ingeniero de Software con más de 5 años de experiencia diseñando y desarrollando soluciones Fullstack de alto impacto para empresas tecnológicas y clientes internacionales.

Especializado en arquitecturas de microservicios escalables, implemento sistemas que procesan millones de operaciones diarias utilizando Angular (7-18), Spring Boot (Java 8–11) y Python/Flask. Mi experiencia abarca desde el diseño de APIs REST robustas hasta la implementación de autenticación JWT y sistemas de eventos distribuidos.

En AWS, he diseñado y desplegado infraestructuras serverless complejas utilizando Lambda, DynamoDB, AuroraDB, S3, CloudWatch, API Gateway, SQS y EventBridge. He optimizado sistemas que redujeron tiempos de procesamiento en hasta 90% y aumentaron ventas en 40% mediante mejoras técnicas y arquitectónicas.

Mi enfoque se centra en Clean Architecture y Domain-Driven Design, aplicando patrones como Arquitectura Hexagonal para crear sistemas mantenibles y testeables. Integro prácticas DevOps con Docker, CI/CD y SonarQube para garantizar calidad y despliegues automatizados.

He liderado proyectos internacionales colaborando con equipos distribuidos, aplicando metodologías ágiles (Scrum, XP, Kanban) y entregando soluciones que optimizan procesos de negocio y potencian resultados medibles.`,
    en: `Software Engineer with over 5 years of experience designing and developing high-impact Fullstack solutions for tech companies and international clients.

Specialized in scalable microservices architectures, I implement systems that process millions of daily operations using Angular (7-18), Spring Boot (Java 8–11), and Python/Flask. My experience spans from designing robust REST APIs to implementing JWT authentication and distributed event systems.

In AWS, I have designed and deployed complex serverless infrastructures using Lambda, DynamoDB, AuroraDB, S3, CloudWatch, API Gateway, SQS, and EventBridge. I have optimized systems that reduced processing times by up to 90% and increased sales by 40% through technical and architectural improvements.

My approach focuses on Clean Architecture and Domain-Driven Design, applying patterns like Hexagonal Architecture to create maintainable and testable systems. I integrate DevOps practices with Docker, CI/CD, and SonarQube to ensure quality and automated deployments.

I have led international projects collaborating with distributed teams, applying agile methodologies (Scrum, XP, Kanban) and delivering solutions that optimize business processes and drive measurable results.`,
  },
  skills: {
    frontend: [
      'Angular (7-21)',
      'TypeScript',
      'JavaScript',
      'React (básico)',
      'Ionic',
      'HTML5',
      'CSS3',
    ],
    backend: [
      'Java (8-17)',
      'Spring Boot',
      'Python',
      'Flask',
      'FastAPI',
      'Node.js',
      'NestJS',
      'Express',
      'REST APIs',
      'Microservicios',
      'Arquitectura Hexagonal',
    ],
    cloud: [
      'AWS (S3, Lambda, DynamoDB, AuroraDB, CloudWatch, IAM, CodeBuild, API Gateway, SQS, EventBridge)',
      'Docker',
      'Jenkins',
      'CI/CD',
      'SonarQube',
      'Swagger',
      'OracleDB',
      'MySQL',
      'PostgreSQL',
      'DynamoDB',
      'MongoDB',
      'Redis',
    ],
  },
  experience: [
    {
      title: 'Desarrollador de Software Fullstack Senior',
      company: 'Escala',
      period: 'Octubre 2024 - Actualmente',
      description: {
        es: 'Lideré el diseño y desarrollo de la arquitectura de un CRM Flexible basado en entidades dinámicas, una solución innovadora que permitió el fondeo del cliente principal y la adquisición de nuevos clientes. Construí gran parte del backend y frontend aplicando patrones escalables y optimizando la comunicación entre microservicios. Realicé pruebas de concepto (PoC) comparando DynamoDB, Neptune y Aurora para definir la base de datos flexible óptima, priorizando rendimiento y costo. Implementé múltiples servicios AWS (DynamoDB, AuroraDB, S3, CloudWatch, IAM, CodeBuild, API Gateway, SQS, EventBridge) garantizando disponibilidad, trazabilidad y despliegues automatizados.',
        en: 'Led the design and development of a Flexible CRM architecture based on dynamic entities, an innovative solution that enabled funding for the main client and acquisition of new clients. Built most of the backend and frontend applying scalable patterns and optimizing communication between microservices. Conducted proof of concept (PoC) comparing DynamoDB, Neptune and Aurora to define the optimal flexible database, prioritizing performance and cost. Implemented multiple AWS services (DynamoDB, AuroraDB, S3, CloudWatch, IAM, CodeBuild, API Gateway, SQS, EventBridge) ensuring availability, traceability and automated deployments.',
      },
    },
    {
      title: 'Desarrollador de Software Senior',
      company: 'Audisoft',
      period: 'Mayo 2024 - Octubre 2024',
      description: {
        es: 'Desarrollé microservicios desde cero en Spring Boot implementando Arquitectura Hexagonal con diagramas completos de procesos y arquitectura. Diseñé el modelo de flujo de datos para la integración entre múltiples microservicios utilizando Kafka y Redis para comunicación asíncrona y caché distribuido. Documenté exhaustivamente los microservicios con Swagger y establecí estándares de calidad con SonarQube y pruebas unitarias con Mockito.',
        en: 'Developed microservices from scratch in Spring Boot implementing Hexagonal Architecture with complete process and architecture diagrams. Designed the data flow model for integration between multiple microservices using Kafka and Redis for asynchronous communication and distributed caching. Thoroughly documented microservices with Swagger and established quality standards with SonarQube and unit tests with Mockito.',
      },
    },
    {
      title: 'Ingeniero de Software',
      company: 'Modyo',
      period: 'Septiembre 2022 - Abril 2024',
      description: {
        es: 'Desarrollé features críticas para el banco BCI – Miami utilizando Spring Boot con arquitectura hexagonal y pruebas unitarias exhaustivas. Implementé integraciones complejas con servicios externos como Jumio (validación de identidad biométrica) y Mambu (sistema de desembolso financiero) para clientes bancarios internacionales como CFG Colombia y CFG Centro América. Modelé y refactoricé el backend completo para cumplir con arquitectura hexagonal, mejorando mantenibilidad y testabilidad del código.',
        en: 'Developed critical features for BCI Bank – Miami using Spring Boot with hexagonal architecture and comprehensive unit tests. Implemented complex integrations with external services such as Jumio (biometric identity validation) and Mambu (financial disbursement system) for international banking clients such as CFG Colombia and CFG Central America. Modeled and refactored the entire backend to comply with hexagonal architecture, improving code maintainability and testability.',
      },
    },
    {
      title: 'Desarrollador Fullstack',
      company: 'Credifamilia C.F',
      period: 'Febrero 2021 - Agosto 2022',
      description: {
        es: 'Aumenté significativamente el fondeo de la compañía desarrollando soluciones con Angular, Spring Boot y PLSQL que optimizaron procesos financieros críticos. Reduje el tiempo de migración de información diaria de 5 horas a 30 minutos (reducción del 90%) mediante optimización de queries y procesos batch en Spring Boot. Mejoré la experiencia de usuario en el portal principal implementando mejoras de UI/UX que aumentaron la satisfacción del usuario final y evitaron sanciones monetarias mediante automatización de procesos regulatorios.',
        en: 'Significantly increased company funding by developing solutions with Angular, Spring Boot and PLSQL that optimized critical financial processes. Reduced daily information migration time from 5 hours to 30 minutes (90% reduction) through query optimization and batch processes in Spring Boot. Improved user experience on the main portal implementing UI/UX improvements that increased end user satisfaction and prevented monetary penalties through automation of regulatory processes.',
      },
    },
    {
      title: 'Desarrollador Fullstack Junior',
      company: 'Enterprise Business Solutions (EBS)',
      period: 'Diciembre 2019 - Febrero 2021',
      description: {
        es: 'Aumenté las ventas en un 40% desarrollando aplicaciones con Java y Angular que mejoraron los procesos de negocio. Mejoré el rendimiento del equipo de desarrollo en un 30% aplicando metodologías ágiles como Scrum y estableciendo mejores prácticas de desarrollo. Lideré la migración completa de aplicaciones legacy en PHP a una arquitectura moderna de microservicios en Java y Angular, mejorando escalabilidad y mantenibilidad.',
        en: 'Increased sales by 40% by developing applications with Java and Angular that improved business processes. Improved development team performance by 30% by applying agile methodologies such as Scrum and establishing development best practices. Led the complete migration of legacy PHP applications to a modern microservices architecture in Java and Angular, improving scalability and maintainability.',
      },
    },
  ],
};

const projects: readonly Project[] = [
  {
    title: 'fit-tracker',
    description:
      'Plataforma web fullstack para seguimiento de fitness desarrollada con Next.js y Node.js. Implementa autenticación segura, dashboard interactivo con visualización de datos y despliegue optimizado en Vercel con code splitting y lazy loading para máximo rendimiento.',
    stack: ['Next.js', 'Node.js', 'TypeScript', 'Vercel'],
    github: 'https://github.com/ruge2109-Git/fit-tracker',
    demo: 'https://fit-tracker-iota.vercel.app',
    lastUpdate: '2025-12-11T13:44:57Z',
    stars: 0,
    featured: true,
  },
  {
    title: 'fit-tracker-mobile',
    description:
      'Aplicación móvil multiplataforma desarrollada con Flutter siguiendo arquitectura BLoC. Implementa sincronización offline-first con resolución de conflictos, gestión completa de entrenamientos, seguimiento de progreso con métricas avanzadas, notificaciones push y exportación/importación de datos. Arquitectura escalable con 39 páginas implementadas y integración con Supabase y Firebase.',
    stack: ['Flutter', 'Dart', 'Supabase', 'Firebase', 'SQLite', 'BLoC'],
    github: 'https://github.com/ruge2109-Git/fit-tracker-mobile',
    demo: '',
    lastUpdate: '2024-12-15T10:00:00Z',
    stars: 0,
    featured: true,
  },
  {
    title: 'kpi',
    description:
      'Sistema empresarial de gestión y visualización de KPIs desarrollado como proyecto freelance. Arquitectura fullstack con Angular y Node.js que incluye dashboards interactivos con gráficos en tiempo real, reportes automatizados y análisis avanzado de métricas de negocio para toma de decisiones estratégicas.',
    stack: ['Angular', 'Node.js', 'TypeScript', 'REST API'],
    github: 'https://github.com/ruge2109-Git/kpi',
    demo: '',
    lastUpdate: '2022-04-27T04:37:15Z',
    stars: 0,
    featured: true,
  },
  {
    title: 'bodeguita-verde',
    description:
      'Plataforma e-commerce completa desarrollada con Angular 21 y arquitectura modular. Implementa catálogo dinámico de productos, carrito de compras persistente, proceso de checkout optimizado, área de usuario con historial de pedidos y panel de administración completo con gestión de inventario, clientes y proveedores. Diseño responsive con Tailwind CSS y gestión de estado reactiva con RxJS.',
    stack: ['Angular 21', 'TypeScript', 'Tailwind CSS', 'RxJS'],
    github: 'https://github.com/ruge2109-Git/bodeguita-verde',
    demo: '',
    lastUpdate: '2024-10-15T10:30:00Z',
    stars: 0,
    featured: true,
  },
  {
    title: 'marketplace',
    description:
      'Plataforma de marketplace enterprise con arquitectura de microservicios serverless implementada siguiendo Clean Architecture y Domain-Driven Design. Incluye servicios especializados para gestión de productos con variantes complejas, categorías jerárquicas, usuarios, notificaciones y órdenes. Integra funcionalidades de IA avanzadas: chat de ventas inteligente, virtual try-on y búsqueda semántica. Desplegado en AWS Lambda con DynamoDB, S3 y Serverless Framework para escalabilidad automática.',
    stack: ['Python', 'FastAPI', 'AWS Lambda', 'DynamoDB', 'S3', 'Serverless', 'OpenAI'],
    github: 'https://github.com/marketplace-jr-jc/market-ui',
    demo: '',
    lastUpdate: '2024-11-20T15:00:00Z',
    stars: 0,
    featured: true,
  },
] as const;

const translations = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      projects: 'Proyectos',
      skills: 'Habilidades',
      experience: 'Experiencia',
      contact: 'Contacto',
      lang: 'Idioma',
      langEs: 'ES',
      langEn: 'EN',
    },
    hero: {
      greeting: 'Hola, soy',
      role: 'Software Engineer Fullstack Senior',
      description:
        'Diseño y desarrollo arquitecturas de microservicios escalables que procesan millones de operaciones diarias. Especializado en Clean Architecture, AWS serverless y soluciones Fullstack de alto impacto.',
      github: 'GitHub',
      cv: 'Descargar CV',
      viewProjects: 'Ver Proyectos',
    },
    about: {
      title: 'Sobre mí',
      subtitle: 'Arquitectura, escalabilidad y resultados medibles',
    },
    projects: {
      featured: 'Proyectos Destacados',
      subtitle:
        'Soluciones técnicas que demuestran arquitectura escalable, Clean Code y resultados medibles',
      all: 'Todos los Proyectos',
      filter: 'Filtrar por tecnología',
      filterAll: 'Todas',
      sortBy: 'Ordenar por',
      sortDate: 'Fecha de actualización',
      sortStars: 'Estrellas',
      viewCode: 'Ver código',
      viewDemo: 'Ver demo',
      noProjects: 'No se encontraron proyectos',
      descriptions: {
        'fit-tracker':
          'Plataforma web fullstack para seguimiento de fitness desarrollada con Next.js y Node.js. Implementa autenticación segura, dashboard interactivo con visualización de datos y despliegue optimizado en Vercel con code splitting y lazy loading para máximo rendimiento.',
        'fit-tracker-mobile':
          'Aplicación móvil multiplataforma desarrollada con Flutter siguiendo arquitectura BLoC. Implementa sincronización offline-first con resolución de conflictos, gestión completa de entrenamientos, seguimiento de progreso con métricas avanzadas, notificaciones push y exportación/importación de datos. Arquitectura escalable con 39 páginas implementadas y integración con Supabase y Firebase.',
        kpi:
          'Sistema empresarial de gestión y visualización de KPIs desarrollado como proyecto freelance. Arquitectura fullstack con Angular y Node.js que incluye dashboards interactivos con gráficos en tiempo real, reportes automatizados y análisis avanzado de métricas de negocio para toma de decisiones estratégicas.',
        'bodeguita-verde':
          'Plataforma e-commerce completa desarrollada con Angular 21 y arquitectura modular. Implementa catálogo dinámico de productos, carrito de compras persistente, proceso de checkout optimizado, área de usuario con historial de pedidos y panel de administración completo con gestión de inventario, clientes y proveedores. Diseño responsive con Tailwind CSS y gestión de estado reactiva con RxJS.',
        marketplace:
          'Plataforma de marketplace enterprise con arquitectura de microservicios serverless implementada siguiendo Clean Architecture y Domain-Driven Design. Incluye servicios especializados para gestión de productos con variantes complejas, categorías jerárquicas, usuarios, notificaciones y órdenes. Integra funcionalidades de IA avanzadas: chat de ventas inteligente, virtual try-on y búsqueda semántica. Desplegado en AWS Lambda con DynamoDB, S3 y Serverless Framework para escalabilidad automática.',
      },
    },
    skills: {
      title: 'Habilidades',
      subtitle: 'Stack tecnológico para construir sistemas enterprise escalables',
      frontend: 'Frontend',
      backend: 'Backend',
      cloud: 'Cloud & Tools',
    },
    experience: {
      title: 'Experiencia',
      subtitle:
        '5+ años liderando proyectos internacionales y optimizando sistemas críticos',
      downloadCV: 'Descargar CV',
    },
    contact: {
      title: 'Contacto',
      subtitle:
        '¿Buscas un desarrollador senior para tu próximo proyecto? Colaboremos en soluciones técnicas de alto impacto.',
      name: 'Nombre',
      email: 'Email',
      message: 'Mensaje',
      send: 'Enviar mensaje',
      sending: 'Enviando...',
      success: '¡Mensaje enviado! Te responderé pronto.',
      error: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.',
      or: 'O contáctame directamente',
    },
    footer: {
      builtWith: 'Hecho con',
      and: 'y',
      rights: 'Todos los derechos reservados',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      experience: 'Experience',
      contact: 'Contact',
      lang: 'Language',
      langEs: 'ES',
      langEn: 'EN',
    },
    hero: {
      greeting: "Hi, I'm",
      role: 'Senior Fullstack Software Engineer',
      description:
        'I design and develop scalable microservices architectures that process millions of daily operations. Specialized in Clean Architecture, AWS serverless, and high-impact Fullstack solutions.',
      github: 'GitHub',
      cv: 'Download CV',
      viewProjects: 'View Projects',
    },
    about: {
      title: 'About Me',
      subtitle: 'Architecture, scalability, and measurable results',
    },
    projects: {
      featured: 'Featured Projects',
      subtitle:
        'Technical solutions showcasing scalable architecture, Clean Code, and measurable results',
      all: 'All Projects',
      filter: 'Filter by technology',
      filterAll: 'All',
      sortBy: 'Sort by',
      sortDate: 'Update date',
      sortStars: 'Stars',
      viewCode: 'View code',
      viewDemo: 'View demo',
      noProjects: 'No projects found',
      descriptions: {
        'fit-tracker':
          'Fullstack web platform for fitness tracking developed with Next.js and Node.js. Implements secure authentication, interactive dashboard with data visualization, and optimized deployment on Vercel with code splitting and lazy loading for maximum performance.',
        'fit-tracker-mobile':
          'Cross-platform mobile application developed with Flutter following BLoC architecture. Implements offline-first synchronization with conflict resolution, complete workout management, progress tracking with advanced metrics, push notifications, and data export/import. Scalable architecture with 39 implemented pages and integration with Supabase and Firebase.',
        kpi:
          'Enterprise KPI management and visualization system developed as a freelance project. Fullstack architecture with Angular and Node.js including interactive dashboards with real-time charts, automated reports, and advanced business metrics analysis for strategic decision-making.',
        'bodeguita-verde':
          'Complete e-commerce platform developed with Angular 21 and modular architecture. Implements dynamic product catalog, persistent shopping cart, optimized checkout process, user area with order history, and complete administration panel with inventory, customer, and supplier management. Responsive design with Tailwind CSS and reactive state management with RxJS.',
        marketplace:
          'Enterprise marketplace platform with serverless microservices architecture implemented following Clean Architecture and Domain-Driven Design. Includes specialized services for product management with complex variants, hierarchical categories, users, notifications, and orders. Integrates advanced AI features: intelligent sales chat, virtual try-on, and semantic search. Deployed on AWS Lambda with DynamoDB, S3, and Serverless Framework for automatic scalability.',
      },
    },
    skills: {
      title: 'Skills',
      subtitle: 'Technology stack for building scalable enterprise systems',
      frontend: 'Frontend',
      backend: 'Backend',
      cloud: 'Cloud & Tools',
    },
    experience: {
      title: 'Experience',
      subtitle:
        '5+ years leading international projects and optimizing critical systems',
      downloadCV: 'Download CV',
    },
    contact: {
      title: 'Contact',
      subtitle:
        "Looking for a senior developer for your next project? Let's collaborate on high-impact technical solutions.",
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send message',
      sending: 'Sending...',
      success: "Message sent! I'll get back to you soon.",
      error: 'Error sending message. Please try again.',
      or: 'Or contact me directly',
    },
    footer: {
      builtWith: 'Built with',
      and: 'and',
      rights: 'All rights reserved',
    },
  },
};

export const portfolioData = {
  config: portfolioConfig,
  projects,
  translations,
} as const;

# 🚀 Portafolio Profesional - Arquitectura por Capas

Portafolio web profesional construido con **Astro**, **React**, **TypeScript** y **TailwindCSS**. Implementa una **arquitectura por capas profesional** siguiendo principios de Clean Architecture y Domain-Driven Design (DDD).

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Arquitectura](#-arquitectura)
- [Requisitos Previos](#-requisitos-previos)
- [Instalación](#-instalación)
- [Configuración](#-configuración)
- [Desarrollo](#-desarrollo)
- [Build y Producción](#-build-y-producción)
- [Despliegue](#-despliegue)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Personalización](#-personalización)
- [Tecnologías](#-tecnologías)

## ✨ Características

- ⚡ **Rendimiento excepcional** - Generación estática con Astro
- 🏗️ **Arquitectura profesional** - Clean Architecture con separación por capas
- 🎨 **Diseño moderno** - UI tipo SaaS con modo oscuro
- 📱 **Totalmente responsivo** - Mobile-first design
- 🌍 **Multilenguaje** - Soporte para Español e Inglés con cambio dinámico
- 🔍 **SEO optimizado** - Meta tags, sitemap, robots.txt
- ♿ **Accesible** - ARIA labels y HTML semántico
- 🎯 **Proyectos destacados** - Muestra tus mejores proyectos
- 🌙 **Modo oscuro** - Toggle manual con persistencia en localStorage
- 🔧 **TypeScript** - Tipado fuerte en todo el proyecto
- 🧩 **Dependency Injection** - Contenedor DI para gestión de dependencias

## 🏗️ Arquitectura

Este proyecto implementa una **arquitectura por capas profesional** que separa las responsabilidades en diferentes niveles:

```
src/
├── domain/                    # Capa de Dominio (Core Business Logic)
│   ├── entities/              # Entidades de negocio
│   ├── types/                 # Tipos de dominio
│   └── interfaces/            # Contratos (interfaces) de dominio
│
├── application/               # Capa de Aplicación (Use Cases)
│   └── services/              # Servicios de aplicación
│
├── infrastructure/            # Capa de Infraestructura (Implementaciones)
│   ├── repositories/          # Implementaciones de repositorios
│   ├── services/              # Implementaciones de servicios
│   └── data/                  # Fuentes de datos (JSON, configs)
│
├── presentation/              # Capa de Presentación (UI)
│   ├── components/            # Componentes reutilizables
│   ├── sections/               # Secciones de la página
│   └── layouts/               # Layouts de página
│
├── shared/                    # Capa Compartida
│   ├── constants/             # Constantes de la aplicación
│   ├── di/                     # Dependency Injection Container
│   ├── i18n/                   # Traducciones
│   ├── styles/                 # Estilos globales
│   └── utils/                  # Utilidades compartidas
│
└── pages/                     # Páginas de Astro (routing automático)
```

### Principios Aplicados

- **Separación de Responsabilidades (SoC)**: Cada capa tiene una responsabilidad específica
- **Dependency Inversion Principle (DIP)**: Las capas superiores dependen de abstracciones, no de implementaciones
- **Single Responsibility Principle (SRP)**: Cada clase/archivo tiene una única responsabilidad
- **Dependency Injection (DI)**: Gestión centralizada de dependencias

## 📋 Requisitos Previos

- **Node.js** 18 o superior
- **npm**, **yarn** o **pnpm**
- Conocimientos básicos de TypeScript y React (opcional)

## 🛠️ Instalación

### 1. Clonar o descargar el proyecto

```bash
git clone <tu-repositorio>
cd portfolio
```

O descarga el proyecto y navega a la carpeta.

### 2. Instalar dependencias

```bash
npm install
# o
yarn install
# o
pnpm install
```

### 3. Configurar variables de entorno

Copia el archivo `.env.example` a `.env`:

```bash
cp .env.example .env
```

Edita `.env` con tu información:

```env
PUBLIC_SITE_URL=https://tu-dominio.com
PUBLIC_EMAIL=tu-email@ejemplo.com
PUBLIC_GITHUB=https://github.com/tu-usuario
PUBLIC_LINKEDIN=https://linkedin.com/in/tu-perfil
PUBLIC_TWITTER=https://twitter.com/tu-usuario
PUBLIC_CV_URL=/CV.pdf
```

## ⚙️ Configuración

### 1. Personalizar información personal

Edita `src/infrastructure/data/config.ts` con tu información:

```typescript
personal: {
  name: 'Tu Nombre',
  role: 'Tu Rol Profesional',
  mainStack: ['Tecnología 1', 'Tecnología 2'],
  email: 'tu-email@ejemplo.com',
  github: 'https://github.com/tu-usuario',
  linkedin: 'https://linkedin.com/in/tu-perfil',
  cvUrl: '/CV.pdf',
}
```

### 2. Actualizar sección "About"

En el mismo archivo `config.ts`, edita las secciones `about.es` y `about.en`:

```typescript
about: {
  es: 'Tu descripción en español...',
  en: 'Your description in English...',
}
```

### 3. Configurar habilidades (Skills)

Actualiza las habilidades en `config.ts`:

```typescript
skills: {
  frontend: ['React', 'Vue', 'Angular'],
  backend: ['Node.js', 'Python', 'Java'],
  cloud: ['AWS', 'Docker', 'Kubernetes'],
}
```

### 4. Agregar experiencia profesional

Edita el array `experience` en `config.ts`:

```typescript
experience: [
  {
    title: 'Título del puesto',
    company: 'Nombre de la empresa',
    period: '2020 - Presente',
    description: {
      es: 'Descripción en español...',
      en: 'Description in English...',
    },
  },
]
```

### 5. Configurar proyectos

Edita `src/infrastructure/data/projects.json` con tus proyectos:

```json
[
  {
    "title": "nombre-proyecto",
    "description": "Descripción del proyecto",
    "stack": ["React", "Node.js", "MongoDB"],
    "github": "https://github.com/usuario/repo",
    "demo": "https://demo-url.com",
    "lastUpdate": "2025-02-01",
    "stars": 10,
    "featured": true
  }
]
```

### 6. Configurar traducciones

Edita `src/shared/i18n/es.ts` y `src/shared/i18n/en.ts` para personalizar los textos.

### 7. Actualizar URL del sitio

En `astro.config.mjs`, cambia la URL del sitio:

```javascript
site: 'https://tu-dominio.com'
```

### 8. Agregar tu CV

Coloca tu archivo PDF en `public/CV.pdf` o actualiza `PUBLIC_CV_URL` en `.env`.

## 🚀 Desarrollo

Inicia el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

Abre [http://localhost:4321](http://localhost:4321) en tu navegador.

### Cambiar idioma

El proyecto incluye un selector de idioma en el header. También puedes cambiar el idioma mediante el parámetro de URL:

- Español: `http://localhost:4321/?lang=es`
- Inglés: `http://localhost:4321/?lang=en`

## 📦 Build y Producción

### Generar build de producción

```bash
npm run build
# o
yarn build
# o
pnpm build
```

Los archivos estáticos se generarán en la carpeta `dist/`.

### Previsualizar build de producción

```bash
npm run preview
# o
yarn preview
# o
pnpm preview
```

Esto iniciará un servidor local para previsualizar la versión de producción.

## 🚢 Despliegue

### Vercel (Recomendado)

Vercel es la plataforma más sencilla para desplegar proyectos Astro.

#### Opción 1: Desde GitHub (Recomendado)

1. **Sube tu código a GitHub**

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/tu-usuario/tu-repo.git
git push -u origin main
```

2. **Conecta con Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Inicia sesión con GitHub
   - Haz clic en "Add New Project"
   - Selecciona tu repositorio
   - Vercel detectará automáticamente Astro

3. **Configura las variables de entorno**
   - En la configuración del proyecto, ve a "Environment Variables"
   - Agrega todas las variables de `.env.example`

4. **Despliega**
   - Vercel desplegará automáticamente en cada push a `main`
   - Obtendrás una URL como `tu-proyecto.vercel.app`

#### Opción 2: Desde CLI

1. **Instala Vercel CLI**

```bash
npm i -g vercel
```

2. **Despliega**

```bash
vercel
```

Sigue las instrucciones en la terminal.

**Configuración en Vercel:**
- Framework Preset: Astro
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

### Netlify

#### Opción 1: Desde GitHub

1. **Sube tu código a GitHub** (igual que en Vercel)

2. **Conecta con Netlify**
   - Ve a [netlify.com](https://netlify.com)
   - Inicia sesión con GitHub
   - Haz clic en "Add new site" > "Import an existing project"
   - Selecciona tu repositorio

3. **Configura el build**
   - Build command: `npm run build`
   - Publish directory: `dist`

4. **Configura variables de entorno**
   - Ve a "Site settings" > "Environment variables"
   - Agrega todas las variables de `.env.example`

#### Opción 2: Desde CLI

1. **Instala Netlify CLI**

```bash
npm i -g netlify-cli
```

2. **Despliega**

```bash
netlify deploy --prod
```

### GitHub Pages

1. **Instala gh-pages**

```bash
npm install --save-dev gh-pages
```

2. **Agrega script al package.json**

```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

3. **Configura astro.config.mjs**

```javascript
export default defineConfig({
  site: 'https://tu-usuario.github.io',
  base: '/nombre-repo', // Solo si el repo no es tu-usuario.github.io
});
```

4. **Despliega**

```bash
npm run deploy
```

5. **Configura GitHub Pages**
   - Ve a Settings > Pages en tu repositorio
   - Selecciona la rama `gh-pages` como fuente
   - Tu sitio estará disponible en `https://tu-usuario.github.io/nombre-repo`

## 📁 Estructura del Proyecto

```
portfolio/
├── public/                      # Archivos estáticos
│   ├── robots.txt
│   ├── favicon.svg
│   └── CV.pdf                  # Tu CV (agregar manualmente)
│
├── src/
│   ├── domain/                  # Capa de Dominio
│   │   ├── entities/           # Entidades de negocio
│   │   │   ├── Project.ts
│   │   │   └── PersonalInfo.ts
│   │   ├── types/               # Tipos de dominio
│   │   │   ├── Language.ts
│   │   │   └── Filter.ts
│   │   └── interfaces/          # Contratos
│   │       ├── ProjectRepository.ts
│   │       ├── ConfigRepository.ts
│   │       └── TranslationService.ts
│   │
│   ├── application/             # Capa de Aplicación
│   │   └── services/
│   │       ├── ProjectService.ts
│   │       └── ConfigService.ts
│   │
│   ├── infrastructure/           # Capa de Infraestructura
│   │   ├── repositories/
│   │   │   ├── ProjectRepository.ts
│   │   │   └── ConfigRepository.ts
│   │   ├── services/
│   │   │   └── TranslationService.ts
│   │   └── data/
│   │       ├── projects.json
│   │       └── config.ts
│   │
│   ├── presentation/            # Capa de Presentación
│   │   ├── components/
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   ├── ProjectCard.astro
│   │   │   ├── ProjectCard.tsx
│   │   │   └── ContactForm.tsx
│   │   ├── sections/
│   │   │   ├── Hero.astro
│   │   │   ├── About.astro
│   │   │   ├── FeaturedProjects.astro
│   │   │   ├── Skills.astro
│   │   │   ├── Experience.astro
│   │   │   └── Contact.astro
│   │   └── layouts/
│   │       └── BaseLayout.astro
│   │
│   ├── shared/                   # Capa Compartida
│   │   ├── constants/
│   │   │   └── index.ts
│   │   ├── di/
│   │   │   └── container.ts
│   │   ├── i18n/
│   │   │   ├── es.ts
│   │   │   ├── en.ts
│   │   │   └── index.ts
│   │   ├── styles/
│   │   │   └── global.css
│   │   └── utils/
│   │       ├── date.ts
│   │       ├── string.ts
│   │       └── url.ts
│   │
│   └── pages/                    # Páginas de Astro
│       └── index.astro
│
├── .env.example                  # Ejemplo de variables de entorno
├── .gitignore
├── astro.config.mjs              # Configuración de Astro
├── tailwind.config.mjs           # Configuración de Tailwind
├── tsconfig.json                 # Configuración de TypeScript
└── package.json
```

## 🎨 Personalización

### Colores

Edita `tailwind.config.mjs` para cambiar la paleta de colores. El proyecto usa una paleta de grises:

```javascript
theme: {
  extend: {
    colors: {
      gray: {
        // Paleta de grises personalizada
      }
    }
  }
}
```

### Fuentes

Las fuentes están configuradas en `tailwind.config.mjs`:
- **Sans**: Inter (cuerpo de texto)
- **Display**: Poppins (títulos)

### Animaciones

El proyecto incluye animaciones personalizadas definidas en `tailwind.config.mjs`:
- `fade-in-up`
- `fade-in-down`
- `scale-in`
- `float`
- `glow`

### Estilos Globales

Edita `src/shared/styles/global.css` para modificar estilos base.

## 🔧 Scripts Disponibles

- `npm run dev` - Inicia servidor de desarrollo
- `npm run build` - Genera build de producción
- `npm run preview` - Previsualiza build de producción
- `npm run astro` - Ejecuta comandos de Astro CLI

## 📊 SEO

El proyecto incluye:

- ✅ Meta tags dinámicos
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Sitemap automático (generado por `@astrojs/sitemap`)
- ✅ robots.txt

**Actualiza en `astro.config.mjs`:**
```javascript
site: 'https://tu-dominio.com'
```

## ♿ Accesibilidad

- ✅ HTML semántico
- ✅ ARIA labels en elementos interactivos
- ✅ Navegación por teclado
- ✅ Contraste adecuado (WCAG AA)
- ✅ Soporte para lectores de pantalla

## 🐛 Solución de Problemas

### Error: Cannot find module '@domain/...'

Asegúrate de que los paths en `tsconfig.json` estén correctamente configurados. El proyecto usa path aliases para las diferentes capas.

### Los estilos no se aplican

Ejecuta `npm run build` para regenerar los estilos de Tailwind.

### El modo oscuro no persiste

Verifica que `localStorage` esté habilitado en tu navegador.

### Error al cambiar de idioma

El proyecto usa `output: 'hybrid'` en Astro para permitir el procesamiento de query parameters. Asegúrate de que `export const prerender = false;` esté en `src/pages/index.astro`.

## 🛠️ Tecnologías

- **[Astro](https://astro.build)** - Framework web para sitios estáticos rápidos
- **[React](https://react.dev)** - Biblioteca UI para componentes interactivos
- **[TypeScript](https://www.typescriptlang.org)** - Tipado estático para JavaScript
- **[TailwindCSS](https://tailwindcss.com)** - Framework CSS utility-first
- **[Vite](https://vitejs.dev)** - Build tool y dev server (incluido en Astro)

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Siéntete libre de usarlo para tu portafolio personal.

## 🙏 Créditos

- [Astro](https://astro.build) - Framework web
- [TailwindCSS](https://tailwindcss.com) - Framework CSS
- [React](https://react.dev) - Biblioteca UI
- Iconos SVG personalizados

## 📞 Soporte

Si tienes preguntas o encuentras algún problema, abre un issue en el repositorio.

---

**Hecho con ❤️ usando Astro, React, TypeScript y TailwindCSS**

**Arquitectura profesional con Clean Architecture y Domain-Driven Design**

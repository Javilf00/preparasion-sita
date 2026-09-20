# 🐱 ¿Saldrías conmigo? — Cita Nerd con Gatitos

> _Una aplicación interactiva para pedir una cita de forma creativa y nerd. Ahora en React + Next.js._

[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3.1-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)

---

## 📖 Descripción

Una aplicación web interactiva y lúdica para solicitar una cita de una forma original, divertida y completamente nerd. La app guía al usuario a través de un flujo de 7 pasos donde responde preguntas sobre:

- 🎬 Películas favoritas
- 📍 Lugar de encuentro ideal
- 🗓️ Fecha y hora disponible
- 🍽️ Comida preferida
- ✨ Planes posteriores

Con animaciones suaves, memes de gatos adorables y un interfaz temático de código/terminal.

---

## ✨ Características

- ✅ **Interfaz moderna y responsiva** — Diseño móvil-first con animaciones fluidas
- ✅ **Estado interactivo** — Manejo dinámico de respuestas y progreso
- ✅ **Botón "No" escapista** — ¡Se mueve solo cuando intentas presionarlo! 😄
- ✅ **Validación de formularios** — Requiere completar cada paso
- ✅ **Resumen visual** — Muestra todas las respuestas al final
- ✅ **Animación de celebración** — ¡Lluvia de gatitos al confirmar!
- ✅ **Tema nerd/hacker** — Código ficticio integrado en la UI
- ✅ **Completamente tipado** — TypeScript en toda la app

---

## 🚀 Quick Start

### Requisitos

- Node.js 18.17+ (o Bun 1.0+)
- npm, yarn, pnpm, o bun

### Instalación

```bash
# Clonar o descargar el proyecto
cd "c:\Eli\Content creation\memes gatos"

# Instalar dependencias
npm install
# o con bun:
# bun install
```

### Desarrollo

```bash
npm run dev
# o con bun:
# bun dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Compilación

```bash
npm run build
npm start
```

---

## 📁 Estructura del Proyecto

```
memes gatos/
├── app/
│   ├── layout.tsx          # Layout raíz con metadatos
│   ├── page.tsx            # Componente principal (7 pasos)
│   └── globals.css         # Estilos globales + animaciones
├── public/
│   └── memes/              # Imágenes de gatos
│       ├── 1.png
│       ├── 2.png
│       ├── 3.jpg
│       ├── 4.png
│       └── 5.png
├── package.json
├── tsconfig.json
├── next.config.mjs
├── next-env.d.ts
└── README.md
```

---

## 🎯 Flujo de la Aplicación

```
PASO 0: Intro
   ↓
PASO 1: Confirmación (¿Quieres una cita?)
   ↓ [Botón "No" escapista]
PASO 2: Selector de Fecha & Hora
   ↓
PASO 3: Selección de Película
   ↓
PASO 4: Selección de Plan/Lugar
   ↓
PASO 5: Selección de Comida
   ↓
PASO 6: Selección de Actividad Posterior
   ↓
PASO 7: Resumen + Confirmación Final
   ↓ [Celebración con lluvia de gatos]
```

---

## 🛠️ Tecnologías

| Tecnología | Versión | Propósito |
|-----------|---------|-----------|
| Next.js | 15.2.4 | Framework React con SSR |
| React | 18.3.1 | Librería UI |
| React DOM | 18.3.1 | DOM rendering |
| TypeScript | 5.6.3 | Tipado estático |
| ESLint | 8.57.0 | Linting |

---

## 📝 Componentes Principales

### `HomePage` (page.tsx)

El componente principal que gestiona:
- **Estado**: Paso actual, respuestas, validaciones
- **Funciones**:
  - `go(from, to)` — Cambiar de paso con validación
  - `pick(step, idx, val)` — Seleccionar opción
  - `escapeNo()` — Hacer que el botón "No" escape
  - `pickDate()` — Validar fecha y hora
  - `celebrate()` — Mostrar pantalla final
  - `spawnCats()` — Generar animación de gatos flotantes

### Estilos (globals.css)

Incluye:
- Variables CSS temáticas
- Animaciones: `float`, `fadeDown`, `slideUp`, `pulse`, `pop`, `rain`
- Clase `.float-cat` para gatos animados

---

## 🎨 Diseño y UX

### Paleta de Colores
- **Primario**: `#7c3aed` (Púrpura)
- **Acento**: `#ec4899` (Rosa)
- **Éxito**: `#10b981` (Verde)
- **Fondo**: `#f7f3ff` (Lavanda clarito)

### Tipografía
- **Títulos**: `Nunito` (Bold 800-900)
- **Código**: `Fira Code` (Monospace)

---

## 🎮 Características Interactivas

### Botón "No" Escapista
```
Cada intento de presionar "No":
1. Se hace más pequeño
2. Se mueve a posición aleatoria
3. El botón "Sí" crece
4. Después de 5 intentos, desaparece completamente
```

### Validación de Formularios
- La app requiere completar cada pregunta antes de avanzar
- Muestra errores si faltan datos
- Borra errores cuando se selecciona una opción válida

### Resumen Final
Muestra todas las respuestas del usuario:
- Película elegida
- Lugar de cita
- Fecha y hora
- Comida preferida
- Actividad posterior

---

## 🚀 Deployment

### Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 📦 Scripts Disponibles

```bash
npm run dev     # Inicia servidor de desarrollo
npm run build   # Compila para producción
npm start       # Inicia servidor de producción
npm run lint    # Ejecuta ESLint
```

---

## 🔄 Migración desde HTML

Este proyecto fue migrado desde una aplicación HTML estática:

### Cambios principales:
- ✅ Lógica de JavaScript → Hooks React (`useState`, `useEffect`, `useRef`)
- ✅ Inline styles → Combinación de inline styles + globals.css
- ✅ Manejo de DOM manual → State management React
- ✅ Data URIs → Assets en carpeta `public/`

### Lo que se mantiene igual:
- ✅ Diseño visual 100% idéntico
- ✅ Todas las funcionalidades
- ✅ Animaciones y transiciones
- ✅ Flujo de usuario
- ✅ Tono y humor original

---

## 🐛 Troubleshooting

### Puerto 3000 ocupado
```bash
# Cambiar puerto
npm run dev -- -p 3001
```

### Error de imágenes
Asegúrate que la carpeta `public/memes/` existe con las imágenes:
```
public/memes/
├── 1.png
├── 2.png
├── 3.jpg
├── 4.png
└── 5.png
```

### Build fallando
```bash
# Limpiar caché
rm -rf .next
npm install
npm run build
```

---

## 📄 Licencia

Libre para usar y modificar. ¡Diviértete pidiendo citas! 💜

---

## 💬 Notas

> Este proyecto es 100% funcional y mantiene todo el charm del original.
> 
> Las animaciones de gatos son lo mejor. Cámbiamelo si te atreves. 🐱

---

**Hecho con ❤️ y mucho código nerd** ✨

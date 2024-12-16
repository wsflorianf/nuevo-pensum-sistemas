# Proyecto (Nuevo Pensum)

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:
- Node.js (versión 18 o superior)
- npm (Node Package Manager)

## Configuración del Proyecto

1. Clonar el Repositorio
```bash
git clone https://github.com/wsflorianf/nuevo-pensum-sistemas.git
cd nuevo-pensum-sistemas
cd pensum
```

2. Instalar Dependencias
```bash
npm install
```

## Estructura Principal del Proyecto

```
├── public/              <- Recursos (Imágenes y Logos)
├── src/                 <- Carpeta de código fuente
│   │ 
│   ├── components/      <- Componentes del proyecto
│   ├── data/            <- Información de las materias
│   ├── layouts/         <- Layout principal del Sitio
│   ├── pages/           <- Páginas del sitio (Rutas estáticas y dinámicas)
│   ├── services/        <- Servicios para acceder a la información
│   └── types/           <- Tipado del sitio
│
├── astro.config.mjs     <- Configuración del proyecto
└── package.json         <- Dependencias
```

## Configuración de la información

En la carpeta 'src/data/' se encontraran los archivos:

 - infoMaterias.ts
 - infoObligatorias.ts 
 - infoElectiva.ts

Los cuales contienen la información de las materias del pensum (Generales, opciones de las obligatorias y electivas) los cuales al ser modificados se podrá previsualizar en el servidor de desarrollo la nueva versión y posteriormente generar la nueva versión del proyecto para producción.

El id de las materias obligatorias deben corresponder y ser el mismo en ambos archivos (infoMaterias.ts, infoObligatorias.ts)

En la carpeta 'types' se encuentra el fichero 'informacion.ts' dónde se encuentra documentada la forma de la información de los tres archivos anteriores.

## Comandos Disponibles
Se debe estar ubicado en la carpeta pensum que corresponde al subproyecto del sitio del nuevo pensum. (Las otras carpetas son para los subproyectos de la landing page y el simulador los cuales están en ramas distintas del mismo repositorio).

### Desarrollo
Para iniciar el servidor de desarrollo con recarga en caliente:

```bash
npm run dev
```
El proyecto estará disponible en `http://localhost:4321`

### Construcción para Producción

#### Configuración
Ingresar al archivo 'astro.config.mjs en la raíz de la carpeta 'pensum' y establecer la base que concuerde con la subcarpeta en la cual se encontrará dentro del servidor.

Si la ruta del servidor dónde se montará es por ejemplo:

```
www.sitio.com/sistemas/nuevo/pensum
```

Se deberá poner en el archivo de configuración la base como 'sistemas/nuevo/pensum'

```
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
    base: "sistemas/nuevo/pensum",
    integrations: [react()],
  });
```

### Generación
Para generar una versión de producción optimizada:
```bash
npm run build
```
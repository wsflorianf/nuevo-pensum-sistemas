import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    react({
      include: ['**/react/*'],
    }),
    tailwind(),
  ],
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
  output: 'static', // Configura el modo de salida como estático
  base: '/', // Define la ruta base (ajústalo si tu sitio estará en un subdirectorio)
});


const baseURL = import.meta.env.BASE_URL
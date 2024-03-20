import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command, mode }) => {
  let baseUrl;

  if (mode === 'development') {
    baseUrl = 'http://localhost/my_php_projects/gift-card-backend/';
  } else if (mode === 'production') {
    baseUrl = 'http://localhost/my_php_projects/gift-card-backend/';
  }

  return {
    base: '/gift-card-frontend/',
    plugins: [react()],
    define: {
      'import.meta.env.VITE_BASE_URL': JSON.stringify(baseUrl),
    },
  };
});

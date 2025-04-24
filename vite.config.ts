import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [vue(), vueDevTools(), tailwindcss(),],
  // base: '/test-figma/',
  base: '/',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "./src/styles/variables.scss" as *;`
      }
    }
  },
  build: {
    outDir: "dist",
  }
});

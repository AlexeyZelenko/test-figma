import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: '/test-figma/',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "./src/styles/variables.scss" as *;`
      }
    }
  },
  build: {
    outDir: "dist",
  },
});

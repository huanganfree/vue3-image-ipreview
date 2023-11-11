import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join, resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': join(__dirname, "src"),
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, './src/components/imagePreview/index.js'),
      name: 'Vue3ImagePreview',
      fileName: 'vue3-image-ipreview',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})

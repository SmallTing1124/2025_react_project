import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/2025_react_project/",
  plugins: [react()],
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `@import "src/assets/scss/utils/variables";`,
      },
    },
  },
})

import { defineConfig } from "vite";
import autoprefixer from 'autoprefixer';

export default defineConfig({
    server: {
        open: true,
        host: true
    },
  build: {
            outDir: './docs'
        },
    css: {
        postcss: {
            plugins: [
                autoprefixer()
            ],
        }
    }
})
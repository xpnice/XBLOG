import { defineConfig } from 'vite'
import { join } from "path";
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // css: {
  //   // 预处理器配置项
  //   preprocessorOptions: {
  //     less: {
  //       math: "always",
  //     },
  //   },
  // },
  resolve: {
    alias: {
      '@': join(__dirname, "src/"),
    }
  }
})

import { defineConfig } from 'vite'
import { resolve } from 'path';

import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/ 
export default defineConfig({
  plugins: [react()],
  base: "/",
  resolve: {
    alias: {
      '@': resolve(__dirname,'src'),
    },
  },
  build:{
    rollupOptions:{
      output:{
        assetFileNames:'assets/[name].[hash].[ext]'

      },
    },
  },
   assetsInclude:['**/*.ttf', '**/*.pdf']

})

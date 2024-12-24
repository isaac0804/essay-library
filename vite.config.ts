import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@supabase/supabase-js': '@supabase/supabase-js/dist/umd/supabase.js', // Point to the UMD build
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

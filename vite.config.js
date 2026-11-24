import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
export default defineConfig({
    plugins: [react()],
    build: { rollupOptions: {
        input: { home: resolve('index.html'), contract: resolve('contract.html'), introduction: resolve('introduction.html'), about: resolve('about.html') },
        output: { entryFileNames: 'scripts/[name]-[hash].js', chunkFileNames: 'scripts/[name]-[hash].js' }
    } }
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
export default defineConfig({
    plugins: [react(), {
        name: 'course-validation',
        transformIndexHtml: {
            order: 'post',
            handler(html) {
                // Keep validators in the required head order after Vite inserts its module.
                return html.replace('</head>', '<script src="https://divonbriesen.github.io/teaching/tools/standards-check.js" defer></script>\n<script src="https://lint.page/kit/4d0fe3.js" crossorigin="anonymous" defer></script>\n</head>');
            }
        }
    }],
    build: { target: "es2017", rollupOptions: {
        input: { home: resolve('index.html'), contract: resolve('contract.html'), introduction: resolve('introduction.html'), about: resolve('about.html') },
        output: { entryFileNames: 'scripts/[name]-[hash].min.js', chunkFileNames: 'scripts/[name]-[hash].min.js' }
    } }
});


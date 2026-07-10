import { defineConfig } from 'rollup';
import { createRequire } from 'module';
import resolve from '@rollup/plugin-node-resolve';
import alias from '@rollup/plugin-alias';
import terser from '@rollup/plugin-terser';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  input: 'assets/js/budget.js',
  treeshake: true,
  plugins: [
    resolve(),
    alias({
      entries: [
        { find: 'firebase/app', replacement: join(__dirname, 'node_modules/firebase/app/dist/esm/index.esm.js') },
        { find: 'firebase/auth', replacement: join(__dirname, 'node_modules/firebase/auth/dist/esm/index.esm.js') },
        { find: 'firebase/firestore', replacement: join(__dirname, 'node_modules/firebase/firestore/dist/esm/index.esm.js') },
      ]
    }),
    terser(),
  ],
  output: {
    file: 'dist/bundle.js',
    format: 'esm'
  }
});

import { defineConfig } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';

export default defineConfig({
  input: 'assets/js/budget.js',
  plugins: [resolve()],
  output: {
    file: 'dist/bundle.js',
    format: 'esm'
  }
});

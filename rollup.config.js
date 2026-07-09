import { defineConfig } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import alias from '@rollup/plugin-alias';

export default defineConfig({
  input: 'assets/js/budget.js',
  plugins: [
    resolve(),
    alias({entries: [{find: 'firebase/app', replacement: require.resolve('firebase/app')}]}),
    alias({entries: [{find: 'firebase/auth', replacement: require.resolve('firebase/auth')}]}),
    alias({entries: [{find: 'firebase/firestore', replacement: require.resolve('firebase/firestore')}]}),
  ],
  output: {
    file: 'dist/bundle.js',
    format: 'esm'
  }
});

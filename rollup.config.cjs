const { defineConfig } = require('rollup');
const resolve = require('@rollup/plugin-node-resolve');

module.exports = defineConfig({
  input: 'assets/js/budget.js',
  plugins: [resolve()],
  output: { file: 'dist/bundle.js', format: 'esm' }
});
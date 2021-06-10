import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/js/frontend-toolkit.js',
  output: {
    file: 'dist/js/frontend-toolkit.js',
    format: 'iife'
  },
  plugins: [
    resolve(),
    babel({ babelHelpers: 'bundled' })
  ]
};

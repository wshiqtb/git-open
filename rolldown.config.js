import { defineConfig } from 'rolldown';

export default defineConfig({
  input: 'src/index.js',
  platform: 'node',
  output: [
    {
      file: 'dist/index.cjs',
      format: 'cjs',
    },
    {
      file: 'dist/index.mjs',
      format: 'esm',
    }
  ],
  external: [],
});
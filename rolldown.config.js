// rolldown.config.js
import { defineConfig } from 'rolldown';

export default defineConfig({
  input: 'src/index.js',
  output: {
    dir: 'dist',
    format: 'esm', // 推荐使用 ES 模块
  },
  // 如果需要排除某些依赖
  external: [],
});

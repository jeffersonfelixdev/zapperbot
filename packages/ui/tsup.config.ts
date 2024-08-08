import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src'],
  bundle: false,
  minify: false,
  dts: true,
  format: ['cjs', 'esm'],
  external: ['react'],
  loader: {
    '.css': 'copy',
    '.html': 'copy',
  },
})

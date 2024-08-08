import { defineConfig } from 'tsup'

export default defineConfig((options) => ({
  entry: ['index.ts'],
  sourcemap: true,
  minify: !options.watch,
  format: ['esm', 'cjs'],
}))

import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/server/index.ts'],
  minify: true,
})

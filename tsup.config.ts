import { defineConfig } from 'tsup'

export default defineConfig([
  {
    name: 'Plugin Main Entry',
    entry: [
      'src/index.ts',
    ],
    format: ['esm', 'cjs'],
    dts: true,
    clean: true,
  },
  {
    name: 'Stylelint Worker',
    entry: [
      'src/worker.ts',
    ],
    format: ['cjs'],
    dts: true,
  },
])

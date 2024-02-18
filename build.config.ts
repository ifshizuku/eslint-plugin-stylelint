import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig([
  {
    name: 'Plugin Main Entry',
    entries: [
      'src/index',
    ],
    declaration: true,
    clean: true,
    rollup: {
      emitCJS: true,
    },
  },
  {
    name: 'Stylelint Worker',
    entries: [
      'src/worker',
    ],
    clean: true,
    rollup: {
      esbuild: {
        minify: true,
      },
      emitCJS: true,
    },
  },
])

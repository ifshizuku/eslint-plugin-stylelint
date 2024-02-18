import type { ESLint } from 'eslint'
import { version } from '../package.json'
import stylelintRule from './rule'

const plugin: ESLint.Plugin = {
  meta: {
    name: 'eslint-plugin-stylelint',
    version,
  },
  rules: {
    stylelint: stylelintRule,
  },
}

export default plugin

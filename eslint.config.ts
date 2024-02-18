import antfu, { parserPlain } from '@antfu/eslint-config'
import stylelintPlugin from './src'

export default antfu(
  {},
  {
    files: [
      '**/*.css',
    ],
    languageOptions: {
      parser: parserPlain,
    },
    plugins: {
      stylelint: stylelintPlugin,
    },
    rules: {
      'stylelint/stylelint': ['warn', {
        rules: {
          'block-no-empty': true,
          'function-calc-no-unspaced-operator': true,
        },
      }],
    },
  },
)

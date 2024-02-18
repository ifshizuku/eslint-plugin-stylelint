import { createSyncFn } from 'synckit'
import type { Rule } from 'eslint'
import type { LintResult, LinterOptions, LinterResult } from 'stylelint'
import { workerPath } from './utils/getPath'
import { report } from './utils/report'

type LinterWorker = (payload: LinterOptions) => Pick<LinterResult, 'report' | 'code'>

let linterFn: LinterWorker

const stylelintRule: Rule.RuleModule = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Stylelint integration rule',
    },
    fixable: 'code',
    // TODO: configuration schema
    schema: [
      {
        type: 'object',
        properties: {
          rules: {
            type: 'object',
            required: true,
          },
        },
        additionalProperties: true,
      },
    ],
  },
  create(context) {
    if (!linterFn)
      linterFn = createSyncFn(workerPath) as LinterWorker

    return {
      Program() {
        const source = context.sourceCode.text
        const { report: reportedString, code: formatted } = linterFn({
          code: source,
          config: {
            ...context.options[0],
            // always in fix mode to return code, let eslint to handle fix event
            // fix: true,
          },
        })

        // only the first one of the Stylelint report array used
        const reported = JSON.parse(reportedString)[0] as LintResult

        report(context, reported, formatted)
      },
    }
  },
}

export default stylelintRule

import type { Rule } from 'eslint'
import type { LintResult } from 'stylelint'

/**
 * Stylelint rule report utils
 */
export function report(
  context: Rule.RuleContext,
  reported: LintResult,
  _formatted?: string,
) {
  if (reported.errored)
    reportErrors(context, reported)
}

function reportErrors(
  context: Rule.RuleContext,
  reported: LintResult,
) {
  const warnings = reported.warnings
  warnings.forEach((payload) => {
    context.report({
      message: '{{ desc }}',
      loc: (payload.endLine && payload.endColumn)
        ? {
            start: {
              line: payload.line,
              column: payload.endColumn,
            },
            end: {
              line: payload.endLine,
              column: payload.endColumn,
            },
          }
        : {
            line: payload.line,
            column: payload.column,
          },
      data: {
        desc: payload.text,
      },
    })
  })
}

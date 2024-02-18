import { runAsWorker } from 'synckit'

export type StylelintModule = typeof import('stylelint').default

let stylelint: StylelintModule

runAsWorker(async (payload) => {
  if (!stylelint)
    stylelint = (await import('stylelint')).default

  const linterResult = await stylelint.lint(payload)
  const report = linterResult.report
  const code = linterResult.code

  return {
    report,
    code,
  }
})

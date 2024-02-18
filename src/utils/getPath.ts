import { fileURLToPath } from 'node:url'

export const workerPath = fileURLToPath(new URL('../../dist/worker.cjs', import.meta.url))

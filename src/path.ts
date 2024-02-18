import { fileURLToPath } from 'node:url'

export const workerPath = fileURLToPath(new URL('../worker/worker.cjs', import.meta.url))

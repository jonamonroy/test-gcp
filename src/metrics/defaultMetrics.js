import { collectDefaultMetrics } from 'prom-client'

export const configureDefaultMetrics = (registry) => {
  collectDefaultMetrics({ register: registry })
}

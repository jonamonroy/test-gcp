import { Gauge } from 'prom-client'

export const configureCustomMetrics = (registry) => {
  const myGauge = new Gauge({
    name: 'custom_metric_example',
    help: 'Ejemplo de una métrica personalizada',
    registers: [registry],
  })

  // Simular la actualización de métricas
  setInterval(() => {
    const value = Math.random() * 100 // Valor aleatorio
    myGauge.set(value)
    console.log(`Métrica actualizada: ${value}`)
  }, 5000)
}

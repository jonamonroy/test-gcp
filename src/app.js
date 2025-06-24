import express from 'express'
import { Registry } from 'prom-client'
import { configureDefaultMetrics } from './metrics/defaultMetrics.js'
import { configureCustomMetrics } from './metrics/customMetrics.js'

const app = express()
const registry = new Registry() // Registro de métricas compartido

// Configurar métricas
//configureDefaultMetrics(registry)
configureCustomMetrics(registry)

// Endpoint de métricas
app.get('/metrics', async (req, res) => {
  try {
    const metrics = await registry.metrics()
    res.set('Content-Type', registry.contentType)
    res.send(metrics)
  } catch (err) {
    res.status(500).send(`Error recolectando métricas: ${err.message}`)
  }
})

export { app, registry }

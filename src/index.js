import { app } from './app.js'

const PORT = process.env.EXPORTER_PORT || 3005

app.listen(PORT, () => {
  console.log(`Exporter ejecutándose en http://localhost:${PORT}/metrics`)
})

const express = require('express')
const app = express()
const port = 3000

// Configurar la carpeta de archivos estáticos
app.use(express.static('public'))

// Ruta para el archivo HTML principal
app.get('/', (req, res) => {
  res.sendFile('public/index.html', { root: __dirname })
})

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`)
})

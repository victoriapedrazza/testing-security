const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Ruta de ejemplo GET
app.get('/', (req, res) => {
  res.json({ message: 'Hola Mundo desde la PoC de seguridad en GitHub!' });
});

// Ruta de ejemplo POST
app.post('/echo', (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'No se envió mensaje' });
  }
  res.json({ echo: message });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

module.exports = app; // para testing

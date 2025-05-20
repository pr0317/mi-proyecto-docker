const express = require('express');
const app = express();
const port = 3000;

// Endpoint JSON simple
app.get('/api/data', (req, res) => {
  res.json({
    mensaje: '¡Hola desde el backend Docker!',
    fecha: new Date()
  });
});

app.listen(port, () => {
  console.log(`Backend escuchando en http://localhost:${port}`);
});

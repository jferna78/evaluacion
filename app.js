const express = require('express');
const path = require('path');
const connectDB = require('./config/db');
const peliculasRoutes = require('./routes/peliculas');

const app = express();

connectDB();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use('/', peliculasRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
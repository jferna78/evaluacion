const express = require('express');
const router = express.Router();
const path = require('path');
const Pelicula = require('../models/Pelicula');

router.get('/api/peliculas', async (req, res) => {
  try {
    const peliculas = await Pelicula.find();
    res.json(peliculas);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Error del servidor');
  }
});

router.get('/api/peliculas/:id', async (req, res) => {
  try {
    const pelicula = await Pelicula.findById(req.params.id);
    if (!pelicula) {
      return res.status(404).json({ msg: 'Película no encontrada' });
    }
    res.json(pelicula);
  } catch (error) {
    console.error(error.message);
    if (error.kind === 'ObjectId') {
        return res.status(404).json({ msg: 'Película no encontrada' });
    }
    res.status(500).send('Error del servidor');
  }
});

router.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
});

router.get('/pelicula.html', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'public', 'pelicula.html'));
});

module.exports = router;
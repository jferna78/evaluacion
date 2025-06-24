const mongoose = require('mongoose');

const PeliculaSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
    trim: true
  },
  imagen: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Pelicula', PeliculaSchema);
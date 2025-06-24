const mongoose = require('mongoose');
const Pelicula = require('../models/Pelicula');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/videoclub';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Conectado a MongoDB');
    await seedDatabase();
  } catch (err) {
    console.error('Error al conectar a MongoDB:', err.message);
    process.exit(1);
  }
};

const seedDatabase = async () => {
    try {
        const count = await Pelicula.countDocuments();
        if (count === 0) {
            console.log('Base de datos vacía. Añadiendo películas de ejemplo...');
            const peliculasIniciales = [
              { 
                titulo: 'The Matrix', 
                imagen: 'https://res.cloudinary.com/dnfy6yh9o/image/upload/v1750743043/the_matrix_lq4wdd.jpg',
                descripcion: '¿Alguna vez has tenido un sueño que pareciera completamente real? ¿Y si no pudieras despertar de él? Para Neo, un brillante hacker atormentado por la sensación de que algo falla en su mundo, esa pregunta está a punto de convertirse en una aterradora realidad. Una misteriosa figura le ofrece una elección irreversible: tomar la píldora azul y permanecer en la cómoda ignorancia, o tomar la píldora roja y descubrir la verdad, por devastadora que sea. Lo que yace al otro lado es la Matrix, una prisión para la mente humana. Para liberar a la humanidad, Neo deberá aceptar su destino, desafiar las leyes de una realidad que nunca existió y convertirse en la leyenda que está destinado a ser.' 
              },
              { 
                titulo: 'El Señor de los Anillos', 
                imagen: 'https://res.cloudinary.com/dnfy6yh9o/image/upload/v1750743042/the_lord_of_the_rings_lvncp0.jpg',
                descripcion: 'Un Anillo para gobernarlos a todos. En la oscuridad de Mordor, el Señor Oscuro Sauron ha volcado toda su malicia en un Anillo Único, un arma destinada a someter a todos los pueblos libres de la Tierra Media. Ahora, el destino del mundo cae sobre los hombros del más inesperado de los héroes: un hobbit llamado Frodo Bolsón. Para destruir la fuente del poder de Sauron, Frodo debe emprender una misión desesperada hacia el corazón de las tinieblas, el Monte del Destino. Perseguido sin descanso y tentado por el poder corruptor del Anillo, Frodo contará con la ayuda de una valiente Comunidad. Es una carrera contra el tiempo para destruir el mal antes de que consuma el mundo en una oscuridad eterna.'
              },
              { 
                titulo: 'Interstellar', 
                imagen: 'https://res.cloudinary.com/dnfy6yh9o/image/upload/v1750743043/interstellar_srzyux.jpg',
                descripcion: 'El tiempo se agota para la humanidad. La Tierra, nuestro hogar, se está muriendo, asfixiada por el polvo y la hambruna. En un último y desesperado intento por sobrevivir, un ex-piloto, Cooper, debe tomar una decisión desgarradora: abandonar a sus hijos para embarcarse en el viaje más importante de la historia. Su misión: pilotar una nave a través de un recién descubierto agujero de gusano hacia lo desconocido, en busca de un nuevo planeta para la raza humana. Es una odisea épica a través de galaxias, donde cada decisión puede costar años y donde el amor puede ser la única fuerza capaz de trascender el tiempo y el espacio. Una carrera contra la extinción en la inmensidad del cosmos.'
              }
            ];
            await Pelicula.insertMany(peliculasIniciales);
            console.log('Películas de ejemplo añadidas.');
        }
    } catch (error) {
        console.error('Error al poblar la base de datos:', error.message);
    }
};

module.exports = connectDB;
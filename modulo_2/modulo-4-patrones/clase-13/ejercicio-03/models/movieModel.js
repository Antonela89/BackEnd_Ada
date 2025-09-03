const fs = require('fs');
const path = require('path');

const rutaJson = path.join(__dirname, '../data/movies.json');

const MovieModel = {
    buscarPorTitulo: (titulo) => {
        const contenido = fs.readFileSync(rutaJson);

        const listaPeliculas = JSON.parse(contenido);

        return listaPeliculas.find(pelicula => pelicula.titulo === titulo) || null;
    }
}

module.exports = {
    MovieModel
}
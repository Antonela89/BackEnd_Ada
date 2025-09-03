const {MovieModel} = require('../models/movieModel');
const {MovieView} = require('../views/movieView');

const MovieController = {
    handleRequest: (titulo) => {
        const pelicula = MovieModel.buscarPorTitulo(titulo);

        return MovieView.handleResponse(pelicula);
    }
}

module.exports = {
    MovieController
}
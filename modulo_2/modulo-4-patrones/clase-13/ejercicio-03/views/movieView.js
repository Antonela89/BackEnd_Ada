const MovieView = {
    handleResponse: (pelicula) => {
        return !pelicula 
        ? JSON.stringify({status: 'error', message: 'pelicula no encontrada'})
        : JSON.stringify({status: 'success', data: pelicula})
    }
}

module.exports = {
    MovieView
}
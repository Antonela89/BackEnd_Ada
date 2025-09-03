const BookView = {
    formatResponse: (book) => {
        if (!book) {
            return JSON.stringify({
                status: "error",
                message: "Libro no encontrado"
            })
        }

        return JSON.stringify({
            status: "success",
            data: book
        })
    }
}

module.exports = BookView
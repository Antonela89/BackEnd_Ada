const BookModel = require('../models/bookModel.js');
const BookView = require('../views/bookView.js');

const BookController = {
    handleRequest: (id) => {
        const book = BookModel.getBookByID(id);

        return BookView.formatResponse(book);
    }
}

module.exports = BookController;
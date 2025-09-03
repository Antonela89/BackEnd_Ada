// importacion de modulos
const fs = require('fs');
const path = require('path');

const booksPath = path.join(__dirname, 'books.json');

const BookModel = {
    getBookByID: (id) => {
        const booksData = fs.readFileSync(booksPath);

        const books = JSON.parse(booksData);

        return books.find( book => book.id === id) || null;
    }
}

module.exports = BookModel;
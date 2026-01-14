// Importación de modulos para trabajar con archivos

import fs from 'fs';
import path from 'path';

// Ruta de base de datos
const filePath = path.join(__dirname, '../data/book.json');

const BookModel = () => {
    const readBooks = () => {
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data)
    }

    const writeBooks = (books) => {
        fs.writeFileSync(filePath, JSON.stringify(books, null, 2));
    }
}

export default BookModel;
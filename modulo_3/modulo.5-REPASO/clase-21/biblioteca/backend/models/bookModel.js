// constación de modulos para trabajar con archivos

const fs = require('fs');
const path = require('path');

// Ruta de base de datos
const filePath = path.join(__dirname, '../data/book.json');

const readBooks = () => {
	const data = fs.readFileSync(filePath, 'utf-8');
	return JSON.parse(data);
};

const writeBooks = (books) => {
	fs.writeFileSync(filePath, JSON.stringify(books, null, 2));
};

module.exports = { readBooks, writeBooks };

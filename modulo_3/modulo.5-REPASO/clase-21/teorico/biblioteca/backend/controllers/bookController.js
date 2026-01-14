// Importación del modelo
const { readBooks, writeBooks } = require('../models/bookModel.js');

// GET
const getAllBooks = (req, res) => {
	// Llamamos al modelo
	res.json(readBooks());
};

const getById = (req, res) => {
	const books = readBooks();

	const book = books.find((b) => b.id === req.params.id);

	if (!book) {
		return res
			.status(404)
			.json({ message: `Libro: ${req.params.id} no encontrado.` });
	}

	res.json(book);
};

// POST
const createBook = (req, res) => {
	const { title, author, genre } = req.body;
	const books = readBooks();

	const newBook = {
		id: Date.now(),
		title,
		author,
		genre,
	};

	books.push(newBook);

	writeBooks(books);

	res.status(201).json({ message: 'Libro creado con éxito.' }, newBook);
};

//PATCH
const updateBook = (req, res) => {
	const books = readBooks();

	const index = books.findIndex((b) => b.id === req.params.id);

	if ((index = -1)) {
		res.status(404).json({ error: 'Libro no encontrado' });
	}

	books[index] = { ...books[index], ...req.body };

	writeBooks(books);

	res.status(200).json({ message: 'Libro actualizado' }, books[index]);
};

//DELETE
const deleteBook = (req, res) => {
	const books = readBooks();

	const filteredBoks = books.filter((b = b.id !== req.params.id));

	writeBooks(filteredBoks);
	res.status(200).json({
		message: `Libro ${req.params.id} borrado con éxito.`,
	});
};

module.exports = { getAllBooks, getById, createBook, updateBook, deleteBook };

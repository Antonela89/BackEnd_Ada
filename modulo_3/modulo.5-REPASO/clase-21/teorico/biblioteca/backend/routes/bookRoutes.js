const express = require('express');
const {
	getAllBooks,
	getById,
	createBook,
	updateBook,
	deleteBook,
} = require('../controllers/bookController.js');

const router = express.Router();

router.get('/', getAllBooks);
router.get('/:id', getById);
router.post('/', createBook);
router.patch('/:id', updateBook);
router.delete('/:id', deleteBook);

module.exports = router;

const API_URL = 'api/books';

// Estado de la aplicación
let isEditing = false;
let allBooks = []; // Almacén local para búsquedas y filtrado

// Elementos del DOM
const $idInput = document.getElementById('bookId');
const $titleInput = document.getElementById('title');
const $authorInput = document.getElementById('author');
const $genreInput = document.getElementById('genre');
const $btnSave = document.getElementById('btnSave');
const $bookList = document.getElementById('bookList');
const $bookForm = document.getElementById('bookForm');

/**
 * READ (GET)
 * Obtiene los libros del servidor y los renderiza
 */
async function renderBooks() {
	clearForm();
	try {
		const res = await fetch(API_URL);

		if (!res.ok) throw new Error('Error al obtener los libros');

		allBooks = await res.json();

		$bookList.innerHTML = '';

		if (allBooks.length === 0) {
			$bookList.innerHTML = `<tr><td colspan="4">La biblioteca está vacía</td></tr>`;
		}

		allBooks.forEach((book) => {
			const tr = document.createElement('tr');
			tr.innerHTML = `
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.genre || 'N/A'}</td>
                <td class="actions">
                    <button class="btn-edit" data-id="${
						book.id
					}">Editar</button>
                    <button class="btn-delete" data-id="${
						book.id
					}">Borrar</button>
                </td>
            `;
			$bookList.appendChild(tr);
		});
	} catch (error) {
		console.error('Error:', error);
		$bookList.innerHTML = `<tr><td colspan="4">Error al cargar datos de la API</td></tr>`;
	}
}

/**
 * CREATE (POST) & UPDATE (PATCH)
 */
async function saveBook() {
	const title = $titleInput.value.trim();
	const author = $authorInput.value.trim();
	const genre = $genreInput.value.trim();

	if (title === '' || author === '' || genre === '') {
		alert('Por favor, completa todos los campos');
		return;
	}

	const bookData = { title, author, genre };

	try {
		if (isEditing) {
			// PATCH: Actualización parcial
			const id = $idInput.value;
			const res = await fetch(`${API_URL}/${id}`, {
				method: 'PATCH',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(bookData),
			});

			if (!res.ok) throw new Error('Error al actualizar');

			isEditing = false;
			$btnSave.textContent = 'Agregar Libro';
			$btnSave.style.backgroundColor = '#3498db';
		} else {
			// POST: Crear nuevo
			const res = await fetch(API_URL, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(bookData),
			});

			if (!res.ok) throw new Error('Error al guardar');
		}

		clearForm();
		renderBooks(); // Recargar la lista desde el servidor
	} catch (error) {
		alert(error.message);
	}
}

/**
 * DELETE (DELETE)
 */
async function deleteBook(id) {
	if (confirm('¿Estás seguro de que deseas eliminar este libro?')) {
		try {
			const res = await fetch(`${API_URL}/${id}`, {
				method: 'DELETE',
			});

			if (!res.ok) throw new Error('No se pudo eliminar el libro');

			renderBooks();
		} catch (error) {
			alert(error.message);
		}
	}
}

/**
 * Prepara el formulario para editar (llena los campos)
 */
function prepareEdit(id) {
	const book = allBooks.find((b) => b.id == id);
	if (!book) return;

	$titleInput.value = book.title;
	$authorInput.value = book.author;
	$genreInput.value = book.genre || '';
	$idInput.value = book.id;

	isEditing = true;
	$btnSave.textContent = 'Actualizar Cambios';
	$btnSave.style.backgroundColor = '#27ae60';
	window.scrollTo(0, 0);
}

// Limpiar formulario
function clearForm() {
	$titleInput.value = '';
	$authorInput.value = '';
	$genreInput.value = '';
	$idInput.value = '';
}

// Carga inicial
renderBooks();

//listener
$bookForm.addEventListener('submit', (e) => {
	e.preventDefault();
	saveBook();
	clearForm();
});

// Escuchar clics en toda la lista de libros
$bookList.addEventListener('click', (e) => {
	// Obtener el ID del atributo data-id
	const id = e.target.getAttribute('data-id');

	// Si hizo clic en el botón Editar
	if (e.target.classList.contains('btn-edit')) {
		prepareEdit(id);
	}

	// Si hizo clic en el botón Borrar
	if (e.target.classList.contains('btn-delete')) {
		deleteBook(id);
	}
});

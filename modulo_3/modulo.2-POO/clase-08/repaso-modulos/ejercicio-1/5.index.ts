// =============================================================================
// ARCHIVO PRINCIPAL (PUNTO DE ENTRADA)
// Aquí es donde la aplicación se ejecuta. Se importan las clases, se crean
// objetos (instancias) y se interactúa con ellos.
// =============================================================================

// --- 1. IMPORTACIONES ---
// Se importan todas las clases y tipos necesarios para operar.
import { BookFormat } from './1.types';
import { LibraryItem } from './2.LibraryItem';
import { Audiobook } from './3.Audiobook';
import { Ebook } from './3.Ebook';
import { Book } from './3.Book';

// --- 2. PREPARACIÓN ---
// Se crea un array llamado 'catalog'.
// Es de tipo 'LibraryItem[]', lo que significa que puede contener CUALQUIER objeto
// que sea un 'LibraryItem' o que herede de él (Book, Ebook, Audiobook).
const catalog: LibraryItem[] = [];

// --- 3. CREACIÓN DE INSTANCIAS ---
// Se crean objetos concretos de cada tipo de ítem.
const book1 = new Book('El Señor de los Anillos', 'J.R.R. Tolkien', 1200);
const ebook1 = new Ebook(
	'TypeScript Deep Dive',
	'Basarat Ali Syed',
	BookFormat.PDF // Se usa el enum para asegurar un valor correcto.
);
const audiobook1 = new Audiobook('Dune', 'Frank Herbert', 1260);

// Se añaden los objetos creados al catálogo.
catalog.push(book1, ebook1, audiobook1);

// --- 4. EJECUCIÓN Y LÓGICA ---
console.log(`\n--- Catálogo de la Biblioteca ---\n`);

// Se itera sobre cada 'item' en el array 'catalog'.
for (const item of catalog) {
	// POLIMORFISMO: Aunque 'item' es de tipo 'LibraryItem', al llamar a
	// 'getDetails()', TypeScript sabe qué versión específica del método ejecutar
	// (la del Book, Ebook o Audiobook) dependiendo del objeto real.
	console.log(item.getDetails());
	console.log(`¿Está disponible? ${item.isAvailable}`);

	// Simulación un préstamo
	item.checkout();
	console.log(`¿Está disponible ahora? ${item.isAvailable}`);
	console.log(`\n--------------------\n`);
}

// --- 5. INTERACCIONES ADICIONALES ---
// Se simula la devolución de un libro específico.
book1.returnItem();
console.log(
	// Se comprueba el estado final del libro devuelto usando un operador ternario.
	`"${book1.title}" esta disponible: ${book1.isAvailable ? 'Si' : 'No'}`
);

import { BookFormat } from './1.types';
import { LibraryItem } from './2.LibraryItem';
import { Audiobook } from './3.Audiobook';
import { Ebook } from './3.Ebook';
import { Book } from './3.Book';

const catalog: LibraryItem[] = [];

const book1 = new Book('El Señor de los Anillos', 'J.R.R. Tolkien', 1200);
const ebook1 = new Ebook(
	'TypeScript Deep Dive',
	'Basarat Ali Syed',
	BookFormat.PDF
);
const audiobook1 = new Audiobook('Dune', 'Frank Herbert', 1260);

catalog.push(book1, ebook1, audiobook1);

console.log(`\n--- Catálogo de la Biblioteca ---\n`);

for (const item of catalog) {
	console.log(item.getDetails());
	console.log(`¿Está disponible? ${item.isAvailable}`);

	// Simular un préstamo
	item.checkout();
	console.log(`¿Está disponible ahora? ${item.isAvailable}`);
	console.log(`\n--------------------\n`);
}

book1.returnItem();
console.log(`"${book1.title}" esta disponible: ${book1.isAvailable ? 'Si' : 'No'}`);
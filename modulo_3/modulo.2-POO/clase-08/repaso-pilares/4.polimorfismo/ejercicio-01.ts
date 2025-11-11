// ### Ejercicio 1: Herencia y Polimorfismo con Clases Abstractas y Métodos Sobrecargados
// Crea una clase abstracta `InstrumentoMusical` con un método `tocar`. Crea dos clases derivadas `Guitarra` y `Piano`, que sobrescriban este método para tocar el instrumento de manera diferente. Además, agrega una sobrecarga del método `tocar` en la clase base para permitir tocar con o sin acompañamiento.

abstract class InstrumentoMusical {
	abstract tocar(): void;
	abstract tocar(acompaniamiento?: boolean): void;
}

class Guitarra extends InstrumentoMusical {
	tocar(acompaniamiento?: boolean): void {
		if (acompaniamiento) {
			console.log('Tocando la guitarra con acompañamiento.');
		} else {
			console.log('Tocando la guitarra sola.');
		}
	}
}

class Piano extends InstrumentoMusical {
    tocar(acompaniamiento?: boolean): void {
        if (acompaniamiento) {
            console.log('Tocando el piano con acompañamiento.');
        } else {
            console.log('Tocando el piano solo.');
        }
    }
}

// Ejemplo de uso
const miGuitarra = new Guitarra();
miGuitarra.tocar(); // Salida: Tocando la guitarra sola.
miGuitarra.tocar(true); // Salida: Tocando la guitarra con acompañamiento. 
const miPiano = new Piano();
miPiano.tocar(); // Salida: Tocando el piano solo.
miPiano.tocar(true); // Salida: Tocando el piano con acompañamiento.

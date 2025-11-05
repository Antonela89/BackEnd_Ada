// #### Ejercicio 2: Polimorfismo con Sobreescritura de Métodos (Tiempo de Ejecución)
// Crea una jerarquía de clases de `Vehiculo` con dos clases derivadas: `Coche` y `Moto`. Cada clase debe sobrescribir el método `arrancar` de la clase base para proporcionar una implementación específica de cómo arrancar.

/**
 * Clase base que representa un vehículo genérico.
 * Proporciona un método base `arrancar`.
 */
class Vehiculo {
    arrancar(): void {
        console.log(`El vehículo genérico arrancó.`);
    }
}

/**
 * Clase derivada que extiende Vehiculo.
 * Sobrescribe el método `arrancar` con una implementación específica para un coche.
 */
class Coche extends Vehiculo {
    arrancar(): void {
        console.log(`El coche arrancó con el sonido del motor: ¡Vrum vrum!`);
    }
}

/**
 * Clase derivada que extiende Vehiculo.
 * Sobrescribe el método `arrancar` con una implementación específica para una moto.
 */
class Moto extends Vehiculo {
    arrancar(): void {
        console.log(`La moto arrancó y el escape resonó: ¡Brap brap!`);
    }
}

// --- Demostración del Polimorfismo ---

// 1. Creación de instancias
const miCoche = new Coche();
const miMoto = new Moto();
const vehiculoGenerico = new Vehiculo();

// 2. Función polimórfica
// Esta función acepta cualquier objeto que sea del tipo `Vehiculo` o una de sus subclases.
// No necesita saber si es un Coche o una Moto, solo que puede "arrancar".
function probarArranque(vehiculo: Vehiculo) {
    console.log("--- Probando el arranque de un vehículo ---");
    // La magia del polimorfismo ocurre aquí:
    // TypeScript determina en tiempo de ejecución qué método `arrancar` específico debe llamar.
    vehiculo.arrancar();
}

// Llamamos a la misma función con diferentes tipos de objetos.
probarArranque(miCoche);          // Ejecutará el método arrancar() de la clase Coche.
probarArranque(miMoto);           // Ejecutará el método arrancar() de la clase Moto.
probarArranque(vehiculoGenerico); // Ejecutará el método arrancar() de la clase base Vehiculo.


// 3. Demostración con un arreglo de vehículos
// Podemos tratar diferentes tipos de vehículos de manera uniforme en una colección.
console.log("\n--- Arrancando todos los vehículos de la cochera ---");
const cochera: Vehiculo[] = [new Coche(), new Moto(), new Coche()];

cochera.forEach((vehiculo, index) => {
    console.log(`Vehículo #${index + 1}:`);
    vehiculo.arrancar(); // De nuevo, se llama a la versión correcta del método para cada objeto.
});
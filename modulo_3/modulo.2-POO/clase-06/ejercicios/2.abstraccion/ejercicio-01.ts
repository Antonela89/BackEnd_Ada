// ### Ejercicio 1: Abstracción Básica - Ejemplo del Mundo Real
// **Consigna:** Modela un sistema de cafetería. Crea una interfaz `Bebida` que defina un método `preparar()`. Implementa esta interfaz en dos clases: `Cafe` y `Te`. Usa abstracción para que ambas bebidas oculten su lógica de preparación interna pero expongan un comportamiento común.

// Sistema de Cafeteria

// 1. La Interfaz (El "Contrato")
// Define qué DEBEN hacer las bebidas, pero no CÓMO lo hacen.
interface Bebida {
    preparar(): void;
}

// Cafe y Te son clases concretas, por ende no se puede usar la palabra abstract en el metodo

// 2. Implementación Concreta para Cafe
// Esta clase CUMPLE el contrato de Bebida.
class Cafe implements Bebida {
    // logica para preparar cafe
    preparar(): void {
        console.log("Moliendo granos de café...");
        console.log("Pasando agua caliente por el filtro.");
        console.log("¡Café listo para servir!");
    }
}


// 3. Implementación Concreta para Te
// Esta clase también CUMPLE el contrato de Bebida.
class Te implements Bebida {
    // logica para preparar te
    preparar(): void {
        console.log("Poniendo a hervir el agua...");
        console.log("Colocando el saquito de té en la taza.");
        console.log("Vertiendo el agua caliente.");
        console.log("¡Té listo para disfrutar!");
    }
}

// ¿Por qué esto es Abstracción?

// La abstracción aquí funciona porque, como usuario de las clases Cafe y Te, no necesitas saber los detalles de cómo se prepara cada bebida. Solo necesitas saber que ambos objetos tienen un método preparar().

//     La interfaz Bebida es la abstracción. Define un concepto general ("una bebida se puede preparar") sin entrar en detalles.

//     Las clases Cafe y Te son las implementaciones concretas. Ocultan la complejidad de sus procesos internos detrás de ese simple método preparar().

const miCafe = new Cafe();
const miTe = new Te();

console.log("--- Preparando un café ---");
miCafe.preparar();

console.log("\n--- Preparando un té ---");
miTe.preparar();
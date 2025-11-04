// ### Ejercicio 5: Decidir Entre Clases Abstractas e Interfaces
// **Consigna:** Diseña un sistema de transporte público. Define:
// *   Una interfaz `VehiculoElectrico` con el método `cargarBateria()`.
// *   Una clase abstracta `Transporte` con el método abstracto `mover()`.
// Implementa ambas estructuras en una clase concreta `AutobusElectrico`.

// Interfaz para vehiculos electricos
interface VehiculoElectrico {
    cargarBateria(): void;
}

// Clase abstracta para todos los vehiculos
abstract class Transporte {
    abstract mover(): void;
}

// Clase concreta que extiende a clase abstracta e implementa la interfaz
class AutobusElectrico extends Transporte implements VehiculoElectrico {
    mover(): void {
        console.log("El autobus electrico se mueve silenciosamete.");
    }

    cargarBateria(): void {
        console.log("Cargando la bateria del autobus...");
    }
}

const autbus1 = new AutobusElectrico();
autbus1.cargarBateria();     
autbus1.mover();           

// ¿Por qué esta es la solución ideal para la consigna?

//     Clase Abstracta Transporte (Identidad Central - "Es un..."):

//         Define la esencia de lo que es un medio de transporte: su característica fundamental es que se puede mover.

//         Usar una clase abstracta aquí es ideal porque Transporte es una categoría de objeto o una "plantilla base". Un AutobusElectrico es un Transporte. Esta relación de herencia ("is-a") es perfecta para una clase abstracta.

//     Interfaz VehiculoElectrico (Capacidad Adicional - "Puede hacer..."):

//         Define una capacidad o un comportamiento específico: cargarBateria(). No todos los transportes tienen esta capacidad.

//         Usar una interfaz aquí es la mejor opción porque representa un "contrato" o una "característica" que diferentes tipos de objetos (no solo transportes) podrían tener. Un AutobusElectrico puede (implements) cumplir con el contrato de ser un VehiculoElectrico.

//     Clase Concreta AutobusElectrico (La Fusión):

//         extends Transporte: Hereda su identidad y características base de Transporte.

//         implements VehiculoElectrico: Adopta la capacidad adicional definida por la interfaz.

//         Proporciona las implementaciones concretas para ambos métodos abstractos/de interfaz (mover y cargarBateria), cumpliendo así con todas sus obligaciones.
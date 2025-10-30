// Ejemplo práctico combinando clases abstractas e interfaces
// Imaginemos un sistema de gestion de transporte donde queremos definir vehiculos que se mueven de diferentes maneras

// Usaremmos una clase abstracta Vehiculo para definir el comportamiento general de todos los vehiculos.
// Crearemos una interfaz Electrico para los vehiculos que pueden cargarse electricamente

// Interfaz para vehiculos electricos
interface Electrico {
    cargarBateria(): void;
}

// Clase abstracta para todos los vehiculos
abstract class Vehiculo {
    // infiere que tiene una propiedad protegida tipo: string
    constructor(protected tipo: string) {}

    abstract moverse(): void;

    describir(): void {
        console.log(`Este es un vehiculo tipo ${this.tipo}`);
    }
}

// Clase concreta que extiende a clase abstracta e implementa la interfaz
class AutoElectrico extends Vehiculo implements Electrico {
    constructor() {
        super("Auto Electrico");
    }

    moverse(): void {
        console.log("El auto electrico se mueve silenciosamete.");
    }

    cargarBateria(): void {
        console.log("Cargando la bateria del auto...");
    }
}

const tesla = new AutoElectrico();
tesla.describir();          // Output: Este es un vehiculo de tipo: Auto Electrico
tesla.moverse();            // Output: El auto electrico se mueve silenciosamente
tesla.cargarBateria();      // Output: Cargando la bateria del auto...
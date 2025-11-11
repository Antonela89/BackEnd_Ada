// ### Ejercicio 1: Comparación Completa - Sistema de Transporte Público
// Diseña un sistema que combine interfaces y clases abstractas para gestionar un transporte público.
// *   Define dos interfaces:
//     *   `Electrico` con el método `cargarBateria()`.
//     *   `Combustible` con el método `llenarTanque()`.
// *   Crea una clase abstracta `Transporte` con un método abstracto `mover()`.
// *   Implementa dos clases:
//     *   `AutobusElectrico`: Extiende de `Transporte` e implementa `Electrico`.
//     *   `Taxi`: Extiende de `Transporte` e implementa `Combustible`.

// interfaces
interface Electrico {
    cargarBateria(): void;
}

interface Combustible {
    llenarTanque(): void;
}

//clase base
abstract class Transporte {
    constructor(protected psajeros: number[]) {}

    // metodo abstracto que heredan las clases hijas
    abstract mover(): void;

    // metodo para describir transporte
    describir(): void {
        console.log(`Este transporte lleva ${this.pasajeros} pasajeros.`);
    }
}

// clases derivadas
// clase autbus electrico
class AutobusElectrico extends Transporte implements Electrico {
    mover(): void {
        console.log(`El autobus eléctrico se mueve por la ciudad.`);
    }

    cargarBateria(): void {
        console.log(`Cargando la bateria del autobus.`);
    }
}

// clase Taxi
class Taxi extends Transporte implements Combustible {
    mover(): void {
        console.log(`El taxi se mueve por la ciudad se mueve por la ciudad.`);
    }

    llenarTanque(): void {
        console.log(`LLenando el tanque del taxi...`);
    }
}

// hacemos pruebas de instancias
const autobus = new AutobusElectrico(30);
autobus.describir();
autobus.cargarBateria();
autobus.mover();

console.log(`-------------------------`);

const taxi = new Taxi(3);
taxi.describir();
taxi.llenarTanque();
taxi.mover();
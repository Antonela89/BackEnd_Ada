// #### Ejercicio 4: Abstracción con Clases Abstractas
// Implementa una clase abstracta `DispositivoElectronico` con métodos abstractos `encender` y `apagar`. Crea dos clases concretas `Televisor` y `Radio`, que sobrescriban estos métodos.

abstract class DispositivoElectronico {
    abstract encender(): void;
    abstract apagar(): void;
}

class Televisor extends DispositivoElectronico {
    encender(): void {
        console.log(`El Televisor se ha encendido con el control remoto.`);
    }

    apagar(): void {
        console.log(`El Televisor se ha apagado.`);
    }
}

class Radio extends DispositivoElectronico {
        encender(): void {
        console.log(`La radio se ha encendido.`);
    }

    apagar(): void {
        console.log(`La radio se ha apagado.`);
    }
}

// Pruebas
const televisor = new Televisor();
televisor.encender(); // Salida: El televisor se ha encendido.
televisor.apagar();   // Salida: El televisor se ha apagado.

const radio = new Radio();
radio.encender(); // Salida: La radio se ha encendido.
radio.apagar();   // Salida: La radio se ha apagado.
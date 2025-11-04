// ### Ejercicio 3: Herencia Múltiple Indirecta (vía Interfaces)
// **Consigna:** Crea dos interfaces: `Volador` con el método `volar()` y `Transportable` con el método `transportar()`. Luego crea una clase `Avion` que implemente ambas interfaces y sobrescriba los métodos.

interface Volador {
    // se declara el metodo pero no la implentacion
    volar: () => void;
}

interface Transportable {
    // se declara el metodo pero no la implentacion
    transportar: () => void;
}

// con la palabra reservada implements, la clase Avion toma "contrato" con las instancias Volador y Trasportable. Lo que obliga a la clase a realizar una implementacion concreta de los metodos de cada instancia
class Avion implements Volador, Transportable {
    // no es necesario implementar el constructor porque no hay propiedades

    volar(): void {
        console.log(`El avión está volando.`);
    };

    transportar(): void {
        console.log(`El avión esta transportando pasajeros.`);
    }
}

const avion1 = new Avion;
avion1.volar();
avion1.transportar();
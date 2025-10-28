// ### Ejercicio 8: Sistema de Gestión de Vehículos

// 1.  Crea un sistema de gestión de **Vehículos** que incluya las siguientes clases:
//     -   **Vehiculo:** Clase base con propiedades como marca, modelo y un método para mostrar información del vehículo.
//     -   **Coche:** Clase que extiende `Vehiculo` e incluye una propiedad para `tipoCombustible` y un método para mostrar la información completa del coche.
//     -   **Motocicleta:** Clase que extiende `Vehiculo` e incluye una propiedad para `cilindrada` y un método para mostrar la información completa de la motocicleta.

class Vehiculo {
    protected marca: string;
    protected modelo: string;

    constructor( marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
    }

    public mostrarInfoBasica(): string {
        return `Este vehiculo es de ${this.marca} y su modelo es: ${this.modelo}`;
    }
}

class Coche extends Vehiculo {
    public tipoCombustible: string;

    constructor(marca: string, modelo: string, tipoCombustible: string) {
        super(marca,modelo);
        this.tipoCombustible = tipoCombustible;
    };

    public mostrarInfo(): void {
        console.log(`${this.mostrarInfoBasica()} y el combustible que usa es: ${this.tipoCombustible}`);
    }
}

class Motocicleta extends Vehiculo {
    cilindrada: number;

    constructor(marca: string, modelo: string, cilindrada: number) {
        super(marca, modelo);
        this.cilindrada = cilindrada;
    }

    public mostrarInfo(): void {
        console.log(`${this.mostrarInfoBasica()} y su cilindrada es: ${this.cilindrada}`);
        
    }
}

const miCoche = new Coche('Toyota', 'Corolla', 'Gasolina');
miCoche.mostrarInfo();

const miMoto = new Motocicleta('Honda', 'CBR', 500);
miMoto.mostrarInfo();

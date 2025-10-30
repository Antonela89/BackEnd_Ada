// ### Ejercicio 2: Clases Abstractas - Sistema de Vehículos
// **Consigna:** Crea una clase abstracta `Vehiculo` con una propiedad `velocidad` y un método abstracto `mover()`. Luego, implementa dos clases concretas: `Auto` y `Bicicleta`. Usa los modificadores de acceso para controlar la visibilidad de las propiedades.

abstract class Vehiculo {
	protected velocidad: number;

	constructor(velocidad: number) {
		this.velocidad = velocidad;
	}

	abstract mover(): void;
}

class Auto extends Vehiculo {
	constructor(velocidad: number) {
		super(velocidad);
	}

    mover(): void {
        console.log(`Este auto se mueve a una velocidad de ${this.velocidad} km/h`);
        
    }
}

class Bicicleta extends Vehiculo {
	constructor(velocidad: number) {
		super(velocidad);
	}

        mover(): void {
        console.log(`Esta bicicleta se mueve a una velocidad de ${this.velocidad} km/h`);
    }
}

const auto1 = new Auto(100);
auto1.mover();

const bicicleta1 = new Bicicleta(20);
bicicleta1.mover();

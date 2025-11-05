// #### 5. Ejercicio de Vacaciones
// Desarrolla una clase `Vacacion` que tenga propiedades privadas para `destino`, `duracion` (en días) y `presupuesto`. Implementa getters y setters, asegurándote de que `duracion` no sea menor que 1 y `presupuesto` sea mayor que 0.

class Vacacion {
    private destino: string;
    private _duracion!: number;
    private _presupuesto!: number;

    constructor(destino: string, duracion: number, presupuesto: number) {
        this.destino = destino;
        this.duracion = duracion;
        this.presupuesto = presupuesto;
    }

    public get duracion(): number {
        return this._duracion;
    }

    public get presupuesto(): number {
        return this._presupuesto;
    }

    public set duracion(value: number) {
        if (value >= 1) {
            this._duracion = value;
        } else {
            console.log(`La duracion (${value}) no puede ser menor a 1 día.`);
        }
    }

    public set presupuesto(value: number) {
        if ( value > 0) {
            this._presupuesto = value; 
        } else {
            console.log(`El presupuesto (${value}) no puede ser menor a $0.`);
        }
    }
}

// --- PRUEBAS ---

// 1. Caso de éxito: todos los valores son válidos.
console.log("--- Creando una vacación válida ---");
const vacaciones1 = new Vacacion('Playa del Carmen', 7, 50000);
console.log(`Destino: ${'Playa del Carmen'}`);
console.log(`Duración: ${vacaciones1.duracion} días`);
console.log(`Presupuesto: $${vacaciones1.presupuesto}`);

console.log("\n--- Intentando crear una vacación con datos inválidos ---");

// 2. Caso de error: duración inválida.
const vacacionesInvalidas1 = new Vacacion('Montaña', 0, 30000);
// Salida esperada: Error: La duración (0) no puede ser menor a 1 día.
console.log(`Duración de vacación inválida: ${vacacionesInvalidas1.duracion}`); // undefined

// 3. Caso de error: presupuesto inválido.
const vacacionesInvalidas2 = new Vacacion('Ciudad', 5, 0);
// Salida esperada: Error: El presupuesto (0) debe ser mayor que $0.
console.log(`Presupuesto de vacación inválida: ${vacacionesInvalidas2.presupuesto}`); // undefined

console.log("\n--- Probando los setters después de la creación ---");

// 4. Modificar el presupuesto a un valor inválido.
vacaciones1.presupuesto = -100;
// Salida esperada: Error: El presupuesto (-100) debe ser mayor que $0.
console.log(`Presupuesto final: $${vacaciones1.presupuesto}`); // Sigue siendo 50000

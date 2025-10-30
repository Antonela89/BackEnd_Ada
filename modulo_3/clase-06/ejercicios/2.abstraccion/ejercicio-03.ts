// ### Ejercicio 3: Interfaces - Sistema de Gestión de Usuarios
// **Consigna:** Crea una interfaz `Usuario` que tenga las propiedades:
// *   `nombre` (obligatoria).
// *   `edad` (opcional).
// *   `readonly id` (solo lectura).
// Implementa esta interfaz en una clase `UsuarioConcreto`. Luego, intenta modificar la propiedad `id` para mostrar cómo se aplican las restricciones de solo lectura.

interface Usuario {
	readonly id: number;
	nombre: string;
	edad?: number | undefined;
}

class UsuarioConcreto implements Usuario {
	readonly id: number;
	nombre: string;
	edad?: number | undefined;

	constructor(id: number, nombre: string, edad?: number | undefined) {
		this.id = id;
		this.nombre = nombre;
		this.edad = edad;
	}
}

const usuarioConcreto1 = new UsuarioConcreto(2025, 'Carlos');
console.log(
	`Nombre: ${usuarioConcreto1.nombre}, Edad: ${usuarioConcreto1.edad}, ID: ${usuarioConcreto1.id}`
);

usuarioConcreto1.edad = 20;
console.log(
	`Nombre: ${usuarioConcreto1.nombre}, Edad: ${usuarioConcreto1.edad}, ID: ${usuarioConcreto1.id}`
);

// usuarioConcreto1.id = 2026;
// console.log(
// 	`Nombre: ${usuarioConcreto1.nombre}, Edad: ${usuarioConcreto1.edad}, ID: ${usuarioConcreto1.id}`
// );

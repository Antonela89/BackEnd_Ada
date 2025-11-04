// !. Alias de tipos primitivos
// alias para tipo basico o primitivos (como number, string y boolean)
type ID = number; // Alias para numeros (El ID va a resepresnetar un numero)
type Nombre = string; // Alias para cadenas ('Nombre' va a representar
type Activo = boolean; // Alias para booleanos ( 'Activo' representa un booleano)

// usos para alias
let usuarioID: ID = 123; // Variable de tipo ID (number)
let nombreUsuario: Nombre = "Lucia"; // Variablede tipo Nombre (String)
let cuentaActiva: Activo = true; // Variabl de tipo Activo (boolean)

console.log(
  `Usuario: ${nombreUsuario}, ID: ${usuarioID}, Activa: ${cuentaActiva}`
);
console.log("\n-----------------------\n");

// 2. Alias para objetos
type Direccion = {
  calle: string; // Propiedad calle va a ser de tipo string
  ciudad: string; // propiedad ciudad va a ser de tipo string
  codigoPostal: number; // propiedad codigoPostar solo será de tipo number
};

// uso del alias Direccion para crear un objeto con esas propiedades
let miDireccion: Direccion = {
    calle: "San Martin",
    ciudad: "Rosario",
    codigoPostal: 2000
}

console.log(`Vivo en: ${miDireccion.calle}, ${miDireccion.ciudad}, ${miDireccion.codigoPostal}`);
console.log("\n-----------------------\n");

// 3.Alias para uniones de tipos
type Resultado = 'exito' | 'error';
type IDUsuario = string | number;

// usamos el alias resultado y IDUsuario
let estadoOperacion: Resultado = "exito";
let idUsuario1: IDUsuario = 4567;
let idUsuario2: IDUsuario = "hola";

console.log(`Estado de la operacion: ${estadoOperacion}, Usuario 1 ID: ${idUsuario1}, Usuario 2 ID: ${idUsuario2}`);

console.log("\n----------------------\n");

// 4. Alias para funciones
type OperacionMatematica = (a:number, b:number) => number;

// Implementacion de funciones que siguen el formato OperacionMatematica
const sumar: OperacionMatematica = (a, b) => a + b; // Funcion que suma dos numeros
const restar: OperacionMatematica = (a, b) => a - b; // Funcion que resta dos numeros

console.log(`Suma: ${sumar(5, 3)}, Resta: ${restar(5, 3)}`);

console.log("\n----------------------\n");

// 5. Alias para arrays
type ListaDeNumeros = number[];
type ListaDeCadenas = string[];

let numeros: ListaDeNumeros = [1, 2, 4, 7, 15];
let cadenas: ListaDeCadenas = ["uno", "dos", "tres"];

console.log(`Numeros: ${numeros.join(", ")}`);
console.log(`Cadenas: ${cadenas.join(", ")}`);
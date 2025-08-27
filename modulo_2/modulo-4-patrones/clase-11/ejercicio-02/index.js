// ### Ejercicio 2: Menú Interactivo con readline-sync
// Crea un script de `Node.js` que muestre un menú de opciones usando `readline-sync`. El menú debe permitir al usuario elegir entre tres acciones: ver un mensaje de bienvenida, generar un hash de un texto, o salir.

const readlineSync = require('readline-sync');

const opciones = ['ver un mensaje de bienvenida', 'generar un hash de un texto', 'salir'];

const indiceSeleccionado = readlineSync.keyInSelect(opciones, 'Seleccione una opcion: ');

if (indiceSeleccionado === -1 ) {
    console.log(`No ha elegido ninguna opción`);
} else {
     console.log(`Has seleccionado: ${opciones[indiceSeleccionado]}`);
}
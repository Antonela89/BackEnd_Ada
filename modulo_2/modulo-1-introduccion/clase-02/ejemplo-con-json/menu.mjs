/* 🖥 PUNTO 9: Interfaz de Usuario por Consola

---------------------------------------------------------
menuPrincipal()
Muestra un menú interactivo con prompt(). 
---------------------------------------------------------*/

// Importa la función CREADORA desde la librería
import promptCreator from 'prompt-sync';

import {
  impresionTablaUsuario,
  impresionTablaLibro,
  solicitarTextoValido
} from "./funciones_auxiliares.mjs";

import {
  agregarLibro,
  buscarLibro,
  ordenarLibros,
  borrarLibro,
  biblioteca
} from "./gestion_libro.mjs";

function menuPrincipal() {

  const prompt = promptCreator();
  let salir = false;

  while (!salir) {
    const textoMenu =
      `📚✨ === SISTEMA DE BIBLIOTECA === ✨📚
  
      ✨ === MENU PRINCIPAL === ✨
        - Seleccione una opción -

        1️⃣   Agregar libro
        2️⃣   Buscar libro
        3️⃣   Ordenar libros
        4️⃣   Borrar libro
        0️⃣   Salir

        📥 Ingrese una opción: `;

     const opcion = parseInt(prompt(textoMenu));


    if (isNaN(opcion) || opcion < 0 || opcion > 14) {
      console.log("⚠️ Opción inválida. Ingrese un número entre 0 y 14.");
      prompt("⏎ Presione Enter para continuar...");
      continue;
    }

    switch (opcion) {
      case 1:
        // const id = parseInt(prompt("🔢 ID del libro: ")),
        const titulo = solicitarTextoValido("📖 Ingresá el título del libro: ");
        const autor = solicitarTextoValido("✍ Ingresá el autor del libro: ");
        const anio = parseInt(solicitarTextoValido("📅 Ingresá el año de publicación: "));
        const genero = solicitarTextoValido("🏷️ Ingresá el género del libro: ")

        const nuevoLibro = agregarLibro(titulo, autor, anio, genero);

        if (nuevoLibro) {
          console.log("\n ✅  Libro agregado exitosamente. Mostrando detalles:");
          impresionTablaLibro(nuevoLibro);
        } else {
          console.log("\n ❌  La operación fue cancelada, no se agregó ningún libro.");
        }

        break;

      case 2:
        const crit = prompt("🔍 Buscar por: ¿titulo, autor o genero? ");
        const val = prompt("🔎 Ingrese valor a buscar: ");
        buscarLibro(crit, val);
        break;

      case 3:
        const criterio = prompt("↕️  Ordenar por: titulo o año: ");
        const orden = ordenarLibros(criterio);
        impresionTablaLibro(orden);
        break;

      case 4:
        impresionTablaLibro(biblioteca);
        borrarLibro(parseInt(prompt("🗑️  ID del libro a borrar: ")));
        break;

      case 0:
        console.log("👋 Gracias por usar el sistema de biblioteca. ¡Te esperamos pronto!");
        return; // 🔚 Salir de la función y del programa
    }

    prompt("⏎ Presione Enter para volver al menú...");
  }
}

menuPrincipal();

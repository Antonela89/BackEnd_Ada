// ### Ejercicio 2: Aplicación de Tareas con Patrón MVC y Persistencia
// **Consigna:**
// Crea una aplicación de lista de tareas usando el patrón MVC. Las tareas deben guardarse en un archivo JSON y poder ser consultadas, añadidas y eliminadas desde la línea de comandos.

// **Pasos:**
// *   Usa `readline-sync` para interactuar con el usuario.
// *   Separa el código en Modelo, Vista y Controlador.
// *   Usa `fs` para persistir las tareas en un archivo JSON.

// Importamos el Controlador, que es el director de orquesta.
const TareasController = require('./controller/TareasController.js');

// Le decimos al Controlador que inicie la aplicación.
// A partir de aquí, el Controlador toma el control.
TareasController.iniciar();
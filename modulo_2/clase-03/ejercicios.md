Carrera Back End con NodeJs
Profesora: Sachetti Sofia

# Actividades Clase Numero 3

¡Bienvenidas chicas! 👩‍💻🚀

En esta serie de actividades, practicarán conceptos fundamentales sobre el manejo de archivos en Node.js y la manipulación de datos en formato JSON. Estos conceptos son esenciales para gestionar información de manera persistente y estructurada en nuestras aplicaciones, como en sistemas de gestión de estudiantes, proyectos, compras, entre otros.

A continuación, se presentan los conceptos clave que deben dominar para poder resolver cada ejercicio:

### 1. fs.existsSync(path)
La función `fs.existsSync(path)` se utiliza para comprobar si un archivo o directorio existe en la ubicación especificada por `path` (la ruta del archivo). Devuelve `true` si el archivo o directorio existe, y `false` si no existe. Esta función es útil para verificar si necesitamos crear un archivo o cargar uno existente.

*   **Ejemplo:**
    ```javascript
    if (!fs.existsSync('archivo.json')) {
      console.log('El archivo no existe');
    }
    ```

### 2. fs.writeFileSync(path, data, options)
La función `fs.writeFileSync(path, data, options)` permite escribir datos en un archivo de manera síncrona. Si el archivo no existe, se crea automáticamente. Si ya existe, el contenido se sobrescribe. Esta es una forma común de guardar información en un archivo.

*   **Parámetros:**
    *   `path`: La ruta del archivo donde se guardarán los datos.
    *   `data`: Los datos que se escribirán en el archivo.
    *   `options`: Opcionalmente, puedes especificar opciones como la codificación del archivo (por ejemplo, 'utf8').
*   **Ejemplo:**
    ```javascript
    const data = JSON.stringify({ nombre: 'Juan', edad: 30 }, null, 2);
    fs.writeFileSync('persona.json', data, 'utf8');
    ```

### 3. JSON.stringify(obj, replacer, space)
`JSON.stringify()` es un método que convierte un objeto de JavaScript en una cadena de texto en formato JSON. Es útil cuando necesitas guardar objetos en archivos, como en el caso de las actividades que usan archivos `.json`.

*   **Parámetros:**
    *   `obj`: El objeto de JavaScript que se va a convertir a JSON.
    *   `replacer`: Un parámetro opcional que permite filtrar o modificar los valores antes de la conversión.
    *   `space`: Este parámetro opcional agrega un formato de espaciado para que el JSON sea más legible (por ejemplo, usando `2` para agregar una indentación de 2 espacios).
*   **Ejemplo:**
    ```javascript
    const persona = { nombre: 'Juan', edad: 30 };
    const jsonString = JSON.stringify(persona, null, 2); // 'null' para no modificar los valores y '2' para formatear el JSON
    ```

### 4. Trabajando con archivos JSON
En los ejercicios, necesitarán trabajar con archivos `.json` para almacenar y leer datos de manera persistente. Cuando leemos un archivo JSON, usamos `fs.readFileSync()` para obtener su contenido, y luego lo convertimos a un objeto JavaScript usando `JSON.parse()`.

*   **Leer un archivo JSON:**
    ```javascript
    const contenido = fs.readFileSync('archivo.json', 'utf8');
    const datos = JSON.parse(contenido);
    ```
*   **Escribir un archivo JSON:**
    ```javascript
    const datos = [{ id: 1, nombre: 'Juan' }];
    fs.writeFileSync('archivo.json', JSON.stringify(datos, null, 2), 'utf8');
    ```

### 5. Objetos y Arrays en JavaScript
Las actividades incluyen el manejo de objetos y arrays. Un objeto es una colección de pares clave-valor, mientras que un array es una lista ordenada de elementos. Ambos tipos son fundamentales para manejar y organizar los datos en los ejercicios.

*   **Ejemplo de objeto:**
    ```javascript
    const persona = { nombre: 'Juan', edad: 30 };
    ```
*   **Ejemplo de array:**
    ```javascript
    const estudiantes = [{ nombre: 'Juan', edad: 30 }, { nombre: 'Ana', edad: 25 }];
    ```

### 6. Manejo de errores en la lectura y escritura de archivos
Es importante manejar adecuadamente los posibles errores al trabajar con archivos. Aunque en los ejercicios no se utilizarán excepciones complejas, siempre es bueno estar conscientes de que si el archivo no existe o si ocurre un error en la escritura, se debe manejar la situación de manera adecuada. En los ejemplos que verán, no se utilizarán bloques `try/catch`, pero es algo que aprenderán más adelante.

### 7. Formateo de datos en JSON
Cuando guardan información en formato JSON, a menudo querrán que el archivo sea más legible para los humanos. Para ello, pueden usar el parámetro `space` en `JSON.stringify()`, lo que agregará saltos de línea e indentación en el JSON guardado.

*   **Ejemplo:**
    ```javascript
    const persona = { nombre: 'Juan', edad: 30 };
    const jsonString = JSON.stringify(persona, null, 2); // Usamos 'null' para no modificar el objeto, y '2' para agregar indentación
    ```

### ¿Cómo resolver los ejercicios?
Cada actividad tiene un propósito específico para ayudarte a practicar estos conceptos. Te invito a:
1.  Leer la consigna cuidadosamente.
2.  Identificar qué funcionalidades necesitarás usar (como `fs.existsSync()`, `fs.writeFileSync()`, o `JSON.stringify()`).
3.  Implementar las funciones requeridas para interactuar con los archivos.
4.  Probar tu código y verificar que los resultados sean los esperados.

**Recuerda que la clave de estos ejercicios es practicar la lectura y escritura de archivos, así como la manipulación de datos con JSON.** Esto te permitirá desarrollar aplicaciones que gestionen información de manera eficiente y persistente.

---

## Ejercicios

### Actividad 1: Registro de libros favoritos
**Consigna:** ¡Hola! Hoy serás una bibliotecaria digital. Debes crear un programa que permita registrar libros favoritos en un archivo JSON. Implementa las siguientes funciones:
1.  **Agregar un libro:** Se debe agregar un libro a la lista de favoritos. Para esto, el libro tendrá solo un campo: su nombre.
2.  **Listar los libros:** Muestra todos los libros registrados.

**Pistas:**
*   Usa un archivo JSON para guardar los libros.
*   Si el archivo no existe, comienza con un arreglo vacío.

### Actividad 2: Seguimiento de series de televisión
**Consigna:** ¡Es hora de organizar tus series favoritas! Crea un programa que permita:
1.  **Registrar una serie:** Se debe registrar una serie con su nombre y la cantidad de temporadas.
2.  **Listar las series:** Muestra todas las series registradas.
3.  **Actualizar las temporadas de una serie:** Permite actualizar la cantidad de temporadas de una serie.

**Pistas:**
*   Usa un archivo JSON para almacenar la información de las series.
*   Si el archivo no existe, comienza con un arreglo vacío.
*   **¿Qué es fs.existsSync()?** El método `fs.existsSync()` es parte del módulo `fs` (file system) en Node.js. Este método se usa para comprobar si un archivo o directorio existe en el sistema de archivos de manera sincrónica, lo que significa que el código se ejecuta y espera a que la operación se complete antes de continuar con el siguiente paso.
*   Sintaxis: `fs.existsSync(path);`

### Actividad 3: Registro de tareas pendientes
**Consigna:** Crea un programa para gestionar tus tareas pendientes. El programa debe permitirte:
1.  **Agregar una tarea:** Registrar una tarea pendiente con su descripción.
2.  **Listar las tareas:** Mostrar todas las tareas registradas.
3.  **Eliminar una tarea:** Eliminar una tarea de la lista.

**Pistas:**
*   Usa un archivo JSON para guardar las tareas.
*   Si el archivo no existe, comienza con un arreglo vacío.
*   Eliminar una tarea se puede hacer por su ID.

### Actividad 4: Control de inventario
**Consigna:** Crea un programa para llevar el control de un inventario. El programa debe permitirte:
1.  **Agregar un producto:** Registrar un producto con su nombre y cantidad disponible.
2.  **Listar los productos:** Mostrar todos los productos registrados.
3.  **Actualizar la cantidad de un producto:** Modificar la cantidad de un producto en el inventario.

**Pistas:**
*   Usa un archivo JSON para guardar los productos.
*   Si el archivo no existe, comienza con un arreglo vacío.
*   Cada producto debe tener un ID único que se pueda utilizar para actualizar su cantidad.

### Actividad 5: Registro de contactos
**Consigna:** Crea un programa que permita registrar contactos con nombre, teléfono y correo electrónico. El programa debe permitirte:
1.  **Agregar un contacto:** Registrar un nuevo contacto.
2.  **Listar los contactos:** Mostrar todos los contactos registrados.
3.  **Eliminar un contacto:** Eliminar un contacto de la lista.

**Pistas:**
*   Usa un archivo JSON para guardar los contactos.
*   Si el archivo no existe, comienza con un arreglo vacío.

### Actividad 6: Gestión de un diario personal
**Consigna:** Crea un programa que te permita gestionar un diario personal. El programa debe permitirte:
1.  **Agregar una entrada al diario:** Registrar una nueva entrada con la fecha y el texto.
2.  **Listar las entradas:** Mostrar todas las entradas registradas.
3.  **Eliminar una entrada:** Eliminar una entrada específica por su ID.

**Pistas:**
*   Usa un archivo JSON para guardar las entradas del diario.
*   Cada entrada tendrá una fecha y un texto.
*   Si el archivo no existe, comienza con un arreglo vacío.

### Actividad 7: Control de tareas diarias
**Consigna:** Crea un programa para gestionar tus tareas diarias. El programa debe permitirte:
1.  **Agregar una tarea diaria:** Registrar una nueva tarea con su descripción y estado.
2.  **Listar las tareas diarias:** Mostrar todas las tareas con su estado.
3.  **Marcar una tarea como completada:** Cambiar el estado de una tarea de "pendiente" a "completada".

**Pistas:**
*   Usa un archivo JSON para guardar las tareas.
*   El estado de cada tarea puede ser "pendiente" o "completada".
*   Si el archivo no existe, comienza con un arreglo vacío.

### Actividad 8: Seguimiento de proyectos
**Consigna:** Crea un programa para gestionar proyectos. El programa debe permitirte:
1.  **Agregar un proyecto:** Registrar un proyecto con su nombre y estado (pendiente o en progreso).
2.  **Listar los proyectos:** Mostrar todos los proyectos registrados.
3.  **Actualizar el estado de un proyecto:** Cambiar el estado de un proyecto a "finalizado" o "en progreso".

**Pistas:**
*   Usa un archivo JSON para guardar los proyectos.
*   Si el archivo no existe, comienza con un arreglo vacío.
*   Cada proyecto debe tener un ID único.

### Actividad 9: Registro de eventos
**Consigna:** Crea un programa para registrar eventos. El programa debe permitirte:
1.  **Agregar un evento:** Registrar un evento con nombre, fecha y lugar.
2.  **Listar los eventos:** Mostrar todos los eventos registrados.
3.  **Eliminar un evento:** Eliminar un evento de la lista.

**Pistas:**
*   Usa un archivo JSON para guardar los eventos.
*   Si el archivo no existe, comienza con un arreglo vacío.
*   Cada evento debe tener un ID único.

### Actividad 10: Gestión de compras
**Consigna:** Crea un programa que registre las compras realizadas. El programa debe permitirte:
1.  **Agregar una compra:** Registrar una compra con su nombre y precio.
2.  **Listar las compras:** Mostrar todas las compras registradas.
3.  **Eliminar una compra:** Eliminar una compra de la lista.

**Pistas:**
*   Usa un archivo JSON para guardar las compras.
*   Si el archivo no existe, comienza con un arreglo vacío.
*   Cada compra debe tener un ID único.
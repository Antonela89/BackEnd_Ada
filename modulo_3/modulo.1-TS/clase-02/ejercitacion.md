Carrera Back End con NodeJs - 18
Profesora: Sachetti Sofia

# Actividades Clase Numero 2:
## TypeScript: Variables, Objetos y Funciones

¡Hola, chicas! 👋

En la clase de hoy continuaremos profundizando en los fundamentos de **TypeScript**, con especial énfasis en tres temas clave: **funciones, variables y objetos**.

Estos conceptos son esenciales para organizar y estructurar nuestro código de manera clara y eficiente.

**Durante esta clase:**
*   Aprenderemos a declarar funciones que operan con diferentes tipos de datos y objetos.
*   Reforzaremos cómo utilizar variables y constantes.
*   Trabajaremos con objetos, que nos permitirán manejar estructuras más complejas en nuestros programas.

Al finalizar la clase, deberán resolver una serie de ejercicios prácticos. Los ejercicios están diseñados para aplicar los conceptos que hemos visto hasta ahora.

### Requisitos
Antes de comenzar con los ejercicios, asegúrate de tener instaladas las herramientas necesarias para compilar y ejecutar TypeScript en tu entorno. Para esto puedes seguir el paso a paso detallado de la instalación que te brindé en el pdf de la clase.

### Importante
¡No olvides subir tus ejercicios a tu mochila en github! Son de vital importancia ya que corresponden a parte de la nota de la cursada.

---

## Actividades:

### **Ejercicio 1: Declarar y usar funciones con tipos**
**Consigna:** Crea una función llamada `multiplicarNumeros` que acepte dos parámetros, ambos de tipo `number`, y retorne el producto de ambos números. Luego, muestra el resultado en consola llamando a la función.

### **Ejercicio 2: Uso de funciones con parámetros opcionales**
**Consigna:** Define una función llamada `saludar` que acepte un parámetro `nombre` de tipo `string` y otro opcional `saludo` de tipo `string`. Si el parámetro `saludo` no es proporcionado, la función debe usar "Hola" por defecto. Retorna el saludo y muestra el resultado en la consola.

### **Ejercicio 3: Creación y manipulación de objetos**
**Consigna:** Crea un objeto llamado `deportista` que tenga las propiedades `nombre` (string), `deporte` (string), y `energia` (number). Luego, define una función `entrenar` que acepte el objeto `deportista` y un número de horas de entrenamiento, disminuyendo la energía del deportista en 5 por cada hora de entrenamiento. Al final, muestra el estado del deportista en la consola.

### **Ejercicio 4: Función que devuelve un objeto**
**Consigna:** Crea una función llamada `crearLibro` que acepte tres parámetros: `titulo` (string), `autor` (string) y `paginas` (number). La función debe devolver un objeto con esas propiedades. Luego, crea dos libros utilizando la función y muestra sus detalles en la consola.

### **Ejercicio 5: Función con parámetros rest**
**Consigna:** Crea una función llamada `sumarTodos` que acepte una cantidad indefinida de números y devuelva su suma. Luego, llama a la función con varios números y muestra el resultado en la consola.

### **Ejercicio 6: Tipos de parámetros y funciones que retornan objetos**
**Consigna:** Crea una función llamada `crearPersona` que acepte tres parámetros: `nombre` (string), `edad` (number), y `pais` (string). La función debe devolver un objeto que tenga esas propiedades. Luego, imprime el objeto retornado en la consola.

### **Ejercicio 7: Función que modifica propiedades de un objeto**
**Consigna:** Crea una función llamada `aumentarSalario` que acepte un objeto `empleado` con las propiedades `nombre` (string) y `salario` (number), y un número que represente el porcentaje de aumento. La función debe aumentar el salario del empleado y devolver el nuevo salario. Muestra en la consola el resultado.

### **Ejercicio 8: Funciones con diferentes tipos de retorno**
**Consigna:** Crea una función llamada `calcularArea` que acepte el tipo de figura ("circulo" o "rectangulo") y luego acepte los parámetros necesarios para cada tipo de figura (radio para el círculo y largo y ancho para el rectángulo). La función debe retornar el área de la figura. Usa tipos específicos para cada caso.

### **Ejercicio 9: Funciones con retorno void y manipulación de objetos**
**Consigna:** Crea un objeto llamado `coche` con las propiedades `marca`, `modelo`, y `encendido` (booleano). Define una función `encenderCoche` que acepte el objeto coche y cambie el valor de `encendido` a `true`. Muestra el estado del coche en la consola antes y después de llamar a la función.

### **Ejercicio 10: Funciones y arrays de objetos**
**Consigna:** Crea una función llamada `listarLibros` que acepte un array de objetos `libro`, donde cada libro tiene las propiedades `titulo` (string) y `autor` (string). La función debe recorrer el array y mostrar los detalles de cada libro en la consola.
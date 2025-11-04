Profesora: Sachetti Sofia

# Actividades Clase Numero 1:
## TypeScript (Introducción)

¡Hola, chicas! 👋

Bienvenidas a la clase de **Introducción a TypeScript**. En esta guía, preparé una serie de ejercicios diseñados para afianzar los conceptos aprendidos en la clase de hoy. Estos ejercicios se enfocan en los **datos primitivos y tipos diferenciados** en TypeScript, con el objetivo de que puedan familiarizarse con la sintaxis y estructura del lenguaje.

En esta primera etapa, los ejercicios no incluyen funciones, sino que están orientados a manipular y comprender cómo funcionan los distintos tipos de datos en TypeScript. Cada ejercicio está diseñado para que puedan practicar de forma sencilla y reforzar el conocimiento sobre la declaración de variables, operadores y control de tipos.

### ¿Qué aprenderás?
A lo largo de estos ejercicios, practicarás:
*   La declaración y uso de **tipos primitivos** (string, number, boolean).
*   El uso de **tipos diferenciados** como `any`, `unknown`, `null` y `undefined`.
*   La manipulación básica de **objetos** y el uso de **tipos literales**.
*   Realizar operaciones matemáticas simples y operaciones lógicas con valores booleanos.
*   Comprender cómo se trabaja con variables de tipo opcional.

### Requisitos
Antes de comenzar con los ejercicios, asegúrate de tener instaladas las herramientas necesarias para compilar y ejecutar TypeScript en tu entorno. Para esto puedes seguir el paso a paso detallado de la instalación que te brindé en el pdf de la clase.

### Importante
¡No olvides subir tus ejercicios a tu repositorio en github! Son de vital importancia ya que corresponden a parte de la nota de la cursada.

---

## Actividades:

### **Ejercicio 1: Declarar y asignar tipos primitivos**
Crea un programa en TypeScript donde se declaren variables para almacenar tu nombre, edad y si eres estudiante, utilizando los tipos de datos correctos. Luego, imprime esos valores en la consola.

### **Ejercicio 2: Modifica el valor de una variable**
Declara una variable con el tipo `any`, asigna inicialmente un valor numérico, luego cambia su valor por una cadena de texto, y finalmente imprime ambos valores.

### **Ejercicio 3: Combina variables primarias**
Declara variables para almacenar tu nombre y edad. Combina esas variables en un solo mensaje usando plantillas de cadena (template literals) e imprímelo en la consola.

### **Ejercicio 4: Parámetros opcionales simulados**
Declara dos variables, una para almacenar un nombre y otra para almacenar una edad. Si la edad no se asigna, debes imprimir un mensaje que diga "Edad no proporcionada". Si se asigna la edad, imprímela junto al nombre.

### **Ejercicio 5: Datos nulos y diferenciados**
Declara una variable de tipo `string | null`. Asigna inicialmente un valor de cadena, y luego cambia su valor a `null`. Imprime ambos estados en la consola, explicando el significado de `null` en TypeScript.

### **Ejercicio 6: Uso de unknown**
Declara una variable de tipo `unknown`. Asigna diferentes tipos de valores a esta variable, y utiliza el operador `typeof` para verificar el tipo antes de imprimir los valores.

### **Ejercicio 7: Tipos literales**
Usa un tipo literal para declarar una variable que solo acepte uno de los valores: "Lunes", "Martes", "Miércoles". Intenta asignar otros valores y observa el error en TypeScript.

### **Ejercicio 8: Cálculo simple con datos primitivos**
Declara dos variables numéricas, realiza una operación matemática simple con ellas (como una suma), y guarda el resultado en una tercera variable. Imprime el resultado.

### **Ejercicio 9: Comparaciones lógicas**
Declara dos variables booleanas y realiza una comparación lógica (como AND, OR). Imprime el resultado.

### **Ejercicio 10: Uso de objetos**
Declara un objeto en TypeScript con propiedades de tipo string, number y boolean. Accede a estas propiedades e imprímelas en la consola.
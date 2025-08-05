Carrera Back End con NodeJs
Profesora: Sachetti Sofia

# Actividades Clase Numero 1

¡Bienvenidas al emocionante módulo de Node.js, chicas! 👩‍💻🚀

Este es un nuevo paso en su camino como programadoras, y estamos seguras de que lo harán increíble.

En este módulo aprenderemos a dominar Node.js, una de las herramientas más poderosas para el desarrollo backend. 🌐

Node.js nos permitirá crear aplicaciones rápidas y escalables con JavaScript, el lenguaje que ya conocen y aman. 😉

Cada línea de código que escriban será un paso más cerca de construir sus propios proyectos y conquistar el mundo del desarrollo web. 💻

Antes de saltar a Node.js, aquí tienen un conjunto de ejercicios para repasar y consolidar lo aprendido en JavaScript avanzado. 💪

¡Es hora de ponerse a prueba, pensar y seguir creciendo! ✨

Recuerden: no hay errores, solo aprendizaje. ¡A programar se ha dicho! 🔥😃

---

## Ejercicios de repaso de JavaScript avanzado

### Ejercicio 1: ¿Quién puede entrar al parque? 🏞️

Tienes un parque de diversiones que permite la entrada a personas mayores de 12 años y menores de 60. Escribe una función que reciba una lista de edades y devuelva cuántas personas pueden entrar al parque.

**Consigna:**
*   Usa un bucle `for` y condicionales.
*   Usa un array como entrada de la función.
*   Devuelve el número de personas que cumplen con los requisitos.

**Ejemplo:**
```javascript
let edades = [10, 15, 35, 65, 12, 59];
console.log(personasQuePuedenEntrar(edades)); // Debe devolver 4
```

### Ejercicio 2: El menú del día 🍽️

Escribe una función que reciba un objeto con platos y precios, y devuelva los platos cuyo precio sea menor a $20.

**Consigna:**
*   Usa un bucle `for...in`.
*   Usa objetos y arrays.

**Ejemplo:**
```javascript
let menu = {
  "Ensalada": 15,
  "Sopa": 8,
  "Carne": 25,
  "Pasta": 18
};
console.log(platosBaratos(menu)); // Debe devolver ["Ensalada", "Sopa", "Pasta"]
```

### Ejercicio 3: Ordenando números 🔢

Crea una función que reciba un array de números y devuelva un nuevo array con los números ordenados de menor a mayor.

**Consigna:**
*   Usa el método `sort()`.

**Ejemplo:**
```javascript
let numeros = [5, 2, 9, 1, 7];
console.log(ordenarNumeros(numeros)); // Debe devolver [1, 2, 5, 7, 9]
```

### Ejercicio 4: Contando vocales 🗣️

Crea una función que reciba una cadena de texto y devuelva cuántas vocales contiene.

**Consigna:**
*   Usa un bucle `for` y condicionales.
*   Considera vocales mayúsculas y minúsculas (a, e, i, o, u).

**Ejemplo:**
```javascript
let texto = "Hola Mundo";
console.log(contarVocales(texto)); // Debe devolver 4
```

### Ejercicio 5: Generador de iniciales 🔠

Escribe una función que reciba un nombre completo y devuelva las iniciales en mayúsculas.

**Consigna:**
*   Usa el método `split()` para dividir el nombre.
*   Usa un bucle `for` y métodos de string.

**Ejemplo:**
```javascript
let nombre = "juan perez gomez";
console.log(generarIniciales(nombre)); // Debe devolver "JPG"
```

### Ejercicio 6: Calculadora de promedio 📊

Escribe una función que reciba un array de números y devuelva el promedio.

**Consigna:**
*   Usa un bucle `for` para sumar los números.
*   Divide la suma total entre la cantidad de elementos del array.

**Ejemplo:**
```javascript
let calificaciones = [8, 9, 10, 7, 6];
console.log(calcularPromedio(calificaciones)); // Debe devolver 8
```

### Ejercicio 7: Filtrar palabras largas 📏

Escribe una función que reciba un array de palabras y un número, y devuelva las palabras que tienen más caracteres que el número dado.

**Consigna:**
*   Usa el método `filter()`.
*   Usa una función flecha para simplificar el código.

**Ejemplo:**
```javascript
let palabras = ["javascript", "html", "css", "nodejs"];
// Ejemplo de uso: filtrarPalabras(palabras, 4) debería devolver ["javascript", "nodejs"]
```

### Ejercicio 8: Contador de letras 🔠

Crea una función que reciba una cadena de texto y una letra, y devuelva cuántas veces aparece esa letra en la cadena.

**Consigna:**
*   Usa un bucle `for` y condicionales.
*   Haz que la búsqueda no distinga entre mayúsculas y minúsculas.

**Ejemplo:**
```javascript
let texto = "Programar es divertido";
console.log(contarLetra(texto, "r")); // Debe devolver 3
```

### Ejercicio 9: Números únicos 🌀

Escribe una función que reciba un array de números y devuelva un nuevo array sin números repetidos.

**Consigna:**
*   Usa el objeto `Set` para eliminar duplicados.
*   Convierte el `Set` a un array usando el operador spread (`...`).

**Ejemplo:**
```javascript
let numeros = [1, 2, 3, 2, 4, 1, 5];
console.log(obtenerNumerosUnicos(numeros)); // Debe devolver [1, 2, 3, 4, 5]
```

### Ejercicio 10: Invertir palabras 🔄

Crea una función que reciba una cadena de texto y devuelva otra cadena con las palabras en orden inverso.

**Consigna:**
*   Usa el método `split()` para separar las palabras.
*   Usa el método `reverse()` para invertir el array.
*   Usa el método `join()` para unir las palabras en una nueva cadena.

**Ejemplo:**
```javascript
let frase = "Aprender a programar es divertido";
// Ejemplo de uso: invertirPalabras(frase) debería devolver "divertido es programar a Aprender"
```
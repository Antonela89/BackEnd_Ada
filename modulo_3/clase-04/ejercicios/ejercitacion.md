# Carrera Back End con NodeJs - 18
*   **Profesora:** Sachetti Sofia

---

## Actividades Clase Numero 4: TypeScript

¡Bienvenidas, chicas! 👩‍💻✨

En estas actividades, pondrás en práctica conceptos clave como las estructuras de **control de flujo**, **genéricos**, y **aserciones de tipos**. TypeScript es un poderoso lenguaje tipado que extiende las funcionalidades de JavaScript, permitiendo un mejor control sobre los tipos de datos y proporcionando herramientas para escribir código más seguro y escalable.

A través de estas actividades, te familiarizarás con los bucles `for in` y `for of`, aprenderás a manejar genéricos para funciones y también usarás aserciones de tipo para asegurar que tu código sea robusto y confiable.

Cada ejercicio está diseñado para que lo resuelvas, ¡y al final tendrás la solución en github para que puedas comparar tu trabajo! 😊

### Requisitos
Antes de comenzar con los ejercicios, asegúrate de tener instaladas las herramientas necesarias para compilar y ejecutar TypeScript en tu entorno. Para esto puedes seguir el paso a paso detallado de la instalación que te brinde en el pdf de la clase.

### Importante
¡No olvides subir tus ejercicios a tu repositorio en github! Son de vital importancia ya que corresponden a parte de la nota de la cursada.

---

## Actividades:

### Actividad 1: Usar `For...In` para recorrer propiedades de un objeto
Crea un objeto con al menos 3 propiedades (nombre, edad, ciudad) y usa un bucle `for...in` para recorrer y mostrar cada propiedad y su valor.

---

### Actividad 2: Usar `For...Of` para recorrer los valores de un arreglo
Crea un arreglo con al menos 5 números y usa un bucle `for...of` para imprimir cada número en consola.

---

### Actividad 3: Crear una función genérica
Crea una función genérica que tome un parámetro de cualquier tipo y lo devuelva. Prueba la función con diferentes tipos de datos.

---

### Actividad 4: Usar aserciones de tipo
Declara una variable de tipo `any` y usa una aserción para tratarla como `string`, accediendo a la propiedad `.length`.

---

### Actividad 5: Usar aserciones dobles
Crea una variable de tipo `any` y haz una conversión con aserciones dobles para convertirla en un `number`. Muestra el resultado.

---

### Actividad 6: Filtrar elementos de un arreglo genérico usando `For...Of` y Aserciones
Crea una función genérica llamada `filtrarElementos` que reciba un arreglo de valores mixtos (por ejemplo, `number | string | boolean`). Usando un bucle `for...of`, filtra solo los valores que sean cadenas de texto (`string`). Utiliza **aserciones de tipo** para acceder a las propiedades específicas de `string`.

---

### Actividad 7: Aserciones y genéricos con funciones y objetos
Crea una función genérica llamada `procesarObjeto` que reciba un objeto genérico y:
1.  Use un bucle `for...in` para recorrer sus propiedades.
2.  Si el valor de una propiedad es una cadena de texto (`string`), conviértelo a minúsculas.
3.  Si es un número (`number`), elévalo al cuadrado.
4.  Si es un booleano, invierte su valor.

Usa **aserciones de tipo** para realizar las transformaciones.
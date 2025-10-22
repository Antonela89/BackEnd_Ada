# Carrera Back End con NodeJs - 202504
*   **Profesora:** Sachetti Sofia

---

## Actividades Clase Numero 3:

¡Bienvenidas, chicas! ✨👩‍💻

En estas actividades, exploraremos la **modularización**, un concepto clave para organizar y reutilizar el código de manera eficiente. 🛠️

Aprenderás sobre la **exportación e importación de módulos**, los diferentes tipos de exportaciones, y cómo aplicar estos conceptos en la creación de aplicaciones escalables. 🌟

Cada ejercicio está diseñado para desafiarte y ayudarte a desarrollar habilidades prácticas en TypeScript. ¡Diviértete programando y aprovecha al máximo esta oportunidad de aprendizaje! 💻🚀

### Requisitos
Antes de comenzar con los ejercicios, asegúrate de tener instaladas las herramientas necesarias para compilar y ejecutar TypeScript en tu entorno. Para esto puedes seguir el paso a paso detallado de la instalación que te brinde en el pdf de la clase.

### Importante
¡No olvides subir tus ejercicios a tu repo en github! Son de vital importancia ya que corresponden a parte de la nota de la cursada.

---

## Actividades:

### Actividad 1: Modularización Básica

Crea un módulo llamado `mathUtils.ts` que contenga las siguientes funciones:
*   `add(a: number, b: number): number`: devuelve la suma de a y b.
*   `subtract(a: number, b: number): number`: devuelve la resta de a y b.

Luego, crea un archivo `main.ts` que importe `mathUtils` y utilice ambas funciones para mostrar el resultado en la consola.

---

### Actividad 2: Exportaciones Nombradas

En el archivo `stringUtils.ts`, crea dos funciones:
*   `capitalize(str: string): string`: devuelve el string con la primera letra en mayúscula.
*   `reverse(str: string): string`: devuelve el string al revés.

Exporta ambas funciones como exportaciones nombradas. Luego, en `main.ts`, importa las funciones y utilízalas con una cadena de texto, mostrando el resultado en la consola.

---

### Actividad 3: Exportación por Defecto

Crea un módulo llamado `user.ts` que contenga una función:
*   `createUser(name: string, age: number)`: devuelve un objeto con name y age.

Exporta la función como exportación por defecto. En `main.ts`, importa `createUser`, crea un usuario y muestra su información en la consola.

---

### Actividad 4: Tipos de Exportaciones

Crea un archivo llamado `constants.ts` que contenga:
*   Una constante `PI` con el valor de π.
*   Una constante `E` con el valor de e.

Exporta ambas constantes usando:
*   Exportación directa.
*   Exportación separada.

Luego, en `main.ts`, importa ambas constantes y muestra sus valores en la consola.

---

### Actividad 5: Re-exportación de Módulos

Crea un módulo `index.ts` que re-exporte todas las funciones y constantes de los módulos `mathUtils.ts` y `stringUtils.ts`.

En `main.ts`, importa todo desde `index.ts` y utiliza al menos una función de cada módulo, mostrando el resultado en la consola.

---

### Actividad 6: Uso de Namespaces

Crea un namespace llamado `Geometry` en un archivo `geometry.ts` que contenga las siguientes funciones:
*   `areaOfCircle(radius: number): number`: devuelve el área de un círculo.
*   `areaOfSquare(side: number): number`: devuelve el área de un cuadrado.

Exporta ambas funciones. En `main.ts`, utiliza el namespace `Geometry` para llamar a las funciones y muestra los resultados en la consola.

---

### Actividad 7: Cálculo de Áreas

Crea un módulo `shapes.ts` que contenga las siguientes funciones:
*   `circleArea(radius: number): number`: devuelve el área de un círculo.
*   `squareArea(side: number): number`: devuelve el área de un cuadrado.

Exporta ambas funciones como exportaciones nombradas. En `main.ts`, importa las funciones y úsalas para calcular y mostrar las áreas en la consola.

---

### Actividad 8: Funciones de Orden Superior

Crea un módulo `higherOrderFunctions.ts` que contenga una función:
*   `createMultiplier(factor: number): (num: number) => number`: devuelve otra función que multiplica un número por el factor dado.

Exporta esta función como exportación por defecto. En `main.ts`, importa `createMultiplier`, crea un multiplicador (por ejemplo, para multiplicar por 2) y utiliza la función devuelta para multiplicar un número y mostrar el resultado en la consola.

---

### Actividad 9: Módulos y Tipos

Crea un módulo `types.ts` que contenga:
*   Un tipo `Person` con las propiedades `name` y `age`.
*   Una función `createPerson(name: string, age: number): Person`: devuelve un objeto `Person`.

Exporta el tipo y la función como exportaciones nombradas. En `main.ts`, importa el tipo y la función, crea una persona y muestra su información en la consola.

---

### Actividad 10: Consolidación de Módulos

Crea un archivo `utils/index.ts` que centralice las exportaciones de `mathUtils.ts`, `stringUtils.ts` y `user.ts`.

Asegúrate de que todas las funciones se puedan importar desde `utils/index.ts`.

En `main.ts`, importa lo necesario desde `utils/index.ts` y utiliza las funciones en un solo flujo de trabajo, mostrando todos los resultados en la consola.
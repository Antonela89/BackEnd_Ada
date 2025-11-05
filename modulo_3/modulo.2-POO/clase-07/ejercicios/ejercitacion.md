# Carrera Back End con NodeJs - 202504
*   **Profesora:** Sachetti Sofia

---

## Actividades Clase Numero 7: TypeScript – Encapsulamiento y Polimorfismo

¡Bienvenidas, chicas! 👩‍💻✨

En este documento encontrarás una serie de ejercicios avanzados de programación orientada a objetos (POO) en TypeScript, diseñados especialmente para aplicar y reforzar el concepto de **encapsulamiento** y **polimorfismo**. 📄

A lo largo de estos ejercicios, pondremos en práctica los siguientes temas:
*   **Modificadores de acceso:** 🔒 Uso de `public`, `protected` y `private` para controlar la visibilidad de las propiedades y métodos de las clases.
*   **Getters y Setters:** 🔧 Implementación de métodos para acceder y modificar las propiedades privadas de una clase de manera controlada.
*   **Clases y objetos:** 📦 Creación de clases que encapsulan datos y comportamientos relacionados, fomentando la cohesión y reduciendo el acoplamiento.

Cada ejercicio tiene su propia temática y aumenta en complejidad a medida que avanzas. 🌐 Desde sistemas de gestión de inventario hasta aplicaciones de reservas, todos están diseñados para ayudarte a entender cómo aplicar estos conceptos en situaciones reales. 💼🌍

---

¡Espero que disfrutes desarrollando estos desafíos y que te ayuden a dominar el encapsulamiento en la programación orientada a objetos en TypeScript! 💪🚀

### Requisitos
Antes de comenzar con los ejercicios, asegúrate de tener instaladas las herramientas necesarias para compilar y ejecutar TypeScript en tu entorno. Para esto puedes seguir el paso a paso detallado de la instalación que te brinde en el pdf de la clase.

### Importante
¡No olvides subir tus ejercicios a tu mochila en github! Son de vital importancia ya que corresponden a parte de la nota de la cursada.

---

### Actividades de Encapsulamiento:

#### 1. Ejercicio de Coche
Diseña una clase `Coche` que represente un vehículo. Esta clase debe tener propiedades privadas para `marca`, `modelo`, `año`, y `kilometraje`. Implementa métodos para encender el coche y realizar un viaje, que incrementen el kilometraje. Asegúrate de que el año no sea menor que 1886 (el año en que se inventó el coche) y que el kilometraje no pueda ser negativo. Si se intenta establecer un año o kilometraje no válido, imprime un mensaje indicando el error.

#### 2. Ejercicio de Libro
Crea una clase `Libro` que represente un libro en una biblioteca. Esta clase debe tener propiedades privadas para `titulo`, `autor`, `anioPublicacion`, y `disponible`. Implementa métodos para prestar y devolver el libro, asegurando que solo se pueda prestar si está disponible y que se pueda devolver solo si ha sido prestado. Imprime un mensaje en caso de que se intente realizar una acción no válida.

#### 3. Ejercicio de Estudiante
Diseña una clase `Estudiante` que contenga propiedades privadas para `nombre`, `edad`, y `calificaciones`. Implementa métodos para agregar calificaciones y calcular el promedio. Imprime un mensaje en caso de que se intente agregar una calificación inválida (fuera del rango 0-100) o si no hay calificaciones para calcular el promedio.

#### 4. Ejercicio de Aviones
Crea una clase `Avion` con propiedades privadas para el `modelo`, `capacidad` y `velocidad`. Implementa getters y setters para cada propiedad, asegurándote de validar que la capacidad no sea menor que 0 y que la velocidad no sea negativa.
**Nota sobre la inicialización de propiedades:**
En la clase `Avion`, se debe utilizar el operador de afirmación no nula (`!`) en las propiedades `_capacidad` y `_velocidad`. Esto se hace para evitar un error de TypeScript que indica que estas propiedades no estaban inicializadas en el constructor. Este enfoque asegura que las propiedades serán asignadas adecuadamente en el constructor mediante el uso de los setters, manteniendo así la validación de los valores. Tener esto en cuenta para los demás ejercicios.

#### 5. Ejercicio de Vacaciones
Desarrolla una clase `Vacacion` que tenga propiedades privadas para `destino`, `duracion` (en días) y `presupuesto`. Implementa getters y setters, asegurándote de que `duracion` no sea menor que 1 y `presupuesto` sea mayor que 0.

#### 6. Ejercicio de Supermercado
Crea una clase `Producto` que contenga propiedades privadas como `nombre`, `precio` y `cantidad`. Utiliza getters y setters, asegurándote de que `precio` no sea negativo y que `cantidad` no sea menor que 0.

---

### Actividades de Polimorfismo:

#### Ejercicio 1: Polimorfismo con Sobrecarga de Funciones (Tiempo de Compilación)
Implementa una clase `Calculadora` que tenga un método `sumar`. El método debe estar sobrecargado para permitir la suma de:
*   Dos números enteros.
*   Tres números enteros.
*   Dos cadenas, concatenando las dos cadenas.

#### Ejercicio 2: Polimorfismo con Sobreescritura de Métodos (Tiempo de Ejecución)
Crea una jerarquía de clases de `Vehiculo` con dos clases derivadas: `Coche` y `Moto`. Cada clase debe sobrescribir el método `arrancar` de la clase base para proporcionar una implementación específica de cómo arrancar.

#### Ejercicio 3: Encapsulamiento con Métodos Privados
Crea una clase `Banco` con un saldo inicial privado. El saldo solo puede ser modificado a través de un método `depositar` y otro `retirar`, los cuales deben validar que la cantidad no sea negativa. Implementa métodos públicos para consultar el saldo.

#### Ejercicio 4: Abstracción con Clases Abstractas
Implementa una clase abstracta `DispositivoElectronico` con métodos abstractos `encender` y `apagar`. Crea dos clases concretas `Televisor` y `Radio`, que sobrescriban estos métodos.

#### Ejercicio 5: Uso de Interfaces para Polimorfismo
Crea una interfaz `Empleado` con un método `trabajar`. Implementa esta interfaz en clases `Programador` y `Disenador`, donde cada clase debe implementar el método con su propia lógica. Luego, crea una función que reciba un objeto de tipo `Empleado` y llame a su método `trabajar`.

#### Ejercicio 6: Herencia Múltiple Simulada con Interfaces
Crea dos interfaces, `Volador` y `Nadador`, con métodos `volar` y `nadar`, respectivamente. Implementa ambas interfaces en una clase `Pato`. Demuestra cómo una clase puede "heredar" múltiples comportamientos usando interfaces.
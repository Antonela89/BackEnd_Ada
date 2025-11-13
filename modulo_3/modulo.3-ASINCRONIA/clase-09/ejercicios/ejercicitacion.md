# Carrera Back End con NodeJs - 202504
*   **Profesora:** Sachetti Sofia

---

## Actividades Clase Numero 9: SetInterval() - SetTimeOut()

¡Bienvenidas, chicas! 👩‍💻✨

### Requisitos
Antes de comenzar con los ejercicios, asegúrate de tener instaladas las herramientas necesarias para compilar y ejecutar TypeScript en tu entorno. Para esto puedes seguir el paso a paso detallado de la instalación que te brinde en el pdf de la clase.

### Importante
¡No olvides subir tus ejercicios a tu mochila en github! Son de vital importancia ya que corresponden a parte de la nota de la cursada.

---

## Actividades:

### 1. Mueblería: Actualización de Precios
En una mueblería, se requiere un sistema que permita actualizar los precios de los muebles cada vez que cambien. Cada mueble tiene un nombre, un precio y un identificador único. Implementa las siguientes funciones:
*   Añadir un nuevo mueble.
*   Actualizar el precio de un mueble después de 3 segundos utilizando `setTimeout()`.
*   Mostrar el inventario de muebles.

---

### 2. Florería: Envío Programado de Pedidos
Crea un sistema que gestione el envío de pedidos de flores. Cada pedido debe contener el nombre del cliente, la cantidad de flores y el tipo de flores. Implementa las siguientes funciones:
*   Añadir un pedido.
*   Programar el envío de un pedido utilizando `setTimeout()` para simular un retraso de 5 segundos.
*   Mostrar todos los pedidos pendientes.

---

### 3. Compañía de Seguros: Renovación Automática de Pólizas
Desarrolla un sistema que gestione las pólizas de seguros de una compañía. Cada póliza debe tener un identificador, nombre del cliente, monto asegurado y una fecha de renovación. Implementa las siguientes funciones:
*   Añadir una póliza.
*   Programar la renovación de la póliza utilizando `setTimeout()`.
*   Mostrar todas las pólizas activas.

---

### 4. Redes Sociales: Notificaciones de Amigos
Implementa un sistema de gestión de amigos en una red social. Cada amigo debe tener un nombre y un estado (en línea o fuera de línea). Utiliza un `setInterval()` para verificar el estado de los amigos cada 5 segundos y enviar una notificación si un amigo se pone en línea.

---

### 5. Banco: Transferencias Programadas
Crea un sistema para gestionar cuentas bancarias en un banco. Cada cuenta debe tener un nombre del propietario, un saldo y un estado (activo o inactivo). Implementa las siguientes funciones:
*   Añadir una cuenta.
*   Realizar una transferencia entre cuentas después de un retraso de 8 segundos utilizando `setTimeout()`.
*   Mostrar todas las cuentas.

---

### Ejercicio 6: Encapsulamiento en clases
Crea una clase `CuentaBancaria` que tenga atributos privados como saldo y un método público para consultar el saldo y otro para depositar dinero.

---

### Ejercicio 7: Uso de tuplas en una función genérica (Ejercicio Entrevista)
Crea una función genérica que acepte una tupla con dos elementos de cualquier tipo y retorne una nueva tupla con los elementos invertidos.
Para este ejercicio deben pensar mucho porque es para poner en juego la lógica de programación.

---

### Ejercicio 8: Sistema de Nave Espacial con Gestión de Recursos
Crea un sistema para gestionar una nave espacial en una misión de recolección de recursos en diferentes planetas. Define una clase `NaveEspacial` con atributos como `combustible` y `capacidadDeCarga`. Implementa métodos para viajar entre planetas, recolectar recursos (oxígeno, minerales, agua), y gestionar el combustible. Usa tuplas para representar las coordenadas espaciales de los planetas y una interfaz para los tipos de recursos recolectados.

---

### Ejercicio 9: Implementación de Pac-Man con Herencia y Polimorfismo
Crea un sistema que represente el juego Pac-Man utilizando clases. Define una clase `Personaje` que sirva como clase base para PacMan y Fantasma. Implementa métodos para moverse por el mapa y realizar acciones. Define una interfaz `EntidadMovible` que contenga el método `moverse`. Usa herencia para que Pac-Man y los fantasmas compartan el comportamiento de moverse y polimorfismo para que cada personaje pueda implementar su propio comportamiento de movimiento.

---

### Ejercicio 10: Sistema de Gestión de Inventario en una Tienda de Belleza
Crea un sistema de gestión de productos en una tienda de belleza. Define una clase `Producto` con atributos como nombre, precio y categoria. Luego, crea una clase `Inventario` que gestione un conjunto de productos y tenga métodos para agregar, eliminar y buscar productos por categoría. Usa polimorfismo para manejar diferentes tipos de productos, como Cosmético, TratamientoCapilar, etc.

---

### Ejercicio 11: Sistema de Reservas en una Peluquería con Herencia y Polimorfismo
Crea un sistema de reservas para una peluquería. Define una clase `Servicio` con atributos comunes como nombre, duracion, y precio. Luego, crea clases concretas para diferentes servicios como `CorteDeCabello` y `Manicura`. Implementa una clase `Cliente` y una clase `Reserva` que asocie clientes con servicios. Usa polimorfismo para permitir la reserva de cualquier tipo de servicio y encapsulamiento para gestionar la disponibilidad de horarios.

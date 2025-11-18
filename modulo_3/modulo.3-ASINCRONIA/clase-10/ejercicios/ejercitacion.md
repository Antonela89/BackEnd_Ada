## Actividades Clase Numero 10: Promesas

¡Bienvenidas, chicas! 👩‍💻✨

En este conjunto de actividades, exploraremos conceptos clave de la programación asíncrona en JavaScript: **callbacks** y **promesas**. Estos son elementos esenciales para cualquier desarrolladora backend que busque dominar la ejecución de tareas de forma eficiente y sin bloqueos. 🚫

Trabajar con **callbacks** y **promesas** nos permite controlar procesos que tardan un tiempo en completarse, como el acceso a bases de datos, las llamadas a APIs o la escritura en archivos. Imaginemos que queremos consultar múltiples servicios web o registrar usuarios en una plataforma 👩‍💻. ¿Cómo podemos hacer todo esto de forma organizada? Aquí es donde entran en juego las herramientas que veremos en estas actividades.

### ¿Qué aprenderemos? 🔍
1.  **Callbacks:** Entenderemos cómo delegar tareas a otras funciones y ejecutar un código al finalizar ciertas operaciones ⏰.
2.  **Promesas:** Exploraremos cómo las promesas nos permiten manejar procesos asíncronos de forma más clara y eficiente, utilizando `.then()`, `.catch()` y `.finally()` ✅❌.
3.  **Métodos Estáticos de Promises:** Trabajaremos con `Promise.all()` y `Promise.race()`, que nos permitirán ejecutar múltiples tareas a la vez o esperar a la que termine primero ⏱️.

### Objetivos de las Actividades 🎯:
*   Aplicar **callbacks** en escenarios del mundo real, como la gestión de pedidos en un restaurante 🍔🥗.
*   Utilizar **promesas** para simular procesos asincrónicos como el envío de correos electrónicos 📧.
*   Explorar los **métodos estáticos** de promesas para manejar múltiples operaciones de manera eficiente ⚙️.
*   Comprender cómo las promesas nos ayudan a mantener el código más limpio y fácil de leer 🧹.

---

### ¡Manos a la obra! 💪
Cada actividad ha sido diseñada para desarrollar tus habilidades paso a paso, utilizando ejemplos prácticos y simulaciones cercanas a situaciones reales. Al completar estas actividades, tendrás una mejor comprensión de cómo manejar procesos asincrónicos en tus futuros proyectos 🚀.

¡Prepárate para convertirte en una experta en callbacks y promesas! No te preocupes si al principio parece desafiante; aquí estamos para aprender y divertirnos en el camino 😊.

---

## Actividades:

### Ejercicio 1: Callbacks - Sistema de Pedidos de un Restaurante
**Consigna:**
Imagina que trabajas en un restaurante y tienes que gestionar varios pedidos al mismo tiempo. Crea una función llamada `prepararPedido()` que reciba como parámetros:
*   El nombre del plato
*   El tiempo estimado de preparación (en milisegundos)
*   Un **callback** que se ejecutará cuando el pedido esté listo

Luego, simula la preparación de **tres pedidos** (por ejemplo: Pizza, Hamburguesa y Ensalada) con tiempos de preparación distintos. La función debe imprimir un mensaje al iniciar cada pedido y otro mensaje cuando el pedido esté listo.
Además:
1.  Implementa otro **callback** que se ejecute al final, después de todos los pedidos, para mostrar el mensaje: "¡Todos los pedidos han sido completados!".
2.  Controla el orden en el que se imprimen los mensajes para evitar que se mezclen (es decir, no puede imprimirse el mensaje final hasta que todos los pedidos estén listos).

**Objetivo:** Practicar el uso de **callbacks anidados** y la gestión de procesos asincrónicos. Asegúrate de que se ejecuta cada función en el momento correcto.

---

### Ejercicio 2: Promesas - Simulador de Envío de Correos Electrónicos
**Consigna:**
Vas a crear una función llamada `enviarCorreo()` que simule el envío de un correo electrónico usando una **promesa**. La promesa debe cumplir con los siguientes requisitos:
1.  **Resolver** si el correo fue enviado exitosamente (usa `Math.random()` para simular éxito o error).
2.  **Rechazar** si ocurre un fallo en el envío.
3.  La operación debe tardar 2 segundos en completarse (usa `setTimeout()`).
4.  Implementa `.then()`, `.catch()`, y `.finally()` para manejar la respuesta:
    *   Si el correo se envía exitosamente, imprime el mensaje: "Correo enviado a [destinatario]".
    *   Si falla, imprime: "Error: No se pudo enviar el correo a [destinatario]".
    *   En `finally()`, muestra siempre el mensaje: "Operación finalizada".

Implementa la función para enviar correos a dos destinatarios distintos.

---

### Ejercicio 3: Métodos Estáticos - Gestionar múltiples tareas con `Promise.all()`
**Consigna:**
Simula la consulta a tres APIs diferentes que devuelven información sobre usuarios, productos y ventas. Cada consulta debe realizarse usando una función que retorne una **promesa**. Usa `Promise.all()` para esperar a que todas las consultas se completen y luego:
1.  Imprime un mensaje con los **resultados** si todas las consultas fueron exitosas.
2.  Si alguna falla, imprime un mensaje de **error**.
3.  Usa un **retraso distinto** para cada promesa (por ejemplo, 2, 3 y 4 segundos).

**Opcional:** Modifica el comportamiento para que si alguna consulta falla, se devuelva el mensaje: "No se pudo completar la operación: [API que falló]".

---

### Ejercicio 4: `Promise.race()` - Carrera entre Tareas
**Consigna:**
Crea tres promesas que representen tareas con tiempos de ejecución aleatorios. Usa `Promise.race()` para que el programa imprima solo la **primera tarea que se complete**. Luego:
1.  Asegúrate de que se imprime qué tarea ganó la carrera.
2.  Controla posibles **errores** si alguna de las promesas falla.

---

### Ejercicio 5: Promesas Anidadas - Flujo Completo de Registro y Bienvenida
**Consigna:**
Crea una secuencia de **promesas** que simulen el flujo de un usuario que se registra en una plataforma y luego recibe un mensaje de bienvenida. La secuencia debe ser:
1.  **Registrar Usuario** (promesa que tarda 2 segundos).
2.  **Enviar Email de Bienvenida** (promesa que tarda 1 segundo).
3.  **Mostrar Mensaje Final** al completar ambas tareas.

Si alguna de las promesas falla, debe imprimirse un mensaje de error.```
## Actividades Clase Numero 11: Async/await y Try-catch

¡Hola, chicas! 👩‍💻✨

En este documento encontrarás una serie de ejercicios diseñados para profundizar en el manejo de la asincronía en JavaScript a través de temas esenciales como **async/await**, **promesas**, manejo de errores con **try/catch**, y ejecución en paralelo usando **Promise.all**. 💻

Cada ejercicio presenta una situación del mundo real, desde simulaciones de tiempos de respuesta de un servidor hasta procesos de autenticación y actualización de inventario. La finalidad es que practiques los conceptos clave que sustentan la programación asíncrona de una manera práctica y clara. 🛠️

🌟 **¿Lista para poner a prueba tus habilidades?** Con estos desafíos, afianzarás tus conocimientos y aprenderás a aplicar la asincronía en proyectos de programación modernos.

---

## Actividades:

### 1. Simulación de Tiempo de Respuesta de un Servidor
Imagina que quieres simular cómo responde un servidor cuando un cliente realiza una petición. Para este ejercicio, el servidor tiene un tiempo de respuesta variable (aleatorio) entre 1 y 3 segundos. Debes escribir una función llamada `simulacionServidor` que simule este comportamiento utilizando `async` y `await`.
La función deberá:
*   Tener un retardo de tiempo aleatorio.
*   Retornar el mensaje "Servidor listo" una vez que haya transcurrido el tiempo.

Este ejercicio te ayudará a entender cómo gestionar el tiempo en procesos asíncronos, fundamental cuando trabajamos con peticiones de red en el desarrollo web.

---

### 2. Lectura de Datos con Retraso Simulado y Manejo de Errores
Escribe una función que simule la obtención de datos de una base de datos o API. La función debe simular un retraso de 2 segundos para obtener los datos. Sin embargo, en ocasiones esta operación puede fallar (simula este fallo lanzando un error manualmente).
**Detalles:**
*   Utiliza `async` y `await` para hacer que la función sea asíncrona.
*   Usa `try/catch` para capturar posibles errores.
*   Si todo va bien, muestra el mensaje "Datos obtenidos con éxito".
*   En caso de error, muestra "Error al leer datos".

Esta simulación es muy útil para ver cómo manejar errores en operaciones de obtención de datos, una tarea común en programación backend.

---

### 3. Ejecución de Múltiples Consultas en Paralelo
Simulemos un caso donde un sistema necesita realizar varias consultas a distintos servicios externos de manera simultánea. Escribe tres funciones que simulen una consulta, cada una con un tiempo de respuesta diferente (1, 2 y 3 segundos). Luego, crea una función que ejecute estas tres consultas en paralelo usando `Promise.all`, de modo que se esperen los tres resultados antes de continuar.

Esta técnica te permitirá comprender cómo hacer más eficientes las operaciones asíncronas independientes ejecutándolas en paralelo.

---

### 4. Simulación de Proceso de Pago Asíncrono con Manejo de Errores
Diseña una función que simule un proceso de pago que tarda 3 segundos en completarse. Si el monto del pago es superior a $1000, el proceso debe fallar y lanzar un error. Utiliza `try/catch` para manejar el error de manera adecuada.

Esta simulación es relevante para entender cómo gestionar errores en procesos financieros o de pago, en los cuales las validaciones son cruciales.

---

### 5. Actualización Concurrente de Datos de Usuario y Pedidos
En un sistema de e-commerce, las actualizaciones de datos de usuario y pedidos suelen ejecutarse de manera concurrente para mayor eficiencia. Escribe dos funciones asíncronas, una que actualice los datos del usuario y otra que actualice los pedidos, ambas con un tiempo de espera de 1.5 segundos. Usa `Promise.all` para ejecutar ambas funciones en paralelo y luego muestra un mensaje cuando ambas actualizaciones se hayan completado.

---

### 6. Simulación de Autenticación de Usuario con Manejo de Errores
Imagina que estás desarrollando el sistema de inicio de sesión para una aplicación. En esta aplicación, el sistema debe validar que el nombre de usuario existe y es válido. Si el usuario no existe o se envía `null` o `undefined` como nombre de usuario, la función de autenticación debe fallar y lanzar un error.
**Para lograrlo:**
*   Crea una función llamada `autenticar` que tome el nombre de usuario como parámetro.
*   La función debe simular un tiempo de validación de 2 segundos y retornar "Autenticación exitosa" si el nombre de usuario es válido.
*   En caso de que el usuario sea `null` o `undefined`, la función debe lanzar un error.
*   Utiliza `try/catch` en una función principal `iniciarSesion` para manejar los errores y mostrar un mensaje de éxito o error.

Este ejercicio es esencial para aprender a manejar errores en operaciones de autenticación, simulando problemas comunes que podrías encontrar en sistemas de login.

---

### 7. Simulación de Recuperación de Contraseña
Crea una función que simule un proceso de recuperación de contraseña en el cual se envía un correo electrónico al usuario. Esta función debe tardar 3 segundos en completarse y retornar un mensaje confirmando que el correo de recuperación ha sido enviado.
**Especificaciones:**
*   La función debe llamarse `recuperarContrasena` y recibir como parámetro el correo electrónico del usuario.
*   Después de un retardo de 3 segundos, debe retornar el mensaje "Correo de recuperación enviado a [correo]".
*   En una función `iniciarRecuperacion`, llama a `recuperarContrasena` e imprime el mensaje cuando se complete la operación.

Este ejercicio muestra cómo se manejan operaciones asíncronas en procesos de recuperación de contraseñas, una funcionalidad común en aplicaciones web.

---

### 8. Simulación de Descarga de Archivos con Manejo de Errores
Crea una función que simule la descarga de un archivo. Si el nombre del archivo es `null` o `undefined`, la descarga debe fallar y lanzar un error. Utiliza `try/catch` para manejar el error de manera adecuada.
**Detalles:**
*   La función `descargarArchivo` debe recibir el nombre del archivo como parámetro.
*   Si el archivo es válido, simula la descarga con un retardo de 2 segundos y retorna el mensaje "Archivo [nombre] descargado".
*   En caso de que el nombre sea `null` o `undefined`, lanza el error "Error en la descarga".
*   Usa una función `iniciarDescarga` para invocar `descargarArchivo` y manejar el error.

Este ejercicio refuerza el uso de `try/catch` en operaciones de descarga de archivos, algo muy útil cuando se manejan archivos en una aplicación.

---

### 9. Ejecución Condicional en Base a Resultados de Promesas
Imagina que necesitas ejecutar una tarea sólo si otra ha sido exitosa. Crea una función `tarea1` que simule la realización de una tarea en 2 segundos. Luego, escribe otra función `tarea2` que dependa de la finalización exitosa de `tarea1`. Si `tarea1` se completa, `tarea2` debe ejecutarse; de lo contrario, no debe ejecutarse nada.

Este ejercicio muestra cómo encadenar tareas y ejecutar una tarea condicionalmente en función del resultado de una promesa.

---

### 10. Simulación de Actualización de Inventario con Validación de Stock
Desarrolla una función que simule la actualización de un inventario después de una compra. Si el inventario es insuficiente (cantidad <= 0), la actualización debe fallar y lanzar un error.
**Especificaciones:**
*   La función `actualizarInventario` debe tomar un parámetro `cantidad` y simular un tiempo de actualización de 1.5 segundos.
*   Si la cantidad es mayor a 0, la función debe retornar el mensaje "Inventario actualizado".
*   En caso contrario, debe lanzar el error "Error: inventario insuficiente".
*   Usa `try/catch` en una función principal para manejar el error de manera adecuada.

Este ejercicio es útil para aprender cómo manejar situaciones de validación en inventarios de productos.
Carrera Back End con NodeJs
Profesora: Sachetti Sofia

# Actividades Clase Numero 5

¡Hola, chicas! 👩‍💻

Hoy vamos a construir juntas un servidor TCP paso a paso.

Estos ejercicios están diseñados para que aprendan cómo agregar funcionalidades básicas a un servidor.

**Todo el código lo escribiremos en un solo archivo llamado `servidor.js`.**
Así evitamos confusiones y nos enfocamos en desarrollar un servidor funcional desde cero. 💻✨

Para que comprendan mejor esta actividad está planteada como 5 ejercicios diferentes pero que componen un solo servidor (dividido en pasos para que se entienda mucho mejor).

---

### Conceptos importantes
Antes de empezar, vamos a aclarar algunos términos que utilizaremos durante los ejercicios. No se preocupen si parecen complicados, ¡aquí lo explicamos todo! 🌟

**1. Evento:**
Un evento es algo que ocurre mientras el servidor está funcionando, como cuando un cliente se conecta, envía datos o se desconecta. Nuestro servidor estará "escuchando" constantemente para detectar estos eventos.
Los eventos que necesitamos para este ejercicio son:
*   **data:** Se activa cuando el servidor recibe datos del cliente.
*   **end:** Se activa cuando un cliente cierra la conexión.

**2. Buffer:**
Un buffer es una forma especial que usa Node.js para manejar datos binarios (números y letras). Cuando el servidor recibe datos del cliente, llegan como un buffer.
Para convertirlo en texto legible, utilizaremos el método `.toString()`.

---

### Reglas para los ejercicios
1.  Todo el código irá en un único archivo llamado `servidor.js`.
2.  No usaremos conceptos que aún no hemos visto. Todo estará basado en lo aprendido.
3.  Sigamos las pistas y resolvamos cada ejercicio paso a paso. ¡Al final, tendrán un servidor completamente funcional! 🚀

---

## Ejercicios

### Ejercicio 1: Crear el servidor básico
**Objetivo:** Configurar un servidor TCP que escuche en el puerto 5000.

**Guía paso a paso:**
1.  Crea un archivo llamado `servidor.js`.
2.  Importa el módulo que te permite trabajar con servidores TCP (`net`).
3.  Usa el método que crea un servidor.
    *   **Pista:** Este método necesita una función que se ejecuta cuando alguien se conecta.
4.  Configura el servidor para que escuche en el puerto 5000.
    *   **Pista:** Usa el método que pone al servidor "a escuchar".
5.  Agrega un mensaje en la consola para confirmar que el servidor está listo.

### Ejercicio 2: Detectar conexiones de clientes
**Objetivo:** Mostrar en la consola cuando un cliente se conecta al servidor.

**Guía paso a paso:**
1.  Revisa la función que agregaste al crear el servidor.
    *   **Pista:** Esa función se ejecuta cada vez que un cliente se conecta.
2.  Dentro de esa función, agrega un mensaje en la consola que diga: `"¡Un cliente se ha conectado!"`.
3.  Verifica que el mensaje aparezca cuando el servidor recibe una conexión.

### Ejercicio 3: Recibir y mostrar datos del cliente
**Objetivo:** Mostrar en la consola cualquier mensaje que el cliente envíe al servidor.

**Guía paso a paso:**
1.  Usa el evento `data` para detectar cuando el cliente envía datos.
    *   **Pista:** El evento se llama en el `socket` que representa la conexión del cliente.
2.  En el callback del evento, convierte los datos recibidos (buffer) en texto usando `.toString()`.
3.  Muestra el mensaje en la consola con un texto como: `"Mensaje recibido del cliente: <mensaje>"`.

### Ejercicio 4: Responder al cliente
**Objetivo:** Enviar una respuesta al cliente después de recibir un mensaje.

**Guía paso a paso:**
1.  Dentro del evento `data`, agrega una línea para enviar datos al cliente.
    *   **Pista:** Usa el método que permite escribir datos en el socket.
2.  Escribe un mensaje que diga: `"¡Hola, cliente! Tu mensaje fue recibido correctamente."`
3.  Verifica que el cliente reciba esta respuesta después de enviar un mensaje.

### Ejercicio 5: Detectar cuando el cliente se desconecta
**Objetivo:** Mostrar en la consola un mensaje cuando el cliente cierra la conexión.

**Guía paso a paso:**
1.  Usa el evento `end` para detectar cuándo el cliente se desconecta.
    *   **Pista:** Este evento también está disponible en el socket.
2.  Dentro del callback del evento, agrega un mensaje en la consola que diga: `"El cliente se ha desconectado."`
3.  Verifica que el mensaje aparezca después de que el cliente cierre la conexión.

### Reflexión Final
¡Felicitaciones por completar estos ejercicios! 🎉 Ahora tienen un servidor TCP que puede:
1.  Escuchar conexiones.
2.  Detectar y responder mensajes.
3.  Manejar desconexiones de clientes.

**Próximo paso:** ¡Explorar cómo manejar múltiples clientes al mismo tiempo! Pero eso será más adelante. 😉

**IMPORTANTE:** ¡Si surgen dudas de este ejercicio, no duden en consultar la próxima clase y de ser necesario lo hacemos todas juntas nuevamente!

---

### Ejercicio Extra: Contador de Clientes Conectados
Esta parte es un extra de los primero cinco ejercicios, si no pueden realizarlo no se preocupen, lo importante es que finalicen los primeros cinco ejercicios (que es uno solo dividido en partes).

**Consigna:** Modificar el servidor TCP para que cuente cuántos clientes están conectados al mismo tiempo y muestre este número en la consola. Esto les permitirá entender cómo manejar múltiples clientes y trabajar con variables globales.

¡Vamos a hacer nuestro servidor un poco más interesante! En este ejercicio, modificaremos nuestro servidor para que pueda contar cuántos clientes están conectados al mismo tiempo.

**Objetivos centrales:**
*   Cada vez que un cliente se conecte, aumentaremos un contador.
*   Cuando un cliente se desconecte, disminuiremos ese contador.
*   Mostraremos en la consola cuántos clientes están conectados en ese momento.

**Guía paso a paso:**

**1. Paso 1: Crear una variable para el contador de clientes**
*   Antes de crear el servidor, declara una variable llamada `clientesConectados` e inicialízala en 0.
    *   **Pista:** Esta variable será global, ya que debe funcionar para todos los clientes.

**2. Paso 2: Incrementar el contador al conectar un cliente**
*   En la función que se ejecuta cuando un cliente se conecta, incrementa la variable `clientesConectados`.
*   Muestra un mensaje en la consola que diga: `"Un cliente se ha conectado. Clientes conectados: X"`, donde X es el número actual de clientes conectados.

**3. Paso 3: Decrementar el contador al desconectar un cliente**
*   En el evento `end`, decrementa el valor de la variable `clientesConectados`.
*   Muestra un mensaje en la consola que diga: `"Un cliente se ha desconectado. Clientes conectados: X"`, donde X es el número actual de clientes conectados.

**4. Paso 4: Probar el servidor**
*   Inicia el servidor y observa cómo el contador cambia a medida que se conectan y desconectan clientes.
*   En este caso, no se preocupen por probarlo con clientes reales, ya que el próximo paso será aprender a probar estos servidores.

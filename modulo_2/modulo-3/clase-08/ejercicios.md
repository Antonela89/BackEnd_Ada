Carrera Back End con NodeJs
Profesora: Sachetti Sofia

# Actividades Clase Numero 8

¡Hola Chicas! 👩‍💻👩‍🏫

Hoy tienen frente a ustedes una serie de ejercicios que les ayudarán a poner en práctica todo lo aprendido en clase sobre el uso de `net.createConnection` en Node.js. 🚀

Estos ejercicios están diseñados para reforzar conceptos clave como:
*   🔌 La creación de conexiones TCP con `net.createConnection`.
*   💡 El uso de métodos esenciales como `.write()`, `.end()`, `.pause()`, `.resume()`, `.destroy()`, `.setTimeout()`, `.unref()` y `.ref()`.
*   🤝 La gestión de eventos con `socket.on()` para manejar conexiones, recepción de datos, errores y cierres.
*   💬 La comunicación efectiva entre cliente y servidor mediante el envío y recepción de mensajes.
*   ⏳ La configuración de tiempos de espera y la gestión de conexiones inactivas.

Cada ejercicio está diseñado para que puedan aprender de manera progresiva, construyendo confianza y consolidando lo que vimos en clase. ¡Recuerden que la práctica es la clave del éxito! 🌟

---

## EJERCITACION:

### Ejercicio 1: Conectar y enviar un mensaje al servidor
**📌 Consigna**
Crea un cliente TCP que:
1.  Se conecte a un servidor en `localhost:5000`.
2.  Cuando la conexión se establezca, envíe el mensaje: "¡Hola, servidor!".
3.  Escuche los datos recibidos y los muestre en consola.

**💡 Pistas**
*   Usa `net.createConnection()` para conectar al servidor.
*   Maneja el evento `'connect'` para saber cuándo la conexión está lista.
*   Usa `client.write()` para enviar el mensaje.
*   Captura los datos con el evento `'data'`.

### Ejercicio 2: Implementar un timeout en la conexión
**📌 Consigna**
Modifica el cliente del Ejercicio 1 para que:
1.  Si después de **5 segundos** no ha recibido una respuesta, cierre la conexión.
2.  Muestre "⌛ Tiempo de espera agotado" en la consola antes de cerrar.

**💡 Pistas**
*   Usa `client.setTimeout()` con 5000 milisegundos.
*   Cuando el timeout ocurra, usa `client.end()` para cerrar la conexión.

### Ejercicio 3: Pausar y reanudar la recepción de datos
**📌 Consigna**
Crea un cliente TCP que:
1.  Reciba mensajes continuamente del servidor.
2.  Al recibir el primer mensaje, pause la recepción durante **3 segundos**.
3.  Luego de los 3 segundos, reanude la recepción y siga mostrando los mensajes.

**💡 Pistas**
*   Usa `client.pause()` y `client.resume()`.
*   Un `setTimeout()` puede ayudarte a reanudar después de 3 segundos.

### Ejercicio 4: Manejo de errores en la conexión
**📌 Consigna**
Modifica el cliente para que:
1.  Si ocurre un error (como un servidor no disponible), lo detecte y lo muestre con "❌ Error: [mensaje]".
2.  Si la conexión se cierra inesperadamente, muestre "⚠️ Conexión cerrada inesperadamente".

**💡 Pistas**
*   Usa `client.on('error', callback)` para manejar errores.
*   Usa `client.on('close', callback)` para detectar cierres.

### Ejercicio 5: Detectar cuando el servidor cierra la conexión
**📌 Consigna**
Crea un cliente que:
1.  Se conecte y envíe "¿Sigues ahí, servidor?".
2.  Cuando el servidor cierre la conexión, muestre "🔌 Servidor cerró la conexión".

**💡 Pistas**
*   El evento `'end'` se activa cuando el servidor finaliza la conexión.

### Ejercicio 6: Cliente interactivo con la usuaria
**📌 Consigna**
Crea un cliente donde la usuaria pueda escribir mensajes en la consola y enviarlos al servidor.
*   Después de cada mensaje, la usuaria puede escribir otro.
*   Si escribe "salir", el cliente se desconecta.

**💡 Pistas**
*   Usa `readline` para capturar texto de la usuaria.
*   Si el mensaje es "salir", cierra la conexión con `client.end()`.

### Ejercicio 7: Cliente que destruye el socket al fallar
**📌 Consigna**
Crea un cliente que:
1.  Se conecte al servidor.
2.  Si hay un error en la conexión, use `client.destroy()` y muestre "🚫 Conexión destruida".

**💡 Pistas**
*   `client.destroy()` libera los recursos del socket de inmediato.

### Ejercicio 8: Cliente con unref/ref para control de procesos
**📌 Consigna**
Crea un cliente que:
1.  Use `client.unref()` para permitir que Node.js termine si no hay otras tareas.
2.  Luego, después de 5 segundos, use `client.ref()` para evitar que el proceso termine.

**💡 Pistas**
*   `unref()` hace que el socket no impida que Node.js termine.
*   `ref()` lo vuelve a mantener activo.

### Ejercicio 9: Cliente que reconecta automáticamente
**📌 Consigna**
Crea un cliente que:
1.  Si la conexión falla, reintente conectarse cada **3 segundos** hasta que tenga éxito.

**💡 Pistas**
*   Usa `setTimeout()` para intentar de nuevo tras 3 segundos.
*   Llama a `net.createConnection()` dentro del reintento.

### Ejercicio 10: Cliente que detecta pérdida de conexión
**📌 Consigna**
Crea un cliente que:
1.  Si deja de recibir datos durante 10 segundos, muestre "⚠️ No hay datos del servidor" y cierre la conexión.

**💡 Pistas**
*   Usa `setTimeout()` que se reinicie con cada mensaje recibido.
*   Si pasan 10 segundos sin mensajes, cierra con `client.end()`.
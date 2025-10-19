### **Módulo: Introducción y Fundamentos**

#### **Clase 1: Introducción a NodeJs**

*   **Rutas Relativas y Absolutas:** Se explica la diferencia al referenciar archivos.
    *   **Absoluta:** Es una ruta completa que empieza desde el directorio raíz del sistema (ej: `/home/usuario/proyecto/archivo.js` en Linux o `C:\Usuarios\Proyecto\archivo.js` en Windows). No depende de dónde te encuentres.
    *   **Relativa:** Es una ruta que parte desde tu ubicación actual (ej: `./archivo.js` para un archivo en la misma carpeta o `../imagenes/logo.png` para subir un nivel y entrar a la carpeta `imagenes`).
*   **NANO:** Es un editor de texto simple que se usa directamente en la terminal de comandos. Es útil para hacer cambios rápidos en archivos en un servidor sin una interfaz gráfica.
*   **NodeJS:** Es un entorno de ejecución que permite correr código JavaScript en el lado del servidor, fuera de un navegador web. Esto nos permite crear aplicaciones de backend (servidores, APIs, etc.) usando un lenguaje que muchos ya conocen del frontend.
*   **Motor V8:** Es el motor de JavaScript de alto rendimiento creado por Google para su navegador Chrome. Node.js está construido sobre V8, lo que le permite ser muy rápido al compilar el código JavaScript a código máquina.
*   **NPM (Node Package Manager):** Es el gestor de paquetes de Node.js. Es una herramienta de línea de comandos que se usa para instalar, administrar y compartir paquetes (librerías o módulos de código) escritos por otros desarrolladores.
    *   `npm init`: Inicia un nuevo proyecto, creando el archivo `package.json`.
    *   `npm install <paquete>`: Descarga un paquete y sus dependencias en la carpeta `node_modules` de tu proyecto.
    *   `npm run <script>`: Ejecuta un script personalizado definido en tu `package.json`.
    *   `npx <paquete>`: Permite ejecutar un paquete sin tener que instalarlo globalmente, ideal para herramientas de un solo uso.
*   **Paquetes Locales vs. Globales:**
    *   **Locales:** Se instalan dentro de un proyecto específico. Son las dependencias que tu aplicación necesita para funcionar.
    *   **Globales:** Se instalan a nivel de sistema operativo y están disponibles para ser usados desde cualquier lugar en la terminal. Se usan para herramientas de desarrollo (ej: `nodemon`).

#### **Clase 2: Fundamentos de NodeJs**

*   **Sistema de Módulos en Node.js:** Node.js fomenta la modularidad, es decir, dividir el código en archivos más pequeños y reutilizables llamados módulos.
    *   **CommonJS (CJS):** El sistema de módulos tradicional en Node.js. Usa `require()` para importar un módulo y `module.exports` para exportar funcionalidades.
    *   **Módulos ES (ESM):** El estándar moderno de JavaScript. Usa `import` y `export`, y es el sistema que se usa en el desarrollo frontend actual.
*   **Módulos Nativos:** Son las librerías que vienen incluidas por defecto con Node.js. No necesitas instalarlas, solo importarlas. El módulo `fs` (File System) es uno de los más importantes y se usa para interactuar con el sistema de archivos (leer, escribir, etc.).
*   **JSON (JavaScript Object Notation):** Es un formato de texto ligero para el intercambio de datos. Aunque se parece a los objetos de JavaScript, es un formato de texto universalmente compatible.
    *   `JSON.parse()`: Convierte una cadena de texto JSON en un objeto de JavaScript.
    *   `JSON.stringify()`: Convierte un objeto de JavaScript en una cadena de texto con formato JSON.
*   **`package.json` y `package-lock.json`:**
    *   **`package.json`:** El "manifiesto" de tu proyecto. Contiene metadatos como el nombre, versión y, lo más importante, la lista de dependencias que necesita.
    *   **`package-lock.json`:** Un archivo generado automáticamente que registra las versiones exactas de cada paquete instalado. Esto asegura que si otro desarrollador (o un servidor) instala el proyecto, obtendrá exactamente las mismas versiones de las dependencias, evitando problemas de compatibilidad.

#### **Clase 3: Repasamos las Bases**

*   Esta clase es una sesión práctica. Se utilizan herramientas interactivas como **Blooket** y otras actividades para reforzar y evaluar la comprensión de los conceptos fundamentales vistos en las clases anteriores, como el funcionamiento de Node.js, NPM y los módulos.

---

### **Módulo: Archivos**

#### **Clase 4: Adentrándonos en los archivos**

*   **Persistencia de Datos:** Es el concepto de guardar la información de una aplicación de forma duradera, para que no se pierda cuando el programa se cierra.
*   **Métodos de Persistencia:** Las formas más comunes de lograr esto son:
    *   **Bases de datos:** Sistemas especializados para almacenar y gestionar grandes volúmenes de datos de forma estructurada (SQL) o no estructurada (NoSQL).
    *   **Sistemas de archivos:** La forma más directa, guardando la información en archivos de texto (como JSON, CSV, XML) directamente en el disco duro del servidor.
*   **File System (`fs`):** Se profundiza en el uso del módulo nativo `fs` para realizar operaciones CRUD (Crear, Leer, Actualizar, Borrar) con archivos. Se ven ejemplos paso a paso para escribir contenido en un nuevo archivo y para leer el contenido de un archivo existente.

---

### **Módulo: Cliente y Servidor**

#### **Clase 5: Introducción a Servidores**

*   **Servidor TCP con módulo `net`:** Se introduce el concepto de servidor como un programa que "escucha" en la red esperando conexiones de clientes. El módulo `net` de Node.js permite crear servidores TCP de bajo nivel.
*   **TCP vs. UDP:**
    *   **TCP (Protocolo de Control de Transmisión):** Es un protocolo fiable y orientado a la conexión. Garantiza que todos los datos lleguen en orden y sin errores. Es como una llamada telefónica.
    *   **UDP (Protocolo de Datagramas de Usuario):** Es más rápido pero no fiable. Envía paquetes de datos sin garantizar su llegada ni su orden. Es como enviar una postal.
*   **Puertos:** Son números (del 0 al 65535) que identifican a una aplicación o servicio específico dentro de un ordenador. Un servidor "escucha" en un puerto determinado (ej: el puerto 80 para servidores web).
*   **Módulo `net` y `Socket`:**
    *   `net.createServer()`: Método para crear un objeto servidor.
    *   `server.listen(puerto)`: Pone al servidor a escuchar conexiones en el puerto especificado.
    *   **Socket:** Es el punto final de una comunicación bidireccional entre cliente y servidor. Cuando un cliente se conecta, se establece un socket en cada extremo para que puedan intercambiar datos.

#### **Clase 6: Objeto Process y módulo `readline`**

*   **Objeto `process`:** Es un objeto global en Node.js que proporciona información y control sobre el proceso actual (el programa en ejecución).
    *   `process.argv`: Un array que contiene los argumentos pasados al programa desde la línea de comandos.
    *   `process.exit()`: Termina el programa inmediatamente.
    *   `process.cwd()`: Devuelve el directorio de trabajo actual.
    *   `process.env`: Un objeto que contiene las variables de entorno del sistema.
*   **Módulo `readline`:** Es un módulo nativo que permite leer datos de un stream (como la entrada de la terminal) línea por línea, facilitando la creación de aplicaciones de consola interactivas.
    *   `rl.question()`: Muestra una pregunta al usuario y espera su respuesta.
    *   `rl.on('line', callback)`: Dispara un evento cada vez que el usuario presiona Enter.

#### **Clase 7: Servidores: Evento y `socket.on`**

*   **`socket.on(evento, callback)`:** Es la forma de escuchar eventos que ocurren en una conexión de socket. La programación en Node.js está fuertemente basada en eventos.
*   **Eventos de `socket.on`:**
    *   `connection`: Se dispara en el servidor cada vez que un nuevo cliente se conecta.
    *   `data`: Se dispara cuando se reciben datos a través del socket.
    *   `end`: Se dispara cuando el cliente finaliza la conexión.
    *   `error`: Se dispara si ocurre un error en la conexión.
    *   `close`: Se dispara cuando la conexión se ha cerrado completamente.

#### **Clases 8 y 9: Cliente TCP (Parte 1 y 2)**

*   Se explora el otro lado de la comunicación: el **cliente**. Se aprende a crear un programa cliente que se conecta a un servidor TCP.
*   **Métodos de `net.Socket` (Cliente):**
    *   **Escritura y Control:** `write()` para enviar datos al servidor, `end()` para enviar datos y cerrar la conexión, `pause()` y `resume()` para controlar el flujo de datos.
    *   **Manejo de Eventos:** El cliente también usa `.on()` para reaccionar a eventos como `connect` (cuando la conexión con el servidor es exitosa), `data` (cuando recibe datos del servidor), etc.

#### **Clase 10: Integración de contenidos**

*   Esta es una clase práctica donde se unen todos los conceptos vistos hasta ahora. El objetivo es construir desde cero una aplicación Cliente-Servidor funcional, utilizando los módulos `net`, `fs` y `readline` para crear un programa interactivo.

---

### **Módulo: Patrones y Bibliotecas**

#### **Clase 11: `readline-sync`**

*   **`readline-sync`:** A diferencia del módulo nativo `readline` (que es asíncrono), `readline-sync` es un paquete de NPM que permite solicitar información al usuario de forma síncrona. Esto significa que el programa se detiene y espera la respuesta del usuario, lo que simplifica mucho el código para aplicaciones de consola simples.

#### **Clase 12: Módulo `path` y `__dirname`**

*   **Módulo `path`:** Es un módulo nativo de Node.js que proporciona utilidades para trabajar con rutas de archivos y directorios de una manera que funciona en cualquier sistema operativo (Windows, macOS, Linux).
*   **`__dirname`:** Es una variable global en Node.js que siempre contiene la ruta absoluta del directorio donde se encuentra el archivo que se está ejecutando. Es muy útil para construir rutas a otros archivos del proyecto de forma fiable.
*   **Métodos de `path`:** `path.join()` para unir segmentos de ruta de forma segura y `path.resolve()` para obtener una ruta absoluta.

#### **Clase 13: Patrones**

*   **Patrones de Diseño/Arquitectura:** Son soluciones generales y reutilizables a problemas comunes en el diseño de software. No son código, sino conceptos o "recetas" que guían la estructura de la aplicación.
*   **Patrón MVC (Modelo-Vista-Controlador):** Un patrón de arquitectura muy popular que separa la aplicación en tres componentes:
    *   **Modelo:** Maneja los datos y la lógica de negocio (ej: interactúa con la base de datos).
    *   **Vista:** Es la interfaz de usuario, lo que el usuario ve (en backend, podría ser una plantilla HTML o los datos JSON de una API).
    *   **Controlador:** Actúa como intermediario. Recibe las peticiones del usuario, interactúa con el Modelo para obtener datos y luego le dice a la Vista cómo presentarlos.

#### **Clase 14: Módulo `crypto`, `sort` y Algoritmos Hash**

*   **Algoritmos de Hash:** Son funciones matemáticas que toman una entrada (ej: una contraseña) y producen una salida de longitud fija y única llamada "hash". Son de un solo sentido (no se puede obtener la entrada original a partir del hash), lo que los hace ideales para almacenar contraseñas de forma segura.
*   **Módulo `crypto`:** Un módulo nativo de Node.js que proporciona herramientas criptográficas, como la capacidad de crear hashes (`createHash`) o cifrar/descifrar datos.
*   **Método `sort()`:** Es un método de los arrays en JavaScript que permite ordenarlos. Se discute en el contexto de algoritmos para entender cómo funciona la ordenación de datos.

#### **Clase 15: Biblioteca UUID**

*   **UUID (Universally Unique Identifier):** Es un estándar para generar identificadores únicos. Son números de 128 bits que son, para todos los fines prácticos, únicos a nivel mundial. Son muy utilizados como claves primarias en bases de datos.
*   **Versiones de UUID:** Se explican las versiones más comunes:
    *   **v1:** Basado en la hora actual y la dirección MAC del dispositivo.
    *   **v4:** Generado de forma completamente aleatoria. Es la versión más comúnmente utilizada.
    *   **v5:** Generado a partir de un nombre y un espacio de nombres usando un hash SHA-1.

#### **Clases 16 a 18: Repaso y Desafío Final**

*   Estas últimas clases se dedican a la práctica intensiva. Se realiza un simulacro de un proyecto integrador para preparar a los alumnos, se repasan todos los temas con actividades y, finalmente, se presenta el **Desafío Final**, donde los estudiantes deben aplicar todo lo aprendido para construir un proyecto completo desde cero.
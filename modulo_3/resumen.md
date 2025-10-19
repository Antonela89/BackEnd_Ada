### **Módulo 1: TypeScript**

#### **Clase 1: Introducción a TypeScript**

*   **Instalación del Entorno y VS Code:** Se refiere a preparar tu computadora para programar. Esto implica instalar **Node.js** (que permite ejecutar JavaScript/TypeScript fuera del navegador) y luego usar su gestor de paquetes (npm) para instalar el compilador de **TypeScript**. Visual Studio Code (VS Code) es el editor de código recomendado por su excelente integración con TypeScript.
*   **Dinámico vs. Estático:**
    *   **Tipado Dinámico (JavaScript):** El tipo de una variable se determina cuando el programa se ejecuta. Puedes hacer `let x = 10;` y luego `x = "hola";` sin errores iniciales, lo que puede causar problemas más tarde.
    *   **Tipado Estático (TypeScript):** Debes declarar el tipo de una variable (`let x: number = 10;`). Si luego intentas hacer `x = "hola";`, TypeScript te dará un error *antes* de que ejecutes el código, previniendo bugs.
*   **Tipado Débil vs. Fuerte:**
    *   **Tipado Débil (JavaScript):** JavaScript intenta "adivinar" y convertir tipos automáticamente. Por ejemplo, `'5' - 3` da como resultado `2` (número). Esto puede ser impredecible.
    *   **Tipado Fuerte (TypeScript):** TypeScript no permite operaciones entre tipos incompatibles sin que tú lo indiques explícitamente. La operación anterior daría un error.
*   **Tipos de Datos Primitivos:** Son los bloques de construcción básicos: `string` (texto), `number` (números), `boolean` (verdadero/falso), `null`, `undefined`.

#### **Clase 2: Variables, Objetos, Funciones, Array, Enum, Tuplas**

*   **Variables (`var`, `let`, `const`):**
    *   `let`: Declara una variable que puede cambiar de valor y cuyo alcance se limita al bloque (`{...}`) donde fue creada. Es la forma moderna y recomendada.
    *   `const`: Declara una constante. Su valor no puede ser reasignado después de su inicialización. También tiene alcance de bloque.
    *   `var`: La forma antigua. Su alcance es de función, no de bloque, y tiene un comportamiento llamado *hoisting* que puede ser confuso. Se recomienda evitarla.
*   **Objetos:** Colecciones de datos con pares `clave: valor`. TypeScript te permite definir la "forma" de un objeto con una `interface` o `type`, asegurando que tenga las propiedades correctas.
    *   **Propiedades opcionales (`?`):** Marcan una propiedad que puede o no estar presente en el objeto.
    *   **Métodos:** Son funciones que pertenecen a un objeto y definen su comportamiento.
*   **Funciones:** Bloques de código reutilizables. TypeScript permite tipar los parámetros de entrada y el valor de salida (retorno). Si una función no retorna nada, su tipo de retorno es `void`.
*   **Array:** Una lista ordenada de elementos del mismo tipo (ej: `number[]` para un array de números). Métodos comunes incluyen:
    *   `push()`: Añade un elemento al final.
    *   `pop()`: Quita el último elemento.
    *   `map()`: Transforma cada elemento y devuelve un nuevo array.
    *   `filter()`: Devuelve un nuevo array con los elementos que cumplen una condición.
*   **Enum:** Una forma de dar nombres descriptivos a un conjunto de valores numéricos o de texto. Ejemplo: `enum Talla { Pequeño, Mediano, Grande }`.
*   **Tuplas:** Un array con un número fijo de elementos y tipos predefinidos para cada posición. Ejemplo: `let producto: [string, number] = ["Camisa", 25];`.

#### **Clase 3: Modularización en TypeScript**

*   **Modularización:** Es la práctica de dividir tu código en archivos (módulos) más pequeños y manejables. Esto mejora la organización, la reutilización y el mantenimiento.
*   **Exportación e Importación:**
    *   `export`: Palabra clave para hacer que una variable, función o clase de un archivo esté disponible para otros archivos.
    *   `import`: Palabra clave para usar algo que otro archivo ha exportado.
*   **Exportaciones Nombradas vs. por Defecto:**
    *   **Nombrada:** `export const PI = 3.14;` Se importa con el mismo nombre entre llaves: `import { PI } from './math';`. Un archivo puede tener muchas.
    *   **Por Defecto:** `export default function miFuncion() { ... }`. Solo puede haber una por archivo. Se importa sin llaves: `import miFuncion from './miModulo';`.

#### **Clase 4: Estructura de control de flujo, Genéricos y Type Assertions**

*   **`for...in` vs. `for...of`:**
    *   `for...in`: Itera sobre las **claves** (índices) de un objeto o array. `for (const key in miArray) { ... }`.
    *   `for...of`: Itera sobre los **valores** de un iterable (como un array). Es más moderno y generalmente más útil para arrays. `for (const valor of miArray) { ... }`.
*   **Genéricos (`<T>`):** Permiten crear funciones o clases reutilizables que pueden trabajar con diferentes tipos de datos sin perder la seguridad de tipos. `T` es un marcador de posición para un tipo que se definirá al usar la función. Ejemplo: una función `identidad<T>(arg: T): T` puede recibir un `number` y devolver un `number`, o recibir un `string` y devolver un `string`.
*   **Type Assertions (Aserciones de Tipo):** Es una forma de decirle al compilador "confía en mí, sé qué tipo de dato es este", cuando él no puede saberlo. Se usa la sintaxis `(variable as tipo)` o `<tipo>variable`.

---

### **Módulo 2: Programación Orientada a Objetos (POO)**

#### **Clase 5: Introducción a la POO**

*   **Concepto:** Un paradigma de programación que organiza el código en "objetos", que son instancias de "clases". Piensa en una `Clase` como el plano de una casa, y un `Objeto` como una casa real construida a partir de ese plano.
*   **Atributos y Métodos:**
    *   **Atributos:** Son las variables dentro de una clase (las propiedades). En el plano de la casa, serían "color de la pared", "número de ventanas".
    *   **Métodos:** Son las funciones dentro de una clase (el comportamiento). Serían "abrir puerta()", "encender luces()".
*   **Modificadores de Acceso:**
    *   `public`: Accesible desde cualquier lugar.
    *   `private`: Solo accesible desde dentro de la misma clase.
    *   `protected`: Accesible desde la clase y las clases que hereden de ella.
*   **4 Pilares de la POO:** Son los conceptos fundamentales: Herencia, Abstracción, Encapsulamiento y Polimorfismo.

#### **Clase 6: Herencia y Abstracción**

*   **Herencia:** Permite que una clase (`Clase Derivada` o hija) herede los atributos y métodos de otra (`Clase Base` o padre). Se usa la palabra clave `extends`. Por ejemplo, una clase `Perro` y una clase `Gato` pueden heredar de una clase `Animal`.
*   **Abstracción:** Consiste en ocultar la complejidad interna y mostrar solo la funcionalidad esencial de un objeto. Se logra con:
    *   **Clases Abstractas:** Son plantillas para otras clases. No se pueden crear objetos directamente de ellas. Sirven como base para la herencia.
    *   **Interfaces:** Son contratos que definen la estructura que una clase debe seguir (qué métodos y propiedades debe tener), pero no cómo implementarlos.

#### **Clase 7: Encapsulamiento y Polimorfismo**

*   **Encapsulamiento:** Consiste en agrupar datos (atributos) y los métodos que operan sobre esos datos dentro de un objeto, y proteger el estado interno del objeto del acceso directo. Se usan modificadores de acceso (`private`) y se expone el acceso a través de métodos públicos (`getters` y `setters`).
*   **Polimorfismo:** Significa "muchas formas". Permite que objetos de diferentes clases respondan al mismo mensaje (llamada de método) de maneras diferentes. Por ejemplo, si `Perro` y `Gato` heredan de `Animal` y ambas tienen un método `hacerSonido()`, al llamarlo en un objeto `Perro` sonará "Guau" y en un `Gato` sonará "Miau".

---

### **Módulo 3: Asincronía**

#### **Clase 9: Introducción a la asincronía**

*   **Sincronía vs. Asincronía:**
    *   **Síncrono:** Las tareas se ejecutan una tras otra, en orden. Si una tarea tarda mucho, bloquea a las siguientes.
    *   **Asíncrono:** Una tarea puede empezar, y mientras espera (ej: una respuesta de un servidor), el programa puede continuar ejecutando otras tareas. No bloquea el flujo.
*   `setInterval()` y `setTimeout()`: Funciones para ejecutar código después de un cierto tiempo (`setTimeout`) o repetidamente cada cierto intervalo (`setInterval`), sin bloquear el programa.

#### **Clase 10: Promesas, Event Loop y Callback**

*   **Hilo de Ejecución y Event Loop:** JavaScript tiene un solo hilo de ejecución. El **Event Loop** es el mecanismo que le permite ser asíncrono: las operaciones lentas se delegan, y una vez que terminan, sus resultados se ponen en una cola para ser procesados por el hilo principal cuando esté libre.
*   **Callbacks:** Es una función que se pasa como argumento a otra función, para ser ejecutada después de que una operación asíncrona termine. Anidar muchos callbacks puede llevar al "Callback Hell", un código difícil de leer y mantener.
*   **Promesas:** Un objeto que representa la eventual finalización (o fallo) de una operación asíncrona. Una promesa puede estar en uno de tres estados: *pendiente*, *resuelta* (`fulfilled`) o *rechazada* (`rejected`). Se manejan con `.then()` (para el éxito), `.catch()` (para el error) y `.finally()` (se ejecuta siempre).

#### **Clase 11: Async/Await y Try-Catch**

*   **`async/await`:** Es "azúcar sintáctico" sobre las promesas. Permite escribir código asíncrono que se lee como si fuera síncrono.
    *   `async`: Se coloca antes de una función para indicar que devolverá una promesa.
    *   `await`: Se usa dentro de una función `async` para pausar la ejecución hasta que una promesa se resuelva, devolviendo su valor.
*   **Manejo de Errores con `try/catch`:** En un bloque `async/await`, los errores de las promesas se capturan con un bloque `try...catch` estándar, lo que hace el manejo de errores mucho más limpio.
*   **`Promise.all`:** Recibe un array de promesas y se resuelve cuando *todas* las promesas del array se han resuelto, permitiendo ejecutar operaciones en paralelo.

---

### **Módulo 4: Express y API REST**

#### **Clase 12: Solicitudes HTTP y Framework Express**

*   **Protocolo HTTP:** El lenguaje de la web. Define cómo los clientes (navegadores) piden información a los servidores y cómo estos responden.
    *   **Métodos HTTP:** `GET` (pedir datos), `POST` (enviar datos para crear algo nuevo), `PUT`/`PATCH` (actualizar datos), `DELETE` (borrar datos).
    *   **Códigos de Estado:** Números que indican el resultado de la solicitud (ej: `200 OK`, `404 Not Found`, `500 Internal Server Error`).
*   **ExpressJS:** Un framework minimalista para Node.js que simplifica enormemente la creación de servidores web y APIs. Provee herramientas para manejar rutas, solicitudes y respuestas.
*   **Objetos `req` y `res`:**
    *   `req` (Request): Un objeto que contiene toda la información de la solicitud del cliente (URL, parámetros, cuerpo de la petición, etc.).
    *   `res` (Response): Un objeto que se usa para construir y enviar la respuesta al cliente.

#### **Clase 13: Fetch, Routers, Postman**

*   **Fetch:** Una API moderna del navegador (y disponible en Node.js) para hacer solicitudes HTTP. Es una alternativa basada en promesas a métodos más antiguos.
*   **Router:** En Express, un `Router` es un "mini-servidor" que permite agrupar rutas relacionadas en un mismo archivo, ayudando a organizar el código de la aplicación.
*   **Postman:** Una aplicación de escritorio que sirve como cliente de API. Permite enviar todo tipo de solicitudes HTTP a tu servidor para probar tus endpoints sin necesidad de tener una interfaz de usuario (frontend) construida.

#### **Clase 14: API REST, Middlewares, Zod, CORS**

*   **API REST:** Un estilo de arquitectura para diseñar aplicaciones en red. Se basa en principios como la comunicación sin estado y el uso de métodos HTTP estándar. Un **endpoint** es una URL específica donde la API expone un recurso (ej: `/api/usuarios`).
*   **Middlewares:** Son funciones que se ejecutan en medio del ciclo de solicitud-respuesta en Express. Tienen acceso a los objetos `req` y `res`. Se usan para tareas como autenticación, logging, validación de datos, etc.
*   **Zod:** Una librería para la validación de esquemas de datos en TypeScript. Permite definir la forma exacta que deben tener los datos de entrada (ej: del `req.body`) y devuelve errores claros si no cumplen el formato.
*   **CORS (Cross-Origin Resource Sharing):** Un mecanismo de seguridad del navegador que restringe las solicitudes HTTP que se hacen a un dominio diferente al que sirvió la página web. En el backend, se debe configurar CORS para permitir explícitamente que otros dominios (como tu frontend) puedan consumir tu API.

#### **Clase 15: Tokens**

*   **Tokens:** Una pieza de información digital que se utiliza para autenticar a un usuario. Después de que un usuario inicia sesión, el servidor le genera un token. El cliente guarda este token y lo envía en cada solicitud posterior para demostrar quién es.
*   **JWT (JSON Web Tokens):** Un estándar popular para crear tokens. Un JWT contiene información (payload) sobre el usuario firmada digitalmente por el servidor, lo que garantiza su autenticidad.
*   **Payload:** La parte del JWT que contiene los "claims" o datos sobre el usuario (como su ID, rol, etc.). No debe contener información sensible, ya que es legible.

#### **Clase 16: Sistema de Logueo y Variables de Entorno**

*   **Sistema de Logueo (Logging):** El proceso de registrar eventos importantes que ocurren en la aplicación (errores, solicitudes, accesos). Es crucial para depurar problemas y monitorear la salud del sistema en producción.
*   **Variables de Entorno:** Variables que se configuran fuera del código de la aplicación y que esta puede leer. Se usan para almacenar datos de configuración que varían entre entornos (desarrollo, producción), como claves de API, credenciales de base de datos, etc.
*   **`.env` y `dotenv`:** `.env` es un archivo de texto plano donde se definen estas variables. `dotenv` es una librería que carga las variables de este archivo en el entorno de ejecución de Node.js.

---

### **Módulo 5 y 6: Repaso, Deploy y Desafío Final**

#### **Clase 17: Deploy y Producción**

*   **Deploy (Despliegue):** El proceso de tomar el código de tu aplicación y ponerlo en un servidor para que sea accesible al público en internet.
*   **Ambientes (desarrollo, staging, producción):**
    *   **Desarrollo:** Tu máquina local.
    *   **Staging:** Un entorno casi idéntico a producción para hacer pruebas finales.
    *   **Producción:** El servidor en vivo que usan los usuarios finales.
*   **Hosting:** El servicio que provee el servidor donde se alojará tu aplicación (ej: Vercel, Railway, AWS, DigitalOcean).

#### **Clases 18 a 22: Repaso y Desafío Final**

Estas clases se centran en integrar todos los conceptos aprendidos (`CRUD` en una API REST, Express, Postman, Zod para validación, JWT para seguridad, etc.) a través de ejercicios prácticos y la construcción de una aplicación completa. El **Desafío Final** es un proyecto integrador donde deberás construir una API RESTful desde cero, aplicando todas las buenas prácticas vistas en el curso.
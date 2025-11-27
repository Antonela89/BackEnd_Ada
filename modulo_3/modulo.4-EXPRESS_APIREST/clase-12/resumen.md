# Resumen Clase 12: Protocolo HTTP, Frameworks y Express

## 1. Protocolo HTTP (HyperText Transfer Protocol)
Es un protocolo de comunicación para transferir datos en la web. Es **"sin estado"** (stateless), lo que significa que cada solicitud es independiente y no guarda información de las anteriores.

### Funcionamiento Básico
1.  **Cliente (Navegador):** Envía una solicitud (Request).
2.  **Servidor:** Procesa y devuelve una respuesta (Response).
3.  **Cliente:** Recibe y muestra la respuesta.

### Métodos HTTP
Definen la acción a realizar:
*   **GET:** Recuperar información.
*   **POST:** Enviar datos (crear recursos).
*   **PUT:** Actualizar un recurso completo.
*   **DELETE:** Eliminar un recurso.
*   *Otros:* PATCH (actualización parcial), OPTIONS, HEAD.

### Estructura de la Comunicación
*   **Solicitud (Request):** Línea de solicitud (método + URL), Encabezados (metadatos), Cuerpo (datos, usualmente en JSON para POST/PUT).
*   **Respuesta (Response):** Línea de estado (código), Encabezados, Cuerpo (HTML, JSON, etc.).

### Códigos de Estado (Status Codes)
*   **1xx (Informativo):**
*   **2xx (Éxito):** `200 OK`, `201 Created` (para POST), `204 No Content` (para DELETE).
*   **3xx (Redirección):** `301 Moved Permanently`.
*   **4xx (Error de Cliente):** `400 Bad Request` (datos mal formados), `401 Unauthorized` (falta login), `403 Forbidden` (sin permisos), `404 Not Found`.
*   **5xx (Error de Servidor):** `500 Internal Server Error`.

---

## 2. Frameworks
Un framework es un conjunto de herramientas, bibliotecas y buenas prácticas que proveen una estructura base ("esqueleto") para no reinventar la rueda al programar.

### Tipos de Frameworks
*   **Front-End (Cliente):** React.js, Vue.js, Angular.
*   **Back-End (Servidor):** Express (Node.js), Django (Python), Spring Boot (Java).
*   **Full-Stack:** Next.js, Nuxt.js.

---

## 3. ExpressJS
Es un framework minimalista y flexible para **Node.js** que facilita la creación de servidores y APIs.
*   **Instalación:** `npm install express`

### Conceptos Clave en Express

#### A. Endpoints
Puntos de acceso a la API (URL específica + Método HTTP).
*   *Ejemplo:* `GET /usuarios` (obtener lista), `POST /usuarios` (crear usuario).

#### B. Objetos `req` y `res`
Son fundamentales en cada ruta:
*   **`req` (Request):** Contiene la info que envía el cliente.
    *   `req.params`: Parámetros dinámicos de ruta (ej: `/user/:id`).
    *   `req.query`: Parámetros de consulta (ej: `?name=Ada`).
    *   `req.body`: Datos enviados en el cuerpo (JSON).
*   **`res` (Response):** Objeto para construir la respuesta del servidor.
    *   `res.status(code)`: Define el código HTTP.
    *   `res.send(body)`: Envía la respuesta (texto, objeto, etc.).
    *   `res.json(obj)`: Envía respuesta en formato JSON.

#### C. Objeto `app`
Es la instancia de Express. Métodos principales:
*   **Rutas:** `app.get()`, `app.post()`, `app.delete()`, etc.
*   **Middleware:** `app.use()`.
*   **Servidor:** `app.listen(puerto, callback)` para iniciar el servidor.

---

## 4. Herramientas y Configuraciones Importantes

### Middleware `express.json()`
Es esencial para que Express pueda entender y leer los datos **JSON** enviados en el `body` de una petición POST o PUT.
*   **Uso:** `app.use(express.json());`
*   Sin esto, `req.body` aparecería vacío.

### Rutas Dinámicas (`/:id`)
Permiten capturar valores variables en la URL.
*   **Definición:** `app.get('/users/:id', ...)`
*   **Captura:** Se accede mediante `req.params.id`.

### Javascript Moderno (ES6)
*   **Desestructuración de Objetos:** Extraer propiedades directamente a variables.
    *   *Ejemplo:* `const { name, email } = req.body;` (en lugar de `req.body.name`).
*   **Export Default:** Facilita la importación de módulos sin llaves específicas, haciendo el código más limpio y reutilizable.
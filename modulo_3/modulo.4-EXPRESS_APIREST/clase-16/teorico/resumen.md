Aquí tienes un resumen detallado en formato Markdown basado en el contenido del PDF sobre **Sistemas de Logueo y Variables de Entorno**.

***

# Resumen: Sistema de Logueo y Variables de Entorno

## 1. Introducción al Sistema de Logueo
Un sistema de logueo es la base de seguridad de cualquier aplicación web. Permite verificar la identidad de los usuarios y controlar su acceso a las funcionalidades.

### Conceptos Claves
*   **Autenticación:** Verifica que el usuario es quien dice ser (Ej. validar correo y contraseña).
*   **Autorización:** Verifica si el usuario tiene permiso para realizar ciertas acciones o acceder a recursos específicos.

### Objetivos Principales
*   **Seguridad:** Proteger recursos sensibles.
*   **Personalización:** Mostrar contenido adaptado al usuario.
*   **Control de acceso:** Definir permisos por usuario.

---

## 2. Componentes Esenciales
Para que un sistema de logueo funcione correctamente, requiere los siguientes elementos:

1.  **Credenciales del usuario:** Identificador único (email/usuario) y clave secreta (contraseña).
2.  **Base de datos:** Lugar donde se almacena la información de los usuarios.
3.  **Hashing de contraseñas:** Algoritmos para transformar la contraseña en un valor irreversible (nunca guardar en texto plano).
4.  **Mecanismo de autenticación:** Lógica que compara credenciales ingresadas vs. almacenadas.
5.  **Tokens de sesión:** Mantienen al usuario autenticado (Ej. **JWT** o Cookies).
6.  **Middlewares:** Interceptan solicitudes para validar tokens antes de dar acceso a rutas.
7.  **Cierre de sesión (Logout):** Mecanismo para invalidar el token o la sesión.

---

## 3. Seguridad y Hashing
El **hashing** convierte una cadena de texto (contraseña) en una representación única e irreversible mediante algoritmos matemáticos.

### Características
*   **Irreversibilidad:** No se puede recuperar la contraseña original desde el hash.
*   **Salting:** Añade un valor aleatorio único a cada contraseña antes de hashear para evitar ataques de "rainbow tables".
*   **Peppering (Opcional):** Valor secreto conocido solo por el sistema para añadir seguridad extra.

### Algoritmos Comunes
*   **bcrypt:** Diseñado para contraseñas, incluye *salting* automático y costo de procesamiento configurable. (Muy recomendado).
*   **Argon2:** Altamente seguro y configurable (memoria, tiempo, paralelismo).
*   **PBKDF2:** Robusto, usa múltiples iteraciones, aunque puede ser menos eficiente que los anteriores.

---

## 4. Flujo de Autenticación en el Backend

1.  **Registro (Sign Up):**
    *   Cliente envía datos.
    *   Servidor valida, genera el **hash** de la contraseña y guarda el usuario en la base de datos.
2.  **Inicio de sesión (Login):**
    *   Cliente envía credenciales.
    *   Servidor busca al usuario y compara la contraseña con el hash.
    *   Si es correcto, genera y envía un **Token (JWT)**.
3.  **Protección de rutas:**
    *   Cliente solicita una ruta protegida enviando el token en los encabezados (Headers).
    *   Middleware valida el token.
4.  **Logout:**
    *   Se elimina el token del lado del cliente.

---

## 5. Variables de Entorno y Archivos `.env`

### ¿Qué son?
Son pares **clave-valor** que configuran el comportamiento de la aplicación sin modificar el código fuente. Se usan para datos sensibles y configuración específica del entorno (desarrollo, producción).

### Ejemplos Comunes
*   `DATABASE_URL`: Conexión a la BDD.
*   `SECRET_KEY`: Clave para firmar tokens.
*   `PORT`: Puerto del servidor.

### Archivo `.env` y Librería `dotenv`
*   **Archivo `.env`:** Archivo de texto plano en la raíz del proyecto donde se definen las variables (Ej: `PORT=3000`).
*   **Librería `dotenv` (Node.js):** Carga las variables del archivo `.env` en `process.env` para usarlas en el código.
    *   **Instalación:** `npm install dotenv`
    *   **Uso:** `require('dotenv').config()`
*   **Seguridad en Git:** El archivo `.env` **nunca** debe subirse al repositorio. Debe agregarse al archivo `.gitignore`.

---

## 6. Proyecto Práctico (Node.js + Express)

Para implementar lo aprendido, se sugiere la siguiente configuración:

### Dependencias necesarias
Se instalan mediante `npm`:
*   `express`: Servidor web.
*   `bcrypt`: Hashing de contraseñas.
*   `jsonwebtoken`: Manejo de tokens JWT.
*   `body-parser`: Procesar datos JSON del cliente.
*   `dotenv`: Variables de entorno.

### Estructura básica
*   `server.js`: Lógica del servidor.
*   `.env`: Secretos y configuración.
*   `database.json`: Simulación de base de datos (para propósitos educativos).
*   `.gitignore`: Para excluir el archivo `.env` y `node_modules`.
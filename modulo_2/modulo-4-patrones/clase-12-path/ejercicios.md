Carrera Back End con NodeJs
Profesora: Sachetti Sofia

# Actividades Clase Numero 12

👩‍💻 **¡Hola chicas!**

En esta clase, exploraremos el módulo `path`, una herramienta esencial en Node.js para la gestión y manipulación de rutas de archivos y directorios.

Comprender el módulo `path` es fundamental para trabajar eficientemente con rutas en servidores y aplicaciones Node.js.

---

## Actividades:

### Ejercicio 1: Servidor TCP que Valida Rutas

**Objetivo:** Crear un servidor TCP que acepte comandos desde el cliente para validar si una ruta es absoluta o relativa, y responder con la información correspondiente.

**Pasos:**

1.  **Configuración del Servidor:**
    *   Crea un servidor TCP que escuche en un puerto específico (por ejemplo, 8080).

2.  **Comando para Validar Rutas:**
    *   El servidor debe recibir una ruta desde el cliente.
    *   Usa `path.isAbsolute` para verificar si la ruta es absoluta o relativa.

3.  **Responder al Cliente:**
    *   Envía una respuesta al cliente indicando si la ruta es absoluta o relativa.

**Instrucciones:**
*   Ejecuta el servidor y conecta un cliente.
*   Envía diferentes rutas para verificar la funcionalidad.
*   **IMPORTANTE:** Cuando la consigna menciona que el servidor debe poder recibir "comandos" desde el cliente, se refiere a que el cliente enviará datos (en este caso, rutas) al servidor, y el servidor deberá procesar esos datos para determinar si son rutas absolutas o relativas. En el contexto de un servidor TCP, un "comando" puede ser cualquier tipo de dato que el cliente envíe al servidor para que lo procese. En este caso, el "comando" es una ruta de archivo que el cliente envía al servidor.

---

### Ejercicio 2: Servidor TCP que Normaliza Rutas

**Objetivo:** Crear un servidor TCP que normalice las rutas recibidas utilizando `path.normalize` y envíe la ruta normalizada al cliente.

**Pasos:**

1.  **Configuración del Servidor:**
    *   Crea un servidor TCP que escuche en un puerto específico (por ejemplo, 8081).

2.  **Comando para Normalizar Rutas:**
    *   El servidor debe recibir una ruta desde el cliente.
    *   Usa `path.normalize` para normalizar la ruta.

3.  **Responder al Cliente:**
    *   Envía la ruta normalizada al cliente.

**Instrucciones:**
*   Ejecuta el servidor y conecta un cliente.
*   Envía rutas con barras redundantes y puntos (e.g., `./docs/../file.txt`) para verificar la funcionalidad.

---

### Ejercicio 3: Servidor TCP que Obtiene Información de la Ruta

**Objetivo:** Crear un servidor TCP que acepte una ruta y responda con la base, el directorio, y la extensión del archivo usando `path.basename`, `path.dirname`, y `path.extname`.

**Pasos:**

1.  **Configuración del Servidor:**
    *   Crea un servidor TCP que escuche en un puerto específico (por ejemplo, 8082).

2.  **Comando para Obtener Información de la Ruta:**
    *   El servidor debe recibir una ruta desde el cliente.
    *   Usa `path.basename`, `path.dirname`, y `path.extname` para obtener la base del nombre, el directorio y la extensión del archivo, respectivamente.

3.  **Responder al Cliente:**
    *   Envía la información al cliente en un formato legible.

**Instrucciones:**
*   Ejecuta el servidor y conecta un cliente.
*   Envía rutas completas (e.g., `/home/user/docs/file.txt`) para verificar la funcionalidad.
Carrera Back End con NodeJs
Profesora: Sachetti Sofia

# Actividades Clase Numero 16

👩‍💻 **¡Hola Chicas!** 👋

Este PDF está diseñado para ayudarlas a repasar y consolidar todos los conceptos que hemos visto en clase, pero de una manera más integrada y práctica. Aquí encontrarán ejercicios complejos pero didácticos que mezclan varios temas, desde rutas y módulos en Node.js hasta la creación de servidores TCP y el uso de patrones de diseño.

Cada ejercicio viene con una explicación detallada y una resolución paso a paso, para que no solo resuelvan los problemas, sino que también entiendan cómo y por qué funcionan las cosas.

¡Vamos a poner en práctica todo lo aprendido! 💻✨

---

## Actividades:

### Ejercicio 1: Crear un Servidor TCP con Persistencia de Datos
**Consigna:**
Crea un servidor TCP que reciba mensajes de los clientes y los guarde en un archivo JSON. Luego, permite a los clientes consultar todos los mensajes almacenados.

**Pasos:**
*   Usa el módulo `net` para crear el servidor.
*   Usa `fs` para guardar los mensajes en un archivo `mensajes.json`.
*   Implementa un comando especial (ej: `/historial`) para que los clientes puedan consultar todos los mensajes.

---

### Ejercicio 2: Aplicación de Tareas con Patrón MVC y Persistencia
**Consigna:**
Crea una aplicación de lista de tareas usando el patrón MVC. Las tareas deben guardarse en un archivo JSON y poder ser consultadas, añadidas y eliminadas desde la línea de comandos.

**Pasos:**
*   Usa `readline-sync` para interactuar con el usuario.
*   Separa el código en Modelo, Vista y Controlador.
*   Usa `fs` para persistir las tareas en un archivo JSON.

---

### Ejercicio 3: Sistema de Autenticación con UUID y JSON
**Consigna:**
Crea un sistema de autenticación básico donde los usuarios puedan registrarse e iniciar sesión. Cada usuario debe tener un ID único generado con `UUID` y sus datos deben guardarse en un archivo JSON.

**Pasos:**
*   Usa el módulo `uuid` para generar IDs únicos.
*   Usa `fs` para guardar y leer los usuarios en un archivo JSON.
*   Implementa funciones para registrar usuarios y validar credenciales.

---

### Ejercicio 4: Aplicación de Notas con Módulo Path y FS
**Consigna:**
Crea una aplicación de notas donde cada nota se guarde en un archivo de texto dentro de una carpeta específica. Usa el módulo `path` para manejar rutas y `fs` para crear y leer archivos.

**Pasos:**
*   Usa `path.join` para crear rutas dinámicas a la carpeta de notas.
*   Usa `fs` para crear, leer y eliminar archivos de notas.
*   Implementa un menú interactivo con `readline-sync`.

---

### Ejercicio 5: Aplicación de Cifrado con Módulo Crypto y Readline
**Consigna:**
Crea una aplicación que permita a los usuarios cifrar y descifrar mensajes usando el módulo `crypto`. Implementa un menú interactivo con `readline-sync`.

**Pasos:**
*   Usa `crypto.createCipheriv` y `crypto.createDecipheriv` para cifrar y descifrar mensajes.
*   Usa `readline-sync` para crear un menú interactivo.
*   Guarda los mensajes cifrados en un archivo JSON.
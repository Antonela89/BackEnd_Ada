# Actividad Práctica: Protegiendo la Base de Datos del Refugio de Animales 

Este proyecto forma parte de la **Carrera Back End con NodeJs (202504)** bajo la supervisión de la **Profesora Sachetti Sofia**. El objetivo es mejorar la seguridad de un sistema de autenticación aplicando técnicas de protección contra ataques comunes.

## Objetivo
Mejorar la seguridad de un sistema de autenticación para un refugio de animales, mitigando ataques de **Fuerza Bruta**, **Diccionario** y **Rainbow Tables** en un backend de Node.js.

---

## Paso a Paso y Reflexiones

### 1. Creación de la Base de Datos (Insegura)
Se inicia con un almacenamiento de contraseñas en texto plano para observar su vulnerabilidad.

*   **Implementación:** Uso de un array de objetos con usuarios como `admin` y `voluntaria`.
*   **Reflexión:** El almacenamiento en texto plano es extremadamente peligroso. Si la base de datos se filtra o es accedida por personal no autorizado, todas las cuentas quedan comprometidas instantáneamente sin necesidad de ningún esfuerzo adicional por parte del atacante.

### 2. Simulación de un Ataque de Fuerza Bruta
Probamos combinaciones aleatorias o comunes de forma automatizada.

*   **Implementación:** Bucle que recorre una lista de contraseñas contra el usuario `admin`.
*   **Reflexión:** Un script tarda milisegundos en encontrar una contraseña común. La velocidad de procesamiento de las computadoras modernas hace que las contraseñas simples sean vulnerables en segundos.

### 3. Protección contra Fuerza Bruta (Rate Limiting)
Implementamos un mecanismo de bloqueo para frenar intentos automáticos.

*   **Implementación:** Objeto `intentosFallidos` que bloquea al usuario tras 5 fallos.
*   **Reflexión:** Al limitar los intentos, invalidamos los ataques masivos automatizados. Un atacante que intente miles de combinaciones ahora se verá detenido rápidamente, haciendo que el ataque no sea rentable en términos de tiempo.

### 4. Simulación de un Ataque de Diccionario
El atacante utiliza una lista de palabras predefinidas (comunes en el lenguaje humano).

*   **Implementación:** Lectura de un archivo `diccionario.txt` línea por línea.
*   **Reflexión:** Este ataque es más eficiente que la fuerza bruta aleatoria. Los humanos suelen elegir palabras existentes o patrones predecibles, lo que reduce drásticamente el número de intentos que el atacante necesita realizar.

### 5. Protección con Hashing y Sal (Bcrypt)
Transformamos las contraseñas en valores criptográficos no reversibles.

*   **Implementación:** Uso de la librería `bcrypt` con un factor de costo (Salt).
*   **Reflexión:** La **Sal (Salt)** garantiza que, incluso si dos usuarios tienen la misma contraseña, sus hashes sean totalmente diferentes. Esto evita que un atacante identifique usuarios con claves idénticas a simple vista.

### 6. Simulación de un Ataque Rainbow (Rainbow Tables)
Uso de tablas precalculadas para descifrar hashes rápidos y deterministas.

*   **Implementación:** Generación de un hash MD5/SHA1 con el módulo nativo `crypto` y búsqueda en bases de datos online (como CrackStation).
*   **Reflexión:** Los hashes deterministas sin sal son vulnerables porque ya han sido precalculados por terceros. El ataque no consiste en "romper" el hash, sino en buscarlo en un índice gigante. Se evita usando algoritmos lentos con sal (como `bcrypt` o `argon2`).

### 7. Protección con Sal y Pimienta
Añadimos una capa de secreto extra fuera de la base de datos.

*   **Implementación:** Concatenación de un valor secreto (`pepper`) guardado en variables de entorno (`.env`) antes del hashing.
*   **Reflexión:** Si un atacante roba la base de datos pero no tiene acceso al servidor (donde reside el archivo `.env`), no podrá realizar ataques offline contra los hashes, ya que le falta el componente secreto ("la pimienta").

---

## 🛠️ Tecnologías Utilizadas
- **Node.js** (Entorno de ejecución)
- **Bcrypt:** Para hashing seguro y salado.
- **Crypto:** Para demostración de hashes inseguros (MD5).
- **Dotenv:** Para la gestión de la "Pimienta" en variables de entorno.
- **FS (File System):** Para lectura de diccionarios.

---

## Evaluación Final
1. **Mejora progresiva:** Se logró transformar un sistema vulnerable en uno con múltiples capas de defensa (Defensa en profundidad).
2. **Comparativa:** Se analizó cómo cada técnica de protección neutraliza un tipo de ataque específico (Ej: Sal contra Rainbow Tables, Bloqueo contra Fuerza Bruta).

## Reflexión Final 
*   **Técnicas aplicables:** En proyectos reales, el uso de `bcrypt` y el límite de intentos (Rate Limiting) son obligatorios.
*   **Mayor seguridad:** Para el refugio, se podría añadir Autenticación de Dos Factores (2FA) y auditoría de logs para detectar comportamientos sospechosos en tiempo real.
*   **Eficacia de ataques:** El ataque de diccionario y el *Credential Stuffing* (probar contraseñas filtradas de otros sitios) suelen ser los más efectivos hoy en día debido a la tendencia humana de reutilizar contraseñas.

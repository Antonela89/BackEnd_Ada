## Parte 3: Seguridad (Investigación y Respuestas)

### 1. Protección de datos sensibles
*   **Usar variables de entorno para manejar la conexión a la base de datos**
    Empleo de archivo .env donde se guardan las variables de entorno. 
*   **Evitar exponer credenciales en el código**
    Se logra usando el archivo .gitignore. En el se coloca el archivo .env para que no se suba al repositorio remoto.

### 2. Prevención de ataques comunes
*   **¿Phishing contra un usuario del restaurante?**
    Un atacante podría enviar un correo o SMS falso simulando ser el restaurante, ofreciendo un cupón de descuento. El enlace llevaría a una página idéntica a la del restaurante para que el usuario ingrese sus credenciales o datos de tarjeta de crédito.
*   **¿Problemas por inyección de código en MongoDB?**
    Aunque no es SQL Injection tradicional, existe la **NoSQL Injection**. Un atacante podría enviar objetos como `{"$gt": ""}` en un campo de login para saltarse la autenticación o, peor aún, usar comandos como `$where` para ejecutar código JavaScript malicioso en el servidor de la base de datos y borrar colecciones enteras.
*   **¿Falta de validación de datos?**
    Si no validamos que el precio sea un número positivo o que el nombre no contenga scripts, la API es vulnerable. Podrían inyectar datos basura que rompan la lógica del negocio o realizar ataques XSS (Cross-Site Scripting) si esos nombres de platos se muestran luego en una web sin filtrar.

### 3. Implementación de Seguridad (Helmet)
*   **¿Qué hace helmet()?** Es un middleware que configura automáticamente cabeceras HTTP de seguridad.
*   **Protección contra XSS y Clickjacking:** 
    *   **XSS:** Configura la cabecera `X-XSS-Protection` para detener la carga de scripts maliciosos.
    *   **Clickjacking:** Configura `X-Frame-Options` para evitar que tu sitio sea cargado dentro de un `iframe` invisible de otra web atacante, evitando que el usuario haga clic en botones "ocultos".

### 4. Evaluación de vulnerabilidades
Ejecuta en tu terminal:
```bash
npm audit
```

*   **¿Qué hace npm audit?** Es una herramienta que escanea todas las librerías instaladas en tu proyecto y las compara con una base de datos pública de vulnerabilidades conocidas.
*   **¿Cómo corregir vulnerabilidades?** 
    1. Usando `npm audit fix` para que npm intente actualizar automáticamente a versiones seguras.
    2. Si es una vulnerabilidad "mayor", hay que actualizar manualmente el paquete en el `package.json`.




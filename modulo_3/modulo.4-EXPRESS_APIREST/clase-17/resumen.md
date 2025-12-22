### 1. Conceptos Fundamentales

-   **¿Qué es el Deploy?**: Es el proceso de trasladar una aplicación de un entorno local a un servidor o infraestructura accesible para los usuarios finales a través de internet.
-   **Componentes Clave**:
    1.  **Código fuente**: La aplicación desarrollada.
    2.  **Servidor**: El hardware o infraestructura (físico, VPS o nube como AWS/Render).
    3.  **Configuración**: Ajustes necesarios (variables de entorno, bases de datos) para que funcione fuera de local.

### 2. Ambientes de Trabajo

Existen tres entornos principales:

-   **Desarrollo (Development)**: Entorno local del programador con herramientas de depuración (nodemon, console.log).
-   **Staging**: Copia fiel de producción para pruebas finales con datos ficticios.
-   **Producción (Production)**: El entorno real donde vive la aplicación. Se prioriza la alta disponibilidad, seguridad, rendimiento y el uso de datos reales.

### 3. Importancia de la Producción

El impacto de los errores en este nivel es crítico. Se deben cuidar cuatro pilares:

-   **Disponibilidad**: Accesible 24/7 (usando balanceadores de carga).
-   **Escalabilidad**: Capacidad de manejar el crecimiento de usuarios (AWS Auto Scaling, Kubernetes).
-   **Seguridad**: Protección de datos sensibles (HTTPS, ocultar claves API).
-   **Rendimiento**: Tiempos de respuesta mínimos y monitoreo (PM2).

### 4. Preparación Técnica para el Deploy

-   **Variables de Entorno (.env)**: Se usan para separar la configuración del código y proteger datos sensibles. Es vital incluirlas en `.gitignore`.
-   **package.json**: Debe incluir scripts personalizados (start, dev, build) y el campo `engines` para especificar versiones de Node.js y npm.
-   **Gestión de Dependencias**:
    -   `dependencies`: Necesarias para funcionar en producción (ej. Express).
    -   `devDependencies`: Solo para desarrollo (ej. Nodemon, ESLint).

### 5. Hosting y Tipos de Deploy

-   **Tipos de Hosting**:
    -   **Cloud Hosting (AWS, Azure)**: Escalabilidad bajo demanda.
    -   **Servicios Gestionados (Heroku, Render, Vercel)**: La plataforma gestiona la infraestructura; ideal para principiantes.
    -   **VPS (DigitalOcean)**: Control total del servidor, requiere más conocimientos.
-   **Métodos de Deploy**:
    -   **Manual**: Proceso paso a paso controlado por el desarrollador. Propenso a errores.
    -   **Automatizado (CI/CD)**: Integración y Despliegue Continuo. Usa herramientas como **GitHub Actions** o Jenkins para automatizar pruebas y lanzamientos.

### 6. Proyecto Práctico: Agenda de Contactos

La clase culmina con la creación y despliegue de una "Agenda de Contactos":

-   **Backend**: Node.js y Express con persistencia en un archivo `contacts.json`. Rutas CRUD (GET, POST, PUT, DELETE).
-   **Frontend**: HTML, CSS y JavaScript (usando `fetch` para conectar con el backend).
-   **Pruebas**: Verificación en `localhost:3000` y uso de herramientas como Postman.
-   **Deploy en Render**:
    1.  Subir el código a **GitHub**.
    2.  Conectar el repositorio en **Render**.
    3.  Configurar el "Build Command" (`npm install`) y "Start Command" (`node backend/index.js`).


![Link a Repositorio de Agenda](https://github.com/Antonela89/Agenda_Contactos_ADA)

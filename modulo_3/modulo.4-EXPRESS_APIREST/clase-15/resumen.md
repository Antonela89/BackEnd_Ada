# Resumen: Autenticación con Tokens y JWT

## 1. ¿Qué es un Token?
Un token es un pequeño paquete de datos generado por el servidor que funciona como prueba de que un usuario ha sido autenticado correctamente.
*   **Funcionamiento:** Se entrega al cliente tras un inicio de sesión exitoso y se envía en cada solicitud posterior para verificar la identidad sin reenviar credenciales.
*   **Características principales:**
    *   **Compacto:** Ligero y fácil de transmitir.
    *   **Seguro:** Puede estar firmado o cifrado.
    *   **Desacoplado (Stateless):** No requiere que el servidor guarde el estado de cada usuario (a diferencia de las sesiones tradicionales).

## 2. Tipos de Tokens

### A. Tokens de Sesión
*   Almacenan la información en el servidor (Stateful).
*   Generalmente usan Cookies y un ID de sesión.
*   **Desventaja:** Menos escalable y vulnerable a *Session Hijacking*.

### B. JSON Web Tokens (JWT)
*   Estándar abierto (RFC 7519).
*   Ideal para aplicaciones modernas sin estado (**Stateless**).
*   La información viaja dentro del token en formato JSON.
*   **Instalación en Node.js:**

    ```bash
    npm install jsonwebtoken
    ```

---

## 3. Estructura de un JWT
Un JWT se compone de tres partes separadas por puntos (`.`) y codificadas en **Base64URL**:

1.  **Header (Encabezado):** Indica el tipo de token (`JWT`) y el algoritmo de firma (ej. `HS256`).
2.  **Payload (Carga útil):** Contiene los datos o "claims" (declaraciones) que se quieren transmitir.
3.  **Signature (Firma):** Garantiza que el token no ha sido modificado. Se genera combinando el Header, el Payload y una **clave secreta**.

**Formato visual:** `Header.Payload.Signature`

---

## 4. El Payload en Profundidad
El payload contiene los datos, pero **NO está encriptado**, solo codificado. Cualquiera con acceso al token puede leer esta información, por lo que **nunca se debe guardar información sensible** (como contraseñas) aquí.

Existen tres tipos de *Claims* (datos):
1.  **Registradas (Estándar):** No obligatorias pero recomendadas (ej. `iss` para emisor, `exp` para expiración, `sub` para usuario).
2.  **Públicas:** Datos personalizados definidos por quienes usan el token (ej. `role: "admin"`).
3.  **Privadas:** Datos específicos entre las partes de la aplicación.

---

## 5. Estrategia de Tokens: Access vs. Refresh
En sistemas modernos se utilizan dos tokens para balancear seguridad y usabilidad:

*   **Access Token (Token de Acceso):** Vida corta (ej. 15 min). Se usa para autorizar peticiones.
*   **Refresh Token (Token de Actualización):** Vida larga (días/semanas). Se usa únicamente para obtener un nuevo *Access Token* cuando el anterior expira.

---

## 6. Seguridad en el uso de Tokens
El PDF destaca 5 pilares para proteger los tokens:

1.  **Expiración:** Siempre configurar un tiempo de vida (`exp`) para limitar la ventana de ataque.
2.  **Almacenamiento Seguro:**
    *   *LocalStorage:* Fácil de usar, pero vulnerable a ataques XSS (Cross-Site Scripting).
    *   *Cookies (HttpOnly):* Más seguras. Con las banderas `HttpOnly` (no accesible por JS) y `Secure` (solo HTTPS), protegen contra XSS.
3.  **Firmas y Claves Secretas:** Usar algoritmos robustos (HMAC SHA256) y claves secretas complejas. Si se altera el token, la firma cambia y el token se invalida.
4.  **Validación:** El servidor siempre debe verificar que el token esté bien formado, firmado correctamente y no expirado.
5.  **Revocación:** Implementar "listas negras" para invalidar tokens comprometidos antes de su expiración natural.

---

## 7. Ejemplo Práctico con Node.js y Express

A continuación, se presenta un ejemplo consolidado de cómo implementar JWT basado en el código mostrado en las diapositivas.

### Configuración inicial
```bash
npm init -y
npm install express jsonwebtoken
```

### Código del Servidor (`index.js`)

```javascript
const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3000;
const SECRET_KEY = "mi_clave_super_secreta"; // En producción, usar variables de entorno

app.use(express.json());

// 1. Ruta de Login: Generación del Token
app.post('/login', (req, res) => {
    // Aquí iría la validación real de usuario/contraseña contra BDD
    const user = {
        id: 123,
        name: "Juan Perez",
        email: "juan@example.com",
        role: "admin"
    };

    // Crear el token firmado
    // payload: user, clave secreta, opciones (expiración)
    const token = jwt.sign(user, SECRET_KEY, { expiresIn: '1h' });

    res.json({
        message: 'Inicio de sesión exitoso',
        token: token
    });
});

// Middleware para validar el token en rutas protegidas
function verifyToken(req, res, next) {
    // Obtener el header "Authorization"
    const bearerHeader = req.headers['authorization'];

    if (typeof bearerHeader !== 'undefined') {
        // El formato es "Bearer <token>"
        const bearerToken = bearerHeader.split(' ')[1];
        
        // Verificar el token
        jwt.verify(bearerToken, SECRET_KEY, (err, decoded) => {
            if (err) {
                return res.status(403).json({ message: 'Token inválido o expirado' });
            }
            // Si es válido, guardamos los datos decodificados en la request
            req.user = decoded;
            next();
        });
    } else {
        res.status(401).json({ message: 'No autorizado. Token no proporcionado.' });
    }
}

// 2. Ruta Protegida: Uso del token
app.get('/protected', verifyToken, (req, res) => {
    res.json({
        message: 'Acceso a ruta protegida concedido',
        userData: req.user // Datos extraídos del token
    });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
```

### Flujo de Uso (Explicado)
1.  **Login:** El cliente hace POST a `/login`. Recibe un `token`.
2.  **Acceso:** El cliente quiere entrar a `/protected`. Debe enviar el token en el header:
    *   Header Key: `Authorization`
    *   Header Value: `Bearer eyJhbGciOiJIUz...` (el token recibido).
3.  **Verificación:** El middleware `verifyToken` comprueba la firma. Si es válida, permite el acceso; si no, devuelve error 403.
# Resumen Clase 14: API REST, Middlewares, Zod y CORS

Este documento cubre los fundamentos para construir una API robusta utilizando Express y TypeScript, enfocándose en la arquitectura REST, la validación de datos, la seguridad en el navegador y el uso de interceptores de solicitudes.

## 1. API REST

### Conceptos Básicos
*   **API (Application Programming Interface):** Es un puente que permite que dos programas se comuniquen entre sí (ej. una app de clima pidiendo datos a un servidor).
*   **REST (Representational State Transfer):** Es un estilo de arquitectura de software introducido por Roy Fielding en el año 2000. Se basa en el protocolo HTTP y se centra en el manejo de **recursos**.

### Verbos HTTP y Operaciones CRUD
REST utiliza verbos HTTP estándar para realizar acciones sobre los recursos:

| Verbo | Acción | Operación CRUD | Ejemplo |
| :--- | :--- | :--- | :--- |
| **GET** | Obtener información | Read | `GET /users` |
| **POST** | Crear un recurso | Create | `POST /users` |
| **PUT** | Actualizar recurso completo | Update | `PUT /users/123` |
| **DELETE** | Borrar un recurso | Delete | `DELETE /users/123` |

---

## 2. Middlewares en Express.js

### ¿Qué son?
Son funciones que se ejecutan durante el ciclo de vida de una solicitud HTTP. Actúan como intermediarios que pueden procesar la solicitud antes de que llegue al controlador final o enviar una respuesta anticipada.

### Elementos Clave
Un middleware tiene acceso a tres argumentos:
1.  **`req` (Request):** Datos de la solicitud (body, params, headers).
2.  **`res` (Response):** Objeto para enviar la respuesta.
3.  **`next()`:** Función para pasar el control al siguiente middleware.

### Tipos de Middlewares
*   **Globales:** `app.use(...)` (afectan a todas las rutas).
*   **De Ruta:** Se aplican a endpoints específicos.
*   **Integrados:** Como `express.json()`.
*   **De Terceros:** Como `cors` o `helmet`.
*   **Personalizados:** Lógica propia (ej. logs, autenticación).

---

## 3. Zod (Validación de Datos)

### Definición
Zod es una librería de validación de esquemas para TypeScript/JavaScript. Su mayor ventaja es la integración con TypeScript (inferencia de tipos estática).

### Características
*   Permite validaciones simples (strings, numbers) y complejas (objetos anidados).
*   **Método `.parse()`:** Valida los datos; si fallan, lanza un error.

### Ejemplo de uso en Express
```typescript
import { z } from "zod";

// 1. Crear el esquema
const userSchema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
  age: z.number().min(18)
});

// 2. Usar en un endpoint
app.post('/users', (req, res) => {
  try {
    const userData = userSchema.parse(req.body); // Valida
    // Lógica para guardar usuario...
    res.json({ success: true, data: userData });
  } catch (error) {
    res.status(400).json({ error: error.errors });
  }
});
```

---

## 4. CORS (Cross-Origin Resource Sharing)

### El Problema (Same-Origin Policy)
Por seguridad, los navegadores bloquean las peticiones HTTP que provienen de un **origen** distinto (Protocolo + Dominio + Puerto) al del servidor.

### La Solución
CORS permite al servidor indicar qué orígenes externos tienen permiso para acceder a sus recursos mediante encabezados HTTP.

### Encabezados Principales
*   `Access-Control-Allow-Origin`: Dominios permitidos.
*   `Access-Control-Allow-Methods`: Verbos permitidos (GET, POST, etc.).
*   `Access-Control-Allow-Headers`: Tipos de headers permitidos.

### Implementación en Express
```bash
npm install cors
```
```javascript
const cors = require('cors');

// Habilitar para todos
app.use(cors());

// O configuración personalizada
app.use(cors({
  origin: 'http://mi-frontend.com',
  methods: ['GET', 'POST']
}));
```

---

## 5. Proyecto Práctico: Motivational Quotes API

El PDF finaliza con un tutorial paso a paso para crear una API de frases motivacionales.

### Estructura del Proyecto
```text
/src
  ├── controllers/      # Lógica de los endpoints
  ├── database/         # Archivo JSON (simula DB)
  ├── middlewares/      # Auth, Error y Validación
  ├── models/           # Interacción con los datos (FileSystem)
  ├── routes/           # Definición de rutas
  └── index.ts          # Punto de entrada
```

### Configuración Inicial
```bash
npm init -y
npm install express cors
npm install -D typescript ts-node ts-node-dev @types/express
npx tsc --init
```

### Implementación Destacada

**1. Router (`quotes-routes.ts`)**
Define las rutas y asigna middlewares y controladores.
```typescript
import { Router } from 'express';
import { getAllQuotes, createQuote } from '../controllers/quotes-controller';
import { validateQuote } from '../middlewares/validate-middleware';

const router = Router();

router.get('/', getAllQuotes);
router.post('/', validateQuote, createQuote); // Middleware de validación antes del controlador

export default router;
```

**2. Middleware de Validación (`validate-middleware.ts`)**
Verifica que los datos enviados en el body sean correctos.
```typescript
import { Request, Response, NextFunction } from 'express';

export const validateQuote = (req: Request, res: Response, next: NextFunction) => {
    const { text, author } = req.body;
    
    if (!text || typeof text !== 'string') {
        return res.status(400).json({ error: "El campo 'text' es requerido" });
    }
    // Si pasa la validación
    next();
};
```

**3. Middleware de Autenticación (`auth-middleware.ts`)**
Simula protección de rutas verificando un header.
```typescript
export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization'];
    
    if (token !== 'Bearer my-secret-token') {
        return res.status(401).json({ error: 'No autorizado' });
    }
    next();
};
```

**4. Modelo (`quotes-models.ts`)**
Maneja la lectura/escritura del archivo `quotes.json`.
```typescript
import fs from 'fs';
import path from 'path';

// Lógica para leer el archivo JSON y parsearlo
const filePath = path.join(__dirname, '../database/quotes.json');

export class QuotesModel {
    static getAll() {
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    }
    // ... métodos add, update, delete
}
```

### Testing
Se recomienda usar **Postman** para probar los endpoints:
*   `GET` para listar.
*   `POST` con JSON body para crear.
*   Headers `Authorization` para probar rutas protegidas.
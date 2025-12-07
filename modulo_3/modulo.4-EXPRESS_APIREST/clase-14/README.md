# 📚 API REST de Gestión de Usuarios (Clase 14)

Este proyecto es una API REST construida con **Node.js**, **Express** y **TypeScript** que permite realizar operaciones CRUD sobre un archivo local JSON y consumir datos de una API externa.

## 🛠 Tecnologías Utilizadas
*   **Node.js** & **Express**: Servidor y manejo de rutas.
*   **TypeScript**: Tipado estático y estructura robusta.
*   **Zod**: Validación de datos de entrada (Middleware).
*   **File System (fs)**: Persistencia de datos en `users.json`.
*   **Fetch API**: Consumo de servicios externos.

---

## 🚀 Ejecución

1.  **Iniciar el servidor:**
    ```bash
    npx ts-node src/index.ts
    ```
    *El servidor correrá en `http://localhost:3000`*

---

## 📨 Colección de Postman

Para probar todos los endpoints sin configurarlos manualmente, puedes acceder a la colección completa y documentada en el siguiente enlace:

👉 **[VER COLECCIÓN DE POSTMAN AQUÍ](https://martian-eclipse-514495.postman.co/workspace/Team-Workspace~f2d65b89-0cb6-4194-8df8-5f8f94fde9ff/folder/27770697-91b12baa-ba57-4c59-9c28-7abc974a326e?action=share&source=copy-link&creator=27770697&ctx=documentation)**

> **Nota:** Si prefieres importar el archivo localmente, puedes usar el archivo `UserAPI.postman_collection.json` adjunto en este repositorio.

*(**Instrucción para ti:** Para obtener este link real, ve a tu Postman, haz clic derecho en tu Colección -> Share -> Pestaña "Via Link" -> Get Public Link, y pégalo donde dice "VER COLECCIÓN..." arriba)*.

---

## 🔗 Endpoints de la API

La ruta base para todos los endpoints es: `http://localhost:3000/users`

### 📊 1. Estadísticas y Filtros (Locales)

| Método | Endpoint | Query Params | Descripción |
| :--- | :--- | :--- | :--- |
| `GET` | `/stats` | - | **(Ej. 8)** Devuelve total, promedio de edad, usuario más joven y más viejo. |
| `GET` | `/search` | `?name=nombre` | **(Ej. 3)** Busca usuarios que coincidan parcialmente con el nombre. |
| `GET` | `/count` | `?domain=dominio` | **(Ej. 4)** Cuenta cuántos usuarios tienen un email con ese dominio (ej: `@gmail.com`). |
| `GET` | `/sorted` | `?order=desc` | **(Ej. 6)** Lista usuarios ordenados por nombre (`asc` por defecto, `desc` opcional). |

### 🌐 2. API Externa (JSONPlaceholder)

| Método | Endpoint | Query Params | Descripción |
| :--- | :--- | :--- | :--- |
| `GET` | `/external` | - | **(Ej. 9)** Obtiene todos los usuarios desde la API externa. |
| `GET` | `/external/search` | `?name=Nombre Exacto` | **(Ej. 10)** Busca un usuario en la API externa por nombre exacto. |

### 📝 3. Gestión de Usuarios (CRUD Local)

| Método | Endpoint | Body (JSON) | Descripción |
| :--- | :--- | :--- | :--- |
| `GET` | `/` | - | Obtiene la lista completa de usuarios locales. |
| `GET` | `/:id` | - | Obtiene un usuario específico por su ID numérico. |
| `POST` | `/` | `{ name, email, age }` | **(Ej. 1)** Crea un nuevo usuario con validación Zod. |
| `POST` | `/bulk` | `[ { user1 }, { user2 } ]` | **(Ej. 5)** Crea múltiples usuarios a la vez. |
| `PUT` | `/:id` | `{ name?, email?, age? }` | **(Ej. 1)** Actualiza parcialmente un usuario existente. |
| `DELETE` | `/:id` | - | **(Ej. 2)** Elimina un usuario por su ID. |

---

## 🛡️ Estructura de Datos (JSON)

El archivo `src/database/users.json` sigue esta estructura:

```json
[
  {
    "id": 1,
    "name": "Esteban",
    "email": "esteban@example.com",
    "age": 20
  }
]
```

## ✅ Validaciones
El sistema utiliza middlewares para garantizar la integridad de los datos:
*   **ID Validator:** Asegura que los parámetros `:id` sean numéricos.
*   **Body Validator (Zod):** Verifica que el nombre tenga min. 2 caracteres, el email sea válido y la edad sea positiva.
*   **Bulk Validator:** Valida arreglos completos e indica en qué índice ocurrió el error.

---

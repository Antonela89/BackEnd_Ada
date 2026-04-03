# API REST - Centro Estético 

Desafío Backend desarrollado con Node.js, Express y MongoDB para la gestión de clientes y citas de un centro de belleza.

## Funcionalidades
- **Gestión de Clientes:** Crear, listar, actualizar y eliminar clientes.
- **Gestión de Citas:** Agendar citas vinculadas a clientes, listar (con información del cliente), editar y cancelar.
- **Base de Datos:** Integración con MongoDB Atlas mediante Mongoose.
- **Seguridad y CORS:** Configurado para permitir peticiones externas.

## Tecnologías utilizadas
- Node.js
- Express
- MongoDB Atlas / Mongoose
- Dotenv (Variables de entorno)
- Cors
- Nodemon (Entorno de desarrollo)

## Requisitos previos
Antes de comenzar, asegúrate de tener instalado:
- [Node.js](https://nodejs.org/) (v14 o superior)
- Una cuenta en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

## Instalación y Configuración

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/Antonela89/BackEnd_Ada.git
   cd 2.centro-estetico
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Variables de entorno:**
   Crea un archivo `.env` en la raíz del proyecto y agrega tu cadena de conexión de MongoDB:
   ```env
   PORT=3000
   MONGO_URI=tu_cadena_de_conexion_aqui
   ```

4. **Ejecutar el servidor:**
   ```bash
   npm run dev
   ```
   El servidor estará disponible en `http://localhost:3000`

## Endpoints de la API

### Clientes
- `GET /api/clientes`: Obtener todos los clientes.
- `POST /api/clientes`: Registrar un nuevo cliente.
- `PUT /api/clientes/:id`: Actualizar datos de un cliente.
- `DELETE /api/clientes/:id`: Eliminar un cliente.

### Citas
- `GET /api/citas`: Obtener todas las citas (incluye datos del cliente).
- `POST /api/citas`: Crear una nueva cita (requiere ID del cliente).
- `PUT /api/citas/:id`: Modificar una cita.
- `DELETE /api/citas/:id`: Eliminar una cita.

## Autora
- **Antonela Borgogno** - [GitHub](https://github.com/Antonela89)
- Carrera Back End con NodeJs - 2025
- Profesora: Sachetti Sofia
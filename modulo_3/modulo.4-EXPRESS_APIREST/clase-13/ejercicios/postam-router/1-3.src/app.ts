// ### **Ejercicio 2: Dividir Routers por Funcionalidad (Usuarios y Productos)**
// **Descripción:**
// 1.  Divide tu aplicación en routers separados para manejar las rutas de usuarios y productos.
// 2.  Crea un router específico para manejar las rutas de productos y otro para las rutas de usuarios.
// 3.  Utiliza los routers creados en el archivo principal `app.ts` para hacer la conexión con el servidor Express.

// **Pistas:**
// *   Usa `app.use()` para asignar los routers a las rutas correspondientes.
// *   No olvides configurar el servidor para que escuche en el puerto 3000.

import express  from "express";
import userRoutes from './routes/userRoutes';
import productRoutes from './routes/productRoutes';

const app = express();

app.use(express.json());

app.use('/users', userRoutes);

app.use('/product', productRoutes);

export default app;






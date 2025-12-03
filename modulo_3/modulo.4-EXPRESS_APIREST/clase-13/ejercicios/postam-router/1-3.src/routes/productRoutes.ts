// ### **Ejercicio 2: Dividir Routers por Funcionalidad (Usuarios y Productos)**
// **Descripción:**
// 1.  Divide tu aplicación en routers separados para manejar las rutas de usuarios y productos.
// 2.  Crea un router específico para manejar las rutas de productos y otro para las rutas de usuarios.
// 3.  Utiliza los routers creados en el archivo principal `app.ts` para hacer la conexión con el servidor Express.

// **Pistas:**
// *   Usa `app.use()` para asignar los routers a las rutas correspondientes.
// *   No olvides configurar el servidor para que escuche en el puerto 3000.

import { Router } from 'express';

const productRouter = Router();

// rutas
// GET -> '/'
productRouter.get('/', (req, res) => {
	res.json({ message: `Obteniendo todos los Productos` });
});

// GET por id -> '/:id'
productRouter.get('/:id', (req, res) => {
	const id = req.params.id;

	res.json({ message: `Producto obtenido con ID: ${id}` });
});

export default productRouter;
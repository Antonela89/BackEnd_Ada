// ### **Ejercicio 1. Crear un router básico para usuarios.**
// **Descripción:**
// 1.  Crea un router en Express para manejar rutas de productos y usuarios.
// 2.  Crea un archivo `userRouter.ts` para manejar las rutas de usuarios.
// 3.  En el archivo `userRouter.ts`, define las rutas:
//     *   Ruta GET `/users` que devuelva una lista de usuarios.
//     *   Ruta GET `/users/:id` que devuelva un usuario con el id correspondiente.

// **Pistas:**
// *   Usa `express.Router()` para crear un router.
// *   Utiliza `req.params.id` para acceder al id de la URL en las rutas dinámicas.

import { Router } from 'express';

const userRouter = Router();

// rutas
// GET -> '/'
userRouter.get('/', (req, res) => {
	res.json({ message: `Obteniendo todos los usuarios` });
});

// GET por id -> '/:id'
userRouter.get('/:id', (req, res) => {
	const id = req.params.id;

	res.json({ message: `Usuario obtenido con ID: ${id}` });
});

export default userRouter;
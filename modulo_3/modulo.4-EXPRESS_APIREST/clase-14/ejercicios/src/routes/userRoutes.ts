// importacion de Router de express
import { Router } from 'express';
// importacion de contorladores
import {
	getAllUser,
	getUserById,
	addUser,
	addUsers,
	updateUser,
	deleteUser,
	filterByName,
    countByDomain,
	getAllSorted,
	getStats,
	getAllExternalUsers,
	getExternalUserByName,
} from '../controllers/userController';
// importacion de middleware para validaciones
import { validateId } from '../middlewares/idValidator';
import {
	validateUserBody,
    validateUsersArray,
	validateUserUpdate,
} from '../middlewares/validationMiddleware';

// creamos la instancia de Router
const router: Router = Router();

// --- RUTAS DE EJERCICIOS ESPECÍFICOS (Primero, para evitar conflictos) ---

// Ejercicio 8: Estadísticas 
router.get('/stats', getStats);

// Ejercicio 3: Buscar por nombre (/users/search?name=juan)
router.get('/search', filterByName);

// Ejercicio 4: Contar dominios (/users/count?domain=example.com)
router.get('/count', countByDomain);

// Ejercicio 6: Ordenar (/users/sorted?order=desc)
router.get('/sorted', getAllSorted);

// Ejercicios 9 y 10: API Externa
router.get('/external', getAllExternalUsers);       // Trae todos
router.get('/external/search', getExternalUserByName); // Busca uno (/external/search?name=Leanne)


// --- RUTAS CRUD BÁSICAS ---

// Ejercicio 5: Agregar varios (POST /users/bulk)
// Nota: no va 'validateUserBody' porque espera un objeto, y aquí envio un Array.
router.post('/bulk', validateUsersArray, addUsers); 

// Obtener todos
router.get('/', getAllUser);

// Crear uno 
router.post('/', validateUserBody, addUser);

// --- RUTAS DINÁMICAS (Siempre al final) ---

// Actualizar 
router.put('/:id', validateId, validateUserUpdate, updateUser);

// Eliminar 
router.delete('/:id', validateId, deleteUser);

// Obtener uno por ID 
router.get('/:id', validateId, getUserById);

export default router;
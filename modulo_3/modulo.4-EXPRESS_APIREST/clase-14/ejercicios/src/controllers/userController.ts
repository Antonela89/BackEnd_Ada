// importacion de elementos del modulo express
import { Request, Response } from 'express';
// importacion de las funciones del servicio
// se las renombró para evitar error con ts
import {
	getAllExternalUsers as fetchExternalUsers,
	getExternalUserByName as fetchExternalUserByName,
} from '../services/externalUserService';
// importacion del modelo 
import { UserModel } from '../models/userModel';

// controlador para obtener todas los usuarios
export const getAllUser = (req: Request, res: Response): void => {
	try {
		// llamr al modelo
		const users = UserModel.getAllUsers();
		// retornar todos los usuarios
		res.json(users);
	} catch (error) {
		// menejo de error
		res.status(500).json({ error: 'Error al obtener los usuarios.' });
	}
};

// controlador para obtener un usuario por id
export const getUserById = (req: Request, res: Response): void => {
	// extraer el id
	const { id } = req.params;

	// llamar al modelo
	// transformacion del id a número porque ese el tipo en la bbdd 
	const user = UserModel.getUserByID(parseInt(id));

	// verificacion
	if (!user) {
		res.status(404).json({ error: 'Usuario no encontrado' });
		return;
	}

	// devolver usuario
	res.json(user);
};

// contorlador para agregar un usuario
export const addUser = (req: Request, res: Response): void => {
	// llamar al modelo
	// datos del usuario nuevo -> cuerpo de la peticion (req.body)
	const newUser = UserModel.addUser(req.body);

	// devolver usuario nuevo
	res.status(201).json(newUser);
};

// controlador para agregar varios usuarioas
export const addUsers = (req: Request, res: Response): void => {
	// llamar al modelo
	const newUsers = UserModel.addUsers(req.body);

	// devolver todos los usuarios nuevos
	res.status(201).json(newUsers);
};

// contorlador para editar un usuario
export const updateUser = (req: Request, res: Response): void => {
	// obtener id
	const { id } = req.params;
	// llamar al modelo
	const editUser = UserModel.updateUser(parseInt(id), req.body);

	// verificacion
	if (!editUser) {
		res.status(404).json({ error: 'Usuario no encontrado.' });
	}

	// devolver usuario editado
	res.status(200).json(editUser);
};

// controlador para eliminar usuario
export const deleteUser = (req: Request, res: Response): void => {
	// obtener id
	const { id } = req.params;

	// llamar al modelo
	const isDeleted = UserModel.deleteUser(parseInt(id));

	// verificacion
	if (!isDeleted) {
		res.status(404).json({ error: 'Usuario no encontrado' });
		return;
	}

	// respuesta 
	res.status(204).json({ message: `Usuario con ${id} eliminado con éxito.` });
};

// controlador para filtrar por nombre 
export const filterByName = (req: Request, res: Response): void => {
	// obtener el parametro de busqueda
	const { name } = req.query;

	// Validación extra por si no envían el query
	if (!name) {
		res.status(400).json({ error: "Falta el parámetro query 'name'" });
		return;
	}

	// llamar al modelo
	// name as string -> le aseguramos a ts que el nombre será un string
	const users = UserModel.filterByName(name as string);

	// validación
	if (!users) {
		res.status(404).json({ error: `No hay coincidencias con "${name}"` });
		return;
	}

	// respuesta exitosa
	res.status(200).json(users);
};

// controlador para conteo según dominio
export const countByDomain = (req: Request, res: Response): void => {
	// obtener el parametro de busqueda
	const { domain } = req.query;

	// Validación extra por si no envían el query
    if (!domain) {
		res.status(400).json({ error: "Falta el dominio" });
		return;
	}

	// llamar al modelo
	const total = UserModel.countByDomain(domain as string);

	// validacion -> caso: 0
	if (total === 0) {
		res.status(404).json({
			error: `No hay coincidencias con el dominio: "${domain}"`,
		});
		return; 
	}

	// respuesta exitosa
	res.status(200).json(total);
};

// controlador para ordenar los usuarios
export const getAllSorted = (req: Request, res: Response): void => {
	// obtener el parametro de busqueda
	const { order } = req.query;

	// no hay verificación extra, porque si no se ingresa el parametro como 'desc', el modelo devuelve por orden ascendente por default

	// llamar al modelo
	const allSorted = UserModel.getAllSorted(order as string);

	// validación
	if (!allSorted) {
		res.status(404).json({
			error: `No se obtuvo una lista de usuarios ordenada: ${order}`,
		});
		return;
	}

	// respuesta exitosa
	res.status(200).json(allSorted);
};

// controlador para las estadísticas
export const getStats = (req: Request, res: Response): void => {
	// llamar al modelo
	const stats = UserModel.getStats();

	// verificación
	if (!stats) {
		res.status(404).json({ error: `No se obtuvieron estadísticas` });
		return;
	}

	// respuesta exitosa
	res.status(200).json(stats);
};

// controlador para manejar peticion externa
// se obtienen todos los usuarios
// debe ser asincrono y retorna una promesa
export const getAllExternalUsers = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		// llamar al servicio
		const externalUsers = await fetchExternalUsers();
		// respuesta exitosa
		res.status(200).json(externalUsers);
	} catch (error) {
		// manejo de error de servidor
		res.status(500).json({ error: 'Error al conectar con la API externa' });
	}
};

// controlador para manejar peticion externa
// se obtiene un usuario por nombre
// debe ser asincrono y retorna una promesa
export const getExternalUserByName = async (
	req: Request,
	res: Response
): Promise<void> => {
	// se obtiene el nombre
	const { name } = req.query;

	// validacion extra para parametro
	if (!name) {
		res.status(400).json({ error: 'El parámetro "name" es requerido.' });
		return;
	}

	try {
		// TypeScript a veces marca el query como string 
		const user = await fetchExternalUserByName(name as string);

		// validacion
		if (!user) {
			res.status(404).json({ error: 'Usuario externo no encontrado.' });
			return;
		}

		// respuesta exitosa
		res.status(200).json(user);
	} catch (error) {
		// menejo de error de servidor
		res.status(500).json({ error: 'Error al buscar en la API externa' });
	}
};

import { Request, Response } from 'express';
import {
	getAllExternalUsers as fetchExternalUsers,
	getExternalUserByName as fetchExternalUserByName,
} from '../services/externalUserService';
import { UserModel } from '../models/userModel';

// controlador para obtener todas los usuarios
export const getAllUser = (req: Request, res: Response): void => {
	try {
		const users = UserModel.getAllUsers();
		res.json(users);
	} catch (error) {
		res.status(500).json({ error: 'Error al obtener los usuarios.' });
	}
};

// controlador para obtener un usuario por id
export const getUserById = (req: Request, res: Response): void => {
	// extraer el id
	const { id } = req.params;

	// llamar al modelo
	const user = UserModel.getUserByID(parseInt(id));

	// verificacion
	if (!user) {
		res.status(404).json({ error: 'Usuario no encontrado' });
		return;
	}

	res.json(user);
};

export const addUser = (req: Request, res: Response): void => {
	const newUser = UserModel.addUser(req.body);

	res.status(201).json(newUser);
};

export const addUsers = (req: Request, res: Response): void => {
	const newUsers = UserModel.addUsers(req.body);

	res.status(201).json(newUsers);
};

export const updateUser = (req: Request, res: Response): void => {
	const { id } = req.params;
	const editUser = UserModel.updateUser(parseInt(id), req.body);

	// verificacion
	if (!editUser) {
		res.status(404).json({ error: 'Usuario no encontrado.' });
	}

	res.status(200).json(editUser);
};

export const deleteUser = (req: Request, res: Response): void => {
	const { id } = req.params;

	const isDeleted = UserModel.deleteUser(parseInt(id));

	if (!isDeleted) {
		res.status(404).json({ error: 'Usuario no encontrado' });
		return;
	}

	res.status(204).json({ message: `Usuario con ${id} eliminado con éxito.` });
};

export const filterByName = (req: Request, res: Response): void => {
	const { name } = req.query;

	// Validación extra por si no envían el query
	if (!name) {
		res.status(400).json({ error: "Falta el parámetro query 'name'" });
		return;
	}

	const users = UserModel.filterByName(name as string);

	if (!users) {
		res.status(404).json({ error: `No hay coincidencias con "${name}"` });
		return;
	}

	res.status(200).json(users);
};

export const countByDomain = (req: Request, res: Response): void => {
	const { domain } = req.query;

    if (!domain) {
		res.status(400).json({ error: "Falta el dominio" });
		return;
	}

	const total = UserModel.countByDomain(domain as string);

	if (total === 0) {
		res.status(404).json({
			error: `No hay coincidencias con el dominio: "${domain}"`,
		});
		return;
	}

	res.status(200).json(total);
};

export const getAllSorted = (req: Request, res: Response): void => {
	const { order } = req.query;

	const allSorted = UserModel.getAllSorted(order as string);

	if (!allSorted) {
		res.status(404).json({
			error: `No se obtuvo una lista de usuarios ordenada: ${order}`,
		});
		return;
	}

	res.status(200).json(allSorted);
};

export const getStats = (req: Request, res: Response): void => {
	const stats = UserModel.getStats();

	if (!stats) {
		res.status(404).json({ error: `No se obtuvieron estadísticas` });
		return;
	}

	res.status(200).json(stats);
};

export const getAllExternalUsers = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const externalUsers = await fetchExternalUsers();
		res.status(200).json(externalUsers);
	} catch (error) {
		res.status(500).json({ error: 'Error al conectar con la API externa' });
	}
};

export const getExternalUserByName = async (
	req: Request,
	res: Response
): Promise<void> => {
	const { name } = req.query;

	if (!name) {
		res.status(400).json({ error: 'El parámetro "name" es requerido.' });
		return;
	}

	try {
		// TypeScript a veces marca el query como string | qs.ParsedQs, forzamos string
		const user = await fetchExternalUserByName(name as string);

		if (!user) {
			res.status(404).json({ error: 'Usuario externo no encontrado.' });
			return;
		}

		res.status(200).json(user);
	} catch (error) {
		res.status(500).json({ error: 'Error al buscar en la API externa' });
	}
};

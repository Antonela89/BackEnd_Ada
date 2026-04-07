import Router from 'express';
import Cliente from '../models/Cliente.mjs';
import { validate } from '../middlewares/validate.middleware.mjs';
import { validateId } from '../middlewares/validateId.middleware.mjs';
import {clienteSchema} from '../validations/cliente.validation.mjs';

const ClientesRouter = Router();

// GET ALL - Obtener todos
ClientesRouter.get('/', async (req, res) => {
	const clientes = await Cliente.find();
	res.json(clientes);
});

// GET BY ID - Obtener uno solo
ClientesRouter.get('/:id', validateId, async (req, res) => {
	try {
		const cliente = await Cliente.findById(req.params.id);
		if (!cliente)
			return res.status(404).json({ mensaje: 'Cliente no encontrado' });
		res.json(cliente);
	} catch (error) {
		res.status(400).json({ mensaje: 'ID inválido' }); // Seguridad: No revelar errores internos de Mongo
	}
});

// POST - Crear (con Zod)
ClientesRouter.post('/', validate(clienteSchema), async (req, res) => {
	try {
		const nuevoCliente = new Cliente(req.body);
		await nuevoCliente.save();
		res.status(201).json(nuevoCliente);
	} catch (error) {
		res.status(500).json({ mensaje: 'Error al guardar' });
	}
});

// PUT - Actualizar (con Zod)
ClientesRouter.put('/:id',validateId, validate(clienteSchema), async (req, res) => {
	try {
		const clienteActualizado = await Cliente.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }, // Para que devuelva el objeto ya modificado
		);
		if (!clienteActualizado)
			return res.status(404).json({ mensaje: 'Cliente no existe' });
		res.json(clienteActualizado);
	} catch (error) {
		res.status(400).json({ mensaje: 'Error al actualizar' });
	}
});

// DELETE - Borrar
ClientesRouter.delete('/:id',validateId, async (req, res) => {
	try {
		const clienteBorrado = await Cliente.findByIdAndDelete(req.params.id);
		if (!clienteBorrado)
			return res.status(404).json({ mensaje: 'Cliente no existe' });
		res.json({ mensaje: 'Cliente eliminado correctamente' });
	} catch (error) {
		res.status(400).json({ mensaje: 'Error al eliminar' });
	}
});

export default ClientesRouter;

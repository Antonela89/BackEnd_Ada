import express from 'express';
import Cliente from '../models/Cliente.mjs';

const ClienteRouter = express.Router();

ClienteRouter.get('/', async (req, res) => {
	try {
		const clientes = await Cliente.find();
		res.json(clientes);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

ClienteRouter.post('/', async (req, res) => {
	const cliente = new Cliente({
		nombre: req.body.nombre,
		telefono: req.body.telefono,
		direccion: req.body.direccion,
	});

	try {
		const nuevoCliente = await cliente.save();
		res.status(201).json(nuevoCliente);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

ClienteRouter.put('/:id', async (req, res) => {
	try {
		const cliente = await Cliente.findById(req.params.id);
		if (!cliente)
			return res.status(404).json({ message: 'Cliente no encontrado' });

		Object.assign(cliente, req.body);
		const clienteActualizado = await cliente.save();
		res.json(clienteActualizado);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

ClienteRouter.delete('/:id', async (req, res) => {
	try {
		const cliente = await Cliente.findByIdAndDelete(req.params.id); // Corregido: Eliminar
		if (!cliente)
			return res.status(404).json({ message: 'Cliente no encontrado' });

		res.json({ message: 'Cliente eliminado correctamente' });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

export default ClienteRouter;

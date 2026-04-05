import express from 'express';
import Mascota from '../models/Mascota.mjs';
import Cliente from '../models/Cliente.mjs';
import mongoose from 'mongoose';

const MascotaRouter = express.Router();
MascotaRouter.get('/', async (req, res) => {
	try {
		const mascotas = await Mascota.find().populate('duenio');
		res.json(mascotas);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

MascotaRouter.post('/', async (req, res) => {
	console.log('Datos recibidos:', req.body); 

	const { nombre, especie, raza, edad, duenio } = req.body;

	if (!duenio) {
		return res
			.status(400)
			.json({ message: 'El campo "duenio" es obligatorio' });
	}

	if (!mongoose.Types.ObjectId.isValid(duenio)) {
		return res
			.status(400)
			.json({ message: 'El formato del ID del dueño es inválido' });
	}

	try {
		const clienteExiste = await Cliente.findById(duenio);
		if (!clienteExiste) {
			return res
				.status(404)
				.json({ message: 'El dueño no existe en la base de datos' });
		}

		const mascota = new Mascota({ nombre, especie, raza, edad, duenio });
		const nuevaMascota = await mascota.save();
		res.status(201).json(nuevaMascota);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

MascotaRouter.put('/:id', async (req, res) => {
	try {
		const mascota = await Mascota.findById(req.params.id);
		if (!mascota)
			return res.status(404).json({ message: 'Mascota no encontrada' });
		Object.assign(mascota, req.body);
		const mascotaActualizada = await mascota.save();
		res.json(mascotaActualizada);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

MascotaRouter.delete('/:id', async (req, res) => {
	try {
		const mascota = await Mascota.findByIdAndDelete(req.params.id); // Corregido: método compatible
		if (!mascota)
			return res.status(404).json({ message: 'Mascota no encontrada' });
		res.json({ message: 'Mascota eliminada' });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

export default MascotaRouter;

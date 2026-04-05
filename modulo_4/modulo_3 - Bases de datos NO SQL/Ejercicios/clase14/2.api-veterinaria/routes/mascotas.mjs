import express from 'express';
import Mascota from '../models/Mascota.mjs';
import Cliente from '../models/Cliente.mjs';

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
	const { nombre, especie, raza, edad, duenio } = req.body;

	if (!mongoose.Types.ObjectId.isValid(duenio)) {
		return res
			.status(400)
			.json({ message: 'El ID del dueño no es válido' });
	}

	const mascota = new Mascota({
		nombre,
		especie,
		raza,
		edad,
		duenio,
	});

	try {
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

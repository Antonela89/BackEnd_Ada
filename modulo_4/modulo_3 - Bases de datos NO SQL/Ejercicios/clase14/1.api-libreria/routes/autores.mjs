import express from 'express';
import Autor from '../models/autor.mjs';

const AutoresRouter = express.Router();

AutoresRouter.get('/', async (req, res) => {
	try {
		const autores = await Autor.find();
		res.json(autores);
	} catch (error) {
		res.status(500).json({ error: 'Error al obtener los autores' });
	}
});

AutoresRouter.post('/', async (req, res) => {
	try {
		const { nombre, nacionalidad } = req.body;
		const nuevoAutor = new Autor({ nombre, nacionalidad });
		await nuevoAutor.save();
		res.status(201).json(nuevoAutor);
	} catch (error) {
		res.status(500).json({ error: 'Error al crear el autor' });
	}
});

AutoresRouter.put('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const { nombre, nacionalidad } = req.body;
		const autorActualizado = await Autor.findByIdAndUpdate(
			id,
			{ nombre, nacionalidad },
			{ new: true },
		);
		if (!autorActualizado) {
			return res.status(404).json({ error: 'Autor no encontrado' });
		}
		res.json(autorActualizado);
	} catch (error) {
		res.status(500).json({ error: 'Error al actualizar el autor' });
	}
});

AutoresRouter.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;  
        const autorEliminado = await Autor.findByIdAndDelete(id);
        if (!autorEliminado) {
            return res.status(404).json({ error: 'Autor no encontrado' });
        }   
        res.json({ message: 'Autor eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el autor' });
    }
});

export default AutoresRouter;

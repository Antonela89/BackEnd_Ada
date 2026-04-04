import express from 'express';
import Libro from '../models/libro.mjs';

const LibrosRouter = express.Router();

LibrosRouter.get('/', async (req, res) => {
    try {  
        const libros = await Libro.find().populate('autor');
        res.json(libros);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los libros' });
    }
});

LibrosRouter.post('/', async (req, res) => {
    try {
        const { titulo, autor, anioPublicacion } = req.body;
        const nuevoLibro = new Libro({ titulo, autor, anioPublicacion });
        await nuevoLibro.save();
        res.status(201).json(nuevoLibro);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el libro' });
    }
});

LibrosRouter.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;  
        const { titulo, autor, anioPublicacion } = req.body;
        const libroActualizado = await Libro.findByIdAndUpdate(id, { titulo, autor, anioPublicacion }, { new: true });
        if (!libroActualizado) {
            return res.status(404).json({ error: 'Libro no encontrado' });
        }
        res.json(libroActualizado);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el libro' });
    }
});

LibrosRouter.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const libroEliminado = await Libro.findByIdAndDelete(id);
        if (!libroEliminado) {
            return res.status(404).json({ error: 'Libro no encontrado' });
        }
        res.json({ message: 'Libro eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el libro' });
    }
});

export default LibrosRouter;
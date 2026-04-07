import Router from 'express';
import Plato from '../models/Plato.mjs';
import { validate } from '../middlewares/validate.middleware.mjs';
import { validateId } from '../middlewares/validateId.middleware.mjs';
import { platoSchema } from '../validations/plato.validation.mjs';

const PlatosRouter = Router();

// GET: Obtener platos
PlatosRouter.get('/', async (req, res) => {
    const platos = await Plato.find();
    res.json(platos);
});

// GET BY ID - Obtener uno solo
PlatosRouter.get('/:id',validateId, async (req, res) => {
    try {
        const plato = await Plato.findById(req.params.id);
        if (!plato)
            return res.status(404).json({ mensaje: 'Plato no encontrado' });
        res.json(plato);
    } catch (error) {
        res.status(400).json({ mensaje: 'ID inválido' }); 
    }
});

// POST: Agregar un nuevo plato
PlatosRouter.post('/', validate(platoSchema), async (req, res) => {
    try {
        const nuevoPlato = new Plato(req.body);
        await nuevoPlato.save();
        res.status(201).json(nuevoPlato);
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al crear plato' });
    }
});

// PUT - Actualizar (con Zod)
PlatosRouter.put('/:id',validateId, validate(platoSchema), async (req, res) => {
    try {
        const platoActualizado = await Plato.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true },
        );
        if (!platoActualizado)
            return res.status(404).json({ mensaje: 'Plato no existe' });
        res.json(platoActualizado);
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al actualizar' });
    }
});

// DELETE - Borrar
PlatosRouter.delete('/:id',validateId,  async (req, res) => {
    try {
        const platoBorrado = await Plato.findByIdAndDelete(req.params.id);
        if (!platoBorrado)
            return res.status(404).json({ mensaje: 'Plato no existe' });
        res.json({ mensaje: 'Plato eliminado correctamente' });
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al eliminar' });
    }
});


export default PlatosRouter;
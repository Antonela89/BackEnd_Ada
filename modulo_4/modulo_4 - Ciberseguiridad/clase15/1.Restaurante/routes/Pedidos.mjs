import Router from 'express';
import Pedido from '../models/Pedido.mjs';
import { validate } from '../middlewares/validate.middleware.mjs';
import { validateId } from '../middlewares/validateId.middleware.mjs';
import { pedidoSchema } from '../validations/pedido.validarion.mjs'

const PedidosRouter = Router();

// GET: Consultar todos los pedidos
PedidosRouter.get('/', async (req, res) => {
    const pedidos = await Pedido.find();
    res.json(pedidos);
});

// GET BY ID - Obtener uno solo
PedidosRouter.get('/:id',validateId, async (req, res) => {
    try {
        const pedido = await Pedido.findById(req.params.id);
        if (!pedido)
            return res.status(404).json({ mensaje: 'Pedido no encontrado' });
        res.json(pedido);
    } catch (error) {
        res.status(400).json({ mensaje: 'ID inválido' }); 
    }
});

// POST - Crear (con Zod)
PedidosRouter.post('/', validate(pedidoSchema), async (req, res) => {
    try {
        const nuevoPedido = new Cliente(req.body);
        await nuevoPedido.save();
        res.status(201).json(nuevoPedido);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al guardar' });
    }
});

// PUT - Actualizar (con Zod)
PedidosRouter.put('/:id', validateId, validate(pedidoSchema), async (req, res) => {
    try {
        const pedidoActualizado = await Pedido.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }, // Para que devuelva el objeto ya modificado
        );
        if (!pedidoActualizado)
            return res.status(404).json({ mensaje: 'Pedido no existe' });
        res.json(pedidoActualizado);
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al actualizar' });
    }
});

// DELETE - Borrar
PedidosRouter.delete('/:id',validateId, async (req, res) => {
    try {
        const pedidoBorrado = await Pedido.findByIdAndDelete(req.params.id);
        if (!pedidoBorrado)
            return res.status(404).json({ mensaje: 'Pedido no existe' });
        res.json({ mensaje: 'Pedido eliminado correctamente' });
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al eliminar' });
    }
});

export default PedidosRouter;
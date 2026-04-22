const express = require('express');
const Producto = require('../models/Product');

const router = express.Router();

// 1. Crear un producto (POST)
router.post('/', async (req, res) => {
    try {
        const nuevoProducto = await Producto.create(req.body);
        res.json(nuevoProducto);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear producto' });
    }
});

// 2. Obtener todos los productos (GET)
router.get('/', async (req, res) => {
    const productos = await Producto.findAll();
    res.json(productos);
});

// 3. Obtener un producto por ID (GET)
router.get('/:id', async (req, res) => {
    const producto = await Producto.findByPk(req.params.id);
    if (producto) res.json(producto);
    else res.status(404).json({ error: 'No encontrado' });
});

// 4. Actualizar (PUT)
router.put('/:id', async (req, res) => {
    const producto = await Producto.findByPk(req.params.id);
    if (producto) {
        await producto.update(req.body);
        res.json({ mensaje: 'Actualizado' });
    } else res.status(404).json({ error: 'No encontrado' });
});

// 5. Eliminar (DELETE)
router.delete('/:id', async (req, res) => {
    await Producto.destroy({ where: { id: req.params.id } });
    res.json({ mensaje: 'Producto eliminado' });
});

module.exports = router;
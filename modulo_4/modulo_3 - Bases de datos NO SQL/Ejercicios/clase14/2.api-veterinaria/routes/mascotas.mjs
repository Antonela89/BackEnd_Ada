import express from 'express';
import Mascota from '../models/Mascota.mjs';

const MascotaRouter = express.Router();
MascotaRouter.get('/', async (req, res) => {
    try {
        const mascotas = await Mascota.find().populate('cliente'); 
        res.json(mascotas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

MascotaRouter.post('/', async (req, res) => {
    const mascota = new Mascota({
        nombre: req.body.nombre,
        especie: req.body.especie,
        raza: req.body.raza,
        edad: req.body.edad,
        duenio: req.body.cliente
    })
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
        if (!mascota) return res.status(404).json({ message: 'Mascota no encontrada' });
        Object.assign(mascota, req.body);
        const mascotaActualizada = await mascota.save();
        res.json(mascotaActualizada);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

MascotaRouter.delete('/:id', async (req, res) => {
    try {
        const mascota = await Mascota.findById(req.params.id);
        if (!mascota) return res.status(404).json({ message: 'Mascota no encontrada' });
        await mascota.remove();
        res.json({ message: 'Mascota eliminada' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }  
});

export default MascotaRouter;
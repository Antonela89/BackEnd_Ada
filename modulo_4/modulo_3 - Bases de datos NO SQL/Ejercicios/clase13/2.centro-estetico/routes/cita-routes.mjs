import express from 'express';
import cita from '../models/cita-model.mjs';

const citaRoutes = express.Router();

// Ruta para crear una nueva cita
citaRoutes.post('/', async (req, res) => {
    try {
        const newCita = new cita(req.body);
        const savedCita = await newCita.save();
        res.status(201).json(savedCita);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Ruta para obtener todas las citas
citaRoutes.get('/', async (req, res) => {
    try {
        const citas = await cita.find().populate('cliente').populate('servicio');
        res.status(200).json(citas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Ruta para obtener una cita por su ID
citaRoutes.get('/:id', async (req, res) => {
    try {
        const citaId = req.params.id;
        const foundCita = await cita.findById(citaId).populate('cliente').populate('servicio');
        if (!foundCita) {
            return res.status(404).json({ message: "Cita no encontrada" });
        }
        res.status(200).json(foundCita);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }   
});

// Ruta para actualizar una cita por su ID  
citaRoutes.put('/:id', async (req, res) => {
    try {
        const citaId = req.params.id;
        const updatedCita = await cita.findByIdAndUpdate(citaId, req.body, { new: true });
        if (!updatedCita) {
            return res.status(404).json({ message: "Cita no encontrada" });
        }   
        res.status(200).json(updatedCita);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }   
});

// Ruta para eliminar una cita por su ID
citaRoutes.delete('/:id', async (req, res) => {
    try {
        const citaId = req.params.id;
        const deletedCita = await cita.findByIdAndDelete(citaId);
        if (!deletedCita) {
            return res.status(404).json({ message: "Cita no encontrada" });
        }       
        res.status(200).json({ message: "Cita eliminada exitosamente" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default citaRoutes;



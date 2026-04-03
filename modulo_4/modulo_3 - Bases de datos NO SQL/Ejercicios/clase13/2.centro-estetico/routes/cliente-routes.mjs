import express from 'express';
import cliente from '../models/cliente-model.mjs';

const clienteRoutes = express.Router();

// Ruta para crear un nuevo cliente
clienteRoutes.post('/', async (req, res) => {
    try {  
        const newCliente = new cliente(req.body);
        const savedCliente = await newCliente.save();
        res.status(201).json(savedCliente);
    }   catch (error) {    
        res.status(400).json({ message: error.message })
    }
});

// Ruta para obtener todos los clientes
clienteRoutes.get('/', async (req, res) => {
    try {
        const clientes = await cliente.find();
        res.status(200).json(clientes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Ruta para obtener un cliente por su ID
clienteRoutes.get('/:id', async (req, res) => {
    try {
        const clienteId = req.params.id;   
        const foundCliente = await cliente.findById(clienteId);
        if (!foundCliente) {
            return res.status(404).json({ message: "Cliente no encontrado" });
        }
        res.status(200).json(foundCliente);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }   
});

// Ruta para actualizar un cliente por su ID    
clienteRoutes.put('/:id', async (req, res) => {
    try {
        const clienteId = req.params.id;
        const updatedCliente = await cliente.findByIdAndUpdate(clienteId, req.body
, { new: true });
        if (!updatedCliente) {
            return res.status(404).json({ message: "Cliente no encontrado" });
        }       
        res.status(200).json(updatedCliente);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Ruta para eliminar un cliente por su ID
clienteRoutes.delete('/:id', async (req, res) => {
    try {
        const clienteId = req.params.id;
        const deletedCliente = await cliente.findByIdAndDelete(clienteId);
        if (!deletedCliente) {
            return res.status(404).json({ message: "Cliente no encontrado" });
        }
        res.status(200).json({ message: "Cliente eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default clienteRoutes;
import Express from "express";
import user from "../models/user-model.mjs";

const router = Express.Router();

// Ruta para crear un nuevo usuario
router.post('/', async (req, res) => {
    try {
        const newUser = new user(req.body);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    } 
});

// Ruta para obtener todos los usuarios
router.get('/', async (req, res) => {
    try {
        const users = await user.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}); 

// Ruta para obtener un usuario por su ID
router.get('/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const foundUser = await user.findById(userId);  
        if (!foundUser) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        } 
        res.status(200).json(foundUser)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Ruta para actualizar un usuario por su ID
router.put('/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const updatedUser = await user.findByIdAndUpdate(userId, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }  
});

// Ruta para eliminar un usuario por su ID  
router.delete('/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const deletedUser = await user.findByIdAndDelete(userId);
        if (!deletedUser) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        res.status(200).json({ message: "Usuario eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
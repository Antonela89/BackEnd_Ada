import { Router } from 'express'; // importamos el modulo Router

// intanciamos
const userRouter = Router();

// definimos las rutas basicas del objeto Usuario
// req -> request: lo que ingresa el usuario
// res -> response: respuesta de la api

// GET '/' -> obtener todos los usuarios
userRouter.get('/', (req, res) => {
    res.json({message: `Obteniendo todos los usuarios`})
});

// POST '/' -> crear un usuario
userRouter.post('/', (req, res) => {
    const {name, email} = req.body;
    res.status(201).json({message: `Usuario creado con éxito!.`,  user: {name, email}})
});

// GET '/:id' -> para obtener un usuario por id 
userRouter.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Usuario obtenido con ID: ${id}`})
})

// PUT '/:id' -> actualizar un usuario por id
userRouter.put('/:id', (req, res) => {
    const { id } = req.params;
    const {name, email} = req.body;

    res.json({message: `Usuario con id: ${id} actualizado con éxito`, user: {name, email}})
})


// DELETE '/:id' -> eliminar un usuario por id
userRouter.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({message: `Usuario con id: ${id} eliminado con éxito`})
})

export default userRouter;
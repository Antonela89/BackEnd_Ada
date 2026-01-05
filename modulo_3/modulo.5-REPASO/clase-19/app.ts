import express, { type Request, type Response, type NextFunction } from "express";

// Crear instancia de app
const app = express();

// Middleware json
app.use(express.json());

// BBDD simulada
let animals = [
	{
		id: 1,
		name: 'León',
		especie: 'Felino',
	},
	{
		id: 2,
		name: 'Elafante',
		especie: 'Mamífero',
	},
];

// Middleware global -> solicitudes
const requestLogger = (req: Request, res: Response, next: NextFunction): void => {
    console.log(`Solicitud: ${req.method}, ${req.url}`);
    
    next();
}

app.use(requestLogger);

// Middleware para validar datos

const validateAnimal = (req: Request, res: Response, next: NextFunction): void => {
    const { name, especie} = req.body;

    if (!name || !especie) {
        res.status(400).json({error: 'Los campos son obligatorios'})
    }

    next();
}

// Rutas
// Get para obtener toods los animales
app.get('/api/animals', (req,res) => {
    res.status(200).json(animals)
});

// Post para agregar un nuevo animal
app.post('/api/animals', validateAnimal, (req, res) => {
    const { name, especie} = req.body;

    const newAnimal = {
        id: animals.length + 1,
        name,
        especie
    }

    animals.push(newAnimal)

    res.status(201).json({message: 'animal agregado con éxito', newAnimal})
})

//  Put para actualizar informacion segun id
app.put('/api/animals/:id', validateAnimal, (req, res) => {
    const { id } = req.params;
    const { name, especie } = req.body;

    const animal = animals.find(a => a.id === parseInt(id));

    if (!animal) {
        return res.status(404).json({error: 'Animal no encontrado'})
    }

    animal.name = name;
    animal.especie = especie

    res.status(200).json({message: 'Animal editado exitosamente'})
})

// Delete para eliminar
app.delete('/api/animals/:id', (req, res) => {
    const { id } = req.params;

    animals = animals.filter(a => a.id !== parseInt(id));

    res.status(200).json({message: 'animal eliminado'})
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
})
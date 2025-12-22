// importación de modulos lectura de archivos
const fs = require('fs');
// importación de modulo para servidor
const express = require('express');
// importación de modulo para validaciones
const z = require('zod');

// Ruta del archivo
const pathFile = './database.json';

// Puerto
const PORT = 3000;

// intancia de express
const app = express();
// Middleware
app.use(express.json());

// Esquema del modelo
const taskSchema = z.object({
	id: z.number({ required_error: 'El id es obligatorio' }),
	title: z.string().min(1, 'El título es obligaotrio.'),
	completed: z.boolean().default(false),
});

// Middleware con esquema zod para validar
const validateTaskBody = (req, res, next) => {
	const result = taskSchema.safeParse(req.body);

	if (!result.success) {
		res.status(400).json({
			error: 'datos inválidos',
			details: result.error.issues.map((e) => e.message),
		});
		return;
	}

	// Sobrescribir req.body con result.data
	// Esto asegura que si 'completed' no venía, ahora tenga el valor 'false' por defecto.
	req.body = result.data;
	next();
};

// Ruta de bienvenida -> verificar el funcionamiento del servidor
app.get('/', (req, res) => {
	res.json('Bienvenid@s!!!');
});

app.get('/tasks/', (req, res) => {
	try {
		const tasks = JSON.parse(fs.readFileSync(pathFile, 'utf-8'));
		res.status(200).json(tasks);
	} catch (error) {
		res.status(500).json({ error: 'Error al leer la base de datos' });
	}
});

app.post('/tasks/', validateTaskBody, (req, res) => {
	const { id, title, completed } = req.body;

	try {
		const BBDD = JSON.parse(fs.readFileSync(pathFile, 'utf-8'));

		if (BBDD.find((t) => t.id === id)) {
			return res.status(400).json({ error: 'El ID ya existe' });
		}

		const newTask = { id, title, completed };

		BBDD.push(newTask);

		fs.writeFileSync(pathFile, JSON.stringify(BBDD, null, 2));

		res.status(201).json({
			message: 'Tarea creada con éxito',
			task: newTask,
		});
	} catch (error) {
		res.status(500).json({ error: 'Error al guardar la tarea' });
	}
});

app.listen(PORT, () => {
	console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

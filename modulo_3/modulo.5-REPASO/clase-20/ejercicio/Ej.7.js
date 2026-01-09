import express from 'express';
import { z } from 'zod';

const app = express();

app.use(express.json());

const userSchema = z.object({
	email: z.email('Formato de email inválido'),
	password: z.string().min(6, 'Debe tener como mínimo 6 carácteres.'),
});

app.post('/login', (req, res) => {
	try {
		const user = userSchema.parse(req.body);
		res.status(200).json({
			message: 'Usuario validado correctamente',
			data: user,
		});
	} catch (error) {
		if (error instanceof z.ZodError) {
			return res.status(400).json({
				error: 'Datos inválidos',
				details: error.issues.map((e) => e.message),
			});
		}

		res.status(500).json({ error: 'Error interno del servidor' });
	}
});

app.listen(3000, () => {
	console.log(`Servidor escuchando en http://localhost:3000`);
});

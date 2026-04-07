import z from 'zod';

export const platoSchema = z.object({
	nombre: z
		.string()
		.min(3, 'El nombre es muy corto')
		.max(50, 'El nombre es demasiado largo'),
	precio: z
		.number()
		.positive('El precio debe ser un número positivo')
		.max(100000, 'Precio fuera de rango'),
	categoria: z.enum(['Pasta', 'Rápida', 'Ensaladas', 'Japonesa', 'Postres'], {
		errorMap: () => ({ message: 'Categoría no válida' }),
	}),
}).strict();


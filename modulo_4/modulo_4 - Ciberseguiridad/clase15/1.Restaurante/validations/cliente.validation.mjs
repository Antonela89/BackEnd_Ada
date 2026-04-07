import z from 'zod';

export const clienteSchema = z
	.object({
		nombre: z.string().min(3, 'Mínimo 3 caracteres').max(50),
		email: z.string().email('Email inválido'),
		vip: z.boolean().optional().default(false),
	})
	.strict(); // No permite campos extra



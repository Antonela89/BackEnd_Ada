import z from 'zod';

export const pedidoSchema = z
	.object({
		cliente: z.string().min(3, 'El nombre del cliente es obligatorio'),
		total: z.number().positive('El total debe ser mayor a 0'),
		items: z
			.array(z.string())
			.nonempty('El pedido debe tener al menos un plato'),
	})
	.strict();



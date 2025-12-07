import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

// Esquema de validación
export const userSchema = z.object({
    name: z.string().min(2, "El nombre debe tener al menos 2 letras"),
    email: z.string().email("Formato de email inválido"),
    age: z.number().min(0, "La edad no puede ser negativa")
});

// Middleware para validar creación (POST)
export const validateUserBody = (req: Request, res: Response, next: NextFunction) => {
    const result = userSchema.safeParse(req.body);

    if (!result.success) {
        // Si falla, enviamos los detalles del error formateados
        res.status(400).json({ 
            error: 'Datos inválidos', 
            details: result.error.issues.map(e => e.message) 
        });
        return; 
    }

    // Si todo ok, seguimos
    next();
};

export const validateUsersArray = (req: Request, res: Response, next: NextFunction) => {
    // 1. Definimos que esperamos un array de 'userSchema'
    const arraySchema = z.array(userSchema);

    // 2. Validamos el body completo
    const result = arraySchema.safeParse(req.body);

    if (!result.success) {
        // 3. Formateamos el error para indicar QUÉ usuario falló (índice)
        const detailedErrors = result.error.issues.map(e => ({
            index: e.path[0], // Esto te dice la posición en el array (ej: 0, 1, 5)
            field: e.path[1], // El campo que falló (ej: "email")
            message: e.message
        }));

        res.status(400).json({ 
            error: 'Uno o más usuarios del listado son inválidos', 
            details: detailedErrors 
        });
        return;
    }

    next();
};

// Middleware para validar edición parcial (PUT)
export const validateUserUpdate = (req: Request, res: Response, next: NextFunction) => {
    // .partial() hace que todos los campos sean opcionales, perfecto para PUT/PATCH
    const result = userSchema.partial().safeParse(req.body);

    if (!result.success) {
        res.status(400).json({ 
            error: 'Datos inválidos para actualización', 
            details: result.error.issues.map(e => e.message) 
        });
        return;
    }
    next();
};


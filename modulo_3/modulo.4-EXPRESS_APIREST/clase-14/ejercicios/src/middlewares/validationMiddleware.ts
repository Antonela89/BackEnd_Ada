// importacion de tipos de express
import { Request, Response, NextFunction } from 'express';
// modulo para validar datos
import { z } from 'zod';

// middleware para verificar datos ingresados para usuarios
// Esquema de validación
export const userSchema = z.object({
    name: z.string().min(2, "El nombre debe tener al menos 2 letras"),
    email: z.string().email("Formato de email inválido"),
    age: z.number().min(0, "La edad no puede ser negativa")
});

// Middleware para validar creación (POST)
export const validateUserBody = (req: Request, res: Response, next: NextFunction) => {
    // Validar el body completo
    const result = userSchema.safeParse(req.body);

    // verificacion
    if (!result.success) {
        // Si falla, enviamos los detalles del error formateados
        res.status(400).json({ 
            error: 'Datos inválidos', 
            details: result.error.issues.map(e => e.message) 
        });
        return; // corta ejecucion
    }

    // Si todo ok, seguimos
    next();
};

export const validateUsersArray = (req: Request, res: Response, next: NextFunction) => {
    // se establece que se espera un array de 'userSchema'
    const arraySchema = z.array(userSchema);

    // Validar el body completo
    const result = arraySchema.safeParse(req.body);

    // verificacion
    if (!result.success) {
        // Formateo del error para indicar QUÉ usuario falló (índice)
        const detailedErrors = result.error.issues.map(e => ({
            index: e.path[0], // Esto dice la posición en el array (ej: 0, 1, 5)
            field: e.path[1], // El campo que falló (ej: "email")
            message: e.message
        }));

        res.status(400).json({ 
            error: 'Uno o más usuarios del listado son inválidos', 
            details: detailedErrors 
        });
        return; // corta ejecucion
    }
   // sigue el proceso
    next();
};

// Middleware para validar edición parcial (PUT)
export const validateUserUpdate = (req: Request, res: Response, next: NextFunction) => {
    // .partial() hace que todos los campos sean opcionales, perfecto para PUT/PATCH
    const result = userSchema.partial().safeParse(req.body);

    // verificacion
    if (!result.success) {
        res.status(400).json({ 
            error: 'Datos inválidos para actualización', 
            details: result.error.issues.map(e => e.message) 
        });
        return; // corta la ejecucion
    }
    // sigue el proceso
    next();
};


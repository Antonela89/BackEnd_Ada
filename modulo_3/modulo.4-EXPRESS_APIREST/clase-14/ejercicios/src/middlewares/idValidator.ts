// importamos los tipos de express
import { Request, Response, NextFunction } from 'express';

// middleware para verificar el id
export const validateId = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    // Verificamos si es un número entero positivo
    if (!/^\d+$/.test(id)) {
        res.status(400).json({ error: 'El ID debe ser un número válido.' });
        return;
    }

    next();
};
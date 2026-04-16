import rateLimit from 'express-rate-limit';

export const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 5, // Límite de 5 intentos
    message: { error: "Demasiados intentos. Intente más tarde." },
    standardHeaders: true,
    legacyHeaders: false,
})
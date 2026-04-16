import crypto from 'crypto';

export const checkPasswordSafe = (inputPassword, actualPassword) => {
    // Usamos hashes para que ambas comparaciones tengan la misma longitud 
    // y timingSafeEqual para evitar ataques de tiempo
    const inputHash = crypto.createHash('sha256').update(inputPassword).digest();
    const actualHash = crypto.createHash('sha256').update(actualPassword).digest();
    
    return crypto.timingSafeEqual(inputHash, actualHash);
}
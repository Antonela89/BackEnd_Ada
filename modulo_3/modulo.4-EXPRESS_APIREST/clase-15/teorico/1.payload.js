// importamos el modulo de jsonwebtoken
import jwt from 'jsonwebtoken';

// declaracion de clave
// en proyecto real -> llamar a archivo .env
const secretKey = 'mi_clave_super_secreta';

// definir el payload
const payload = {
    userId: 123,
    role: 'admin',
    name: 'Antonela',
    iat: Math.floor(Date.now()/1000), // fecha de creacion
    exp: Math.floor(Date.now()/1000) + (60*60)
}

// Explicacion iat(fecha creacion) y exp(fecha expiracion)
// Data.now() -> fecha en milisegundos
// al hacer / 1000 -> obtenemos la fecha en segundos
// Math.floor() -> redondea el valor -> iat y exp deben ser numeros enteros
// (60*60) -> a la fecha actual se le suma una hora -> para la expiracion

// crear el JWT
const token = jwt.sign(payload, secretKey, {algorithm: 'HS256'});
console.log(`\nToken JWT generardo correctamente: ${token}`);
// resultado: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywicm9sZSI6ImFkbWluIiwibmFtZSI6IkFudG9uZWxhIiwiaWF0IjoxNzY1NDkyNzA5LCJleHAiOjE3NjU0OTYzMDl9.PAZH8Ru1oVOic5u86uEAeaFGPXbavY5vlPHpXt25UE4

// decodificar la informacion del payload y verificar el token
try {
    const decoded = jwt.verify(token, secretKey);
    console.log(`\nPayload decodifcado:`, decoded);
    
} catch (error) {
    console.error(`Token invalido o experido: ${error.message}`);
}
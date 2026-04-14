import fs from 'fs';
import { usuariosGuardados } from './datos.mjs';

const passwords = fs.readFileSync('diccionario.txt', 'utf-8').split('\n').map(p => p.trim());

console.log(passwords);

for (const usuario of usuariosGuardados) {
    for (const password of passwords) {
        if (password === usuario.password) {
            console.log(`Contraseña encontrada!: ${usuario.nombre}: ${password}` );
        }
    } 
}
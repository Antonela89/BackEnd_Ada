import { usuariosGuardados, passwordsComunes } from "./datos.mjs";

// Recorrer listado de usuarios
for (const usuario of usuariosGuardados) {
    for (const password of passwordsComunes) {
        if (password === usuario.password) {
            console.log(`Contraseña encontrada!: ${usuario.nombre}: ${password}` );
        }
    } 
}

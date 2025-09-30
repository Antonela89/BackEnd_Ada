import { usuariosModel } from "../model/usuarios.mjs";
import { usuariosVista } from "../view/usuarioVista.mjs";

const usuarioControlador = {
    procesarComando: (comandoCliente) => {
        // procesar comando Completo
        const elementos = comandoCliente.trim().split(' ');
        const comando = elementos[0].toLowerCase();
        const nombre = elementos.slice(1).join(' ');

        switch (comando) {
            case 'agregar':
                if (!nombre) {
                    return usuariosVista.error(`El comando 'Agregar' necesita un nombre.`)
                }

                const nuevoUsuario = usuariosModel.post(nombre);

                if (nuevoUsuario) {
                    return usuariosVista.confirmar(nuevoUsuario)
                } else {
                    return usuariosVista.error(`El nombre no puede estar vacio.`)
                }

            case 'listar':
                const usuarios = usuariosModel.get();
                return usuariosVista.listar(usuarios);

            default:
                // Comando no reconocido, respondemos directamente.
                return usuariosVista.error(`Comando '${comando}' no reconocido.`);
        }
    }
}

export { usuarioControlador }
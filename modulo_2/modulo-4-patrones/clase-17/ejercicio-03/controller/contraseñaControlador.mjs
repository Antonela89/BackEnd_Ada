import { contraseñaVista } from '../view/contraseñaVista.mjs';
import { contraseñaModel } from '../model/contraseñaModel.mjs';

const contraseñaControlador = {
    procesarComando: (comandoCliente) => {
        const partes = comandoCliente.trim().split(' ');
        const comando = partes[0].toLowerCase();

        switch (comando) {
            case 'añadir':
                const usuario = partes[1];
                const contraseña = partes.slice(2).join(' ');

                if (!usuario || !contraseña) {
                    return contraseñaVista.error('El comando "añadir" requiere un usuario y una contraseña.');
                }

                try {
                    const nuevosDatos = contraseñaModel.post(usuario, contraseña);
                    if (nuevosDatos) {
                        return contraseñaVista.confirmar(nuevosDatos);
                    } else {
                        return contraseñaVista.error('Usuario o contraseña no válidos.');
                    }
                } catch (err) {
                    return contraseñaVista.error(`No se pudo guardar la contraseña. ${err.message}`);
                }

            case 'listar':
                const todasLasContraseñas = contraseñaModel.get();
                return contraseñaVista.listar(todasLasContraseñas);

            default:
                return contraseñaVista.error(`El comando "${comando}" no es reconocido. Comandos disponibles: agregar, listar.`);
        }
    }
}

export { contraseñaControlador }
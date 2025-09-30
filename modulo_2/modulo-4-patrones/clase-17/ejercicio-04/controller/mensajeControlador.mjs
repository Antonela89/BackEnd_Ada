import { mensajeModel } from '../model/mensajeModel.mjs';
import { mensajeVista } from '../view/mensajeVista.mjs';

const mensajeControlador = {
    procesarComando: (respuestaCliente) => {
        const partes = respuestaCliente.trim().split(' ');
        const comando = partes[0].toLowerCase();

        switch (comando) {
            case 'enviar':
                const usuario = partes[1];
                const mensaje = partes.slice(2).join(' ');

                const nuevoMensaje = mensajeModel.post(usuario, mensaje )
                if (!nuevoMensaje) {
                    return mensajeVista.error(`El comando "agregar" necesita un usuario y un mensaje.`)
                } else {
                    return mensajeVista.confirmar(nuevoMensaje)
                }
            case 'listar':
                const historial = mensajeModel.get();
                return mensajeVista.listar(historial);
            default:
                return mensajeVista.error(`${comando} - Comando no reconocido`)
        }
    }
}

export { mensajeControlador }
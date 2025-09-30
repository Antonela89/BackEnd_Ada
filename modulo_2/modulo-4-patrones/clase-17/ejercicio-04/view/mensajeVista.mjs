const mensajeVista = {
    listar: (historial) => {
        if (historial.length === 0) {
            return `No hay mensajes en el historial`;
        }

        let registro = '--- Historal de mensajes ---'

        historial.forEach((mensaje, indice) => {
            registro += `${indice + 1}: ${mensaje.usuario} => ${mensaje.mensaje}`
        });

        return registro
    }, 

    confirmar: (nuevoMensaje) => {
        return `Se ha guardado exitosamente el nuevo mensaje: \n${nuevoMensaje.usuario} - ${nuevoMensaje.mensaje}`
    },

    error: (msj) => {
      return `Ha ocurrido un error: ${msj}`   
    }
}

export { mensajeVista }
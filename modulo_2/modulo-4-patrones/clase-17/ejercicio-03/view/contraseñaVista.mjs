const contraseñaVista = {
    listar: (contraseñas) => {
        if (!contraseñas || contraseñas.length === 0) {
            return `No hay contraseñas para mostrar.`
        }

        let vista = '--- Lista de contraseñas ---';

        contraseñas.forEach(item => {
            vista += `Usuario: ${item.usuario}, Hash: ${item.hash}\n`;
        });
        
        return vista;
    },

    confirmar: (nuevosDatos) => {
        return `Se agregó correctamente la contraseña para el usuario: '${nuevosDatos.usuario}'`;
    },

    error: (mensaje) => {
        return `Error: ${mensaje}`;
    }

}

export { contraseñaVista }
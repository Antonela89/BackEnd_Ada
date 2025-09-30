const usuariosVista = {
    listar: (usuarios) => {
        if (!usuarios || usuarios.lenght === 0) {
            return `No hay usuarios para mostrar`
        }

        let listaFormateada = 'Lista de Usuarios:'

        usuarios.forEach(usuario => {
            listaFormateada += `\nID: ${usuario.id} - Nombre: ${usuario.nombre}`
        });

        return listaFormateada;
    }, 

    confirmar: (usuario) => {
        return `Usuario: ${usuario.nombre} se ha registrado.\n`
    }, 

    error: (mensaje) => {
        return `Error: ${mensaje}.\n`
    }
}

export { usuariosVista }
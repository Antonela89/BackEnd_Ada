// Simulamos una funcion que solicita datos, con una opcion de exito o error
function obtenerDatos(exito) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (exito) {
                resolve(`Datos recibidos correctamente.`)  // resuleve con exito
            } else {
                reject(`Error al obtener los datos.`) // Lanza un error
            }
        }, 3000);
    });
}

// Funcion asincrona que intenta obtener los datos y maneja posiblres errores
async function consultarDatos() {
    try {
        console.log("Iniciando consulta de datos...");

        const exito = Math.random() > 0.5
        // Pausa hasta que obtenerDatos() se complete o atrapa un error si ocurre
        let resultado = await obtenerDatos(exito);
        console.log(resultado); // Imprime si fue exitoso
        
    } catch (error) {
        console.error("Ocurrio un error: ", error);  // Captura y muestra el error
    }
    finally {
        console.log("Finalizando consulta de datos."); // Siempre se ejecuta
    }
}


consultarDatos();
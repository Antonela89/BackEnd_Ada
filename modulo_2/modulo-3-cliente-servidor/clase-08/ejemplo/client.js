// importación del modulo net
const net = require('net');

// configuración de conexión
const PORT = 5000;
const HOST = 'localhost'

// creación de conexion al servidor
const client = net.createConnection({ port: PORT, host: HOST }, () => {
    // mensaje de conexion exitosa
    console.log(`Conectado al servidor.`);

    //mensaje inicial al servidor
    client.write(`Hola servidor!.`)
    
    // configuramos un tiempo de espera de 10 seg con setTimeout
    client.setTimeout(10000, () => {
        console.log(`El tiempo de espera a expirado, cerrando la conexión.`);  
        // finaliza la conexión si se agota el tiempo.
        client.end();
    });

    // pausamos la recepción de datos despues de 2 seg
    setTimeout(() => {
        console.log(`Pausando la recepción de datos... `);
        client.pause();
        //  reanudar la recepcion de datos despues de 3 seg
        setTimeout(() => {
            console.log(`Reanudando recepción de datos...`);
            client.resume()
        }, 3000)
    }, 2000)

    // aqui se puede usar setEncoding
});

// manejo de eventos - clase 9

// evento data -> recibir mensajes del servidor
client.on('data', (data) => {
    console.log(`Datos recibidos del servidor: ${data.toString()}`);    
})


// evento end -> cuando el servidor cierra la conexion
client.on('end', () => {
    console.log(`El servidor cerró la conexión`);
})

// evento error 
client.on('error', (err) => {
    console.error(`Error en la conexion: ${err.message}`)
})

// evento close -> cuando la conexion se cierra
client.on('close', () => {
    console.log(`Conexión cerrada.`);
})

// destruimos el socket despues de 15 seg con destroy para liberar recursos
setTimeout(() => {
    console.log(`Destruyendo el socket...`);
    client.destroy()   
}, 15000)
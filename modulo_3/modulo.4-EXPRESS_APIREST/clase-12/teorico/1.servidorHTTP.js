// Importamos el modulo http de Node.js, que nos va a permitir crear un servidor HTTP
const http = require('http');

// Creamos un servidor usando el metodo 'createServer'
// Esta funcion toma como callback dos parametros
// - 'req' (request): representa la solicitud que hace el cliente
// - 'res' (response): representa la respuesta que envia el servidor al cliente
const server = http.createServer((req, res) => {

    // Establecemos el cod. de estado de la respuesta a 200 (OK), indicando que la solicitud fue exitosa
    res.statusCode = 200;

    // Configuramos el encabezado 'Content-Type' para que el cliente sepa que el contenido es texto plano
    res.setHeader('Content-Type', 'text/plain');

    // Enviar la respuesta al cliente con el mensaje y finalizando la respuesta
    res.end('Hola Mundo')
})

// Hacemos que el servidor escuche en el puerto 3000
// Una vez que el servidor este listo, imprime el mensaje en consola
server.listen(3000,()=> {
    console.log('Servidor ejecutandose en http://localhost:3000');
})

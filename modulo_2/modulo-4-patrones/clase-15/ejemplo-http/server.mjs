// importacion con ES Modules
// importamos el modulo HTTP que es nativo de node.js para crear el servidor
import http from 'http';
// importamos el modulo fs porque se trabaja con archivos
import fs from 'fs';

// definimos un puerto en el que el servidor va a estar escuchando
const PORT = 3000;

//creación del servidor
// deben figurar los 2 parametros
const server = http.createServer((req, res) => {

    // llamar al modulo fs para leer el archivo datos.json
    fs.readFile('datos.json', 'utf8', (err, data) => {
        // manejo de error
        if (err) {
            // si hay error mostramos un mensaje simple
            res.end(`No se pudo leer un archivo JSON.`)
            return;
        }

        // enviamos el contenido del archivo json al navegador
        res.setHeader('Content-Type', 'application/json') // configuramos el tipo de contenido en formato json
        res.end(data); //enviamos el contenido del archivo
    })
});

server.listen (PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
    
})
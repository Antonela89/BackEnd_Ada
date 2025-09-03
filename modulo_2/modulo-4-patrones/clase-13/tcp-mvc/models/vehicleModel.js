// TAREA DEL MODEL
// leer los datos del json
// buscar información especifica según un parametro


// IMPORTACION DE MODULOS
// fs -> File System -> Trabajar con Sistema de archivos
// path -> Rutas (transformar y manejar rutas de archivos)

const fs = require('fs');
const path = require('path');

// Definir ruta de archivo a consultar (data.json), que esta en el mismo directorio que este scripts;
// __dirname -> variable global de NodeJS que contiene la ruta del directorio actual.
const dataPath = path.join(__dirname, 'data.json');

//  Creacion de un objeto que contiene metodos para interactuar con los datos de 'data.json'
const VehicleModel = {
    // Metodo para obtener un vehiculo por ID
    getVehicleByID: (id) => {
        // leemos el archivo
        const rawData = fs.readFileSync(dataPath);

        // convertir el contenido del archivo de json a un objeto js -> parse
        const vehicles = JSON.parse(rawData);

        // buscar el vehiculo por ID -> find()
        // si no se encuentra ningun vehiculo con ese ID, retorna null
        return vehicles.find( vehicle => vehicle.id === id) || null;
    }
}

// exportar el modulo 
module.exports = VehicleModel




// TAREA DE CONTROLLER
// recibir las peticiones del cliente para que el model busque los datos y estos se los envia al view para que los formatee para mostrarselos al usuario

// importacion del modulo del modelo
const VehicleModel = require('../models/vehicleModel.js');
// importacion del modulo de view
const VehicleView = require('../views/vehicleView.js');

// creacion de un objeto que maneja las solicitudes de los vehiculos
const VehicleController = {
    // metodo para manejar las solicitudes de vehiculos por ID
    handleRequest: (id) => {
        // llamar al metodo 'getVehicleByID' para obtener los datos del vehiculo
        // convertimos el id que ingresa a un numero entero usando parseInt en base 10
        const vehicle = VehicleModel.getVehicleByID(parseInt(id, 10));

        // llamamos a view par formatear la respuesta que se le da al usuario
        return VehicleView.formatResponse(vehicle);
    }
}

// exportamos el modulo
module.exports = VehicleController
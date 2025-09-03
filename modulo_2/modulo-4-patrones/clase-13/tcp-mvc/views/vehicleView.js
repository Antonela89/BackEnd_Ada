// TAREA DE VIEW
// Definir como se va a devolver la respuesta al cliente.

// creamos el objeto que tendrá los metodos para formatear la respuesta de la solicitud
const VehicleView = {
    formatResponse: (vehicle) => {
        // verificar si se encontró un 'vehiculo'
        if (!vehicle) {
            return JSON.stringify({
                status: "error", // indicamos que hay un error
                message:"Vehiculo no encontrado" // mensaje descriptivo del error
            })
        }

        return  JSON.stringify({
            status: "success", // indicamos que la operacion fue exitosa
            data: vehicle // incluimos los datos del vehiculo en la respuesta
        })
    }
}

// exportamos el modulo
module.exports = VehicleView
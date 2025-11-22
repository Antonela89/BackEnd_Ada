// ### 10. Simulación de Actualización de Inventario con Validación de Stock
// Desarrolla una función que simule la actualización de un inventario después de una compra. Si el inventario es insuficiente (cantidad <= 0), la actualización debe fallar y lanzar un error.
// **Especificaciones:**
// *   La función `actualizarInventario` debe tomar un parámetro `cantidad` y simular un tiempo de actualización de 1.5 segundos.
// *   Si la cantidad es mayor a 0, la función debe retornar el mensaje "Inventario actualizado".
// *   En caso contrario, debe lanzar el error "Error: inventario insuficiente".
// *   Usa `try/catch` en una función principal para manejar el error de manera adecuada.

// Este ejercicio es útil para aprender cómo manejar situaciones de validación en inventarios de productos.

function actualizarInventario(cantidad) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (cantidad > 0) {
                resolve(`Inventario actualizado.`)
            } else {
                reject(`Error: inventario insuficiente`)
            }
        }, 1500)
    }) 
}

async function procesarActualizacion(cantidad) {
    try {
        console.log(`Procesando actualización del inventario.`);
        const respuesta = await actualizarInventario(cantidad);
        console.log('✅', respuesta);
    } catch (error) {
        console.error('❌', error);
    }
}

procesarActualizacion(3);
procesarActualizacion(0);
procesarActualizacion(-2);
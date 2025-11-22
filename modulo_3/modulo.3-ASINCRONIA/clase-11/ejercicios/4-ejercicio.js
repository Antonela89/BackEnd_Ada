// ### 4. Simulación de Proceso de Pago Asíncrono con Manejo de Errores
// Diseña una función que simule un proceso de pago que tarda 3 segundos en completarse. Si el monto del pago es superior a $1000, el proceso debe fallar y lanzar un error. Utiliza `try/catch` para manejar el error de manera adecuada.

// Esta simulación es relevante para entender cómo gestionar errores en procesos financieros o de pago, en los cuales las validaciones son cruciales.

function procesarTransaccionBancaria(monto) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Validación: Solo falla si es MAYOR a 1000
            if (monto <= 1000) { 
                resolve(`Pago de $${monto} procesado con éxito.`);
            } else {
                reject(`Error: El monto de $${monto} excede el límite permitido.`);
            }
        }, 3000);
    });
}

// Esta es tu función principal que maneja el flujo
async function realizarPago(monto) {
    console.log(`Iniciando transacción de $${monto}...`);

    try {
        // Aquí el código es más limpio, solo "esperamos" a la función externa
        const respuesta = await procesarTransaccionBancaria(monto);
        console.log("✅", respuesta);
    } catch (error) {
        console.error("❌", error);
    }
}

// Ejecución
realizarPago(500);   // Éxito
realizarPago(1000);  // Éxito (Límite exacto)
realizarPago(1200);  // Error

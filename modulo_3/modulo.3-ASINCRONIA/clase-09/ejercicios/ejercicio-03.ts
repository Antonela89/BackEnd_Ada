// ### 3. Compañía de Seguros: Renovación Automática de Pólizas
// Desarrolla un sistema que gestione las pólizas de seguros de una compañía. Cada póliza debe tener un identificador, nombre del cliente, monto asegurado y una fecha de renovación. Implementa las siguientes funciones:
// *   Añadir una póliza.
// *   Programar la renovación de la póliza utilizando `setTimeout()`.
// *   Mostrar todas las pólizas activas.

// Interfaz que define la estructura de una póliza
interface Poliza {
	id: number;
	nombreCliente: string;
	montoAsegurado: number;
	fechaRenovacion: Date;
}

// Clase dedicada a gestionar la colección de pólizas
class GestionPolizas {
    // La lista de pólizas es privada para que solo se pueda modificar a través de los métodos de la clase
	private listaDePolizas: Poliza[] = [];
    private proximoId: number = 1; // Para generar IDs únicos automáticamente

    
    // Añade una nueva póliza a la lista y programa su renovación.
    addPoliza(nombreCliente: string, montoAsegurado: number, fechaRenovacion: Date): void {
        const nuevaPoliza: Poliza = {
            id: this.proximoId++,
            nombreCliente,
            montoAsegurado,
            fechaRenovacion
        };
        
        this.listaDePolizas.push(nuevaPoliza);
        console.log(`Póliza ${nuevaPoliza.id} de ${nombreCliente} agregada. Se renovará el ${fechaRenovacion.toLocaleDateString()}.`);
        
        // Una vez agregada, programamos su recordatorio de renovación
        this.programarRenovacion(nuevaPoliza);
    }

    
    //Programa un recordatorio para la renovación de una póliza específica.
    private programarRenovacion(poliza: Poliza): void {
        const ahora = new Date().getTime(); // Tiempo actual en milisegundos
        const tiempoRenovacion = poliza.fechaRenovacion.getTime(); // Tiempo de renovación en milisegundos
        
        const tiempoRestante = tiempoRenovacion - ahora;

        // Solo programamos el timeout si la fecha de renovación es en el futuro
        if (tiempoRestante > 0) {
            console.log(` -> Renovación para la póliza ${poliza.id} programada en ${Math.ceil(tiempoRestante / 1000)} segundos.`);

            setTimeout(() => {
                console.log(`\n** ALERTA DE RENOVACIÓN **`);
                console.log(`La póliza #${poliza.id} del cliente ${poliza.nombreCliente} ha llegado a su fecha de renovación.`);
                
                // Opcional: Lógica para renovar automáticamente la póliza por un año más
                // poliza.fechaRenovacion.setFullYear(poliza.fechaRenovacion.getFullYear() + 1);
                // console.log(`La póliza ha sido renovada automáticamente. Nueva fecha: ${poliza.fechaRenovacion.toLocaleDateString()}`);

            }, tiempoRestante);
        } else {
            console.log(` -> La fecha de renovación de la póliza ${poliza.id} ya ha pasado.`);
        }
    }


    // Muestra todas las pólizas que todavía no han llegado a su fecha de renovación.

    mostrarActivas(): void {
        console.log("\n--- Reporte de Pólizas Activas ---");
        const ahora = new Date();
        
        // Filtramos la lista para obtener solo las pólizas cuya fecha de renovación es posterior a la fecha actual
        const polizasActivas = this.listaDePolizas.filter(
            (poliza) => poliza.fechaRenovacion > ahora
        );

        if (polizasActivas.length === 0) {
            console.log("No hay pólizas activas en este momento.");
            return;
        }

        // Mostramos cada póliza activa
        polizasActivas.forEach(poliza => {
            console.log(
                `ID: ${poliza.id} | Cliente: ${poliza.nombreCliente} | Monto: $${poliza.montoAsegurado} | Vence: ${poliza.fechaRenovacion.toLocaleString()}`
            );
        });
    }

    // Muestra todas las pólizas, sin importar su estado.
    mostrarTodas(): void {
        console.log("\n--- Inventario Total de Pólizas ---");
        if (this.listaDePolizas.length === 0) {
            console.log("No hay pólizas registradas.");
            return;
        }

        this.listaDePolizas.forEach(poliza => {
            console.log(
                `ID: ${poliza.id} | Cliente: ${poliza.nombreCliente} | Monto: $${poliza.montoAsegurado} | Vence: ${poliza.fechaRenovacion.toLocaleString()}`
            );
        });
    }
}


// --- Casos de Uso ---

const miAseguradora = new GestionPolizas();

// Para ver el setTimeout en acción, creamos una fecha de renovación muy cercana (en 5 segundos)
const fechaCercana = new Date(new Date().getTime() + 5000); 

// Y otra que ya pasó
const fechaPasada = new Date(new Date().getTime() - 86400000); // ayer

miAseguradora.addPoliza("Juan Pérez", 50000, fechaCercana);
miAseguradora.addPoliza("Ana Gómez", 120000, new Date("2025-12-01"));
miAseguradora.addPoliza("Carlos Ruiz", 75000, fechaPasada);


// Mostramos las pólizas que están activas actualmente
miAseguradora.mostrarActivas();

// Mostramos todas las pólizas, incluyendo las vencidas
miAseguradora.mostrarTodas();

// Después de unos 6 segundos, la póliza de Juan Pérez se "renovará" y el mensaje del setTimeout aparecerá en la consola.
// También podemos volver a mostrar las pólizas activas para ver que la de Juan ya no aparece.
setTimeout(() => {
    console.log("\n(Verificando estado después de 6 segundos...)");
    miAseguradora.mostrarActivas();
}, 6000);
// ### 3. Compañía de Seguros: Renovación Automática de Pólizas
// Desarrolla un sistema que gestione las pólizas de seguros de una compañía. Cada póliza debe tener un identificador, nombre del cliente, monto asegurado y una fecha de renovación. Implementa las siguientes funciones:
// *   Añadir una póliza.
// *   Programar la renovación de la póliza utilizando `setTimeout()`.
// *   Mostrar todas las pólizas activas.

// --- Definiciones de Contratos y Clases ---

/**
 * Definir el contrato de datos para una entidad de póliza.
 * Garantizar una estructura consistente a través del sistema.
 */
interface Poliza {
	id: number;
	nombreCliente: string;
	montoAsegurado: number;
	fechaRenovacion: Date;
}

/**
 * Orquestar el ciclo de vida de las pólizas.
 * Encapsular el estado (la colección) y la lógica de negocio asociada.
 */
class GestionPolizas {
    // Mantener el estado de la colección de forma privada para garantizar la integridad.
	private listaDePolizas: Poliza[] = [];
    // Implementar un contador para la generación de identificadores únicos.
    private proximoId: number = 1;

    /**
     * Crear y registrar una nueva póliza, delegando su programación.
     * @param nombreCliente - Identificador del titular.
     * @param montoAsegurado - Valor de la cobertura.
     * @param fechaRenovacion - Momento de vencimiento de la póliza.
     */
    addPoliza(nombreCliente: string, montoAsegurado: number, fechaRenovacion: Date): void {
        const nuevaPoliza: Poliza = {
            id: this.proximoId++,
            nombreCliente,
            montoAsegurado,
            fechaRenovacion
        };
        
        this.listaDePolizas.push(nuevaPoliza);
        console.log(`Póliza ${nuevaPoliza.id} ('${nombreCliente}') agregada. Vence: ${fechaRenovacion.toLocaleDateString()}.`);
        
        // Delegar la programación de la notificación como un efecto secundario.
        this.programarRenovacion(nuevaPoliza);
    }

    /**
     * Implementar la lógica asíncrona para notificar sobre una renovación.
     * @param poliza - La entidad de póliza a programar.
     */
    private programarRenovacion(poliza: Poliza): void {
        // Calcular el delta de tiempo hasta el vencimiento.
        const ahora = Date.now();
        const tiempoRestante = poliza.fechaRenovacion.getTime() - ahora;

        // Validar que la fecha sea futura para evitar programar eventos pasados.
        if (tiempoRestante > 0) {
            console.log(` -> Alerta de renovación para póliza ${poliza.id} programada en ${Math.ceil(tiempoRestante / 1000)}s.`);
            // Diferir la ejecución de la notificación hasta el momento del vencimiento.
            setTimeout(() => {
                console.log(`\n** ALERTA DE RENOVACIÓN **`);
                console.log(`La póliza #${poliza.id} del cliente ${poliza.nombreCliente} ha alcanzado su vencimiento.`);
            }, tiempoRestante);
        } else {
            console.log(` -> La fecha de renovación de la póliza ${poliza.id} ya ha pasado.`);
        }
    }

    /**
     * Derivar y mostrar el subconjunto de pólizas cuyo estado es 'activo'.
     * El estado se calcula dinámicamente en tiempo de ejecución.
     */
    mostrarActivas(): void {
        console.log("\n--- Reporte de Pólizas Activas ---");
        const ahora = new Date();
        
        // Filtrar la colección basándose en una condición temporal.
        const polizasActivas = this.listaDePolizas.filter(
            (poliza) => poliza.fechaRenovacion > ahora
        );

        if (polizasActivas.length === 0) {
            console.log("No hay pólizas activas en este momento.");
            return;
        }

        // Renderizar la vista filtrada.
        polizasActivas.forEach(poliza => {
            console.log(
                `ID: ${poliza.id} | Cliente: ${poliza.nombreCliente} | Monto: $${poliza.montoAsegurado} | Vence: ${poliza.fechaRenovacion.toLocaleString()}`
            );
        });
    }

    /**
     * Proveer una vista completa y sin filtrar de todo el portafolio.
     * Útil para auditoría o depuración.
     */
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

// Instanciar el gestor de pólizas.
const miAseguradora = new GestionPolizas();

// Simular la creación de fechas para probar la lógica temporal.
const fechaCercana = new Date(Date.now() + 5000); // Vence en 5 segundos.
const fechaPasada = new Date(Date.now() - 86400000); // Venció ayer.

// Poblar el sistema con datos de prueba.
miAseguradora.addPoliza("Juan Pérez", 50000, fechaCercana);
miAseguradora.addPoliza("Ana Gómez", 120000, new Date("2025-12-01"));
miAseguradora.addPoliza("Carlos Ruiz", 75000, fechaPasada);

// Verificar el estado inicial del sistema.
miAseguradora.mostrarActivas();
miAseguradora.mostrarTodas();

// Programar una verificación asíncrona para confirmar el cambio de estado.
// El delay debe ser mayor al de la póliza más cercana a vencer.
setTimeout(() => {
    console.log("\n(Verificando estado después de 6 segundos...)");
    miAseguradora.mostrarActivas();
}, 6000);
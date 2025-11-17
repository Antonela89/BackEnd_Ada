// ### 5. Banco: Transferencias Programadas
// Crea un sistema para gestionar cuentas bancarias en un banco. Cada cuenta debe tener un nombre del propietario, un saldo y un estado (activo o inactivo). Implementa las siguientes funciones:
// *   Añadir una cuenta.
// *   Realizar una transferencia entre cuentas después de un retraso de 8 segundos utilizando `setTimeout()`.
// *   Mostrar todas las cuentas.

// --- Definiciones de Contratos y Clases ---

/**
 * Definir la estructura de datos para la entidad 'Cuenta'.
 * Establecer un contrato para los objetos que representan cuentas bancarias.
 */
interface Cuenta {
	nombreCliente: string;
	saldo: number;
	estado: boolean; // true: activa, false: inactiva
}

/**
 * Encapsular la lógica de negocio para la gestión de cuentas y transferencias.
 * Orquestar las operaciones sobre la colección de cuentas.
 */
class GestionTransferencias {
	// Utilizar la inyección de dependencias en el constructor para inicializar el estado.
	// La colección se mantiene privada para proteger la integridad de los datos.
	constructor(private listaCuentas: Cuenta[] = []) {}

	/**
	 * Añadir una nueva cuenta al sistema.
	 * @param nombreCliente - Identificador del titular.
	 * @param saldoInicial - Monto inicial de la cuenta.
	 * @param estado - (Opcional) Estado inicial de la cuenta, por defecto 'activa'.
	 */
	agregarCuenta(
		nombreCliente: string,
		saldoInicial: number,
		estado: boolean = true
	): void {
		// Validar la unicidad del cliente para prevenir duplicados.
		if (this.listaCuentas.some((c) => c.nombreCliente === nombreCliente)) {
			console.log(
				`Error de validación: El cliente '${nombreCliente}' ya posee una cuenta.`
			);
			return;
		}

		const nuevaCuenta: Cuenta = {
			nombreCliente,
			saldo: saldoInicial,
			estado,
		};
		this.listaCuentas.push(nuevaCuenta);
		console.log(
			`Cuenta para '${nuevaCuenta.nombreCliente}' creada exitosamente.`
		);
	}

	/**
	 * Programar una transferencia de fondos de forma asíncrona.
	 * Simula la latencia de procesamiento de una transacción bancaria.
	 * @param clienteOrigen - Titular de la cuenta de débito.
	 * @param clienteDestino - Titular de la cuenta de crédito.
	 * @param monto - Cantidad a transferir.
	 */
	transferirDinero(
		clienteOrigen: string,
		clienteDestino: string,
		monto: number
	): void {
		console.log(
			`\n> Solicitud de transferencia por $${monto} de '${clienteOrigen}' a '${clienteDestino}'. Procesando en 8s...`
		);

		// Diferir la ejecución de la lógica transaccional.
		setTimeout(() => {
			console.log(`\n--- Procesando Transacción ---`);

			// --- Fase de Validación (Pre-transacción) ---
			if (clienteOrigen === clienteDestino) {
				console.log(
					'Error de Lógica: La cuenta de origen y destino no pueden ser la misma.'
				);
				return;
			}

			// Localizar las entidades involucradas en la transacción.
			const cuentaOrigen = this.listaCuentas.find(
				(c) => c.nombreCliente === clienteOrigen
			);
			const cuentaDestino = this.listaCuentas.find(
				(c) => c.nombreCliente === clienteDestino
			);

			// Realizar validaciones de existencia y estado.
			if (!cuentaOrigen || !cuentaDestino) {
				console.log(
					`Error de Búsqueda: Una o ambas cuentas no fueron encontradas.`
				);
				return;
			}
			if (!cuentaOrigen.estado) {
				console.log(
					`Error de Estado: La cuenta de origen ('${clienteOrigen}') está inactiva.`
				);
				return;
			}
			if (!cuentaDestino.estado) {
				console.log(
					`Error de Estado: La cuenta de destino ('${clienteDestino}') está inactiva.`
				);
				return;
			}
			if (cuentaOrigen.saldo < monto) {
				console.log(
					`Error de Fondos: Saldo insuficiente en la cuenta de '${clienteOrigen}'.`
				);
				return;
			}

			// --- Fase de Ejecución (Transacción) ---
			// Mutar el estado de las cuentas para reflejar la transferencia.
			cuentaOrigen.saldo -= monto;
			cuentaDestino.saldo += monto;

			console.log(`✅ Transferencia de $${monto} completada.`);
			console.log(
				`   - Nuevo saldo de '${clienteOrigen}': $${cuentaOrigen.saldo}`
			);
			console.log(
				`   - Nuevo saldo de '${clienteDestino}': $${cuentaDestino.saldo}`
			);
			console.log(`------------------------------`);
		}, 8000);
	}

	/**
	 * Renderizar una vista completa del estado de todas las cuentas registradas.
	 */
	mostrarCuentas(): void {
		console.log(`\n----- Reporte de Cuentas del Sistema -----`);
		if (this.listaCuentas.length === 0) {
			console.log('No hay cuentas registradas.');
		} else {
			this.listaCuentas.forEach((c) => {
				const estadoStr = c.estado ? 'Activa' : 'Inactiva';
				console.log(
					`- Cliente: ${c.nombreCliente} | Saldo: $${c.saldo} | Estado: ${estadoStr}`
				);
			});
		}
		console.log(`----------------------------------------`);
	}
}

// --- Casos de Uso ---

// Instanciar el gestor del banco.
const miBanco = new GestionTransferencias();

// Poblar el sistema con datos de prueba.
miBanco.agregarCuenta('Juan Pérez', 1000);
miBanco.agregarCuenta('Ana Gómez', 500);
miBanco.agregarCuenta('Carlos Ruiz', 2000, false); // Caso de prueba: cuenta inactiva.

// Mostrar el estado inicial del sistema.
miBanco.mostrarCuentas();

// Iniciar una operación de transferencia asíncrona.
miBanco.transferirDinero('Juan Pérez', 'Ana Gómez', 250);

// Programar una visualización futura para auditar el resultado de la transacción.
// El delay debe ser mayor al de la operación asíncrona.
setTimeout(() => {
	console.log('\n(Auditoría de estado después de 9 segundos...)');
	miBanco.mostrarCuentas();
}, 9000);

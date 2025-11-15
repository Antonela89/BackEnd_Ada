// ### 5. Banco: Transferencias Programadas
// Crea un sistema para gestionar cuentas bancarias en un banco. Cada cuenta debe tener un nombre del propietario, un saldo y un estado (activo o inactivo). Implementa las siguientes funciones:
// *   Añadir una cuenta.
// *   Realizar una transferencia entre cuentas después de un retraso de 8 segundos utilizando `setTimeout()`.
// *   Mostrar todas las cuentas.

// creación de interface para establecer los datos necesarios de la cuenta
interface Cuenta {
	nombreCliente: string;
	saldo: number;
	estado: boolean;
}

// creación de una clase para gestionar las transferencias
class GestionTransferencias {
	// propiedades
	constructor(private listaCuentas: Cuenta[] = []) {}

	// metodos
	// agregar una cuenta
	agregarCuenta(nombreCliente: string, saldoInicial: number, estado: boolean = true): void {
        // Verificamos para no agregar clientes duplicados
        if (this.listaCuentas.some(c => c.nombreCliente === nombreCliente)) {
            console.log(`Error: El cliente ${nombreCliente} ya tiene una cuenta.`);
            return;
        }

        const nuevaCuenta: Cuenta = { nombreCliente, saldo: saldoInicial, estado };

		this.listaCuentas.push(nuevaCuenta);
		console.log(
			`La cuenta del cliente: ${nuevaCuenta.nombreCliente} ha sido agregada exitosamente.`
		);
	}

	// transferir entre cuentas con un retraso -> setTimeout(() => {}, 8000)
	transferirDinero(
		clienteOrigen: string,
		clienteDestino: string,
		monto: number
	): void {
        console.log(`\nIniciando transferencia de $${monto} de ${clienteOrigen} a ${clienteDestino}. Se procesará en 8 segundos...`);

		setTimeout(() => {

            console.log(`\n--- PROCESANDO TRANSFERENCIA ---`);

             // --- Validaciones Previas ---
            if (clienteOrigen === clienteDestino) {
                console.log("Error: La cuenta de origen y destino no pueden ser la misma.");
                return;
            }

			let cuentaOrigen = this.listaCuentas.find(
				(c) => c.nombreCliente === clienteOrigen
			);
			let cuentaDestino = this.listaCuentas.find(
				(c) => c.nombreCliente === clienteDestino
			);

			if (!cuentaOrigen) {
				console.log(
					`No se encontró ninguna cuenta asociada al cliente: ${clienteOrigen}`
				);
				return;
			}

			if (!cuentaDestino) {
				console.log(
					`No se encontró ninguna cuenta asociada al cliente: ${clienteDestino}`
				);
				return;
			}

            if (!cuentaOrigen.estado) {
                console.log(`Error: La cuenta de origen de ${clienteOrigen} está inactiva.`);
                return;
            }

            if (!cuentaDestino.estado) {
                console.log(`Error: La cuenta de destino de ${clienteDestino} está inactiva.`);
                return;
            }


			if (cuentaOrigen.saldo < monto) {
				console.log(
					`La cuenta del cliente: ${clienteOrigen} tiene fondos insuficientes.`
				);
				return;
			} else {
				cuentaOrigen.saldo -= monto;
				cuentaDestino.saldo += monto;
				console.log(`Transferencia realizada con éxito.`);
                console.log(`Saldos: \nCuenta Origen: ${cuentaOrigen.saldo}\nCuenta Destino: ${cuentaDestino.saldo}`);
                
			}
		}, 8000);
	}

	// mostrar todas las cuentas
    mostrarCuentas(): void {
        console.log(`----- Listado de cuentas -----`);
        
        this.listaCuentas.forEach((c, i) => {
            console.log(`${i + 1} - Cliente: ${c.nombreCliente} - Estado:${c.estado ? 'Activa' : 'Inactiva' } - Saldo: $${c.saldo}`)
        })

        console.log(`----- Fin del Listado -----`);
    }
}


// --- Casos de Uso ---
const miBanco = new GestionTransferencias();

miBanco.agregarCuenta("Juan Pérez", 1000);
miBanco.agregarCuenta("Ana Gómez", 500);
miBanco.agregarCuenta("Carlos Ruiz", 2000, false); // Cuenta inactiva

// Mostrar estado inicial
miBanco.mostrarCuentas();

// Iniciar una transferencia válida
miBanco.transferirDinero("Juan Pérez", "Ana Gómez", 250);

// Iniciar una transferencia que fallará por fondos insuficientes
// miBanco.transferirDinero("Ana Gómez", "Juan Pérez", 600);

// Iniciar una transferencia que fallará porque la cuenta destino está inactiva
// miBanco.transferirDinero("Juan Pérez", "Carlos Ruiz", 100);


// Después de 9 segundos, mostramos las cuentas para ver el resultado final
setTimeout(() => {
    miBanco.mostrarCuentas();
}, 9000);
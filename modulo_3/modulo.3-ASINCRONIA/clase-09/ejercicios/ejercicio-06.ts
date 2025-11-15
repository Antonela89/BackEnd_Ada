// ### Ejercicio 6: Encapsulamiento en clases
// Crea una clase `CuentaBancaria` que tenga atributos privados como saldo y un método público para consultar el saldo y otro para depositar dinero.

class CuentaBancaria {
	constructor(private _saldo: number) {
		console.log(`Cuenta creada con un saldo inicial de: $${this._saldo}`);
	}

	// metodos
	get saldo(): number {
		return this._saldo;
	}

	public depositarDinero(monto: number): void {
		if (monto < 0) {
			console.log(`El monto a depositar no puede ser negativo.`);
            return
		} else {
			this._saldo += monto;
			console.log(`Depósito exitoso: \nNuevo Saldo: ${this.saldo}`);
		}
	}
}


// --- Casos de Uso ---
console.log("Creando la cuenta de Ana...");
const cuentaDeAna = new CuentaBancaria(500); // Saldo inicial: 500

console.log(`\nConsultando saldo inicial de Ana: $${cuentaDeAna.saldo}`);

// Intentar modificar el saldo directamente (fallará gracias a 'private')
// cuentaDeAna._saldo = 5000; // Error: Property '_saldo' is private and only accessible within class 'CuentaBancaria'.

console.log("\n--- Realizando Operaciones ---");
cuentaDeAna.depositarDinero(250);   // Debería sumar 250 -> Saldo: 750
// cuentaDeAna.depositarDinero(-50);   // Debería mostrar un error

console.log(`\nSaldo final de Ana: $${cuentaDeAna.saldo}`);
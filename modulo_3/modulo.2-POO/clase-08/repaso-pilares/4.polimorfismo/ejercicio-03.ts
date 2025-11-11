// ### Ejercicio 3: Encapsulamiento y Herencia con Protección de Datos
// Crea una clase `CuentaBancaria` con métodos para depositar y retirar dinero, pero protege el saldo para que solo pueda ser modificado dentro de la clase. Crea una subclase `CuentaAhorros` que agregue interés al saldo.

class CuentaBancaria {
	constructor(
		protected _titular: string,
		protected _saldo: number = 0 // Saldo inicial por defecto es 0
	) {}

	public depositar(monto: number): void {
		if (monto <= 0) {
			console.log("Error: El monto a depositar debe ser positivo.");
			return;
		}
		this._saldo += monto;
		console.log(`Depósito exitoso. Nuevo saldo de ${this._titular}: $${this._saldo}.`);
	}

	public retirar(monto: number): void {
		if (monto <= 0) {
			console.log("Error: El monto a retirar debe ser positivo.");
			return;
		}
		if (monto > this._saldo) {
			console.log(
				`Error: Fondos insuficientes. Saldo actual: $${this._saldo}.`
			);
			return;
		}
		this._saldo -= monto;
		console.log(`Retiro exitoso. Nuevo saldo de ${this._titular}: $${this._saldo}.`);
	}

	public consultarSaldo(): void {
		console.log(`El saldo actual de la cuenta de ${this._titular} es: $${this._saldo}.`);
	}
}

// La subclase 'CuentaAhorros' hereda las propiedades y métodos de 'CuentaBancaria'.
class CuentaAhorros extends CuentaBancaria {
	constructor(titular: string, saldoInicial: number = 0) {
		super(titular, saldoInicial);
	}

	public agregarInteres(tasa: number): void {
		if (tasa < 0) {
			console.log("Error: La tasa de interés no puede ser negativa.");
			return;
		}
		const interesGenerado = this._saldo * tasa;
		this._saldo += interesGenerado;
		console.log(
			`Se agregó un interés de $${interesGenerado.toFixed(
				2
			)}. Nuevo saldo: $${this._saldo.toFixed(2)}.`
		);
	}
}

// --- Ejemplo de Uso ---
console.log("--- Manejando una Cuenta de Ahorros ---");
const miCuentaDeAhorros = new CuentaAhorros("Laura Gómez", 1000);
miCuentaDeAhorros.consultarSaldo();

// Usamos métodos heredados de CuentaBancaria
miCuentaDeAhorros.depositar(500);
miCuentaDeAhorros.retirar(200);
miCuentaDeAhorros.retirar(1500); // Intento de sobregiro

// Usamos el método propio de CuentaAhorros
miCuentaDeAhorros.agregarInteres(0.05); // Agregar un 5% de interés

miCuentaDeAhorros.consultarSaldo();

// --- Intento de acceso directo (demostración de protección) ---
// La siguiente línea produciría un error de compilación porque _saldo es 'protected':
// miCuentaDeAhorros._saldo = 5000;
// Error: Property '_saldo' is protected and only accessible within class 'CuentaBancaria' and its subclasses.
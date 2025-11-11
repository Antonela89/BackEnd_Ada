// ### Ejercicio 4: Polimorfismo y Sobreescritura Compleja con Interacción entre Clases
// Crea una clase `Cliente` que pueda asociarse a una `CuentaBancaria`. Crea diferentes tipos de clientes, como `ClienteVIP` que tiene beneficios adicionales. Cada tipo de cliente puede realizar depósitos y retiros, pero los clientes VIP pueden retirar sin comisiones.

// --- La Entidad Independiente ---
class CuentaBancaria {
	constructor(private _titular: string, private _saldo: number = 0) {}

	public depositar(monto: number): void {
		if (monto > 0) {
			this._saldo += monto;
			console.log(
				`Depósito de $${monto} realizado. Saldo actual: $${this._saldo}.`
			);
		}
	}

	// Devuelve true si el retiro fue exitoso, false si no.
	public retirar(monto: number): boolean {
		if (monto > 0 && monto <= this._saldo) {
			this._saldo -= monto;
			console.log(
				`-- Débito de $${monto} procesado en la cuenta de ${this._titular}.`
			);
			return true;
		} else {
			console.log(
				`-- Intento de débito de $${monto} fallido. Fondos insuficientes.`
			);
			return false;
		}
	}

	public consultarSaldo(): void {
		console.log(`El saldo de la cuenta de ${this._titular} es: $${this._saldo}.`);
	}
}

// --- La Clase Base que interactúa con CuentaBancaria ---
class Cliente {
	protected _comisionRetiro: number = 5; // Comisión estándar

	// COMPOSICIÓN: El cliente "tiene" una cuenta bancaria.
	constructor(protected _nombre: string, protected _cuenta: CuentaBancaria) {}

	public depositar(monto: number): void {
		console.log(`Cliente ${this._nombre} realizando un depósito...`);
		this._cuenta.depositar(monto);
	}

	// Este es el comportamiento estándar para un cliente.
	public retirar(monto: number): void {
		console.log(
			`Cliente Estándar ${this._nombre} solicita retirar $${monto}.`
		);
		const montoTotal = monto + this._comisionRetiro;
		console.log(
			`Se aplicará una comisión de $${this._comisionRetiro}. Total a debitar: $${montoTotal}.`
		);

		const exito = this._cuenta.retirar(montoTotal);
		if (exito) {
			console.log("Retiro completado con éxito.");
		} else {
			console.log("La operación no pudo ser completada.");
		}
	}

	public consultarSaldo(): void {
		this._cuenta.consultarSaldo();
	}
}

// --- La Subclase con Comportamiento Especializado ---
class ClienteVIP extends Cliente {
	// HERENCIA: ClienteVIP "es un" Cliente.

	constructor(nombre: string, cuenta: CuentaBancaria) {
		super(nombre, cuenta); // Llama al constructor de la clase padre
	}

	// POLIMORFISMO Y SOBREESCRITURA:
	// Se redefine el método 'retirar' para que tenga un comportamiento diferente.
	public retirar(monto: number): void {
		console.log(`Cliente VIP ${this._nombre} solicita retirar $${monto}.`);
		console.log("Retiro sin comisiones para clientes VIP.");

		const exito = this._cuenta.retirar(monto); // Llama al retiro SIN sumar comisión.
		if (exito) {
			console.log("Retiro completado con éxito.");
		} else {
			console.log("La operación no pudo ser completada.");
		}
	}

	// Beneficio adicional para clientes VIP
	public accederSalaVIP(): void {
		console.log(
			`El cliente ${this._nombre} ha ingresado a la sala VIP. ¡Bienvenido!`
		);
	}
}

// --- Ejemplo de Uso ---

// Creamos las cuentas bancarias
const cuentaRegular = new CuentaBancaria("Juan Pérez", 1000);
const cuentaVIP = new CuentaBancaria("Maria López", 5000);

// Creamos los clientes y les asociamos sus cuentas
const clienteRegular = new Cliente("Juan Pérez", cuentaRegular);
const clienteVIP = new ClienteVIP("Maria López", cuentaVIP);

// saldos iniciales
console.log("--- SALDOS INICIALES ---");
clienteRegular.consultarSaldo();
clienteVIP.consultarSaldo();
console.log("\n============================================\n");

// Ambos clientes intentan retirar la misma cantidad ($100)
console.log("--- REALIZANDO RETIROS ---");
clienteRegular.retirar(100); // Se le cobrará $105
console.log("------------------------");
clienteVIP.retirar(100); // Se le cobrará solo $100
console.log("\n============================================\n");

// saldos finales 
console.log("--- SALDOS FINALES ---");
clienteRegular.consultarSaldo(); // Saldo esperado: 1000 - 105 = 895
clienteVIP.consultarSaldo(); // Saldo esperado: 5000 - 100 = 4900
console.log("\n============================================\n");

// El cliente VIP usa su beneficio adicional
clienteVIP.accederSalaVIP();
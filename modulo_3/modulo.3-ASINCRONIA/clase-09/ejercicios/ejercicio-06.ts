// ### Ejercicio 6: Encapsulamiento en clases
// Crea una clase `CuentaBancaria` que tenga atributos privados como saldo y un método público para consultar el saldo y otro para depositar dinero.

/**
 * Representar una cuenta bancaria, encapsulando su estado (saldo).
 * Provee una interfaz pública controlada para interactuar con el saldo.
 */
class CuentaBancaria {
	/**
	 * Inicializar la cuenta con un saldo.
	 * Utilizar 'private' en el constructor para declarar e inicializar la propiedad '_saldo' de forma concisa.
	 * @param _saldo - El monto inicial de la cuenta.
	 */
	constructor(private _saldo: number) {
		console.log(`Cuenta instanciada con saldo inicial de: $${this._saldo}`);
	}

	/**
	 * Exponer el saldo de forma segura a través de un 'getter' de solo lectura.
	 * Permite la consulta del estado privado sin permitir su modificación directa.
	 */
	get saldo(): number {
		return this._saldo;
	}

	/**
	 * Modificar el estado interno (saldo) a través de un método público.
	 * Aplica validaciones de negocio para mantener la integridad del dato.
	 * @param monto - La cantidad a añadir al saldo.
	 */
	public depositarDinero(monto: number): void {
		// Implementar una guarda para prevenir operaciones inválidas.
		if (monto <= 0) {
			console.log(`> Error de operación: El monto a depositar debe ser positivo. (Recibido: ${monto})`);
			return; // Finalizar la ejecución del método.
		}

        // Realizar la mutación del estado interno.
		this._saldo += monto;
		console.log(`> Depósito de $${monto} procesado. Nuevo saldo: $${this._saldo}`);
	}

    /**
     * Implementar la lógica de retiro, aplicando las validaciones correspondientes.
     * @param monto - La cantidad a sustraer del saldo.
     */
    public retirarDinero(monto: number): void {
        // Validar que el monto sea positivo.
        if (monto <= 0) {
            console.log(`> Error de operación: El monto a retirar debe ser positivo. (Recibido: ${monto})`);
            return;
        }
        // Validar que haya fondos suficientes.
        if (this._saldo < monto) {
            console.log(`> Error de fondos: Intento de retiro por $${monto} fallido. Saldo disponible: $${this._saldo}`);
            return;
        }

        this._saldo -= monto;
        console.log(`> Retiro de $${monto} procesado. Nuevo saldo: $${this._saldo}`);
    }
}


// --- Casos de Uso ---
console.log("Inicializando cuenta para 'Ana'...");
const cuentaDeAna = new CuentaBancaria(500);

// Demostrar el uso del getter para consultar el estado.
console.log(`\nConsulta de saldo inicial: $${cuentaDeAna.saldo}`);

/*
// Demostración del encapsulamiento:
// La siguiente línea generaría un error de compilación, protegiendo el estado interno.
// cuentaDeAna._saldo = 5000; // Error: Property '_saldo' is private and only accessible within class 'CuentaBancaria'.
*/

console.log("\n--- Ejecutando Transacciones ---");

// Ejecutar operaciones a través de la interfaz pública.
cuentaDeAna.depositarDinero(250);   // Saldo esperado: 750
cuentaDeAna.retirarDinero(100);     // Saldo esperado: 650

// Probar los casos de validación.
cuentaDeAna.depositarDinero(-50);   // Debería fallar.
cuentaDeAna.retirarDinero(700);     // Debería fallar por fondos insuficientes.

// Verificar el estado final de la cuenta.
console.log(`\nConsulta de saldo final: $${cuentaDeAna.saldo}`);
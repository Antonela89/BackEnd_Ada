// #### Ejercicio 3: Encapsulamiento con Métodos Privados
// Crea una clase `Banco` con un saldo inicial privado. El saldo solo puede ser modificado a través de un método `depositar` y otro `retirar`, los cuales deben validar que la cantidad no sea negativa. Implementa métodos públicos para consultar el saldo.

class Banco {
	constructor(private _saldo: number) {
		// La asignación this._saldo = _saldo es manejada automáticamente por TypeScript.
		// validación en el constructor para asegurar que la cuenta no se pueda crear con un saldo inicial negativo.
		if (this._saldo < 0) {
			console.log(
				'El saldo inicial no puede ser negativo. Se establecerá en 0.'
			);
			this._saldo = 0;
		}
	}

	public get saldo(): number {
		return this._saldo;
	}

	public depositar(cantidad: number): void {
		if (cantidad > 0) {
			this._saldo += cantidad;
			console.log(`Depósito exitoso. Saldo actual: ${this._saldo}`);
		} else {
			console.log('La cantidad a depositar debe ser un número positivo.');
		}
	}

	public retirar(cantidad: number): void {
		if (cantidad <= 0) {
			console.log('La cantidad a retirar debe ser un número positivo.');
			return;
		}

		if (cantidad > this._saldo) {
			console.log('Fondos insuficientes para realizar el retiro.');
		} else {
			this._saldo -= cantidad;
			console.log(`Retiro exitoso. Saldo actual: ${this._saldo}`);
		}
	}
}

// Ejemplo de uso:
const miCuenta = new Banco(100);
console.log(`Saldo inicial: ${miCuenta.saldo}`); // Saldo inicial: 100

miCuenta.depositar(50); // Depósito exitoso. Saldo actual: 150
miCuenta.retirar(20); // Retiro exitoso. Saldo actual: 130
miCuenta.retirar(150); // Fondos insuficientes para realizar el retiro.
miCuenta.depositar(-30); // La cantidad a depositar debe ser un número positivo.
miCuenta.retirar(-10); // La cantidad a retirar debe ser un número positivo.

console.log(`Saldo final: ${miCuenta.saldo}`); // Saldo final: 130

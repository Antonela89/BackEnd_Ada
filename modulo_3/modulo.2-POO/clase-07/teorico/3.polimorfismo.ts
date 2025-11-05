// Clase base Pago
export abstract class Pago {
    abstract procesarPago(monto: number): void;
}

// Vamos a utilizar Pago con clases derivadas que tienen comportamientos especificos

class PagoConTarjeta extends Pago {
    procesarPago(monto: number): void {
        console.log(`Pago de $${monto} realizado con tarjeta de crédito.`);
    }
}

class PagoEnEfectivo extends Pago {
    procesarPago(monto: number): void {
        console.log(`Pago de $${monto} realizado en efectivo.`);
    }
}

class PagoConTransferencia extends Pago {
    procesarPago(monto: number): void {
        console.log(`Pago de $${monto} realizado por transferencia.`);
    }
}

// Uso del polimorfismo
const procesar = (pago: Pago, monto: number) => {
    pago.procesarPago(monto);
}

// Incializar las clases
const pago1 = new PagoConTarjeta();
const pago2 = new PagoEnEfectivo();
const pago3 = new PagoConTransferencia();

procesar(pago1, 1000);  // Pago de $1000 realizado con tarjeta de crédito.
procesar(pago2, 500);   // Pago de $500 realizado en efectivo. 
procesar(pago3, 3500);  // Pago de $3500 realizado por transferencia.
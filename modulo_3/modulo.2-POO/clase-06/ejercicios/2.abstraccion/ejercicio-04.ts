// ### Ejercicio 4: Comparación - Clases Abstractas vs Interfaces
// **Consigna:** Crea una interfaz `PagoOnline` con un método `procesarPago()`. Crea una clase abstracta `Pago` con un método concreto `validarMonto()` y un método abstracto `completarPago()`. Implementa ambas estructuras en una clase concreta `PagoConTarjeta`.

interface PagoOnline {
    procesarPago(): void;
}

abstract class Pago {
    validarMonto(): void{
        console.log(`El monto ingresado es correcto`);
    }

    abstract completarPago(): void 
}

class PagoConTarjeta extends Pago implements PagoOnline {
    procesarPago(): void {
        console.log(`El pago se esta procesando`);
    }

    // no es necesario llamar al metodo validarMonto porque ya lo hereda del padre y no se sobreescribe
    completarPago(): void {
        console.log(`El pago se completo correctamente`);
    }
}


const pago1 = new PagoConTarjeta;
pago1.validarMonto();
pago1.procesarPago();
pago1.completarPago();
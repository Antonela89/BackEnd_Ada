// ### Ejercicio 1: Herencia Múltiple Indirecta y Modificadores de Acceso
// **Consigna:** Define una clase base `Negocio` con un método protegido `operar()`. Define otra clase `Consultoria` que herede de `Negocio` y sobrescriba el método `operar()` para mostrar un mensaje sobre cómo opera el negocio de consultoría.

class Negocio {
    protected operar(): void {
        console.log(`El negocio está operando de forma normal.`);
    }

    // metodo público para ver el metodo protegido
    public iniciarOperacion(): void {
        this.operar();
    }
}

// clase derivada
class Consultoria extends Negocio {
    // sobreescribir el metodo protegido
    protected operar(): void {
        console.log(`El negocio de consultoría opera brindando asesoría especializado.`);
    }
}

// pruebas
const miConsultora = new Consultoria();
miConsultora.iniciarOperacion();
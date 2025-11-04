// ### Ejercicio 5: Herencia con Modificadores de Acceso
// **Consigna:** Crea una clase base `Compania` con un atributo privado `nombreCompania` y un atributo protegido `ingresosAnuales`. Crea una clase derivada `EmpresaTecnologia` que use el atributo protegido y agregue un método que calcule el doble de los ingresos anuales.

class Compania {
    constructor(private nombreCompania: string, protected ingresosAnuales: number) {}
}

class EmpresaTecnologia extends Compania {
    constructor(nombreCompania: string, ingresosAnuales: number) {
        super(nombreCompania, ingresosAnuales);
    }

    public calcularIngresos(): number {
        return this.ingresosAnuales * 2
    }
}

const EmpresaTecnologia1 = new EmpresaTecnologia('Tecnology', 200000);
console.log(EmpresaTecnologia1.calcularIngresos());

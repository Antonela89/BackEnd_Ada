// #### Ejercicio 5: Uso de Interfaces para Polimorfismo
// Crea una interfaz `Empleado` con un método `trabajar`. Implementa esta interfaz en clases `Programador` y `Disenador`, donde cada clase debe implementar el método con su propia lógica. Luego, crea una función que reciba un objeto de tipo `Empleado` y llame a su método `trabajar`.

interface Empleado {
    trabajar(): void;
}

class Programador implements Empleado {
    trabajar(): void {
        console.log(`El programador está escribiendo código TS`);
    }
}

class Disenador implements Empleado {
    trabajar(): void {
        console.log(`El diseñador usa Figma para crear diseños`);
    }
}


function trabajarEmpleado(empleado: Empleado) {
    empleado.trabajar();
}

const programador = new Programador();
const disenador = new Disenador();
console.log(`\n---------------------------------\n`);
trabajarEmpleado(programador);
trabajarEmpleado(disenador);
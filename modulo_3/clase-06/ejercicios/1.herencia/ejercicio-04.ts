// ### Ejercicio 4: Herencia de Métodos y Sobrescritura
// **Consigna:** Define una clase base `Flor` con el método `describir()`, que imprime un mensaje general sobre la flor. Luego, crea dos clases derivadas `Rosa` y `Girasol`, cada una sobrescribiendo el método `describir()` con un mensaje específico.

class Flor {
    describir(): void {
        console.log(`Esta es una flor.`);
    }
}

class Rosa extends Flor {
    // sobreEscribir metodos -> polimorfismo
    describir(): void {
        console.log(`Esta es una rosa roja perfumada.`);
    }
}

class Girasol extends Flor {
    describir(): void {
        console.log(`Este es un girasol que sigue al sol.`);
    }
}

const rosa1 = new Rosa;
rosa1.describir();

const girasol1 = new Girasol;
girasol1.describir();
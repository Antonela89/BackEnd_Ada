// MODIFICADORES DE ACCESO -> controlar la visibilidad y el acceso a las propiedades y métodos dentro de una clase.

// public -> accesible desde cualquier lugar... esta por default
// private -> accesibles dentro de la clase misma - NO ACCESIBLE POR FUERA
// protected -> accesibles dentro de la clase misma y por herencia -> subclase - NO ACCESIBLE POR FUERA

// Definir una clase
class Animal {
    // propiedades con modificadores de acceso
    public nombre: string;
    private tipoAlimento: string;
    protected especie: string;

    // constructor
    constructor(nombre: string, tipoAlimento: string, especie: string) {
        this.nombre = nombre;
        this.tipoAlimento = tipoAlimento;
        this.especie = especie;
    }

    // metodos
    // metodo publico
    public describirAnimal(): void { 
        console.log(`Este es  ${this.nombre}, un animal de la especie ${this.especie}.`);
    }

    // metodo privado
    private mostrarTipoAlimento(): void {
        console.log(`${this.nombre} se alimenta de ${this.tipoAlimento}`);   
    }

    // metodo protegido
    protected sonidoAnimal(): void {
        console.log(`${this.nombre} está haciendo un sonido`);
    }

    // Metodo publico para acceder al privado dentro de la clase
    public alimentarAnimal(): void {
        this.mostrarTipoAlimento(); // llamar al metodo privado que solo se puede acceder dentro de esta clase
    }
}

// clase hija 
class Perro extends Animal {
    // constructor
    constructor(nombre: string, tipoAlimento: string){
    super(nombre, tipoAlimento, 'Canino') // super() -> llamo al contructor de animal y puedo colocar un argumentos por default
    }

    // metodo propio de la clase hija
    public haceSonido(): void {
        this.sonidoAnimal();
        console.log(`${this.nombre} está ladrando.`);
    }
}

// instancias
const miAnimal = new Animal('Michi', 'pollo', 'felino');
miAnimal.describirAnimal();
miAnimal.alimentarAnimal();

console.log(`\n----------------------------------\n`);

const miPerro = new Perro('Firulais', 'croquetas');
miPerro.describirAnimal();
miPerro.alimentarAnimal();
miPerro.haceSonido();
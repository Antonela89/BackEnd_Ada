// Definimos una clase triangulo
class Triangle {
    // propiedades
    private _base: number;
    private _altura: number;

    // constructor
    constructor() {
        this._base = 0;
        this._altura = 0;
    }

    // setter para la base con validacion
    public set base(value: number) {
        if (value > 0) {
            this._base = value;
        } else {
            console.log(`La base debe ser mayor a 0.`);
        }
    }

    // seter para la altura con validacion
    public set altura(value: number) {
        if (value > 0) {
            this._altura = value;
        } else {
            console.log(`La altura debe ser mayor a 0.`);
        }
    }

    // metodo para calcular el area del triangulo
    public calcularArea(): number {
        return (this._base * this._altura) / 2;
    }
}

// uso de la clase
const triangulo = new Triangle();

// Utilizamos los setters para establecer los valores
triangulo.base = 10; // Establecemos una base válida
triangulo.altura = 15; 

// Calcular y mostrar el area
console.log(`Area del triangulo: ${triangulo.calcularArea()}`);

// Intentamos establecer las propiedades con numeros negativos
triangulo.base = -5;
triangulo.altura = -10;
console.log(`Area con valores invalidos: ${triangulo.calcularArea()}`);
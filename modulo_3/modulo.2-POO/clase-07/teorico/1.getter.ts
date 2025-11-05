// definición de una clase
class Rectangle {
    // propiedades privadas;
    private _width: number;
    private _height: number;

    // constructor
    constructor(width: number, height: number) {
        this._width = width;
        this._height = height;
    }

    // getter para el area del rectangulo
    public get area(): number {
        return this._width * this._height;
    }

    // getter para la altura
    public get height(): number {
        return this._height;
    }

    // getter para el ancho
    public get width(): number {
        return this._width;
    }
}

// empleo de la clase
const rectangulo = new Rectangle(10,5);

// accedemos a los valores
console.log(`El área del rectangulo es: ${rectangulo.area}`);
console.log(`El alto del rectangulo es: ${rectangulo.height}`);
console.log(`El ancho del rectangulo es: ${rectangulo.width}`);

// rectangulo._width = 20 // Error: Property '_width' is private and only accessible within class 'Rectangle'.
// rectangulo.height = 15 // Error: Cannot assign to 'height' because it is a read-only property.
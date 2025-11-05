### Encapsulamiento

A continuación se presentan los ejemplos de código relacionados con el concepto de encapsulamiento en la Programación Orientada a Objetos, utilizando TypeScript.

#### Sintaxis de un Getter

Un `getter` es un método que permite obtener el valor de una propiedad privada de forma controlada.

```typescript
class ClassName {
  // Se declara una propiedad privada llamada _property.
  // Por convención, las propiedades privadas a menudo comienzan con un guion bajo (_).
  private _property: type;

  // El constructor inicializa la propiedad privada con un valor proporcionado.
  constructor(value: type) {
    this._property = value;
  }

  // Definición del getter público 'property'.
  // Permite el acceso de solo lectura a la propiedad privada _property.
  public get property(): type {
    // Devuelve el valor de la propiedad privada.
    return this._property;
  }
}
```

#### Sintaxis de un Setter

Un `setter` es un método que permite modificar el valor de una propiedad privada, a menudo incluyendo lógica de validación.

```typescript
class ClassName {
  private _property: type;

  constructor(initialValue: type) {
    this._property = initialValue;
  }

  // Getter para acceder a la propiedad de forma controlada.
  public get property(): type {
    return this._property;
  }

  // Setter para modificar la propiedad con validación.
  // Permite controlar cómo se asigna un nuevo valor.
  public set property(value: type) {
    // Se añade una condición para validar el valor antes de asignarlo.
    if (value >= 0) {
      this._property = value;
    } else {
      // Si la validación falla, se muestra un mensaje de error.
      console.log("El valor debe ser mayor o igual a 0.");
    }
  }
}
```

#### Ejemplo: Clase Círculo

Este ejemplo práctico demuestra cómo una clase `Circle` utiliza `getters` y `setters` para gestionar el radio de un círculo de forma segura.

```typescript
// Este ejemplo de la clase Circle muestra cómo gestionar el radio de un círculo a través de un setter
// que valida que el valor sea positivo y proporciona getters para calcular el área y la circunferencia.
class Circle {
  private _radius: number; // Propiedad privada para el radio.

  // El constructor inicializa el radio.
  constructor(radius: number) {
    this._radius = radius;
  }

  // Getter para el radio.
  public get radius(): number {
    return this._radius; // Devuelve el valor del radio.
  }

  // Setter para el radio, con validación.
  public set radius(value: number) {
    if (value > 0) { // Verifica que el nuevo radio sea mayor a 0.
      this._radius = value; // Asigna el nuevo radio.
    } else {
      console.log("El radio debe ser mayor a 0."); // Mensaje de error si la validación falla.
    }
  }

  // Getter para calcular el área.
  public get area(): number {
    return Math.PI * this._radius * this._radius; // Devuelve el área del círculo.
  }

  // Getter para calcular la circunferencia.
  public get circumference(): number {
    return 2 * Math.PI * this._radius; // Devuelve la circunferencia del círculo.
  }
}

// --- Uso de la clase Circle ---
const circle = new Circle(5); // Crea una nueva instancia de Circle con radio 5.

// Usamos el getter para obtener los valores.
console.log(`Radio: ${circle.radius}`); // Muestra el radio: 5
console.log(`Área: ${circle.area}`); // Muestra el área: 78.54 (aprox)
console.log(`Circunferencia: ${circle.circumference}`); // Muestra la circunferencia: 31.42 (aprox)

// Usamos el setter para modificar el radio.
circle.radius = 10; // Cambia el radio a 10.
console.log(`Nuevo Radio: ${circle.radius}`); // Muestra el nuevo radio: 10

// Intento inválido, mostrará un mensaje de error.
circle.radius = -3;
// El radio no cambia, ya que el valor era inválido.
console.log(`Radio: ${circle.radius}`); // Muestra el radio: 10

// Modificamos correctamente el radio.
circle.radius = 8; // Cambia el radio a 8.
console.log(`Nuevo Radio: ${circle.radius}`); // Muestra el nuevo radio: 8
console.log(`Nueva Área: ${circle.area}`); // Muestra la nueva área: 201.06 (aprox)
console.log(`Nueva Circunferencia: ${circle.circumference}`); // Muestra la nueva circunferencia: 50.27 (aprox)
```

#### Ejemplo con solo Getter y solo Setter

Este ejemplo muestra dos clases: `Constante`, que solo tiene un `getter` para crear una propiedad de solo lectura, y `Contador`, que utiliza principalmente un `setter` para modificar un valor de forma controlada.

```typescript
// --- Clase que solo tiene un getter ---
class Constante {
  private _valor: number; // Propiedad privada.

  constructor(valor: number) {
    this._valor = valor; // Inicializa el valor.
  }

  // Solo getter para acceder al valor.
  public get valor(): number {
    return this._valor; // Devuelve el valor.
  }
}

// --- Uso de la clase Constante ---
const constante = new Constante(42);
console.log(constante.valor); // Muestra 42
// constante.valor = 50; // Esto causaría un error, ya que no hay setter.

// --- Clase que solo tiene un setter ---
class Contador {
  private _cuenta: number; // Propiedad privada.

  constructor() {
    this._cuenta = 0; // Inicializa la cuenta en 0.
  }

  // Solo setter para modificar la cuenta.
  public set cuenta(value: number) {
    if (value >= 0) { // Verifica que el valor sea no negativo.
      this._cuenta = value; // Asigna el nuevo valor.
    } else {
      console.log("La cuenta no puede ser negativa."); // Mensaje de error.
    }
  }

  // Método para mostrar la cuenta.
  public mostrarCuenta(): number {
    return this._cuenta; // Devuelve el valor de la cuenta.
  }
}

// --- Uso de la clase Contador ---
const contador = new Contador();
contador.cuenta = 5; // Cambia la cuenta a 5.
console.log(contador.mostrarCuenta()); // Muestra 5
// No hay manera de acceder directamente al valor de _cuenta.
// console.log(contador._cuenta); // Esto causaría un error, ya que _cuenta es privada.
```
### **1. Bucle `for...in`**

El bucle `for...in` itera sobre las claves (o propiedades) enumerables de un objeto. Es una forma de inspeccionar las propiedades de un objeto.

**Cuándo usarlo:** Utilízalo cuando necesites trabajar con las claves de un objeto, como al serializar datos, clonar un objeto o simplemente inspeccionar sus propiedades.

**A tener en cuenta:**
*   No uses `for...in` para iterar sobre arrays, ya que puede devolver un comportamiento inesperado al iterar también sobre propiedades del prototipo. Para arrays, `for...of` es la opción recomendada.
*   El orden de las propiedades no está garantizado.

```typescript
// Definimos un objeto que representa la configuración de un servidor
const configServidor = {
  host: "localhost",
  puerto: 8080,
  habilitarSSL: false
};

console.log("Claves de configuración del servidor:");

// Iteramos sobre cada clave (propiedad) en el objeto 'configServidor'
for (const clave in configServidor) {
  // Es una buena práctica verificar que la propiedad pertenece directamente al objeto
  // y no a su cadena de prototipos.
  if (Object.prototype.hasOwnProperty.call(configServidor, clave)) {
    // Accedemos al valor de la propiedad usando la clave
    const valor = configServidor[clave];
    console.log(`- ${clave}: ${valor}`);
  }
}
```

### **2. Bucle `for...of`**

A diferencia de `for...in`, el bucle `for...of` itera sobre los valores de objetos iterables como `Array`, `Map`, `Set`, `String`, etc. Es la forma más moderna y directa de recorrer los elementos de una colección.

**Cuándo usarlo:** Es la opción preferida para iterar sobre los elementos de un array o cualquier otro objeto iterable cuando solo te interesan los valores, no los índices.

```typescript
// Creamos un array de rutas de API
const rutasAPI: string[] = ["/usuarios", "/productos", "/pedidos"];

console.log("Rutas de API disponibles:");

// Iteramos sobre cada valor (ruta) en el array 'rutasAPI'
for (const ruta of rutasAPI) {
  // 'ruta' contiene directamente el elemento del array en cada iteración
  console.log(`- ${ruta}`);
}

// También funciona con strings, iterando sobre cada carácter
const apiVersion: string = "v2";
for (const caracter of apiVersion) {
    console.log(caracter); // Imprimirá 'v', luego '2'
}
```

### **3. Aserciones de Tipo (Type Assertions)**

Una aserción de tipo es una forma de decirle al compilador de TypeScript que "confíe en ti" porque sabes más sobre el tipo de un valor de lo que TypeScript puede inferir por sí mismo. No tiene ningún efecto en tiempo de ejecución; es simplemente una pista para el compilador que se elimina durante la transpilación.

**Sintaxis:** Existen dos sintaxis, aunque se prefiere la sintaxis `as` para evitar conflictos con JSX (usado en React).

1.  **Sintaxis `as`:** `let miValor = valor as string;`
2.  **Sintaxis de "angle-bracket":** `let miValor = <string>valor;`

**Cuándo usarlas:**
*   Cuando trabajas con el DOM, `document.getElementById` devuelve un `HTMLElement`, pero tú puedes saber que es un tipo más específico como `HTMLInputElement`.
*   Al migrar código JavaScript, donde puedes tener un conocimiento más preciso del tipo de una variable que el que TypeScript puede deducir.
*   Cuando recibes datos de una API de tipo `any` o `unknown` y tienes la certeza de su estructura.

**¡Precaución!** Usa las aserciones con moderación. Un uso incorrecto puede anular la seguridad de tipos que ofrece TypeScript y provocar errores en tiempo de ejecución.

```typescript
// Supongamos que recibimos un objeto de una API externa, cuyo tipo es 'unknown'
let respuestaAPI: unknown = '{"id": 1, "nombre": "Producto A"}';

// Definimos la interfaz que esperamos
interface Producto {
  id: number;
  nombre: string;
}

// Le decimos a TypeScript que trate 'respuestaAPI' como un string para poder usar JSON.parse
const datosParseados = JSON.parse(respuestaAPI as string);

// Ahora, afirmamos que el objeto parseado tiene la forma de nuestra interfaz 'Producto'
const miProducto: Producto = datosParseados as Producto;

// Gracias a la aserción, ahora podemos acceder a las propiedades de forma segura
console.log(`ID del Producto: ${miProducto.id}`);
console.log(`Nombre del Producto: ${miProducto.nombre}`);

// Ejemplo con el DOM (más común en frontend, pero ilustrativo)
// const miCanvas = document.getElementById("canvas-principal") as HTMLCanvasElement;
```

### **4. Genéricos (Generics)**

Los genéricos son una de las características más potentes de TypeScript. Permiten crear componentes (funciones, clases, interfaces) que pueden funcionar con una variedad de tipos en lugar de uno solo, manteniendo al mismo tiempo la seguridad de tipos. Piensa en ellos como plantillas o placeholders para tipos.

**Por qué usar genéricos:**
*   **Reutilización de código:** Escribe una función o clase una vez y úsala para múltiples tipos.
*   **Seguridad de tipos (Type Safety):** Obtienes validación de tipos en tiempo de compilación sin perder flexibilidad.

```typescript
// ---- Ejemplo de una función genérica ----

// Sin genéricos, tendríamos que usar 'any', perdiendo la información del tipo
function obtenerPrimerElemento_any(arr: any[]): any {
  return arr[0];
}

// Con genéricos, usamos un parámetro de tipo <T> (por convención)
// La función ahora sabe que si recibe un array de T[], devolverá un elemento de tipo T
function obtenerPrimerElemento<T>(arr: T[]): T | undefined {
  return arr[0];
}

// Uso con un array de strings
const nombres: string[] = ["Ana", "Juan", "Luis"];
const primerNombre = obtenerPrimerElemento(nombres); // TypeScript infiere que 'primerNombre' es de tipo 'string | undefined'
console.log(primerNombre?.toUpperCase()); // Podemos usar métodos de string de forma segura

// Uso con un array de números
const edades: number[] = [34, 21, 55];
const primeraEdad = obtenerPrimerElemento(edades); // TypeScript infiere que 'primeraEdad' es de tipo 'number | undefined'
console.log(primeraEdad?.toFixed(2)); // Podemos usar métodos de number de forma segura


// ---- Ejemplo de una interfaz genérica para respuestas de API ----

// Definimos una estructura genérica para las respuestas de nuestra API
interface RespuestaAPI<T> {
  datos: T;
  esExitoso: boolean;
  error?: string;
}

// Definimos la estructura de un Usuario
interface Usuario {
  id: string;
  email: string;
}

// Ahora podemos tipar una respuesta específica para un usuario
const respuestaUsuario: RespuestaAPI<Usuario> = {
  datos: { id: "uuid-123", email: "test@example.com" },
  esExitoso: true
};

// Y reutilizar la misma interfaz para una respuesta de productos
const respuestaProductos: RespuestaAPI<string[]> = {
    datos: ["Laptop", "Mouse", "Teclado"],
    esExitoso: true
}
```
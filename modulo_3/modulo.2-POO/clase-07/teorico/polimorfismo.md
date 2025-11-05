### Polimorfismo

A continuación se presentan los ejemplos de código que ilustran los diferentes tipos de polimorfismo en TypeScript.

#### Polimorfismo en Tiempo de Compilación (Sobrecarga de Funciones)

Este ejemplo muestra cómo una misma función, `procesarPedido`, puede manejar diferentes tipos de parámetros gracias a la sobrecarga de funciones en TypeScript.

```typescript
// Este ejemplo presenta una función que procesa diferentes tipos de pedidos de clientes,
// permitiendo usar la misma función con diferentes estructuras de datos.

// --- Firmas de sobrecarga: La función procesa diferentes tipos de pedidos ---
// Firma para un pedido por ID.
function procesarPedido(pedidoId: number): string;
// Firma para un pedido con detalles de cliente y producto.
function procesarPedido(cliente: string, producto: string): string;

// --- Implementación de la función ---
// El cuerpo de la función maneja ambas lógicas.
function procesarPedido(param1: number | string, param2?: string): string {
  // Caso: Pedido realizado con un ID.
  if (typeof param1 === "number") {
    return `Procesando pedido con ID: ${param1}`;
  }
  // Caso: Pedido realizado con nombre del cliente y producto.
  else if (typeof param1 === "string" && param2) {
    return `Procesando pedido para ${param1}, producto: ${param2}`;
  }
  // Manejo de error para parámetros no válidos.
  else {
    throw new Error("Parámetros no válidos.");
  }
}

// --- Ejemplos de uso ---
console.log(procesarPedido(123)); // "Procesando pedido con ID: 123"
console.log(procesarPedido("Ana", "Laptop")); // "Procesando pedido para Ana, producto: Laptop"

// --- Explicación adicional ---
// Validación en tiempo de compilación: Si se intenta llamar a la función con una combinación
// de parámetros que no coincida con ninguna firma declarada, TypeScript generará un error.
// Esto ayuda a prevenir errores antes de que el código se ejecute.
```

#### Polimorfismo en Tiempo de Ejecución (Sobrescritura de Métodos)

Este ejemplo demuestra el polimorfismo en tiempo de ejecución a través de la herencia y la sobrescritura de métodos. Se define una clase base `Evento` y dos subclases, `EventoMouse` y `EventoTeclado`, que proporcionan su propia implementación del método `manejarEvento`.

```typescript
// En este ejemplo, se define una clase base Evento y se crean subclases como
// EventoMouse y EventoTeclado, cada una sobrescribiendo el método manejarEvento.

// --- Clase base: Evento ---
class Evento {
  // Método que será sobrescrito por las subclases.
  manejarEvento(): void {
    console.log("Evento genérico manejado.");
  }
}

// --- Subclase: EventoMouse ---
class EventoMouse extends Evento {
  // Sobrescribimos el método para manejar eventos de mouse.
  manejarEvento(): void {
    console.log("Evento de mouse manejado.");
  }
}

// --- Subclase: EventoTeclado ---
class EventoTeclado extends Evento {
  // Sobrescribimos el método para manejar eventos de teclado.
  manejarEvento(): void {
    console.log("Evento de teclado manejado.");
  }
}

// --- Función que maneja cualquier tipo de evento ---
function gestionarEvento(evento: Evento) {
  // Llamamos al método que se ha sobrescrito en cada subclase.
  // La versión correcta del método se elige en tiempo de ejecución.
  evento.manejarEvento();
}

// --- Creando instancias de los diferentes eventos ---
let eventoMouse: Evento = new EventoMouse();
let eventoTeclado: Evento = new EventoTeclado();

// --- Ejecutamos la función que gestiona los eventos, aplicando polimorfismo ---
gestionarEvento(eventoMouse); // Salida: Evento de mouse manejado.
gestionarEvento(eventoTeclado); // Salida: Evento de teclado manejado.
```
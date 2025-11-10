## **Diagrama 1: Ejercicio del Carrito de Compras (E-commerce)**

Este diagrama muestra cómo diferentes tipos de productos (físicos y digitales) comparten una base común, pero tienen características y contratos distintos, como la capacidad de ser enviados.

#### **① Plantillas (Interfaces)**

*   Define el contrato base para **cualquier producto**.
*   Define el contrato para productos **que se pueden enviar**.

#### **② Clase Base (Abstracta)**

*   Implementa la lógica común a todos los productos.
*   Deja la descripción (`getDescription`) como una "firma" para que cada hijo la implemente a su manera.

#### **③ Clases Derivadas**

*   Cada clase hereda de `Product` y añade sus propias propiedades y lógica.
*   `PhysicalProduct` además **implementa** la interfaz `IShippable`.

#### **④ Clase de Composición**

*   El `ShoppingCart` no hereda de `Product`, sino que **contiene una lista** de ellos. Esto se llama **Composición**.

```
┌───────────────────────────┐         
│ IProduct (Interface)      │         
├───────────────────────────┤         
│ - id: number              │         
│ - name: string            │         
│ - price: number           │         
│ - getDescription(): string│
└───────────────────────────┘
             │
             │ implementa
             ▼
┌───────────────────────────────────────────┐
│ Product (Clase Abstracta)                 │
├───────────────────────────────────────────┤
│ + id, name, price                         │
│ + abstract getDescription(): string  ─────► Firma
└───────────────────────────────────────────┘
             │
             │ extiende
             ▼
        ┌──────────────────────────────────┐        ┌───────────────────────────────┐
┌───────┤ PhysicalProduct                  ├────────┤ DigitalProduct                │
│       ├──────────────────────────────────┤        ├───────────────────────────────┤
│       │ + propiedades: + weight          │        │ + propiedades: + downloadUrl  │
│       │                                  │        │                               │
│       │ + métodos:                       │        │ + métodos:                    │
│       │   └─ getDescription()            │        │   └─ getDescription()         │
└───────┤                                  │        └───────────────────────────────┘
        │ + implementa IShippable          │ usa
        │   └─ getShippingInfo()    ───────────────►┌───────────────────────────────┐
        └──────────────────────────────────┘        │  IShippable (Interface)       │
                                                    ├───────────────────────────────┤
                                                    │ - shippingCost: number        │
                                                    │ - getShippingInfo(): string   │
                                                    └───────────────────────────────┘
┌───────────────────────────┐
│ ShoppingCart (Clase)      │
├───────────────────────────┤
│ - items: IProduct[]       │  <── Contiene un array de productos
├───────────────────────────┤
│ + addProduct()            │
│ + calculateTotal()        │
│ + displayItems()          │
└───────────────────────────┘
```

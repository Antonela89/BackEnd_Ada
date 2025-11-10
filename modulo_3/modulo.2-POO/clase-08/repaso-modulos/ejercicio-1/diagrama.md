## **Diagrama Didáctico: Ejercicio de la Biblioteca Digital**

Este diagrama explica cómo se construye el sistema de la biblioteca, desde el "contrato" inicial hasta las clases especializadas que heredan de una base común.

#### **① Plantillas (Interfaces y Enums)**

*   **`ILibraryItem`**: Es la "plantilla" o contrato. Define qué propiedades y métodos **debe tener** cualquier objeto que quiera ser un ítem de la biblioteca. No dice *cómo* funcionan, solo que deben existir.
*   **`BookFormat`**: Es un tipo de dato personalizado (Enum) para limitar las opciones de formato de los Ebooks.

#### **② Clase Base (Abstracta)**

*   **`LibraryItem`**: Es la clase base. Implementa la lógica **común** para todos los ítems (marcar como prestado o devuelto).
*   Al ser **abstracta**, no se pueden crear objetos directamente de ella.
*   Define el método `getDetails()` como una **"firma" abstracta**. Esto **obliga** a todas las clases que hereden de ella a crear su propia versión de este método.

#### **③ Clases Derivadas (Especializadas)**

*   Son las clases concretas que se pueden instanciar.
*   Cada una **hereda** todo lo de `LibraryItem` y añade sus propias características únicas.
*   Cada una implementa `getDetails()` de una forma diferente (**Polimorfismo**).

```
┌───────────────────────────┐                                                   ┌──────────────────┐
│ ILibraryItem (Interface)  │                                                   │ BookFormat (Enum)│
├───────────────────────────┤                                                   ├──────────────────┤
│ - title: string           │                                                   │ - PDF            │
│ - author: string          │                                                   │ - EPUB           │
│ - isAvailable: boolean    │                                                   │ - MOBI           │
│ - checkout(): void        │                                                   └──────────────────┘
│ - returnItem(): void      │                                                                   ▲
└───────────────────────────┘                                                               usa │ 
             │                                                                                  │
             │ implementa                                                                       │
             ▼                                                                                  │
┌─────────────────────────────────────────────┐                                                 │
│ LibraryItem (Clase Abstracta)               │                                                 │
├─────────────────────────────────────────────┤                                                 │
│ + title, author                             │                                                 │
│ # isAvailable: boolean                      │                                                 │
├─────────────────────────────────────────────┤                                                 │
│ + checkout()                                │                                                 │
│ + returnItem()                              │                                                 │
│ + abstract getDetails(): string  ───────────► Firma (Obliga a los hijos a implementarlo)      │
└─────────────────────────────────────────────┘                                                 │
             │                                                                                  │   
             │ extiende                                                                         │
             ▼                                                                                  │ 
        ┌───────────────────────────────┐                                                       │
┌───────┤ Audiobook                     ├────────────────────────────────────────────────┐      │
│       ├───────────────────────────────┤                                                │      │
│       │ + propiedades: + duration     │                                                │      │
│       │                               │                                                │      │
│       │ + métodos:                    │                                                │      │
│       │   └─ getDetails()             │                                                │      │
└───────┤                               │                                                │      │
        └───────────────────────────────┘                                                │      │
                                                                                         │      │  
        ┌───────────────────────────────┐         ┌──────────────────────────────────────┐      │
┌───────┤ Book                          ├─────────┤ Ebook                                ├──────┘
│       ├───────────────────────────────┤         ├──────────────────────────────────────┤
│       │ + propiedades: + pages        │         │ + propiedades: + format (tipo BookFormat)
│       │                               │         │                                      │
│       │ + métodos:                    │         │ + métodos:                           │
│       │   └─ getDetails()             │         │   └─ getDetails()                    │
└───────┤                               │         └──────────────────────────────────────┘
        └───────────────────────────────┘
```
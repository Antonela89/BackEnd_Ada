## **Ejercicio 1: Sistema de Gestión para una Biblioteca Digital**

#### **Objetivo**

Diseñar y construir un sistema simple para gestionar los libros y usuarios de una biblioteca. Este ejercicio te permitirá aplicar tipado estático, clases, herencia, encapsulamiento, polimorfismo y modularización.

#### **Escenario**

Necesitamos modelar diferentes tipos de ítems que una biblioteca puede prestar: libros físicos, Ebooks y Audiolibros. Cada uno tiene propiedades comunes y otras específicas. También debemos gestionar a los usuarios y los libros que toman prestados.

---

### **Requisitos y Pasos a Seguir**

#### **Paso 1: Definir las Estructuras Básicas (Interfaces y Enums)**

Para empezar, crea las interfaces y enumeraciones que definirán los "contratos" y tipos específicos de nuestro sistema.

1.  **Enum `BookFormat`**: Crea una enumeración para los formatos de Ebook (ej: `PDF`, `EPUB`, `MOBI`).
2.  **Interface `ILibraryItem`**: Crea una interfaz que defina las propiedades y métodos básicos que cualquier ítem de la biblioteca debe tener:
    *   `title`: `string`
    *   `author`: `string`
    *   `isAvailable`: `boolean`
    *   `checkout()`: un método para marcar el ítem como prestado.
    *   `returnItem()`: un método para marcar el ítem como devuelto.

#### **Paso 2: Crear la Clase Base (Abstracción y Encapsulamiento)**

Crea una clase `abstract` llamada `LibraryItem` que implemente la interfaz `ILibraryItem`.

1.  **Propiedades**:
    *   `title` y `author` deben ser `public` y de solo lectura (`readonly`).
    *   `isAvailable` debe ser `protected` para que solo la clase base y sus derivadas puedan modificarla.
2.  **Constructor**: Debe inicializar `title` y `author`. Por defecto, `isAvailable` será `true`.
3.  **Métodos**:
    *   Implementa los métodos `checkout()` y `returnItem()`. Estos cambiarán el estado de `isAvailable`.
    *   Añade un método `abstract` llamado `getDetails()` que devuelva un `string`. Este método será implementado de forma específica por cada clase hija.

#### **Paso 3: Crear las Clases Derivadas (Herencia y Polimorfismo)**

Ahora, crea clases específicas que hereden de `LibraryItem`.

1.  **Clase `Book`**:
    *   Hereda de `LibraryItem`.
    *   Añade una propiedad `private` `pages: number`.
    *   El constructor debe recibir `title`, `author` y `pages`, y llamar al constructor de la clase padre con `super()`.
    *   **Polimorfismo**: Implementa el método `getDetails()` para que devuelva un string con los detalles del libro, incluyendo el número de páginas.

2.  **Clase `Ebook`**:
    *   Hereda de `LibraryItem`.
    *   Añade una propiedad `private` `format` que utilice el `enum BookFormat`.
    *   El constructor debe recibir `title`, `author` y `format`, y llamar a `super()`.
    *   **Polimorfismo**: Implementa `getDetails()` para que muestre el formato del Ebook.

3.  **Clase `Audiobook`**:
    *   Hereda de `LibraryItem`.
    *   Añade una propiedad `private` `durationMinutes: number`.
    *   El constructor debe recibir `title`, `author` y `durationMinutes`, y llamar a `super()`.
    *   **Polimorfismo**: Implementa `getDetails()` para que muestre la duración en minutos.

#### **Paso 4: Modularización (Organizar el Código)**

Organiza tu código en diferentes archivos para que sea más fácil de mantener.

*   `types.ts`: Contendrá el `enum BookFormat` y la interfaz `ILibraryItem`.
*   `LibraryItem.ts`: Contendrá la clase abstracta `LibraryItem`.
*   `Book.ts`, `Ebook.ts`, `Audiobook.ts`: Cada uno con su clase correspondiente.
*   `index.ts`: El archivo principal donde se ejecutará la lógica.

No olvides usar `export` en tus clases, enums e interfaces, y `import` en los archivos donde los necesites.

#### **Paso 5: Puesta en Marcha (Archivo `index.ts`)**

En tu archivo principal, haz lo siguiente:

1.  Importa todas las clases y tipos que creaste.
2.  Crea un array llamado `catalog` de tipo `LibraryItem[]`.
3.  Crea instancias de `Book`, `Ebook` y `Audiobook` y añádelas al catálogo.
4.  Itera sobre el catálogo usando un bucle (`for...of`) y, para cada ítem:
    *   Imprime sus detalles usando el método `getDetails()`.
    *   Simula un préstamo llamando a `checkout()`.
    *   Imprime en la consola si está disponible o no.
5.  ¡Verifica que el polimorfismo funciona y cada ítem muestra sus detalles específicos!

---

### **Conceptos Aplicados en este Ejercicio**

*   **Tipado Estático (TypeScript):** Se definen tipos para todas las variables, parámetros de funciones y propiedades de clases.
*   **Clases y Objetos (POO):** `LibraryItem`, `Book`, `Ebook`, `Audiobook` son clases que sirven como plantillas para crear objetos.
*   **Encapsulamiento (POO):** La propiedad `_isAvailable` es `protected` y se accede a ella a través de un `getter` público, mientras que `pages`, `format` y `durationMinutes` son `private`.
*   **Abstracción (POO):** La clase `LibraryItem` es `abstract`, lo que significa que no se puede instanciar directamente y obliga a las clases hijas a implementar el método `getDetails()`. La interfaz `ILibraryItem` define un contrato.
*   **Herencia (POO):** `Book`, `Ebook` y `Audiobook` heredan propiedades y métodos de `LibraryItem`.
*   **Polimorfismo (POO):** El método `getDetails()` se comporta de manera diferente según el objeto que lo llame (`Book`, `Ebook` o `Audiobook`).
*   **Enums (TypeScript):** Se utiliza `BookFormat` para definir un conjunto de constantes nombradas para los formatos de archivo.
*   **Módulos (TypeScript):** El código está organizado en archivos separados que se exportan e importan según sea necesario.

---

## **Ejercicio 2: Gestión de un Carrito de Compras en un E-commerce**

#### **Objetivo**

Crear un sistema para gestionar productos y un carrito de compras. Deberás modelar diferentes tipos de productos (físicos y digitales) y calcular el total de una compra, aplicando conceptos de polimorfismo para manejar las diferencias entre ellos (ej: costos de envío para productos físicos).

#### **Escenario**

Una tienda online necesita un sistema para su carrito de compras. Los productos pueden ser físicos (que requieren envío) o digitales (que se entregan por descarga). El sistema debe ser capaz de agregar productos al carrito y calcular el costo total, incluyendo los costos de envío si aplica.

---

### **Requisitos y Pasos a Seguir**

#### **Paso 1: Definir las Interfaces**

1.  **Interface `IProduct`**: Define la estructura básica de cualquier producto.
    *   `id`: `number`
    *   `name`: `string`
    *   `price`: `number`
    *   `getDescription()`: método que devuelve un `string`.

2.  **Interface `IShippable`**: Define la estructura para productos que pueden ser enviados.
    *   `shippingCost`: `number`
    *   `getShippingInfo()`: método que devuelve un `string` con la información de envío.

#### **Paso 2: Crear la Clase Base Abstracta**

1.  Crea una clase `abstract` llamada `Product` que implemente `IProduct`.
    *   **Propiedades**: `id`, `name` y `price` deben ser `public` y `readonly`.
    *   **Constructor**: Debe inicializar las propiedades básicas.
    *   **Método Abstracto**: `getDescription()` debe ser abstracto, forzando a las clases hijas a implementarlo.

#### **Paso 3: Crear las Clases Derivadas**

1.  **Clase `PhysicalProduct`**:
    *   Hereda de `Product` e implementa la interfaz `IShippable`.
    *   Añade una propiedad `private` `weight: number` (peso en kg).
    *   Su constructor debe recibir `id`, `name`, `price` y `weight`.
    *   Calcula el `shippingCost` basándose en el peso (ej: `weight * 5`).
    *   Implementa `getDescription()` para que devuelva los detalles del producto, incluyendo el peso.
    *   Implementa `getShippingInfo()` para que devuelva un mensaje como "Este producto pesa X kg y el costo de envío es $Y".

2.  **Clase `DigitalProduct`**:
    *   Hereda de `Product`.
    *   Añade una propiedad `private` `downloadUrl: string`.
    *   Su constructor debe recibir `id`, `name`, `price` y `downloadUrl`.
    *   Implementa `getDescription()` para que devuelva los detalles del producto, incluyendo una nota de que es un producto digital.

#### **Paso 4: Crear la Clase de Gestión (Carrito de Compras)**

1.  Crea una clase `ShoppingCart`.
    *   Tendrá una propiedad `private` `items: IProduct[] = []`.
    *   **Método `addProduct(product: IProduct)`**: Añade un producto al array `items`.
    *   **Método `calculateTotal()`**: Calcula el precio total. Debe iterar sobre los `items` y sumar sus precios.
        *   **Polimorfismo en acción**: Dentro del método, debes verificar si un producto es "enviable" (si implementa `IShippable`). Si lo es, debes sumar su `shippingCost` al total. Puedes usar `instanceof` o una guarda de tipo para esto.
    *   **Método `displayItems()`**: Muestra en consola la descripción de cada producto en el carrito.

#### **Paso 5: Modularización y Puesta en Marcha (`index.ts`)**

1.  Organiza tu código en módulos (`types.ts`, `Product.ts`, `ShoppingCart.ts`, `index.ts`).
2.  En `index.ts`, crea una instancia de `ShoppingCart`.
3.  Crea instancias de `PhysicalProduct` y `DigitalProduct`.
4.  Añádelas al carrito, muestra los ítems y calcula el total.

--- 

## **Ejercicio 3: Sistema de Personajes para un Videojuego**

#### **Objetivo**

Modelar la jerarquía de personajes de un videojuego de rol (RPG). Cada personaje tendrá atributos básicos y una habilidad especial única. Se practicará la herencia, el polimorfismo y la composición de objetos (un personaje *tiene* un arma).

#### **Escenario**

Estás desarrollando un RPG y necesitas crear el sistema de personajes. Habrá diferentes clases de personajes, como Guerreros y Magos. Cada clase tendrá una forma diferente de atacar y una habilidad especial. Además, los personajes pueden equiparse con armas.

---

### **Requisitos y Pasos a Seguir**

#### **Paso 1: Definir Tipos y Clases Simples**

1.  **Enum `CharacterClass`**: Define las clases de personaje (`WARRIOR`, `MAGE`).
2.  **Clase `Weapon`**: Crea una clase simple `Weapon`.
    *   **Propiedades**: `name` (string) y `damage` (number), ambas `readonly`.
    *   **Constructor**: Para inicializar las propiedades.

#### **Paso 2: Crear la Clase Base Abstracta**

1.  Crea una clase `abstract` llamada `Character`.
    *   **Propiedades**:
        *   `name`: `string` (readonly)
        *   `characterClass`: `CharacterClass` (readonly)
        *   `health`: `protected number`
        *   `weapon`: `protected Weapon` (¡Composición!)
    *   **Constructor**: Debe recibir `name`, `characterClass` y una instancia de `Weapon`. La salud inicial puede ser 100.
    *   **Métodos**:
        *   `equipWeapon(newWeapon: Weapon)`: para cambiar el arma del personaje.
        *   `receiveDamage(damage: number)`: reduce la salud del personaje.
        *   `attack(target: Character)`: método `abstract` que será implementado por las clases hijas.
        *   `useSpecialAbility()`: método `abstract`.

#### **Paso 3: Crear las Clases Derivadas**

1.  **Clase `Warrior`**:
    *   Hereda de `Character`. Su `characterClass` siempre será `WARRIOR`.
    *   El constructor solo necesita `name` y `weapon`, y llama a `super()` con los valores correspondientes.
    *   Implementa `attack(target: Character)`: el daño es el del arma (`this.weapon.damage`). Llama al método `receiveDamage` del objetivo.
    *   Implementa `useSpecialAbility()`: podría ser un "Golpe Poderoso" que aumenta el daño de su próximo ataque o cura una pequeña cantidad de vida.

2.  **Clase `Mage`**:
    *   Hereda de `Character`. Su `characterClass` siempre será `MAGE`.
    *   Añade una propiedad `protected mana: number`.
    *   El constructor recibe `name` y `weapon`, e inicializa el maná (ej: 150).
    *   Implementa `attack(target: Character)`: similar al guerrero.
    *   Implementa `useSpecialAbility()`: podría ser una "Bola de Fuego" que consume maná para hacer daño extra.

#### **Paso 4: Modularización y Puesta en Marcha (`index.ts`)**

1.  Organiza tu código en módulos (`types.ts`, `Weapon.ts`, `Character.ts`, `index.ts`).
2.  En `index.ts`, crea instancias de `Weapon`.
3.  Crea un `Warrior` y un `Mage`, y asígnales armas.
4.  Simula un combate simple:
    *   El guerrero ataca al mago.
    *   El mago usa su habilidad especial contra el guerrero.
    *   Muestra el estado de salud de ambos personajes después de cada acción.

---

**Resumen Rápido: Exportaciones en TypeScript (Nombradas vs. Por Defecto)**

En el desarrollo moderno con TypeScript, la modularidad es clave. Dividir tu aplicación en módulos más pequeños y gestionables mejora la organización, la reutilización del código y la colaboratividad. Las sentencias `export` e `import` son el mecanismo estándar de ECMAScript (y por ende de TypeScript) para lograr esto.

### 1. Exportaciones Nombradas (`Named Exports`)

Las exportaciones nombradas te permiten exportar **múltiples valores** desde un módulo. Cada valor (función, clase, variable, interfaz, tipo, etc.) se exporta con su nombre original.

**Características Clave:**

*   **Múltiples exportaciones:** Puedes tener tantas exportaciones nombradas como quieras en un solo archivo.
*   **Importación por nombre:** Debes importar exactamente el nombre que se exportó (o usar un alias).
*   **Claridad:** Es fácil ver qué partes específicas de un módulo estás utilizando.
*   **Refactorización amigable:** Los IDEs pueden seguir fácilmente las referencias de las exportaciones nombradas.

**Sintaxis:**

Puedes exportar directamente al declarar:

```typescript
// src/utils/math.ts

export const PI = 3.14159; // Exportar una constante
export function add(a: number, b: number): number { // Exportar una función
    return a + b;
}
export class Calculator { // Exportar una clase
    // ...
}
export interface Point { // Exportar una interfaz
    x: number;
    y: number;
}
export type Status = 'active' | 'inactive'; // Exportar un tipo
```

O exportar al final del archivo:

```typescript
// src/services/userService.ts

const API_URL = '/api/users';

function getUserById(id: string) {
    // ...
}
class UserRepository {
    // ...
}

export { API_URL, getUserById, UserRepository };
```

**Importación de Exportaciones Nombradas:**

```typescript
// src/app.ts

import { PI, add } from '../utils/math'; // Importar individualmente
import { API_URL, getUserById, UserRepository } from '../services/userService'; // Importar varios

console.log(PI); // 3.14159
console.log(add(5, 3)); // 8

// Si quieres importar todo bajo un alias:
import * as MathUtils from '../utils/math';
console.log(MathUtils.PI);
console.log(MathUtils.add(10, 2));

// Si quieres renombrar una importación:
import { add as sum } from '../utils/math';
console.log(sum(2, 2)); // 4
```

### 2. Exportación por Defecto (`Default Exports`)

Una exportación por defecto es el "valor principal" o el "punto de entrada" de un módulo. Solo puede haber **una exportación por defecto** por archivo.

**Características Clave:**

*   **Una por módulo:** Solo puedes tener un `export default`.
*   **Nombre de importación libre:** Puedes importar el valor por defecto con cualquier nombre que elijas.
*   **Ideal para el "core" del módulo:** Cuando un archivo se centra en proporcionar una única clase, función o constante principal.
*   **Configuración:** Muy común para exportar objetos de configuración, instancias de bases de datos, routers de Express, etc.

**Sintaxis:**

```typescript
// src/config/db.ts

class Database {
    // ... lógica de conexión a la DB
    constructor() { console.log('DB Connected'); }
}

export default new Database(); // Exportar una instancia de clase
```

```typescript
// src/routers/userRouter.ts

import express from 'express';
const router = express.Router();

router.get('/:id', (req, res) => { /* ... */ });
router.post('/', (req, res) => { /* ... */ });

export default router; // Exportar el router de Express
```

```typescript
// src/utils/formatter.ts

function formatCurrency(amount: number, currency: string = 'USD'): string {
    return `${currency} ${amount.toFixed(2)}`;
}

export default formatCurrency; // Exportar una función
```

**Importación de Exportaciones por Defecto:**

```typescript
// src/app.ts

import dbInstance from '../config/db'; // 'dbInstance' es el nombre que le dimos al importar
import userRouter from '../routers/userRouter'; // 'userRouter' es el nombre que le dimos al importar
import currencyFormatter from '../utils/formatter'; // 'currencyFormatter' es el nombre que le dimos al importar

// dbInstance está ahora disponible
console.log(currencyFormatter(123.45)); // USD 123.45
// app.use('/users', userRouter); // Usar el router de Express
```

### 3. Tipos de Exportaciones (General)

Cuando hablamos de "tipos de exportaciones", nos referimos a qué tipo de construcciones de TypeScript puedes exportar. La buena noticia es que **casi cualquier cosa** que declares puede ser exportada, ya sea nombrada o por defecto.

Los "tipos" más comunes de cosas que exportar son:

*   **Variables/Constantes:** `export const MY_CONSTANT = 'value';`
*   **Funciones:** `export function myFunction() { ... }`
*   **Clases:** `export class MyClass { ... }`
*   **Interfaces:** `export interface MyInterface { ... }` (¡importante para compartir contratos de datos!)
*   **Tipos de Alias (`type`):** `export type MyType = string | number;` (también crucial para contratos)
*   **Enumeraciones (`enum`):** `export enum MyEnum { A, B }`

**Ejemplo de Exportación de Tipos (Interfaces/Types):**

```typescript
// src/types/userTypes.ts

export interface UserDTO {
    id: string;
    name: string;
    email: string;
}

export type UserStatus = 'active' | 'pending' | 'deleted';
```

```typescript
// src/services/userService.ts

import { UserDTO, UserStatus } from '../types/userTypes';

class UserService {
    private users: UserDTO[] = [];

    public createUser(data: UserDTO, status: UserStatus): UserDTO {
        // ... lógica para crear usuario
        this.users.push(data);
        return data;
    }
}

export default new UserService();
```

### ¿Cuándo Usar Cuál? (Recomendaciones del Senior Dev)

*   **Por defecto:**
    *   Para el **punto de entrada principal** de un módulo (ej: un router de Express, una instancia de un servicio, una única clase utilitaria que encapsula toda la lógica del archivo).
    *   Cuando el archivo se centra en una **única responsabilidad** principal.
    *   En archivos de configuración que exportan un único objeto de ajustes.
*   **Nombradas:**
    *   Cuando un módulo tiene **varias utilidades o componentes** relacionados pero independientes.
    *   Para **interfaces y tipos** que definen los contratos de datos y que serán compartidos en múltiples lugares.
    *   Para **funciones puras o constantes** que pueden ser usadas de forma aislada.
    *   **¡Preferidas en la mayoría de los casos!** Ofrecen mayor claridad sobre lo que se está importando y son más fáciles de refactorizar y de manejar con herramientas de análisis de código (linters, IDEs).

**Combinaciones:**

Es muy común y perfectamente válido tener una exportación por defecto junto con varias exportaciones nombradas en el mismo archivo.

```typescript
// src/utils/logger.ts

export interface LogOptions {
    level: 'info' | 'warn' | 'error';
    timestamp: boolean;
}

class Logger {
    constructor(private options: LogOptions) {}
    log(message: string) {
        if (this.options.timestamp) {
            console.log(`[${new Date().toISOString()}] [${this.options.level.toUpperCase()}]: ${message}`);
        } else {
            console.log(`[${this.options.level.toUpperCase()}]: ${message}`);
        }
    }
}

export const defaultLogOptions: LogOptions = { level: 'info', timestamp: true };
export default new Logger(defaultLogOptions); // Exporta una instancia de Logger por defecto
```


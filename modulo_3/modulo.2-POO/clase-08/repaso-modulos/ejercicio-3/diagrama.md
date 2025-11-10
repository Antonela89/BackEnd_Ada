## **Diagrama 2: Ejercicio de Personajes (RPG)**

Este diagrama muestra cómo diferentes clases de personajes heredan de una base, pero también cómo se componen con otros objetos, como un `Arma`.

#### **① Tipos y Componentes (Enum y Clase Simple)**

*   `CharacterClass` define los tipos de personajes disponibles.
*   `Weapon` es una clase independiente que será **usada por** los personajes.

#### **② Clase Base (Abstracta)**

*   Define los atributos y acciones comunes a todos los personajes (`Character`).
*   **Contiene un objeto `Weapon`**.
*   Define "firmas" para los métodos que cada hijo debe implementar (`attack`, `useSpecialAbility`).

#### **③ Clases Derivadas**

*   Cada clase especializada (`Warrior`, `Mage`) hereda de `Character`.
*   Implementan los métodos abstractos con su propia lógica.
*   `Mage` añade una propiedad única: `mana`.

```
┌───────────────────────────────────────────┐                       ┌──────────────────────────┐
│ Character (Clase Abstracta)               │                       │ Weapon (Clase Componente)│
├───────────────────────────────────────────┤                       ├──────────────────────────┤
│ + name, characterClass                    │                       │ + name: string           │
│ # health: number                          │   usa (Composición)   │ + damage: number         │
│ # weapon: Weapon  ────────────────────────┤─────────────────────► └──────────────────────────┘
├───────────────────────────────────────────┤               
│ + receiveDamage(), getStatus()            │
│ + abstract attack()                  ─────► Firma
│ + abstract useSpecialAbility()       ─────► Firma
└───────────────────────────────────────────┘
             │
             │ extiende
             ▼
        ┌───────────────────────────────────┐         ┌─────────────────────────────────┐
┌───────┤ Warrior                           ├─────────┤ Mage                            │
│       ├───────────────────────────────────┤         ├─────────────────────────────────┤
│       │ + fija characterClass a WARRIOR   │         │ + fija characterClass a MAGE    │
│       │                                   │         │                                 │
│       │ + métodos:                        │         │ + propiedades: + mana           │
│       │   └─ attack()                     │         │                                 │
│       │   └─ useSpecialAbility()          │         │ + métodos:                      │
└───────┤                                   │         │   └─ attack()                   │
        └───────────────────────────────────┘         │   └─ useSpecialAbility()        │
                            │                         └─────────────────────────────────┘
                            │                                    │   
                            │                                    │
                            │       ┌──────────────────┐         │
                            └───────│ CharacterClass   │─────────┘               
                                    │ (Enum)           │              
                                    ├──────────────────┤               
                                    │ - WARRIOR        │              
                                    │ - MAGE           │               
                                    └──────────────────┘ 

```
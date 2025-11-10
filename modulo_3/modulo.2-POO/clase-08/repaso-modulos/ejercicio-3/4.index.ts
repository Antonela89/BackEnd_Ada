// =============================================================================
// ARCHIVO PRINCIPAL DE EJECUCIÓN
// Aquí se crean las instancias de los objetos y se simula la interacción.
// =============================================================================
import { Weapon } from "./1.types";
import { Warrior } from './3.warrior';
import { Mage } from './3.mage';

// --- 1. CREACIÓN DE COMPONENTES Y PERSONAJES ---
// Se crean las armas. Son objetos independientes.
const sword = new Weapon("Espada de Acero", 15);
const staff = new Weapon("Báculo de Fuego", 8);

// Se crean los personajes, "componiéndolos" con las armas creadas.
const aragorn = new Warrior("Aragorn", sword);
const gandalf = new Mage("Gandalf", staff);

// --- 2. SIMULACIÓN DEL COMBATE ---
console.log("--- ¡Comienza el Combate! ---");
console.log(aragorn.getStatus());
console.log(gandalf.getStatus());
console.log("----------------------------");

// Turno 1: El guerrero ataca al mago.
aragorn.attack(gandalf);
console.log(gandalf.getStatus());

// Turno 2: El mago usa su habilidad especial contra el guerrero.
// POLIMORFISMO: 'useSpecialAbility' funciona de manera diferente para gandalf
// que para aragorn, aunque el nombre del método sea el mismo.
gandalf.useSpecialAbility(aragorn);
console.log(aragorn.getStatus());

// Turno 3: El guerrero usa su habilidad especial (que no necesita objetivo).
aragorn.useSpecialAbility();
console.log(aragorn.getStatus());
console.log("----------------------------");
import { Weapon } from "./1.types";
import { Warrior } from './3.warrior';
import { Mage } from './3.mage';

// Crear armas
const sword = new Weapon("Espada de Acero", 15);
const staff = new Weapon("Báculo de Fuego", 8);

// Crear personajes
const aragorn = new Warrior("Aragorn", sword);
const gandalf = new Mage("Gandalf", staff);

console.log("--- ¡Comienza el Combate! ---");
console.log(aragorn.getStatus());
console.log(gandalf.getStatus());
console.log("----------------------------");

// Turno 1
aragorn.attack(gandalf);
console.log(gandalf.getStatus());

// Turno 2
gandalf.useSpecialAbility(aragorn);
console.log(aragorn.getStatus());

// Turno 3
aragorn.useSpecialAbility();
console.log(aragorn.getStatus());
console.log("----------------------------");
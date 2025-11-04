import { Person, createPerson } from './types';

let persona = createPerson('Esteban', 40); 

console.log(`La persona se llama: ${persona.name} y tiene: ${persona.age}`);

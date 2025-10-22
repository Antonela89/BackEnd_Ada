import {
  add,
  subtract,
  capitalize,
  reverse,
  createUser
} from './utils'; 

console.log("1. Capitalizando un nombre...");
const originalName = "ana";
const capitalizedName = capitalize(originalName);

// 2. COMPROBACIÓN: Nos aseguramos de que el nombre no sea nulo antes de continuar.
if (capitalizedName) {
  console.log(`Nombre capitalizado: ${capitalizedName}`);

  // 3. Creamos el usuario solo si el nombre es válido (no es nulo).
  const user = createUser(capitalizedName, 35); // Pasamos ambos argumentos
  console.log("Usuario creado:", user);

  // 4. Continuamos el flujo con los datos del usuario.
  const reversedName = reverse(user.name);
  console.log(`El nombre del usuario al revés es: ${reversedName}.`);

} else {
  // Manejamos el caso en que la capitalización falle.
  console.log("No se pudo capitalizar el nombre, no se creará el usuario.");
}

console.log("\n--- Realizando cálculos matemáticos por separado ---");
let suma = add(15, 7);
let resta = subtract(suma, 10);
console.log(`El resultado de la suma es ${suma} y el de la resta es ${resta}.`);
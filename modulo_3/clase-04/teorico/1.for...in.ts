//  Ejemplo básico con objeto
let alumna = {
	nombre: 'Lucia',
	edad: 22,
	curso: 'Programación',
};

// iterar sobre las propiedades del objeot alumna
for (let propiedad in alumna) {
	console.log(
		`Clave: ${propiedad}, valor: ${
			alumna[propiedad as keyof typeof alumna]
		}`
	);
}

//  ${alumna[propiedad as keyof typeof alumna]} -> le decimos al compilador que la variable propiedad es una clave valida del objeto alumna (nombre, edad y curso)

console.log('\n---------------------------\n');

// Ejemplo con array
let lenguajes = ['Javascript', 'Python', 'Typescript'];

for (let indice in lenguajes) {
	console.log(
		`Índice: ${indice}, valor: ${
			lenguajes[indice as keyof typeof lenguajes]
		}`
	);
}

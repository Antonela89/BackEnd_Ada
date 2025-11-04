// declaramos un array simple
let frutas: string[] = ['manzana', 'banana', 'pera'];

// utilizamos diferentes metodos
// agregamos una fruta al final
frutas.push('naranja');
console.log('Agregamos una fruta al final', frutas);

// eliminar la ultima fruta
let ultimaFruta = frutas.pop();
console.log('Eliminamos la ultima fruta:', ultimaFruta);

// combinamos todos lo elementos del array en una cadena
let stringDeFrutas = frutas.join(' - ');
console.log('Combinamos todos los elementos del array en una cadena', stringDeFrutas);
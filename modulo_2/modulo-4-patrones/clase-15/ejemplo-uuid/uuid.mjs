// Importacion de modulo uuid y sus versiones
import { v1 as uuidv1, v3 as uuidv3, v4 as uuidv4, v5 as uuidv5 } from 'uuid';

// Ejemplo 1 - UUID v1 -> identificador de tiempo
// generaba un identificador de tiempo  actual y la direccion MAC del dispositivo
const idv1 = uuidv1();
console.log(`UUID v1 basado en tiempo: ${idv1}\n`);


// Ejemplo 2 - UUID v3 -> nombre y espacios de nombres
// uso de MD5 
// emplea parametros
const NAMESPACE = uuidv3.URL;
const nameV3 = 'Anto';
const idv3 = uuidv3(nameV3, NAMESPACE);
console.log(`UUID v3 basado en nombre y espacios de nombres con MD5: ${idv3}\n`);

// Ejemplo 3 - UUID v4 -> Aleatorio
const idv4 = uuidv4();
console.log(`UUID v4 aleatorio: ${idv4}\n`);

// Ejemplo 4 - UUID v5 -> nombre y espacios de nombres
// uso de SHA-1
// uso de parametros
const NAMESPACE5 = uuidv5.URL;
const nameV5 = 'Anto';
const idv5 = uuidv5(nameV5, NAMESPACE5);
console.log(`UUID v5 basado en nombre y espacios de nombres con SHA-1: ${idv5}\n`);
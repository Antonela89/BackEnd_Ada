// ### Ejercicio 5: Aplicación de Cifrado con Módulo Crypto y Readline
// **Consigna:**
// Crea una aplicación que permita a los usuarios cifrar y descifrar mensajes usando el módulo `crypto`. Implementa un menú interactivo con `readline-sync`.

// **Pasos:**
// *   Usa `crypto.createCipheriv` y `crypto.createDecipheriv` para cifrar y descifrar mensajes.
// *   Usa `readline-sync` para crear un menú interactivo.
// *   Guarda los mensajes cifrados en un archivo JSON.

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const readlineSync = require('readline-sync');

const dataPath = path.join(__dirname, 'cifrados.json');
const keyPath = path.join(__dirname, 'secret.key');
const algoritmo = 'aes-256-cbc';
let key;

// Persistencia de la clave:
// Si la clave no existe en 'secret.key', la creamos. Si existe, la leemos.
// Esto asegura que usemos SIEMPRE la misma clave para cifrar y descifrar.
if (!fs.existsSync(keyPath)) {
    key = crypto.randomBytes(32); // Genera una clave de 32 bytes (256 bits)
    fs.writeFileSync(keyPath, key);
    console.log('Se ha generado una nueva clave de cifrado.');
} else {
    key = fs.readFileSync(keyPath); // Lee la clave existente.
}

// Aseguramos que el archivo JSON exista y contenga un array vacío si es nuevo.
if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]'); // Escribimos '[]' que es un JSON de array vacío.
    console.log(`Se ha creado el archivo cifrados.json`);
}

// encripar 
const encriptar = () => {
    const texto = readlineSync.question('Ingresa un texto a cifrar: ');

    const iv = crypto.randomBytes(16);

    const cipher = crypto.createCipheriv(algoritmo, key, iv);

    let encriptado = cipher.update(texto, 'utf-8', 'hex');

    encriptado += cipher.final('hex');

    console.log(`Texto cifrado: ${encriptado}`);

    // Leemos el archivo JSON existente.
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

    // Creamos un objeto para la nueva entrada. Guardamos el IV y el contenido.
    const nuevaEntrada = {
        iv: iv.toString('hex'), // El IV es necesario para descifrar
        content: encriptado
    };

    // Añadimos la nueva entrada al array.
    data.push(nuevaEntrada);

    // Guardamos el array completo de vuelta en el archivo JSON.
    // JSON.stringify(data, null, 2) formatea el JSON para que sea legible.
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));

    console.log(`El cifrado ha sido guardado.`)
}

// desencriptar
const desencriptar = (encriptado) => {
    // Leemos y parseamos los datos del archivo JSON.
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

    if (data.length === 0) {
        console.log(`\nNo hay mensajes para desencriptar.`);
        return;
    }

    // Creamos un array de opciones para mostrar al usuario.
    // Mostramos los primeros 10 caracteres del mensaje cifrado como identificador.
    const opciones = data.map((item, index) => `${index + 1}: ${item.content.substring(0, 10)}...`);

    const indice = readlineSync.keyInSelect(opciones, 'Elige un mensaje para desencriptar:');

    if (indice === -1) {
        console.log('Operación cancelada.');
        return;
    }

    // Obtenemos el objeto seleccionado por el usuario.
    const itemSeleccionado = data[indice];

    // Convertimos el IV de formato 'hex' a 'buffer', que es lo que necesita crypto.
    const iv = Buffer.from(itemSeleccionado.iv, 'hex');

    const decipher = crypto.createDecipheriv(algoritmo, key, iv);

    let descifrado = decipher.update(itemSeleccionado.content, 'hex', 'utf-8');
    descifrado += decipher.final('utf-8');

    console.log(`\n--- Texto Descifrado ---`);
    console.log(descifrado);
    console.log(`------------------------`);
};

// menú interactivo
const menu = () => {
    while (true) {
        console.log(`---- Menú Interactivo ----`);
        const opciones = ['Encriptar', 'Desencriptar'];

        const indice = readlineSync.keyInSelect(opciones, 'Elige una opción:', { cancel: 'Salir' });

        switch (indice) {
            case 0:
                encriptar();
                break;
            case 1:
                desencriptar();
                break;
            case -1:
                console.log('¡Hasta luego!');
                process.exit();
        }
    }
}

menu();


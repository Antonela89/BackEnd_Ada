// ### Ejercicio 2: Menú Interactivo con readline-sync
// Crea un script de `Node.js` que muestre un menú de opciones usando `readline-sync`. El menú debe permitir al usuario elegir entre tres acciones: ver un mensaje de bienvenida, generar un hash de un texto, o salir.

const readlineSync = require('readline-sync');
const crypto = require('crypto'); // Importamos el módulo crypto

const opciones = ['Ver un mensaje de bienvenida', 'Generar un hash de un texto', 'Salir'];

const indiceSeleccionado = readlineSync.keyInSelect(opciones, 'Seleccione una opcion: ');

// Usamos una estructura switch para manejar la lógica de cada opción.
// Es un poco más ordenado que múltiples if/else if.
switch (indiceSeleccionado) {
    case 0:
        // Opción: Ver un mensaje de bienvenida
        console.log('¡Bienvenido a esta aplicación interactiva!');
        break;

    case 1:
        // Opción: Generar un hash de un texto
        const textoParaHash = readlineSync.question('Por favor, ingresa el texto que quieres hashear: ');

        // Creamos una instancia del hash usando el algoritmo SHA-256
        const hash = crypto.createHash('sha256');

        // Actualizamos el hash con el texto del usuario
        hash.update(textoParaHash);

        // Generamos el hash en formato hexadecimal (el más común para mostrar)
        const hashGenerado = hash.digest('hex');

        console.log(`El hash SHA-256 de tu texto es: ${hashGenerado}`);
        break;

    case 2:
        // Opción: Salir
        console.log('Saliendo del programa. ¡Hasta luego!');
        break;

    default:
        // Esto se ejecuta si el usuario presiona 'CANCEL' (índice -1) o Esc
        console.log('No has elegido ninguna opción.');
        break;
}


// ¿Qué es un Hash?

// Imagina que tienes un documento muy largo y quieres una forma rápida de verificar si alguien lo ha modificado, aunque sea en una sola letra. Un "hash" (o función de resumen) es como una "huella digital" única para ese documento.

// En términos más técnicos, una función de hash es un algoritmo matemático que toma una entrada de datos (como un texto, un archivo o una contraseña) y la convierte en una cadena de caracteres de longitud fija. Esta cadena resultante se llama "hash" o "resumen".

// Propiedades clave de una buena función de hash:

//     Determinista: La misma entrada siempre producirá el mismo hash. Si aplicas el hash a "hola mundo", siempre obtendrás el mismo resultado.

//     Irreversible (unidireccional): A partir del hash, es prácticamente imposible reconstruir los datos originales. Es una calle de un solo sentido.

//     Resistente a colisiones: Es extremadamente difícil que dos entradas diferentes produzcan el mismo hash.

//     Efecto avalancha: Cualquier cambio mínimo en la entrada (incluso un solo carácter) produce un hash completamente diferente.

// ¿Para qué se usa?

//     Almacenamiento seguro de contraseñas: En lugar de guardar tu contraseña en texto plano, los sistemas guardan el hash de tu contraseña. Cuando inicias sesión, el sistema calcula el hash de la contraseña que ingresas y lo compara con el que tiene guardado.

//     Verificación de la integridad de los datos: Al descargar un archivo grande, a menudo se proporciona un hash. Puedes calcular el hash del archivo descargado en tu computadora y, si coincide con el proporcionado, tienes la certeza de que el archivo no se corrompió ni fue alterado durante la descarga.

//     Firmas digitales y criptomonedas: Son una parte fundamental de la tecnología blockchain y la seguridad en transacciones digitales.
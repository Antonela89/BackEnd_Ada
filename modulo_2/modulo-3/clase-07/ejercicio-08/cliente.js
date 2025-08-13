const net = require('net');
const readline = require('readline');

const PORT = 5000;

// Interfaz para leer desde la consola del usuario (stdin) y escribir en ella (stdout).
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Crear el cliente. El callback de conexión ahora está vacío.
const client = net.createConnection({ port: PORT }, () => {
  console.log('¡Conectado al servidor!');
  console.log('Por favor, sigue las instrucciones para autenticarte.');
});

// 1. Cuando se reciben datos DEL SERVIDOR:
client.on('data', (data) => {
  // Simplemente muestra el mensaje del servidor en la consola del usuario.
  // Usamos process.stdout.write para que el cursor se quede en la misma línea.
  process.stdout.write(data.toString());
});

// 2. Cuando el USUARIO escribe una línea en su terminal:
rl.on('line', (line) => {
  // Toma la línea que el usuario escribió y la envía al servidor.
  // Es CRUCIAL añadir '\n' para que el readline del servidor lo detecte como una línea completa.
  client.write(line + '\n');
});

// 3. Cuando la conexión se cierra:
client.on('end', () => {
  console.log('\nDesconectado del servidor.');
  // Termina el proceso del cliente.
  process.exit();
});

// 4. Manejo de errores:
client.on('error', (err) => {
  console.error(`Error de conexión: ${err.message}`);
});
import net from 'net';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const PUERTO = 8080;

const client = net.createConnection({port: PUERTO}, () => {
    console.log(`Conectando con el servidor.`);

    rl.setPrompt(`Ingrese un comando: 
        - Agregar "titulo": agrega una tarea
        - Listar: muestra la lista de tareas
        - Salir: sale del sistema
        -> `);

    rl.prompt();  
})

client.on('data', (data) => {
    const mensaje = data.toString();
    console.log(`El servidor a respondido: \n${mensaje}`);  
    rl.prompt();
})

rl.on('line', (comando) => {
    if (comando.trim().toLowerCase() === 'salir') {
        client.end();
    } else {
        client.write(comando);
    }
})

client.on('end', () => {
    console.log(`El servidor cerró la sesión.`);
    rl.close();
})

client.on('close', () => {
    console.log(`Se ha cerrado la conexión.`);
    process.exit(0);
})

client.on('error', (err) => {
    console.error(`Error en la conexión: ${err.message}`);
})
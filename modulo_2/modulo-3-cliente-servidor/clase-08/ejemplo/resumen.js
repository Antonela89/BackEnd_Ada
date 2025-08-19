// importación del modulo net
const net = require('net');

// definición del puerto
const PORT = 5000;
const HOST = 'localhost' //(opcional)

// client es un objeto socket, representan una conexión.
const client = net.createConnection({ port: PORT, host: HOST });

//METODOS DE NET.SOCKET
// 1- de escritura y control de conexión -> enviar datos y gestionar la conexión

// Write -> envia un bloque de datos al servidor
// parametros
// data: cadena / buffer / Uint8array
// enconding (opcional) -> codificación: utf8 /ascii / hex
// callback (opcional) -> función para trabajar con los datos una vez que se enviaron
client.write(`Hola Servidor!...`)

// End -> cerrar la conexión TCP
// parametros
// data (opcional) -> cadena / buffer / Uint8array
// enconding (opcional) -> codificación: utf8 /ascii / hex
// callback (opcional) -> función que se ejecuta cuando la conexión a sido complemente cerrada
client.end(`Adiós Servidor!...`)

//setEncoding -> codificacion para los datos recibidos, similar a toString();
// parametros
// encoding -> codificación: utf8 /ascii / hex
client.setEncoding('utf8')

// setTimeout -> tiempo de espera
// parametros
// timeout -> tiempo de espera en milisegundos
// callack (opcional) -> funcion que se ejecuta cuando se alcanza el tiempo de espera
client.setTimeout(5000, () => {
    console.log(`Tiempo de espera alcanzado`);
});

// pause -> pausa la lectura de datos del socket, los datos que llegan no se envian a los manejadores de evento data hasta que se reanude la lectura
client.pause();

// resume -> reanuda la lectura despues de una pausa y se entregan los datos a los manejadores de eventos 
client.resume();

// destroy -> cierra el socket y libera los recursos asociados
// parametros
// error (opcional ) -> un objeto error que se emite si el socket se cierra por un problema
client.destroy(() => {
    console.log(`Cliente destruido`);
})

// unref -> permite que el proceso node.js finalice si el socket es el unico manejador de eventos en el proceso
client.unref();

// ref -> reactiva la función del socket de mantener el proceso node.js si es el unico manejador de eventos en el proceso
// evita que el proceso finalice prematuramente
client.ref()
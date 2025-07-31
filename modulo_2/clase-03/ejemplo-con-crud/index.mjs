// importación de las funciones necesarias
import {
    agregarElemento,
    listarElementos,
    actualizarElemento,
    buscarElementoPorId,
    eliminarElemento
} from './crud.mjs';

// ruta del archivo json que tiene los datos:
const pathFile = './alumnos.json';

//creación de elementos a agregar
const alumno = {
    nombre: 'Esteban',
    apellido: 'Quito',
    calificaciones: [10,7,8,5]
}

agregarElemento(pathFile, alumno);
agregarElemento(pathFile, { nombre: 'Ana', apellido: 'García', calificaciones: [9, 9, 10] });
listarElementos(pathFile);
console.log('\n--- Actualizando Alumno con ID 1 ---');
actualizarElemento(pathFile, 1, { nombre: 'Mario', apellido: 'Bros' });
console.log('\n--- Buscando Alumno con ID 2 ---');
const alumnoEncontrado = buscarElementoPorId(pathFile, 2);
console.log('Alumno encontrado:', JSON.stringify(alumnoEncontrado, null, 2));
listarElementos(pathFile);
console.log('\n--- Eliminando Alumno con ID 1 ---');
eliminarElemento(pathFile, 1);
listarElementos(pathFile);




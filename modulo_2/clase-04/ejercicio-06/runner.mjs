import { leerArchivo, guardarDatos, listarMetas } from "./index.mjs";

const ruta_archivo = 'metas.json';

listarMetas(ruta_archivo);
guardarDatos(ruta_archivo, 'Aprender Node.js');
listarMetas(ruta_archivo);
guardarDatos(ruta_archivo, 'Viajar a Japón');
listarMetas(ruta_archivo);

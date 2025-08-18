// ### Ejercicio 6: Tu lista de metas 🎯
// **Consigna:**
// Es momento de planear tus metas. Crea un archivo llamado `metas.json` con una lista vacía al principio. Luego, agrega metas como: "Aprender Node.js" y "Viajar a Japón”. Guarda la lista actualizada en el archivo.

// 💡 **Pista:** Usa `fs.writeFile` para crear el archivo y agregar elementos a la lista.

import fs from 'fs';

export const leerArchivo = (ruta) => {
    if (fs.existsSync(ruta)) {
        const data = fs.readFileSync(ruta, 'utf8');
        return JSON.parse(data);
    } else {
        fs.writeFileSync(ruta, JSON.stringify([], null, 2));
        console.log('Archivo creado correctamente');
        return [];
    }
}

export const guardarDatos = (ruta, meta) => {
    const metas = leerArchivo(ruta);

    const m = { meta }

    metas.push(m);

    fs.writeFileSync(ruta, JSON.stringify(metas, null, 2));
    console.log('Archivo guardado');
}

export const listarMetas = (ruta) => {
    const metas = leerArchivo(ruta);

    if (metas.length === 0) {
        console.log('No hay registros para mostrar.');
    }

    metas.forEach(m => {
        console.log(m);
    });
}

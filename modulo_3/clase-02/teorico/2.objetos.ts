// 1- Definicion de un objeto básico
let auto = {
    marca: 'Toyota',
    modelo: 'Corolla',
    anio: 2023
}

// mostramos las propiedades
console.log(`Marca: ${auto.marca}, Modelo: ${auto.modelo}, Año: ${auto.anio}`);

// 2- Definicion de objeto con declaracion explicita del tipo
let libro: {titulo: string; autor: string; anio: number} = {
    titulo: 'Cien años de Soledad',
    autor: 'Garcia Marquez',
    anio: 1984
}

// mostramos las propiedades
console.log(`Titulo: ${libro.titulo}, Autor: ${libro.autor}, Año: ${libro.anio}`);

// 3- Definicion de objeto con propiedades opcionales
let estudiante: {nombre: string; edad?: number} = {
    nombre: 'Antonela',
}

console.log(`Nombre del estudiante: ${estudiante.nombre}, Edad: ${estudiante.edad ?? 'Desconocido'}`);

// 4- Metodos de un objeto
let perro = {
    nombre: 'Firulias',
    raza: 'Caniche',
    ladrar: function() {
        return `${this.nombre} está ladrando`
    }
}

console.log(perro.ladrar());

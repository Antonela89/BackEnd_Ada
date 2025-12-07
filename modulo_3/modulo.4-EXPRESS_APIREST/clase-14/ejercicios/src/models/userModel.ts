// importacion de modulos para archivos y rutas
import fs from 'fs';
import path from 'path';

// ruta del archivo
const filePath = path.join(__dirname, '../database/users.json');

// interface para estructura de usuario
interface User {
	id: number;
	name: string;
	email: string;
	age: number;
}

// interface para estructura de estadísticas
interface Stats {
	total: number;
	promedio: number;
	young: User | null;
	old: User | null;
}

// encapsulamiento de metodos
export class UserModel {
	// leer todos los usuarios
	static getAllUsers(): User[] {
		return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
	}

	// guardar info en archivo
	static save(data: User[]): void {
		return fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
	}

	// usuario por id
	static getUserByID(id: number): User | undefined {
		// lectura de todos los usuarios - principio DRY
		const data = this.getAllUsers();

		// busqueda de usuario por id 
		return data.find((user) => user.id === id);
	}

	// crear un usuario
	static addUser(newUser: User): User {
		// traer todos los usuarios
		const data = this.getAllUsers();

		// crear nuevo id segun el largo del array
		const newID = data.length + 1;

		// construcción del objeto a agregar en el array
		// se usa spread operator y se suma el id generado dinámicamente
		const user = { ...newUser, id: newID };
		// se agrega el usuario generado al array
		data.push(user);

		// se guarda en archivo el array
		this.save(data);

		// respuesta: usuario generado
		return user;
	}

	// crear varios usuarios
	static addUsers(newUsers: User[]): User[] {
		// traer todos los usuarios 
		const data = this.getAllUsers();
		const usersAdded: User[] = []; // Array auxiliar para responder luego

		// recorrer la lista de usuarios pasados por el usuario
		newUsers.forEach((user) => {
			// generar id dinamicamemte
			const newID = data.length + 1;

			// por cada iteración se genera un objeto con id
			const newUser = { ...user, id: newID };

			// Agregamos al array principal (en memoria)
			data.push(newUser);

			// agregar al array auxiliar para responder
			usersAdded.push(newUser);
		});

		this.save(data); // contiene viejos y nuevos usuarios

		// respuesta: array auxiliar (datos nuevos + id dinámico)
		return usersAdded;
	}

	// editar un usuario por id
	static updateUser(id: number, updateUser: Partial<User>): User | null {
		// leer todos los usuarios
		const data = this.getAllUsers();
		// buscar el indice de la coincidencia por id
		const index = data.findIndex((user: User) => user.id === id);

		// validación -> no encontrado
		if (index === -1) return null;

		// obtener el usuario completo a editar
		const currentUser = data[index];
		// con spread operator se hace la edición de datos viejos con nuevos
		const mergedUser = { ...currentUser, ...updateUser };

		// se actualiza el usuario editado en el array de bbdd
		data[index] = mergedUser;

		// se guardan los cambios
		this.save(data);

		// respuesta: Usuario editado
		return mergedUser;
	}

	// eliminar usuario por id
	static deleteUser(id: number): Boolean {
		// leer todos los usuarios
		const data = this.getAllUsers();

		// encontrar el indice de la coincidencia por id
		const index = data.findIndex((user: User) => user.id === id);

		// validación -> no encontrado
		if (index === -1) return false;

		// eliminar el usuario con metodo splice (parametros: indice encontrado, 1: se elimina un objeto -> el usuario )
		data.splice(index, 1);

		// se guardan los cambios
		this.save(data);

		// respuesta: true
		return true;
	}

	// filtrar usuarios por nombre de usuario -> query params
	static filterByName(query: string): User[] {
		// leer todos los usuarios
		const data = this.getAllUsers();

		// usar el metodo filter. Recorre el array y busca coincidencias
		const results = data.filter((user) =>
			// que el nombre en minuscula incluya el query params en minusculas
			user.name.toLowerCase().includes(query.toLowerCase())
		);

		// respuesta: array de coincidencias
		return results;
	}

	// contar los usuarios que tienen el mismo dominio
	static countByDomain(domain: string): number {
		// traer todos los usuarios
		const data = this.getAllUsers();

		// filtrar por email -> que termine con el dominio ingresado como query params -> retorna array
		const results = data.filter((user) => user.email.endsWith(domain));

		// respuesta: longitud del array obtenido
		return results.length;
	}

	// devolver todos los usuarios ordenados alfabeticamente por nombre
	static getAllSorted(order: string): User[] {
		// leer todos los usuarios
		const data = this.getAllUsers();

		// condicional -> si el query params es igual a "desc"
		if (order === 'desc') {
			// Orden descendente (Z-A)
			// hacer una copia -> sort modifica el array original
			// se usa localeCompare para comparar string
			return [...data].sort((a: User, b: User) =>
				b.name.localeCompare(a.name)
			);
		}

		// Por defecto o si es 'asc' (A-Z)
		return [...data].sort((a: User, b: User) =>
			a.name.localeCompare(b.name)
		);

		// en ambos casos -> respuesta: array de usuarios ordenados
	}

	// filtrar usuarios por rango de edad
	static filterByAgeRange(min: number, max: number): User[] {
		// leer todos los usuarios
		const data = this.getAllUsers();

		// respuesta: array de usuarios donde la edad queda comprendida dentro de los parametros ingresados
		return data.filter((user) => user.age >= min && user.age <= max);
	}

	// estadisticas
	static getStats(): Stats {
		// leer todos los usuarios
		const data = this.getAllUsers();

		// verificación
		// si no hay nada en la base de datos
		if (data.length === 0) {
			// se devuelve un objeto sigiendo la interface de Stats
			return {
				total: 0,
				promedio: 0,
				young: null,
				old: null,
			} as unknown as Stats;
		}
		
		// total de usuarios -> longitud del array obtenido
		const total = data.length;

		// variable acumuladora auxiliar para calcular el promedio de edad
		let suma = 0;

		// recorrer el array de usuarios para obtener la edad de cada uno y sumarla a la variable auxiliar
		data.forEach((user) => (suma += user.age));

		// calcular el promedio de edad
		const promedio = suma / total;

		// ordenar el array segun la edad, de forma ascendente
		const order = [...data].sort((a: User, b: User) => a.age - b.age);
		const young = order[0]; // primer elemento -> es el más joven
		const old = order[order.length - 1]; // último elemento -> es el más viejo

		// respuesta: objeto con estructura stats (interface) donde estan todos los resultados obtenidos
		return {
			total,
			promedio,
			young,
			old,
		};
	}
}

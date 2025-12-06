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
		const data = this.getAllUsers();

		return data.find((user) => user.id === id);
	}

	// crear un usuario
	static addUser(newUser: User): User {
		const data = this.getAllUsers();

		const newID = data.length + 1;

		const user = { ...newUser, id: newID };
		data.push(user);

		this.save(data);

		return user;
	}

	// crear varios usuarios
	static addUsers(newUsers: User[]): User[] {
		const data = this.getAllUsers();
		const usersAdded: User[] = []; // Array auxiliar para responder luego

		newUsers.forEach((user) => {
			const newID = data.length + 1;

			const newUser = { ...user, id: newID };

			// Agregamos al array principal (en memoria)
			data.push(newUser);

			// agregar al array auxiliar para responder
			usersAdded.push(newUser);
		});

		this.save(data); // contiene viejos y nuevos usuarios

		return usersAdded;
	}

	static updateUser(id: number, updateUser: Partial<User>): User | null {
		const data = this.getAllUsers();
		const index = data.findIndex((user: User) => user.id === id);

		if (index === -1) return null;

		const currentUser = data[index];
		const mergedUser = { ...currentUser, ...updateUser };

		data[index] = mergedUser;

		this.save(data);

		return mergedUser;
	}

	static deleteUser(id: number): Boolean {
		const data = this.getAllUsers();

		const index = data.findIndex((user: User) => user.id === id);

		if (index === -1) return false;

		data.splice(index, 1);

		this.save(data);

		return true;
	}

	static filterByName(query: string): User[] {
		const data = this.getAllUsers();

		const results = data.filter((user) =>
			user.name.toLowerCase().includes(query.toLowerCase())
		);

		return results;
	}

	static countByDomain(domain: string): number {
		const data = this.getAllUsers();

		const results = data.filter((user) => user.email.endsWith(domain));

		return results.length;
	}

	static getAllSorted(order: string): User[] {
		const data = this.getAllUsers();

		if (order === 'desc') {
			// Orden descendente (Z-A)
			return [...data].sort((a: User, b: User) =>
				b.name.localeCompare(a.name)
			);
		}

		// Por defecto o si es 'asc' (A-Z)
		return [...data].sort((a: User, b: User) =>
			a.name.localeCompare(b.name)
		);
	}

	static filterByAgeRange(min: number, max: number): User[] {
		const data = this.getAllUsers();

		return data.filter((user) => user.age >= min && user.age <= max);
	}

	static getStats(): Stats {
		const data = this.getAllUsers();

		// si no hay nada en la base de datos
		if (data.length === 0) {
			return {
				total: 0,
				promedio: 0,
				young: null,
				old: null,
			} as unknown as Stats;
		}

		const total = data.length;

		let suma = 0;

		data.forEach((user) => (suma += user.age));

		const promedio = suma / total;

		const order = [...data].sort((a: User, b: User) => a.age - b.age);
		const young = order[0];
		const old = order[order.length - 1];

		return {
			total,
			promedio,
			young,
			old,
		};
	}
}

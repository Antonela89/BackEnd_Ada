// se emplea este servicio para trabajar con las peticiones a la api externa
// no se mezcla la logica de las peticiones locales (models) con las externas 

// guardar la url de la api a consultar 
const url = 'https://jsonplaceholder.typicode.com/users';

// función asincrona para obtener todos los usuarios de la api externa 
export const getAllExternalUsers = async () => {
	// empleo de bloque try catch para manejo de errores
	try {
		// se espera la respuesta de la api
		const response = await fetch(url);
		// verificar si la respuesta fue exitosa
		if (!response.ok) {
			throw new Error(`Error HTTP: ${response.status}`);
		}

		// respuesta -> resultado de la petición formateada a json
		return await response.json();
		// manejo de error
	} catch (error) {
		console.error(`Ocurrió un error consultando la api externa, ${error}`);
		throw error;
	}
};

// funcion asincrona que obtiene un usuario externo por nombre
export const getExternalUserByName = async (name: string) => {
	// obtener todos los usuarios de la api externa
	// se usa la función anterior -> principio DRY
	const allUser = await getAllExternalUsers();

	// se limpia el query params (nombre)
	// quita de espacios y pasar todo a minusculas
	const nameClean = name.trim().toLowerCase();

	// buscar la coincidencia exacta
	const user = allUser.find((u: any) => {
		// tambien se tiene que pasar a minusculas el nombre de los usuarios obtenidos
        const userNameClean = u.name.toLowerCase();
        return userNameClean === nameClean;
    });

	// respuesta: usuario encontrado
	return user;
};

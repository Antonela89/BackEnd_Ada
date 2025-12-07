const url = 'https://jsonplaceholder.typicode.com/users';

export const getAllExternalUsers = async () => {
	try {
		const response = await fetch(url);
		// verificar si la respuesta fue exitosa
		if (!response.ok) {
			throw new Error(`Error HTTP: ${response.status}`);
		}

		return await response.json();
	} catch (error) {
		console.error(`Ocurrió un error consultando la api externa, ${error}`);
		throw error;
	}
};

export const getExternalUserByName = async (name: string) => {
	const allUser = await getAllExternalUsers();

	const nameClean = name.trim().toLowerCase();

	const user = allUser.find((u: any) => {
        const userNameClean = u.name.toLowerCase();
        return userNameClean === nameClean;
    });

	return user;
};

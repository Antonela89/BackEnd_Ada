// definir una función asincrona
async function fetchCharacter(id) {
    try {
        // valdiación de id
        if (!id) {
            throw new Error(`No ingreso un ID.`);
        }

        // solicitud a la api
        const response = await fetch(`https://swapi.dev/api/people/${id}/`);

        // verificacion de respuesta
        if (!response.ok) {
            throw new Error('Personaje no encontrado', response.status);
        }

        // transformar a JSON
        const character = await response.json();

        // imprimir respuesta
        console.log('Información del personaje: ', character);
        
        
    } catch (error) {
        console.error(`Error: ${error.message}`)
    }
}


fetchCharacter(4
);
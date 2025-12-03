// ### **Ejercicio 3: Obtener Información de un País por Nombre**
// **Descripción:**
// 1.  Crea un archivo `getCountry.js`.
// 2.  Escribe una función que reciba el nombre de un país como parámetro, realice una solicitud a la API de REST Countries, y devuelva el nombre, capital y región del país.
// 3.  Muestra estos datos en la consola.

// **Pistas:**
// *   La URL para buscar un país es `https://restcountries.com/v3.1/name/{name}`.
// *   La respuesta contiene un arreglo; accede al primer objeto con `[0]` para extraer la información.

async function consultarPais(countryName) {
	try {
		const result = await fetch(
			`https://restcountries.com/v3.1/name/${countryName}`
		);

		if (!result.ok) throw new Error('País no encontrado');

		const data = await result.json();

		const country = data[0];

		const {
            // desestructuración anidada
			name: { common },
			capital,
			region,
		} = country;

		console.log(`País: ${common}\nCapital: ${capital}\nRegión: ${region}`);
	} catch (error) {
		console.error(`Error: ${error.message}`);
	}
}

consultarPais('argentina');
consultarPais('peru');


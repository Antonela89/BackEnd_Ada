// ### **Ejercicio 1: Consultar Información de una API Pública**
// **Descripción:**
// 1.  Crea un archivo `index.js`.
// 2.  Usando el método `fetch` en Node.js, realiza una solicitud a la API de Rick and Morty.
// 3.  Extrae el nombre del primer personaje de la respuesta y muéstralo en la consola.

// **Pistas:**
// *   Usa `fetch(url)` para hacer la solicitud y `.then(response => response.json())` para procesar el JSON.
// *   Accede a `results[0].name` para obtener el nombre del primer personaje.

// **Dirección de API:** `https://rickandmortyapi.com/api/character/`

const url = 'https://rickandmortyapi.com/api/character/'

async function consultarApi() {
    try {
        const characters = await fetch(url).then(response => response.json());
        console.log(characters.results[0].name);
    } catch(err) {
        console.error('Error: ', err.message)
    }
}

consultarApi();
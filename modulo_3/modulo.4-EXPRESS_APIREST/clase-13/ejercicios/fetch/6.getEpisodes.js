// #### **Ejercicio 6: Lista de Episodios de una Serie**
// **Descripción:**
// 1.  Crea un archivo `getEpisodes.js`.
// 2.  Realiza una solicitud a la API de TVMaze para obtener la lista de episodios de una serie específica (puedes usar el nombre “Friends” como ejemplo).
// 3.  Muestra en la consola los nombres de los episodios y sus números de temporada.

// **Pistas:**
// *   La URL para obtener episodios es `https://api.tvmaze.com/singlesearch/shows?q=nombre_de_la_serie&embed=episodes`.
// *   Los episodios están dentro de `_embedded.episodes`.

async function  consultarEpisodios(serie) {
    try {
        const result = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${serie}&embed=episodes`);

        if (!result.ok) {
            throw new Error(`No se encontraron episodios para "${serie}"`);
        }

        const data = await result.json();

        const {_embedded: { episodes }} = data;

        console.log(`Lista de episodios de ${serie}:`);
        
        episodes.forEach(e => {
            const { season, number, name } = e
            console.log(`Temporada: ${season} - Episodio: ${number} - ${name}`);
        });
        
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}


consultarEpisodios('Game of Thrones')
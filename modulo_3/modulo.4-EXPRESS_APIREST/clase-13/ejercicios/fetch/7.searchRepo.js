// #### **Ejercicio 7: Buscar GitHub Repositorios por Término**
// **Descripción:**
// 1.  Crea un archivo `searchRepo.js`.
// 2.  Escribe una función que reciba un término de búsqueda y realice una solicitud a la API de GitHub para obtener repositorios que coincidan con el término.
// 3.  Muestra en la consola el nombre del repositorio y la descripción de los primeros cinco resultados.

// **Pistas:**
// *   La URL de búsqueda es `https://api.github.com/search/repositories?q={query}&per_page=5`.

async function buscarRepo(termino) {
    try {
        const results = await fetch(`https://api.github.com/search/repositories?q=${termino}&per_page=5`);

        if (!results.ok) {
            throw new Error("Repositorios no encontrados.");
        }

        const data = await results.json();

        const { items } = data;

        console.log(`---Repos coincidentes con "${termino}":---\n`);
        
        items.forEach(i => { 
            const { full_name, url,  description } = i;

            console.log(`Nombre Repo: ${full_name}\nURL: ${url}\nDescripción: ${description}\n`);
        });
        
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}


buscarRepo('api');
buscarRepo('task');
// ### **Ejercicio 5: Obtener Información de un Usuario por ID**
// **Descripción:**
// 1.  Crea un archivo `getUser.js`.
// 2.  Usando `fetch`, realiza una solicitud a la API de JSONPlaceholder para obtener la información de un usuario específico.
// 3.  Extrae y muestra en la consola el nombre, nombre de usuario y correo electrónico del usuario.

// **Pistas:**
// *   La URL para buscar un usuario es `https://jsonplaceholder.typicode.com/users/{id}`.

async function getUser(id) {
    try {
        const resultados = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

        if (!resultados.ok) {
            throw new Error("Usuario no encontrado.");
        }

        const data = await resultados.json();

        const {name, username, email} = data;

        console.log(`Nombre: ${name}\nNombre Usuario: ${username}\nEmail: ${email}`);
        
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

getUser(1);
# Actividades Clase Numero 13

¡Bienvenidas, chicas! 👩‍💻✨

En esta serie de ejercicios vamos a poner en práctica todo lo que hemos aprendido sobre **fetch** y el **consumo de datos desde una API**.

Estos ejercicios están diseñados para que, paso a paso, puedan practicar cómo manipular los datos recibidos desde APIs públicas, usando solo Node.js y sin necesidad de configurar un frontend. Así fortalecerán su comprensión de cómo el backend se comunica con otras aplicaciones en la web.

¡Lo que harán en esta práctica es un desafío! Ya que deberán aplicar toda su lógica para resolver estos ejercicios. Si hay cosas que no entienden, investiguen, la próxima clase todas las dudas serán aclaradas.

¡Manos a la obra y diviértanse programando! 👋💻

---

## Actividades:

### **Ejercicio 1: Consultar Información de una API Pública**
**Descripción:**
1.  Crea un archivo `index.js`.
2.  Usando el método `fetch` en Node.js, realiza una solicitud a la API de Rick and Morty.
3.  Extrae el nombre del primer personaje de la respuesta y muéstralo en la consola.

**Pistas:**
*   Usa `fetch(url)` para hacer la solicitud y `.then(response => response.json())` para procesar el JSON.
*   Accede a `results[0].name` para obtener el nombre del primer personaje.

**Dirección de API:** `https://rickandmortyapi.com/api/character/`

### **Ejercicio 2: Obtener Información de un Pokémon Específico**
**Descripción:**
1.  Crea un archivo `getPokemon.js`.
2.  Usando `fetch`, realiza una solicitud a la API de PokeAPI para obtener información sobre el Pokémon "Bulbasaur".
3.  Extrae el nombre y los tipos de Bulbasaur y muestra estos datos en la consola.

**Pistas:**
*   La URL para Bulbasaur es `https://pokeapi.co/api/v2/pokemon/1`.
*   Los tipos de Pokémon se encuentran en `types` dentro de la respuesta.

### **Ejercicio 3: Obtener Información de un País por Nombre**
**Descripción:**
1.  Crea un archivo `getCountry.js`.
2.  Escribe una función que reciba el nombre de un país como parámetro, realice una solicitud a la API de REST Countries, y devuelva el nombre, capital y región del país.
3.  Muestra estos datos en la consola.

**Pistas:**
*   La URL para buscar un país es `https://restcountries.com/v3.1/name/{name}`.
*   La respuesta contiene un arreglo; accede al primer objeto con `[0]` para extraer la información.

### **Ejercicio 4: Buscar Canción por Título**
**Descripción:**
1.  Crea un archivo `searchSong.js`.
2.  Escribe una función que reciba el título de una canción y realice una solicitud a la API de iTunes para buscar la canción.
3.  Muestra en la consola el nombre de la canción y el artista.

**Pistas:**
*   La URL de búsqueda es `https://itunes.apple.com/search?term={song_title}&limit=1`.
*   La información de la canción se encuentra en el primer resultado del arreglo de resultados.

### **Ejercicio 5: Obtener Información de un Usuario por ID**
**Descripción:**
1.  Crea un archivo `getUser.js`.
2.  Usando `fetch`, realiza una solicitud a la API de JSONPlaceholder para obtener la información de un usuario específico.
3.  Extrae y muestra en la consola el nombre, nombre de usuario y correo electrónico del usuario.

**Pistas:**
*   La URL para buscar un usuario es `https://jsonplaceholder.typicode.com/users/{id}`.

---

### **Ejercicios extra (opcionales)**

#### **Ejercicio 6: Lista de Episodios de una Serie**
**Descripción:**
1.  Crea un archivo `getEpisodes.js`.
2.  Realiza una solicitud a la API de TVMaze para obtener la lista de episodios de una serie específica (puedes usar el nombre “Friends” como ejemplo).
3.  Muestra en la consola los nombres de los episodios y sus números de temporada.

**Pistas:**
*   La URL para obtener episodios es `https://api.tvmaze.com/singlesearch/shows?q=nombre_de_la_serie&embed=episodes`.
*   Los episodios están dentro de `_embedded.episodes`.

#### **Ejercicio 7: Buscar GitHub Repositorios por Término**
**Descripción:**
1.  Crea un archivo `searchRepo.js`.
2.  Escribe una función que reciba un término de búsqueda y realice una solicitud a la API de GitHub para obtener repositorios que coincidan con el término.
3.  Muestra en la consola el nombre del repositorio y la descripción de los primeros cinco resultados.

**Pistas:**
*   La URL de búsqueda es `https://api.github.com/search/repositories?q={query}&per_page=5`.
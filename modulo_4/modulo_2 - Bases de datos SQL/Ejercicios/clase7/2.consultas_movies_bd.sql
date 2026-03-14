-- Consultas: Join
-- 1. Utilizando la base de datos de movies, queremos conocer, por un lado, los títulos y el nombre del género de todas las series de la base de datos.
SELECT series.title, genres.name FROM series INNER JOIN genres ON series.genre_id = genres.id;

-- 2. Por otro, necesitamos listar los títulos de los episodios junto con el nombre y apellido de los actores que trabajan en cada uno de ellos.
SELECT episodes.title, actors.first_name, actors.last_name FROM episodes 
INNER JOIN actor_episode ON episodes.id = actor_episode.episode_id
INNER JOIN actors ON actor_episode.actor_id = actors.id;

-- 3. Para nuestro próximo desafío, necesitamos obtener a todos los actores o actrices (mostrar nombre y apellido) que han trabajado en cualquier película de la saga de La Guerra de las galaxias.
SELECT DISTINCT actors.first_name, actors.last_name FROM actors
INNER JOIN actor_movie ON actors.id = actor_movie.actor_id
INNER JOIN movies ON actor_movie.movie_id = movies.id
WHERE movies.title LIKE '%La Guerra de las galaxias%';

-- 4. Crear un listado a partir de la tabla de películas, mostrar un reporte de la cantidad de películas por nombre de género
SELECT genres.name, COUNT(movies.id) as cantidad_peliculas
FROM genres
INNER JOIN movies ON genres.id = movies.genre_id
GROUP BY genres.name;

-- AYUDA MEMORIA
-- JOIN:
-- FROM tabla_A: La tabla principal.
-- INNER JOIN tabla_B: La tabla con la que se hace conexión.
-- ON tabla_A.id_comun = tabla_B.id_comun: La "clave foránea" que abre la puerta entre ambas.
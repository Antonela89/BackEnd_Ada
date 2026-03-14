-- Consultas
-- SELECT 
-- Mostrar todos los registros de la tabla de movies. 
SELECT * FROM movies;
-- Mostrar el nombre, apellido y rating de todos los actores. 
SELECT first_name, last_name, rating FROM actors;
-- Mostrar el título de todas las series. 
SELECT title FROM series;

-- WHERE Y ORDER BY 
-- Mostrar el nombre y apellido de los actores cuyo rating sea mayor a 7,5. 
SELECT first_name, last_name FROM actors WHERE rating > 7.5;
-- Mostrar el título de las películas, el rating y los premios de las películas con rating mayor a 7,5 y con más de dos premios. 
SELECT title, rating, awards FROM movies WHERE rating > 7.5 AND awards > 2;	
-- Mostrar el título de las películas y el rating ordenadas por rating en forma ascendente.
SELECT title, rating  FROM movies ORDER BY rating asc;

-- BETWEEN y LIKE 
-- Mostrar el título y rating de todas las películas cuyo título incluya ‘Toy Story’. 
SELECT title, rating FROM movies WHERE title LIKE '%Toy Story%';
-- Mostrar a todos los actores cuyos nombres empiecen con Sam. 
SELECT * FROM actors WHERE first_name LIKE 'Sam%';
-- Mostrar el título de las películas que salieron entre el ‘2004-01-01’ y ‘2008-12-31’. 
SELECT title FROM movies WHERE release_date BETWEEN	'2004-01-01' AND '2008-12-31';

-- ALIAS, LIMIT Y OFFSET
-- Mostrar el título de todas las series y usar alias para que el nombre del campo este en español.
SELECT title AS título FROM series;
-- Traer el título de las películas con el rating mayor a 3, con más de 1 premio y con fecha de lanzamiento entre el año ‘1988-01-01’ al ‘2009-12-31’. Ordenar los resultados por rating descendentemente.
SELECT title FROM movies WHERE rating > 3 AND awards > 1 AND release_date BETWEEN '1988-01-01' AND '2009-12-31' ORDER BY rating desc;
-- Traer el top 3 a partir del registro 10 de la consulta anterior.
SELECT title FROM movies WHERE rating > 3 AND awards > 1 AND release_date BETWEEN '1988-01-01' AND '2009-12-31' ORDER BY rating desc LIMIT 3 OFFSET 10;
-- Cuáles son los 3 peores episodios teniendo en cuenta su rating?
SELECT * FROM episodes ORDER BY rating ASC LIMIT 3;
-- Obtener el listado de todos los actores. Quitar las columnas de fechas y película favorita, además traducir los nombres de las columnas
SELECT first_name as Nombre, last_name as Apellido, rating as Clasificación FROM actors; 




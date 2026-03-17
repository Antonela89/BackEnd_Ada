-- Realizar los siguientes informes
-- 1. Mostrar la cantidad de canciones que pertenecen a ambos géneros pop y rock cuyo nombre contiene la letra “m”.
SELECT COUNT(*) AS CantidadCanciones
-- Subconsulta para obtener las canciones que pertenecen a ambos generos pop y rock cuyo nombre contiene la letra “m”.
FROM (
    SELECT c.id_cancion
    FROM cancion c
    INNER JOIN cancion_genero cg ON c.id_cancion = cg.id_cancion
    INNER JOIN genero g  ON cg.id_genero = g.id_genero
    -- Filtro por titulo
    WHERE c.titulo LIKE '%m%'
    -- Filtro por genero
    AND g.nombre IN ('Pop', 'Rock')
    -- Agrupar por cancion
    GROUP BY c.id_cancion
    -- Filtrar por canciones que pertenecen a ambos generos
    HAVING COUNT(DISTINCT g.nombre) = 2
) AS canciones_con_ambos_generos;


-- 2. Listar todas las canciones que pertenezcan a más de una playlist. Incluir en el listado el nombre de la canción, el código y a cuántas playlists pertenecen.
SELECT 
    c.titulo, 
    c.id_cancion, 
    COUNT(pc.id_playlist) AS CantidadPlaylists
FROM cancion c
INNER JOIN playlist_cancion pc ON c.id_cancion = pc.id_cancion
GROUP BY c.id_cancion, c.titulo
HAVING COUNT(pc.id_playlist) > 1;

-- 3. Generar un reporte con el nombre del artista y el nombre de la canción que no pertenecen a ninguna lista, ordenados alfabéticamente por el nombre del artista.
SELECT 
    a.nombre AS nombre_artista, 
    c.titulo AS nombre_cancion
FROM artista a
INNER JOIN album al ON a.id_artista = al.id_artista
INNER JOIN cancion c ON al.id_album = c.id_album
LEFT JOIN playlist_cancion pc ON c.id_cancion = pc.id_cancion
WHERE pc.id_cancion IS NULL
ORDER BY a.nombre ASC;

-- 4. Modificar el país de todos los usuarios con el código postal “7600” a “Argentina”.
SET SQL_SAFE_UPDATES = 0; -- Desactivar el modo seguro

UPDATE usuario
SET pais = 'Argentina'
WHERE codigo_postal = '7600';

SET SQL_SAFE_UPDATES = 1; -- Activar el modo seguro

-- 5. Listar todos los álbumes que tengan alguna canción que posea más de un género.
SELECT 
    al.titulo AS nombre_album
FROM album al
INNER JOIN cancion c ON al.id_album = c.id_album
WHERE c.id_cancion IN (
    -- Buscar solo canciones con más de un género
    SELECT id_cancion
    FROM cancion_genero
    GROUP BY id_cancion
    HAVING COUNT(id_genero) > 1
);

-- 6. Crear un índice agrupado para las canciones cuyo identificador sea el ID.
CREATE INDEX IX_cancion_id_cancion ON cancion(id_cancion);
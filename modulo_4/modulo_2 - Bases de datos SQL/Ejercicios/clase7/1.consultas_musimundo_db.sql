-- Consultas SELECT y GROUP BY
-- Realizar los siguientes informes:
-- 1. Listar las canciones cuya duración sea mayor a 2 minutos.
SELECT * FROM canciones WHERE milisegundos > 120000;

-- 2. Listar las canciones cuyo nombre comience con una vocal.
SELECT * FROM canciones 
WHERE nombre LIKE 'A%' 
   OR nombre LIKE 'E%' 
   OR nombre LIKE 'I%' 
   OR nombre LIKE 'O%' 
   OR nombre LIKE 'U%';
   
-- 3. Listar las canciones ordenadas por compositor en forma descendente.
SELECT * FROM canciones ORDER BY compositor DESC;

-- Luego, por nombre en forma ascendente. Incluir únicamente aquellas canciones que tengan compositor.
SELECT * FROM canciones WHERE compositor IS NOT NULL ORDER BY nombre ASC;

-- 4. a) Listar la cantidad de canciones de cada compositor.
SELECT compositor, COUNT(*) AS total_canciones FROM canciones GROUP BY compositor;

--    b) Modificar la consulta para incluir únicamente los compositores que tengan más de 10 canciones.
SELECT compositor, COUNT(*) AS total_canciones FROM canciones GROUP BY compositor HAVING total_canciones > 10;

-- 5. a) Listar el total facturado agrupado por ciudad.
SELECT ciudad_de_facturacion, SUM(total) AS facturacion_total FROM facturas GROUP BY ciudad_de_facturacion;

--    b) Modificar el listado del punto (a) mostrando únicamente las ciudades de Canadá.
SELECT ciudad_de_facturacion, SUM(total) AS facturacion_total
FROM facturas
WHERE pais_de_facturacion = 'Canada'
GROUP BY ciudad_de_facturacion;

--    c) Modificar el listado del punto (a) mostrando únicamente las ciudades con una facturación mayor a 38.
SELECT ciudad_de_facturacion, SUM(total) AS facturacion_total
FROM facturas
GROUP BY ciudad_de_facturacion
HAVING SUM(total) > 38;

--    d) Modificar el listado del punto (a) agrupando la facturación por país, luego por ciudad.
SELECT pais_de_facturacion, ciudad_de_facturacion, SUM(total) AS facturacion_total
FROM facturas
GROUP BY pais_de_facturacion, ciudad_de_facturacion;

-- 6. a) Listar la duración mínima, máxima y promedio de las canciones.
SELECT 
       MIN(milisegundos) AS minima, 
       MAX(milisegundos) AS maxima, 
       AVG(milisegundos) AS promedio
FROM canciones;

--    b) Modificar el punto (a) mostrando la información agrupada por género.
SELECT id_genero, 
       MIN(milisegundos) AS minima, 
       MAX(milisegundos) AS maxima, 
       AVG(milisegundos) AS promedio
FROM canciones
GROUP BY id_genero;

-- AYUDA MEMORIA
-- ¿Cuándo usar qué? 
-- GROUP BY: cuando el enunciado diga "por cada..." (por cada ciudad, por cada género, por cada cliente).
-- HAVING: para filtrar los resultados de una suma, un promedio o un conteo. Si el filtro es sobre una columna normal (como "país = Canada"), usar WHERE.
-- CASE: para crear una columna "etiqueta". Ejemplo: Si la canción dura más de 5 min poner 'Larga', si no 'Corta'.



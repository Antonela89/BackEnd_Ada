-- Vistas - Parte I
-- Clientes
-- 1. Crear una vista con los siguientes datos de los clientes: ID, contacto, y el Fax. En caso de que no tenga Fax, colocar el teléfono, pero aclarándolo. Por ejemplo: “TEL: (01) 123-4567”.
CREATE OR REPLACE VIEW vista_clientes AS
SELECT 
    ClienteID,
    Contacto,
    CASE 
        WHEN Fax IS NULL OR Fax = '' THEN CONCAT('TEL: ', Telefono)
        ELSE Fax
    END AS FaxOtelefono
FROM clientes;

SELECT * FROM vista_clientes;

-- 2. Se necesita listar los números de teléfono de los clientes que no tengan fax. Hacerlo de dos formas distintas:
-- a. Consultando la tabla de clientes.
SELECT Telefono
FROM clientes
WHERE Fax IS NULL OR Fax = '';

-- b. Consultando la vista de clientes.
SELECT FaxOtelefono
FROM vista_clientes
WHERE FaxOtelefono LIKE 'TEL: %';

-- Proveedores
-- 1. Crear una vista con los siguientes datos de los proveedores: ID, contacto, compañía y dirección. Para la dirección tomar la dirección, ciudad, código postal y país.
CREATE OR REPLACE VIEW vista_proveedores AS
SELECT 
    ProveedorID,
    Contacto,
    Compania,
    CONCAT(Direccion, ', ', Ciudad, ', ', CodigoPostal, ', ', Pais) AS DireccionCompleta
FROM proveedores;

SELECT * FROM vista_proveedores;

-- 2. Listar los proveedores que vivan en la calle Americanas en Brasil. Hacerlo de dos formas distintas:
-- a. Consultando la tabla de proveedores.
SELECT * FROM proveedores
WHERE Direccion LIKE '%Americanas%' AND Pais = 'Brazil';

-- b. Consultando la vista de proveedores.
SELECT * FROM vista_proveedores
WHERE DireccionCompleta LIKE '%Americanas%' AND DireccionCompleta LIKE '%Brazil%';

-- Vistas - Parte II
-- 1. Crear una vista de productos que se usará para control de stock. Incluir el ID y nombre del producto, el precio unitario redondeado sin decimales, las unidades en stock y las unidades pedidas. Incluir además una nueva columna PRIORIDAD con los siguientes valores:
-- ■ BAJA: si las unidades pedidas son cero.
-- ■ MEDIA: si las unidades pedidas son menores que las unidades en stock.
-- ■ URGENTE: si las unidades pedidas no duplican el número de unidades.
-- ■ SUPER URGENTE: si las unidades pedidas duplican el número de unidades en caso contrario.
CREATE OR REPLACE VIEW vista_stock_productos AS
SELECT 
    ProductoID,
    ProductoNombre,
    ROUND(PrecioUnitario, 0) AS PrecioUnitario,
    UnidadesStock,
    UnidadesPedidas,
    CASE 
        WHEN UnidadesPedidas = 0 THEN 'BAJA'
        WHEN UnidadesPedidas < UnidadesStock THEN 'MEDIA'
        WHEN UnidadesPedidas <= (UnidadesStock * 2) THEN 'URGENTE'
        ELSE 'SUPER URGENTE'
    END AS PRIORIDAD
FROM productos;

SELECT * FROM vista_stock_productos;

-- 2. Se necesita un reporte de productos para identificar problemas de stock. Para cada prioridad indicar cuántos productos hay y su precio promedio. No incluir las prioridades para las que haya menos de 5 productos.
SELECT 
    PRIORIDAD,
    COUNT(*) AS cantidad_productos,
    AVG(PrecioUnitario) AS precio_promedio
FROM vista_stock_productos
GROUP BY PRIORIDAD
HAVING COUNT(*) >= 5;


use emarket
-- Reportes parte I 
-- Repasamos INNER JOIN
-- Realizar una consulta de la facturación de e-market. Incluir la siguiente información:
-- ● Id de la factura
-- ● fecha de la factura
-- ● nombre de la empresa de correo
-- ● nombre del cliente
-- ● categoría del producto vendido
-- ● nombre del producto
-- ● precio unitario
-- ● cantidad

SELECT 
    f.FacturaID,
    f.FechaFactura,
    cs.Compania AS EmpresaCorreo,
    c.Contacto AS NombreCliente,
    cat.CategoriaNombre,
    p.ProductoNombre,
    fd.PrecioUnitario,
    fd.Cantidad
FROM facturas f
INNER JOIN correos cs ON f.EnvioVia = cs.CorreoID
INNER JOIN clientes c ON f.ClienteID = c.ClienteID
INNER JOIN facturadetalle fd ON f.FacturaID = fd.FacturaID
INNER JOIN productos p ON fd.ProductoID = p.ProductoID
INNER JOIN categorias cat ON p.CategoriaID = cat.CategoriaID;

-- Reportes parte II - INNER, LEFT Y RIGHT JOIN
-- 1. Listar todas las categorías junto con información de sus productos. Incluir todas las categorías aunque no tengan productos.

SELECT 
    cat.CategoriaNombre,
    p.ProductoNombre,
    p.PrecioUnitario,
    p.CantidadPorUnidad
FROM categorias cat
LEFT JOIN productos p ON cat.CategoriaID = p.CategoriaID;

-- 2. Listar la información de contacto de los clientes que no hayan comprado nunca en emarket.

SELECT 
    c.Contacto AS NombreCliente,
    c.Compania,
    c.Ciudad,
    c.Pais
FROM clientes c
LEFT JOIN facturas f ON c.ClienteID = f.ClienteID
WHERE f.FacturaID IS NULL;

-- 3. Realizar un listado de productos. Para cada uno indicar su nombre, categoría, y la información de contacto de su proveedor. Tener en cuenta que puede haber productos para los cuales no se indicó quién es el proveedor.

SELECT 
    p.ProductoNombre,
    cat.CategoriaNombre,
    prov.Contacto AS NombreProveedor,
    prov.Compania AS EmpresaProveedor,
    prov.Ciudad,
    prov.Pais
FROM productos p
INNER JOIN categorias cat ON p.CategoriaID = cat.CategoriaID
LEFT JOIN proveedores prov ON p.ProveedorID = prov.ProveedorID;

-- 4. Para cada categoría listar el promedio del precio unitario de sus productos.

SELECT 
    cat.CategoriaNombre,
    AVG(p.PrecioUnitario) AS PrecioPromedio
FROM categorias cat
LEFT JOIN productos p ON cat.CategoriaID = p.CategoriaID
GROUP BY cat.CategoriaNombre;

-- 5. Para cada cliente, indicar la última factura de compra. Incluir a los clientes que nunca hayan comprado en e-market.

SELECT 
    c.Contacto AS NombreCliente,
    c.Compania,
    MAX(f.FechaFactura) AS UltimaFactura
FROM clientes c
LEFT JOIN facturas f ON c.ClienteID = f.ClienteID
GROUP BY c.ClienteID, c.Contacto, c.Compania;

-- 6. Todas las facturas tienen una empresa de correo asociada (enviovia). Generar un listado con todas las empresas de correo, y la cantidad de facturas correspondientes. Realizar la consulta utilizando RIGHT JOIN

SELECT 
    cs.Compania AS EmpresaCorreo,
    COUNT(f.FacturaID) AS CantidadFacturas
FROM facturas f
RIGHT JOIN correos cs ON f.EnvioVia = cs.CorreoID
GROUP BY cs.Compania;
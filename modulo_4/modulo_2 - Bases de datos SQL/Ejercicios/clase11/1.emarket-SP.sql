-- Emarket
-- Consultas
-- 1) Cálculo de edad
-- a) Crear un SP que muestre apellidos, nombres y edad de cada empleado, debe calcular la edad de los empleados a partir de la fecha de nacimiento y que tengan entre n y n años de edad.

DROP PROCEDURE IF EXISTS sp_calcular_edad; 

DELIMITER $$
CREATE PROCEDURE sp_calcular_edad(IN edad_min INT, IN edad_max INT)
BEGIN
    SELECT 
        Apellido, 
        Nombre, 
        TIMESTAMPDIFF(YEAR, fechaNacimiento, CURDATE()) AS edad
    FROM empleados
    WHERE TIMESTAMPDIFF(YEAR, fechaNacimiento, CURDATE()) BETWEEN edad_min AND edad_max;
END $$
DELIMITER ;

-- b) Ejecutar el SP indicando un rango de edad entre 50 y 60 años de edad.

CALL sp_calcular_edad(50, 60);

-- 2) Actualización de productos
-- a) Crear un SP que reciba un porcentaje y un nombre de categoría y actualice los productos pertenecientes a esa categoría, incrementando las unidades pedidas según el porcentaje indicado. Por ejemplo: si un producto de la categoría Seafood tiene 30 unidades pedidas, al invocar el SP con categoría Seafood y porcentaje 10%, el SP actualizará el valor de unidades pedidas con el nuevo valor 33.

DROP PROCEDURE IF EXISTS sp_actualizar_productos;

DELIMITER $$
CREATE PROCEDURE sp_actualizar_productos(IN porcentaje INT, IN categoria VARCHAR(50))
BEGIN
    UPDATE productos
    SET UnidadesPedidas = UnidadesPedidas * (1 + porcentaje / 100)
    WHERE CategoriaID = (SELECT CategoriaID FROM categorias WHERE CategoriaNombre = categoria);
END $$
DELIMITER ;

-- b) Listar los productos de la categoría Beverages para ver cuántas unidades pedidas hay de cada uno de ellos.

SELECT * FROM productos WHERE CategoriaID = (SELECT CategoriaID FROM categorias WHERE CategoriaNombre = 'Beverages');

-- c) Invocar al SP con los valores Beverages como categoría y 15 como porcentaje.

CALL sp_actualizar_productos(15, 'Beverages');

-- d) Volver a listar los productos como en (a), y validar los resultados.

SELECT * FROM productos WHERE CategoriaID = (SELECT CategoriaID FROM categorias WHERE CategoriaNombre = 'Beverages');

-- 3) Actualización de empleados
-- a) Crear un SP que cree una tabla con los nombres, apellidos y teléfono de contacto de todos los empleados que hayan sido contratados con fecha anterior a una fecha dada.

DROP PROCEDURE IF EXISTS sp_empleados_contratados;

DELIMITER $$
CREATE PROCEDURE sp_empleados_contratados(IN fecha_limite DATE)
BEGIN
    DROP TABLE IF EXISTS empleados_contratados;
    CREATE TABLE empleados_contratados AS
    SELECT Apellido, Nombre, Telefono
    FROM empleados
    WHERE fechaContratacion < fecha_limite;
    SELECT * FROM empleados_contratados;
END $$
DELIMITER ;

-- b) Ejecutar el SP para generar una tabla de empleados con fecha de contratación anterior a 01/01/1994.

CALL sp_empleados_contratados('1994-01-01');

-- c) Consultar la tabla generada y validar los resultados.

SELECT * FROM empleados_contratados;
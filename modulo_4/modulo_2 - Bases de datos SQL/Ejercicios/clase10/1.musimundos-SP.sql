use musimundos;

-- SP: Clientes por País y Ciudad
-- Tabla: Clientes
-- 1. Crear un stored procedure que solicite como parámetros de entrada el nombre de un país y una ciudad, y que devuelva como resultado la información de contacto de todos los clientes de ese país y ciudad. En el caso que el parámetro de ciudad esté vacío, se debe devolver todos los clientes del país indicado.

DELIMITER $$
CREATE PROCEDURE sp_clientes_por_pais_ciudad(IN nombre_pais VARCHAR(255), IN nombre_ciudad VARCHAR(255))
BEGIN
    SELECT * FROM clientes WHERE pais = nombre_pais AND ciudad = nombre_ciudad;
    IF nombre_ciudad = '' THEN
        SELECT * FROM clientes WHERE pais = nombre_pais;
    END IF;
END $$

-- 2. Invocar el procedimiento para obtener la información de los clientes de Brasilia en Brazil.

CALL sp_clientes_por_pais_ciudad('Brazil', 'Brasilia');

-- 3. Invocar el procedimiento para obtener la información de todos los clientes de Brazil.

CALL sp_clientes_por_pais_ciudad('Brazil', '');

-- SP: Géneros musicales
-- Tabla: Generos
-- 1. Crear un stored procedure que reciba como parámetro un nombre de género musical y lo inserte en la tabla de géneros. Además, el stored procedure debe devolver el id de género que se insertó.
-- • TIP! Para calcular el nuevo id incluir la siguiente línea dentro del bloque de código del SP: SET nuevoid = (SELECT MAX(id) FROM generos) + 1;

DELIMITER $$
CREATE PROCEDURE sp_insertar_genero(IN nombre_genero VARCHAR(255))
BEGIN 
    DECLARE nuevoid INT;
    SET nuevoid = (SELECT MAX(id) FROM generos) + 1;
    INSERT INTO generos (id, nombre) VALUES (nuevoid, nombre_genero);
    SELECT nuevoid;
END $$

-- 2. Invocar el stored procedure creado para insertar el género Funk. ¿Qué id devolvió el SP ? Consultar la tabla de géneros para ver los cambios.

CALL sp_insertar_genero('Funk');
SELECT * FROM generos;

-- 3. Repetir el paso anterior insertando esta vez el género Tango.

CALL sp_insertar_genero('Tango');
SELECT * FROM generos;
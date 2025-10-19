### **Módulo Introductorio**

#### **Clase 1: Qué son las bases de datos**

*   **¿Qué son los datos?** Se introduce el concepto de los datos como el activo más valioso en la era digital ("el nuevo petróleo"), representando información cruda que, una vez procesada, se convierte en conocimiento.
*   **¿Qué son las bases de datos?** Son colecciones organizadas de datos, almacenadas electrónicamente, que permiten un acceso, gestión y actualización eficientes.
*   **DBMS (Sistemas Gestores de Bases de Datos):** Es el software que actúa como intermediario entre el usuario y la base de datos. Permite definir, crear, consultar, actualizar y administrar los datos. Ejemplos: MySQL, PostgreSQL, MongoDB.
*   **Bases de Datos Relacionales (SQL):** Almacenan datos en tablas estructuradas que se relacionan entre sí. Usan SQL (Lenguaje de Consulta Estructurado) para interactuar con los datos.
*   **Bases de Datos No Relacionales (NoSQL):** Ofrecen modelos de almacenamiento más flexibles que las tablas tradicionales (documentos, clave-valor, etc.). Son útiles para grandes volúmenes de datos no estructurados o semi-estructurados.

---

### **Módulo: Base de Datos SQL (Relacional)**

#### **Clase 2: Fundamentos de Bases de Datos Relacionales (MySQL)**

*   **Entidades y Atributos:**
    *   **Entidad:** Representa un objeto del mundo real sobre el que queremos guardar información (ej: "Cliente", "Producto"). Se convierte en una **tabla**.
    *   **Atributo:** Es una característica o propiedad de una entidad (ej: el "Nombre" del Cliente, el "Precio" del Producto). Se convierte en una **columna**.
*   **Tablas, Registros y Campos:**
    *   **Tablas:** Estructura principal que organiza los datos en filas y columnas.
    *   **Registros (Filas):** Cada fila en una tabla representa una instancia única de una entidad (ej: los datos del cliente Juan Pérez).
    *   **Campos (Columnas):** Cada columna representa un atributo específico para todas las filas de la tabla.
*   **Claves Primarias y Foráneas:** Son la base de las relaciones.
    *   **Clave Primaria (Primary Key):** Es una columna (o conjunto de columnas) que identifica de forma **única** a cada fila en una tabla. No puede haber valores duplicados ni nulos.
    *   **Clave Foránea (Foreign Key):** Es una columna en una tabla que se vincula a la clave primaria de otra tabla. Crea la relación entre ambas.

#### **Clase 3: Tipos de Datos en MySQL**

*   Para asegurar la integridad de los datos, cada columna en una tabla debe tener un tipo de dato específico.
    *   **Texto:** `CHAR` (longitud fija), `VARCHAR` (longitud variable, más común), `TEXT` (para textos largos).
    *   **Numérico:** `INT` (números enteros), `DECIMAL` (para valores exactos como dinero), `FLOAT` (números con decimales).
    *   **Fecha y Hora:** `DATE` (solo fecha), `TIME` (solo hora), `DATETIME` (fecha y hora), `TIMESTAMP` (fecha y hora, útil para registros de creación/actualización).
    *   **Booleano:** `BOOLEAN` o `TINYINT(1)` para almacenar valores verdadero/falso (1 o 0).

#### **Clase 4: Relaciones, Instalación de MySQL y descarga de BD**

*   **Tipos de Relaciones:**
    *   **Uno a Uno (1:1):** Cada registro de la Tabla A se relaciona con un único registro de la Tabla B (ej: `Usuario` y `PerfilDeUsuario`).
    *   **Uno a Muchos (1:N):** Un registro de la Tabla A se puede relacionar con muchos registros de la Tabla B (ej: un `Cliente` puede tener muchas `Facturas`).
    *   **Muchos a Muchos (N:M):** Muchos registros de la Tabla A se pueden relacionar con muchos de la Tabla B. Se implementa usando una tabla intermedia (ej: `Estudiantes` y `Cursos`, la tabla intermedia sería `Inscripciones`).
*   **Instalación de MySQL y Workbench:** Se guía al alumno en el proceso de instalar el motor de base de datos MySQL y la herramienta gráfica MySQL Workbench, que facilita la administración, el diseño y la consulta de las bases de datos.

#### **Clase 5: Queries**

*   **Queries (Consultas):** Son las instrucciones que enviamos a la base de datos para realizar una acción. Se dividen en varias categorías:
    *   **DDL (Lenguaje de Definición de Datos):** Para definir la estructura.
        *   `CREATE`: Crea objetos (tablas, bases de datos).
        *   `ALTER`: Modifica la estructura de una tabla (añadir/quitar columnas).
        *   `DROP`: Elimina objetos.
    *   **DML (Lenguaje de Manipulación de Datos):** Para gestionar los registros.
        *   `INSERT`: Añade nuevas filas a una tabla.
        *   `UPDATE`: Modifica filas existentes.
        *   `DELETE`: Elimina filas.
    *   **DQL (Lenguaje de Consulta de Datos):** Para obtener datos.
        *   `SELECT`: El comando principal para leer y recuperar datos.
        *   `WHERE`: Filtra los registros para obtener solo los que cumplen una condición.

#### **Clase 6: Queries continuación**

*   Se expande la capacidad de filtrar y ordenar datos:
    *   `ORDER BY`: Ordena los resultados de forma ascendente (`ASC`) o descendente (`DESC`).
    *   `BETWEEN`: Filtra un rango de valores (ej: fechas o números).
    *   `LIKE`: Busca un patrón específico en una columna de texto, usando comodines como `%` (representa cualquier secuencia de caracteres).
    *   `LIMIT` y `OFFSET`: Se usan para la **paginación**. `LIMIT` restringe el número de filas devueltas y `OFFSET` indica desde qué fila empezar.
    *   **Alias (`AS`):** Permite renombrar temporalmente una columna o tabla en una consulta para que sea más legible.
    *   **Funciones de Agregación:** Realizan un cálculo sobre un conjunto de filas y devuelven un único valor.
        *   `COUNT()`: Cuenta el número de filas.
        *   `SUM()`: Suma los valores de una columna.
        *   `AVG()`: Calcula el promedio.
        *   `MIN()` / `MAX()`: Obtienen el valor mínimo/máximo.
    *   `GROUP BY`: Agrupa filas que tienen el mismo valor en una columna para poder aplicar funciones de agregación a cada grupo.
    *   `HAVING`: Filtra los resultados de `GROUP BY` (mientras que `WHERE` filtra antes de agrupar).

#### **Clase 7: Queries Avanzadas**

*   **JOIN:** Es la operación fundamental para combinar filas de dos o más tablas basándose en una columna relacionada entre ellas. `INNER JOIN` es el tipo más común y devuelve solo las filas que tienen una coincidencia en ambas tablas.
*   **DISTINCT:** Elimina las filas duplicadas del resultado de una consulta `SELECT`.
*   **Funciones de Alteración:** Son funciones que manipulan datos directamente en la consulta:
    *   `CONCAT()`: Une dos o más cadenas de texto.
    *   `DATEDIFF()`: Calcula la diferencia en días entre dos fechas.
    *   `DATE_FORMAT()`: Formatea una fecha a un estilo específico.
    *   `CASE`: Permite agregar lógica condicional (if-then-else) dentro de una consulta.

#### **Clase 8: Tipos de Join y Vistas**

*   **Otros Tipos de JOIN:**
    *   `LEFT JOIN`: Devuelve **todos** los registros de la tabla izquierda y los registros coincidentes de la tabla derecha. Si no hay coincidencia, los campos de la derecha aparecen como `NULL`.
    *   `RIGHT JOIN`: Es lo opuesto; devuelve todos los registros de la tabla derecha.
*   **Vistas (Views):** Son consultas `SELECT` almacenadas que se comportan como una tabla virtual. Son útiles para simplificar consultas complejas, reutilizar lógica y restringir el acceso a ciertos datos.

#### **Clase 9: Índices y buenas prácticas**

*   **Índices (Indexes):** Es una estructura de datos que mejora la velocidad de las operaciones de recuperación de datos en una tabla. Funciona como el índice de un libro: en lugar de leer todo el libro para encontrar un tema, vas al índice. Crear índices en las columnas que se usan frecuentemente en cláusulas `WHERE` o `JOIN` es crucial para el rendimiento.
*   **Buenas Prácticas:** Se enseñan consejos para escribir consultas eficientes, como seleccionar solo las columnas necesarias en lugar de `SELECT *`, usar `JOIN` en lugar de subconsultas cuando sea posible, y asegurarse de que las condiciones `WHERE` puedan utilizar índices.

#### **Clase 10: Stored Procedures (Procedimientos Almacenados)**

*   **Concepto:** Un conjunto de una o más instrucciones SQL que se almacena en la base de datos y se puede ejecutar como una sola unidad.
*   **Ventajas:**
    *   **Rendimiento:** Están precompilados, por lo que se ejecutan más rápido.
    *   **Reutilización:** Se escriben una vez y se pueden llamar muchas veces desde la aplicación.
    *   **Seguridad:** Se pueden conceder permisos para ejecutar un procedimiento sin dar acceso directo a las tablas subyacentes.

#### **Clase 11: Última clase repaso SQL**

*   Se realiza un repaso general de todo el módulo SQL a través de un formato de preguntas y respuestas frecuentes, consolidando los conceptos clave como DDL/DML, claves primarias/foráneas y `JOINs`.

---

### **Módulo: Base de Datos NO SQL (No Relacional)**

#### **Clase 12 y 13: Introducción a MongoDB**

*   **¿Qué es NoSQL?** Se refiere a bases de datos que no usan el modelo relacional de tablas. Son flexibles en su esquema y escalan bien horizontalmente.
*   **MongoDB:** Una de las bases de datos NoSQL más populares. Es **orientada a documentos**, lo que significa que almacena datos en documentos similares a JSON (llamados BSON), agrupados en **colecciones**.
*   **Ventajas:** Su esquema flexible permite un desarrollo más rápido y es ideal para datos jerárquicos o que cambian con frecuencia.
*   **Integración con Node.js:** Se explica cómo conectar una aplicación Node.js a MongoDB usando **Mongoose**, una librería ODM (Object Data Modeling) que facilita la interacción. Mongoose permite definir **Schemas** (la estructura de los documentos), validaciones y lógica de negocio a nivel de aplicación.

#### **Clase 14: MongoDB Repaso**

*   Clase práctica que consolida el aprendizaje, repasando el proceso completo de configurar un proyecto con Node.js, Express y Mongoose para crear una API que realiza operaciones CRUD contra una base de datos MongoDB.

---

### **Módulo: Ciberseguridad**

#### **Clase 15: Introducción a Ciberseguridad**

*   Se introducen conceptos fundamentales y amenazas comunes:
    *   **Ataques comunes:** Phishing (engaño para robar credenciales), Malware (software malicioso).
    *   **Vulnerabilidades Web:**
        *   **XSS (Cross-Site Scripting):** Inyectar scripts maliciosos en un sitio web que luego se ejecutan en los navegadores de otros usuarios.
        *   **SQL Injection:** Inyectar código SQL malicioso en una consulta para manipular la base de datos.

#### **Clase 16: Continuamos viendo Ciberseguridad**

*   Se enfoca en la seguridad de contraseñas:
    *   **Ataques de Contraseñas:** Fuerza Bruta (probar todas las combinaciones), Ataques de Diccionario (probar palabras comunes).
    *   **Hashing de Contraseñas:** El proceso de convertir una contraseña en una cadena de texto ilegible y de longitud fija. **Nunca se deben guardar contraseñas en texto plano.**
    *   **Salt & Pepper:**
        *   **Salt (Sal):** Un valor aleatorio único que se añade a cada contraseña antes de hacer el hash. Evita que contraseñas idénticas tengan el mismo hash, inutilizando las *rainbow tables*.
        *   **Pepper (Pimienta):** Un valor secreto que se añade a todas las contraseñas, almacenado por separado.

#### **Clase 17: Última clase de Ciberseguridad**

*   **OWASP Top Ten:** Se presenta la lista de los 10 riesgos de seguridad más críticos para las aplicaciones web, según la fundación OWASP. Es una guía estándar para desarrolladores sobre qué vulnerabilidades deben priorizar para prevenir ataques.
*   **Logging y Monitoreo:** Se introduce la importancia de registrar eventos de seguridad con librerías como **Winston** (para logging general) y **Morgan** (un middleware de Express para registrar solicitudes HTTP).

---

### **Módulo: ORM**

#### **Clase 18: ORM Sequelize**

*   **ORM (Object-Relational Mapping):** Es una técnica que crea un "puente" entre un lenguaje de programación orientado a objetos (como JavaScript) y una base de datos relacional (como MySQL). Permite interactuar con la base de datos usando objetos y métodos en lugar de escribir SQL crudo.
*   **Sequelize:** Es el ORM más popular para Node.js.
*   **Ventajas:**
    *   **Abstracción de SQL:** Escribes menos código SQL, lo que reduce errores.
    *   **Independencia de la BD:** Facilita el cambio entre diferentes bases de datos SQL (MySQL, PostgreSQL, etc.) con mínimos cambios en el código.
    *   **Utilidades:** Incluye validaciones, manejo de relaciones y migraciones (control de versiones del esquema de la base de datos).

---

### **Módulo: Trabajo Práctico Final**

#### **Clase 19: Trabajo Práctico Integrador**

*   Esta clase marca el inicio del proyecto final. Se presenta la consigna y se dedica tiempo para que los estudiantes comiencen a desarrollar su aplicación, aplicando la integración de una base de datos (SQL o NoSQL), la creación de una API segura y el uso de un ORM/ODM.
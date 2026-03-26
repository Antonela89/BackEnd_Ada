
// Parte 1: Creación de Bases de Datos y Colecciones
// 1. Crear una base de datos:
// • Usando MongoDB Compass o la CLI (mongosh), crea una base de datos llamada escuela.
// • Pista: Recuerda que en MongoDB no es necesario crear explícitamente una base de datos, sino que se crea al insertar el primer documento.
use("escuela");

// 2. Crear una colección:
// • Dentro de la base de datos escuela, crea una colección llamada estudiantes.
// • Pista: En la CLI, usa un comando específico para crear colecciones. En MongoDB Compass, usa la interfaz gráfica.
db.createCollection("estudiantes");

// Parte 2: Inserción de Datos
// 1. Insertar documentos en la colección estudiantes:
// Inserta los siguientes documentos en la colección estudiantes:
// • Un estudiante llamado "Juan Pérez", de 20 años, que cursa "Matemáticas".
// • Un estudiante llamado "María Gómez", de 22 años, que cursa "Historia".
// • Un estudiante llamado "Carlos López", de 21 años, que cursa "Literatura".
// Pista: Usa el comando para insertar un solo documento o varios documentos a la vez.
db.estudiantes.insertMany([
    {nombre: "Juan Pérez", edad: 20, materia: "Matemáticas"},
    {nombre: "María Gómez", edad: 22, materia: "Historia"},
    {nombre: "Carlos López", edad: 21, materia: "Literatura"},
]);

// Parte 3: Consultar Datos
// 1.Consultar todos los documentos:
// • Muestra todos los documentos de la colección estudiantes.
// • Pista: Usa el comando para consultar todos los documentos de una colección.
db.estudiantes.find();

// 2. Consultar con filtro:
// • Muestra solo los estudiantes que tienen 21 años.
// • Pista: Usa un filtro en la consulta para seleccionar documentos que cumplan una condición específica.
db.estudiantes.find({edad: 21});

// 3. Ordenar los resultados:
// • Muestra todos los estudiantes ordenados por edad de forma ascendente.
// • Pista: Usa un comando para ordenar los resultados de una consulta.
db.estudiantes.find().sort({edad: 1});

// Parte 4: Actualizar Documentos
// 1. Actualizar un documento:
// • Cambia la edad de "María Gómez" a 23 años.
// • Pista: Usa un comando para actualizar un solo documento que cumpla con una condición específica.
db.estudiantes.updateOne({nombre: "María Gómez"}, {$set: {edad: 23}});

// 2. Actualizar múltiples documentos:
// • Agrega un nuevo campo llamado ciudad a todos los estudiantes, con el valor "Buenos Aires".
// • Pista: Usa un comando para actualizar varios documentos a la vez.
db.estudiantes.updateMany({}, {$set: {ciudad: "Buenos Aires"}});

// Parte 5: Eliminar Documentos
// 1. Eliminar un documento:
// • Elimina al estudiante "Carlos López" de la colección.
// • Pista: Usa un comando para eliminar un solo documento que cumpla con una condición específica.
db.estudiantes.deleteOne({nombre: "Carlos López"});

// 2. Eliminar varios documentos:
// • Elimina todos los estudiantes que tienen 21 años.
// • Pista: Usa un comando para eliminar varios documentos que cumplan con una condición específica.
db.estudiantes.deleteMany({edad: 21});

// Parte 6: Verificación Final
// 1. Verificar los cambios:
// • Consulta todos los documentos de la colección estudiantes para asegurarte de que los cambios se hayan aplicado correctamente.
// • Pista: Usa el comando para consultar todos los documentos de una colección.
db.estudiantes.find();

// Preguntas que quizás se hacen…
// 1. ¿Qué ventajas tiene MongoDB sobre las bases de datos relacionales como MySQL?
// - Posee un esquema flexible (Schemaless): se pueden guardar documentos con diferentes estructuras en la misma colección.
// - Escalabilidad horizontal: Es más fácil de distribuir en muchos servidores (Sharding).
// - Velocidad: Al guardar datos relacionados juntos (documentos embebidos), se evitan los "JOINs" complejos que suelen ser lentos.

// 2. ¿Por qué es útil el formato JSON en MongoDB?
// - Es muy fácil de leer para humanos y máquinas.
// - Es el estándar de la web; los programadores de JavaScript/Python/Java pueden trabajar con los datos casi sin transformación.

// 3. ¿Cómo se diferencian las operaciones de inserción, actualización y eliminación en MongoDB comparado con SQL?
// - En SQL se usan sentencias de texto (INSERT INTO..., UPDATE... WHERE...).
// - En MongoDB se usan métodos de objetos (db.coleccion.insertOne(), db.coleccion.updateMany()) y se pasa objetos JSON como filtros y parámetros. Es una programación más orientada a objetos que a lenguaje declarativo.
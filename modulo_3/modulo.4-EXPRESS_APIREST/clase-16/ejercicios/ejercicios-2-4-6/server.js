// importacion de modulos necesarios
const fs = require('fs');
const express = require('express');
const z = require('zod');

// Ruta al archivo json que simula la BBDD
const pathFile = './database.json';

// configuracion de puerto
const PORT = 3000;

// Ejercicio 5
// Validación de los datos ingresados por usuario
// Esquema de validacion
const productSchema = z.object({
    id: z.number('El id debe ser númerico.'),
    name: z.string().nonempty("La cadena no puede estar vacía.")
});

// funcion de validacion
const validateProductBody = (req, res, next) => {
    const results = productSchema.safeParse(req.body);

    // verificacion
    if (!results.success) {
        // Si falla, enviamos los detalles del error formateados
        res.status(400).json({ 
            error: 'Datos inválidos', 
            details: results.error.issues.map(e => e.message) 
        });
        return; // corta ejecucion
    }

    // Si todo ok, seguimos
    next();
};

// instancia de express
const app = express();

// Ejercicio 6
// middleware para formateo de respuesta
app.use(express.json());

// Ruta de bienvenida -> verificar el funcionamiento del servidor
app.get('/', (req, res) => {
    res.json('Bienvenid@s!!!');
});

// Rutas de peticiones
//----------------------------------------------------------------------
// Ejercicio 4
app.patch('/products/:id', (req, res) => {
    const { id } = req.params;

    const products = JSON.parse(fs.readFileSync(pathFile));

    const indexProduct = products.findIndex((product) => product.id === parseInt(id));

    if (indexProduct === -1) {
        res.status(404).json({ error: 'Producto no encontrado.' });
    }

    const currentProduct = products[indexProduct];

    const mergeProducts = {...currentProduct, ...req.body};

    products[indexProduct] = mergeProducts;

    fs.writeFileSync(pathFile, JSON.stringify(products, null, 2));

    res.status(200).json({ message: `Producto - ${id} editado exitosamente.` });
});

app.delete('/products/:id', (req, res) => {
    const { id } = req.params;
    
    const products = JSON.parse(fs.readFileSync(pathFile));

    const indexProduct = products.findIndex((product) => product.id === parseInt(id));

    if (indexProduct === -1) {
        res.status(404).json({ error: 'Producto no encontrado.' });
    }

    products.splice(indexProduct, 1);
    
    fs.writeFileSync(pathFile, JSON.stringify(products, null, 2));

    res.status(200).json({ message: `Producto - ${id} eliminado exitosamente.` });
});

//-------------------------------------------------------------

// Ejercicio 2
// GET -> Traer todos los usuarios
app.get('/products/', (req, res) => {
    // leer el archivo y guardarlo en una variable
    const products = JSON.parse(fs.readFileSync(pathFile));

    // Verificación en caso de error
    if (!products) {
        res.status(404).json({error: 'No se obtuvieron resultados'})
    }

    // respuesta exitosa al usuario
    res.status(200).json(products)
});

// POST -> Crear un nuevo producto sin 
// app.post('/products/', (req, res) => {
//     // desestructuracion de nombre que vienen en el body de la petición
//     // id -> logica autoincremental
//     const { id, name } = req.body

//      // verifiacion para que los campos no esten vacios
//     if (!id || !name) {
//         return res.status(400).json({error: 'El usuario no ingreso los campos requeridos.' })
//     }

//     // Leer la base de datos 
//     const BBDD = JSON.parse(fs.readFileSync(pathFile));

//     // Armar el objeto producto a cargar
//     const newProducts = { id, name};

//     // agregar a la lista de la BBDD
//     BBDD.push(newProducts);

//     // guardar lista actualizada
//     fs.writeFileSync(pathFile, JSON.stringify(BBDD, null, 2));

//     res.status(201).json({message: 'Producto creado exitosamente.'})
// });

//-------------------------------------------------------------
// Ejercicio 6 - continuación
// POST -> Crear un nuevo productov con middleware de validacion
app.post('/products/', validateProductBody, (req, res) => {
    // desestructuracion de nombre que vienen en el body de la petición
    // id -> logica autoincremental
    const { id, name } = req.body

    // Leer la base de datos 
    const BBDD = JSON.parse(fs.readFileSync(pathFile));

    // Armar el objeto usuario a cargar
    const newProducts = { id, name};

    // agregar a la lista de la BBDD
    BBDD.push(newProducts);

    // guardar lista actualizada
    fs.writeFileSync(pathFile, JSON.stringify(BBDD, null, 2));

    res.status(201).json({message: 'Producto creado exitosamente.'})
});


app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
})
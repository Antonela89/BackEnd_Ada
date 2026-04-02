// importar mongoose para conectarnos a MongoDB
import mongoose from 'mongoose';
// importar dotenv para cargar las variables de entorno desde un archivo .env
import dotenv from 'dotenv';

dotenv.config();

// función asíncrona para conectar a la base de datos
export const connectDB = async () => {
	// bloque Try: intentar conectar a la base de datos usando la URI almacenada en las variables de entorno
	try {
		await mongoose.connect(process.env.MONGO_URI, {
            // opciones de conexión recomendadas para evitar advertencias de deprecación
            // useNewUrlParser es una opción que permite a Mongoose usar el nuevo analizador de URL de MongoDB, lo que mejora la compatibilidad con las nuevas características de MongoDB
            useNewUrlParser: true,
            // useUnifiedTopology es una opción que permite a Mongoose usar el nuevo motor de monitoreo de MongoDB, lo que mejora la estabilidad de la conexión
            useUnifiedTopology: true,
        });
        // si la conexión es exitosa mostrar un mensaje y continuar con el resto de la aplicación
		console.log('Conexión a la base de datos exitosa');

     // bloque Catch: si ocurre un error al conectar, imprimir el error y salir del proceso con un código de error   
	} catch (error) {
		console.error('Error al conectar a la base de datos:', error);
		// salir del proceso con un código de error
        process.exit(1); 
	}
};

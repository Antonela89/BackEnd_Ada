// importación de express y tipos especificos 
import express,{ Application, Request, Response, NextFunction } from "express";
// importacion de rutas
import router from "./routes/userRoutes";
// importacion de middleware para error general
import { errorMiddleware } from "./middlewares/errorMiddleware";

// creamos una instancia de app
const app: Application = express();

// formateo de express para respuestas
app.use(express.json());

// mensaje de bienvenida
app.get('/', (req: Request, res: Response) => {
    res.json({ message: "API de gestión de usuarios 📚" });
});

// ruta general de la applicacion
app.use('/users', router);

// respuesta para rutas no encontradas
app.use((req:Request, res: Response) => {
    res.status(404).json({Error: "Endpoint no encontrada."})
})

// empleo de middleware para manejo de errores generales
app.use(errorMiddleware);

// definicion de puerto
const PORT = 3000;

// activar la app para la escucha de peticiones
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`)
})
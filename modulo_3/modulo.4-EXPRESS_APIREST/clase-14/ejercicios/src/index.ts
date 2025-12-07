import express,{ Application, Request, Response, NextFunction } from "express";
import router from "./routes/userRoutes";
import { errorMiddleware } from "./middlewares/errorMiddleware";

// creamos una instancia de app
const app: Application = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.json({ message: "API de gestión de usuarios 📚" });
});

app.use('/users', router);

app.use((req:Request, res: Response) => {
    res.status(404).json({Error: "Endpoint no encontrada."})
})

app.use(errorMiddleware);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`)
})
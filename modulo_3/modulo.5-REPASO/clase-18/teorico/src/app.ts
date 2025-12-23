import express from "express";

import userRouter from "./routes/userRoutes";

// Inancia de aplicacion en Express
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Configuracion de rutas
app.use('/users', userRouter);

export default app;
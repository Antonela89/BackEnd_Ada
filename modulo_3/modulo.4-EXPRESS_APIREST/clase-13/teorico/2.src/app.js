import express from 'express'; // importar express
import userRouter from './routes/userRoutes.js';

// creamos una instancia de express;
const app = express();

// middleware para parsear JSON
app.use(express.json());

app.use('/users', userRouter);

export default app;
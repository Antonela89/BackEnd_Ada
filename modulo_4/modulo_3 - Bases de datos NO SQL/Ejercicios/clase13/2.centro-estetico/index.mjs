import Express from "express";
import dotenv from "dotenv";
import cors from "cors";
import clienteRoutes from "./routes/cliente-routes.mjs";
import citaRoutes from "./routes/cita-routes.mjs";
import { connectDB } from "./database.mjs";    

dotenv.config();

// Conectar a la base de datos
await connectDB();

const app = Express();
const PORT = process.env.PORT || 3000;

app.use(Express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json({ message: '¡Servidor API en funcionamiento!' });
});

app.use('/api/clientes', clienteRoutes);
app.use('/api/citas', citaRoutes);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});

import mongoose from 'mongoose';
import Mascota from './Mascota.mjs';

const clienteSchema = new mongoose.Schema({
	nombre: { type: String, required: true },
	telefono: { type: String },
	direccion: { type: String },
});

clienteSchema.pre('findOneAndDelete', async function () {
    const filter = this.getQuery(); 
    const clienteId = filter._id;

    const Mascota = mongoose.model('Mascota'); 
    
    console.log('Eliminando mascotas del dueño:', clienteId);
    await Mascota.deleteMany({ duenio: clienteId });
});

const Cliente = mongoose.model('Cliente', clienteSchema);
export default Cliente;

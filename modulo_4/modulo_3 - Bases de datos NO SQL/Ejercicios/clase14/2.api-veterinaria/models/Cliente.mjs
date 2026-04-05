import mongoose from 'mongoose';
import Mascota from './Mascota.mjs';

const clienteSchema = new mongoose.Schema({
	nombre: { type: String, required: true },
	telefono: { type: String },
	direccion: { type: String },
});

clienteSchema.pre('findOneAndDelete', async function () {
	try {
		const clienteId = this.getQuery()['_id'];
		console.log('Eliminando mascotas del dueño:', clienteId);
		await Mascota.deleteMany({ duenio: clienteId });
	} catch (error) {
		console.error('Error en cascada:', error);
	}
});

const Cliente = mongoose.model('Cliente', clienteSchema);
export default Cliente;

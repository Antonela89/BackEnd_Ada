import mongoose from 'mongoose';
import Mascota from './Mascota.mjs';

const clienteSchema = new mongoose.Schema({
	nombre: { type: String, required: true },
	telefono: { type: String },
	direccion: { type: String },
});

clienteSchema.pre('findOneAndDelete', async function (next) {
	try {
		const clienteId = this.getQuery()['_id'];
		await Mascota.deleteMany({ duenio: clienteId });
		next();
	} catch (error) {
		next(error);
	}
});

const Cliente = mongoose.model('Cliente', clienteSchema);
export default Cliente;

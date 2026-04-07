import mongoose from 'mongoose';

const Cliente = mongoose.model(
	'Cliente',
	new mongoose.Schema({
		nombre: String,
		email: { type: String, unique: true },
		vip: { type: Boolean, default: false },
	}),
);

export default Cliente;

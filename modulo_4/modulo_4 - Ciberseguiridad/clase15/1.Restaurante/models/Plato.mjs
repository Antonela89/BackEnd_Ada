import mongoose from 'mongoose';

const Plato = mongoose.model(
	'Plato',
	new mongoose.Schema({
		nombre: { type: String, required: true },
		precio: { type: Number, required: true },
		categoria: String,
	}),
);

export default Plato;

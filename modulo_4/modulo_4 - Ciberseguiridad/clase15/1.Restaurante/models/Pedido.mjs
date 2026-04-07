import mongoose from 'mongoose';

const Pedido = mongoose.model(
	'Pedido',
	new mongoose.Schema({
		cliente: String,
		fecha: { type: Date, default: Date.now },
		total: Number,
		items: [String],
	}),
);

export default Pedido;

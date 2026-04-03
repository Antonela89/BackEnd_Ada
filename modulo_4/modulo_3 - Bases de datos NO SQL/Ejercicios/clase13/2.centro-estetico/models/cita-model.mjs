import mongoose from "mongoose";

const citaSchema = new mongoose.Schema({
    cliente: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },
    servicio: {
        type: String,
        required: true
    }
});

const Cita = mongoose.model('Cita', citaSchema);
export default Cita;
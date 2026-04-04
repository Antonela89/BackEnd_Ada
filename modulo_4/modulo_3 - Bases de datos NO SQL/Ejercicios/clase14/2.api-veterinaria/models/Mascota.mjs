import mongoose from "mongoose";

const mascotaSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    especie: { type: String, required: true },
    raza: { type: String }, 
    edad: { type: Number },
    duenio: {type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required: true}
});

const Mascota = mongoose.model('Mascota', mascotaSchema);   
export default Mascota;
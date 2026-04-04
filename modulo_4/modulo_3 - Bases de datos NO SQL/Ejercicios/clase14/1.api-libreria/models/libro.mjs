import mongoose from "mongoose";

const libroSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    anioPublicacion: { type: Number },
    autor: { type: mongoose.Schema.Types.ObjectID, ref: "Autor" },
});

const Libro = mongoose.model("Libro", libroSchema);
export default Libro;


import mongoose from "mongoose";

// Definición del esquema para el modelo de usuario
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number
    }
});

// Creación del modelo de usuario a partir del esquema
const User = mongoose.model('User', userSchema);
export default User;
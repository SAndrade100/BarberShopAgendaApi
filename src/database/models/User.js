import mongoose from 'mongoose'
import { Schema } from 'mongoose'

const UserSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    apelido: {
        type: String,
        required: false
    },
    senha: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const User = mongoose.model("User", UserSchema)

export default User
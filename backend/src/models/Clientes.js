import { Schema, model } from 'mongoose'
const clienteSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    age: {
        type: Number,
        required: true,
        min: 18,
    },
    countryOfResidence: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
    strict: false
})

export default model('Cliente', clienteSchema)
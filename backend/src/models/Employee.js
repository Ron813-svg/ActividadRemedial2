import { Schema, model } from 'mongoose'
const employeeSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
}, {
    timestamps: true,
    strict: false
})

export default model('Employee', employeeSchema)
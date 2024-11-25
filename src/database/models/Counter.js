import mongoose from 'mongoose'
import { Schema } from 'mongoose'

const CounterSchema = new Schema({
    value: {
        type: Number,
        default: 0
    },
    key: {
        type: String,
        unique: true,
        default: 'singleton'
    }
}, {
    timestamps: true
})

const Counter = mongoose.model('Counter', CounterSchema)

export default Counter
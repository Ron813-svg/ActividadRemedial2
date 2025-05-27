import { Schema, model } from "mongoose";

const casinoSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  Categories: {
    type: [String],
    required: true,
  },
  maxBet: {
    type: Number,
    required: true,
    min: 0,
  },
  minBet: {
    type: Number,
    required: true,
    min: 0,
  },
}, {
    timestamps: true,
    strict: false
})

export default model('Casino', casinoSchema)
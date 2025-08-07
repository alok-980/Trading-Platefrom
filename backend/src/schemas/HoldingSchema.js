const { Schema } = require("mongoose");

const HoldingSchema = new Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,

    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
})

module.exports = { HoldingSchema };
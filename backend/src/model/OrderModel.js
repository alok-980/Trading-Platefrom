const { model } = require("mongoose");

const { OrderSchema } = require("../schemas/OrderSchema.js");

const OrderModel = new model("Order", OrderSchema);

module.exports = { OrderModel };
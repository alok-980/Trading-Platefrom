const { model } = require("mongoose");

const { HoldingSchema } = require("../schemas/HoldingSchema.js");

const HoldingModel = new model("Holding", HoldingSchema);

module.exports = { HoldingModel };
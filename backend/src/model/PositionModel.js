const { model } = require("mongoose");

const { PositionSchema } = require("../schemas/PositionSchema.js");

const PositionModel = new model("Position", PositionSchema);

module.exports = { PositionModel };
const { Schema } = require("mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "Your email address is required"],
    unique: true,
  },

  username: {
    type: String,
    required: [true, "Your username is required"],
  },

  password: {
    type: String,
    required: [true, "Your password is required"],
  },

  holdings: [
    {
      type: Schema.Types.ObjectId,
      ref: "HoldingModel",
    }
  ],

  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = { userSchema };
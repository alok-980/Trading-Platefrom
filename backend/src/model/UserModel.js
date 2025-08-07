const { model } = require("mongoose");
const bcrypt = require("bcrypt");

const { userSchema } = require("../schemas/UserSchema.js");

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

const User = new model("User", userSchema);

module.exports = { User };
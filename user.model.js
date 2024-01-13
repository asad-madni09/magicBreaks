
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, lowercase: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isActive: { type: Boolean, default: true },
});
const userModel = mongoose.model("users", userSchema);
module.exports = userModel;

const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  ownType: {
    type: String,
    enum: ["flat", "house", "office", "shop"],
    required: true,
  },
  address: { type: String, required: true },
  price: { type: Number, required: true },
  isActive: { type: Boolean, default: true },
});

const propertyModel = mongoose.model("properties", propertySchema);
module.exports = propertyModel;

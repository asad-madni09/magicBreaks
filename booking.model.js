const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true,ref:"users" },
  propertyId: { type: mongoose.Schema.Types.ObjectId, require: true,ref:"properties" },
  startDate: { type: Date, required: true },
  endDate: Date,
  rent: { type: Number},
  isActive: { type: Boolean, default: true },

});
const modelBooking = mongoose.model("bookings", bookingSchema);
module.exports = modelBooking;

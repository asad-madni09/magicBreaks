const mongoose = require("mongoose");
const Booking = require("./booking.model");
const Properties = require("./property.model");
const User = require("./user.model");

const postBooking = async function (req, res) {
  const data = req.body;
  try {
    const addBoooking = await Booking.create(data);
    res.status(200).json({ message: "Property Booked", addBoooking });
  } catch (error) {
    res.status(500).json({ message: "Error while add data " + error.message });
  }
};

const listOfBookings = async function (req, res) {
  try {
    const addBoooking = await Booking.find();
    res
      .status(200)
      .json({ message: "here is the list of all bookings", addBoooking });
  } catch (error) {
    res.status(500).json({ message: "error while fetching bookings" });
  }
};
///////////this shows booking by id along with username and property name
const bookingById = async function (req, res) {
  try {
    const id = req.params.id;
    const addBoooking = await Booking.findById(id)
      .populate("userId", "name")
      .populate("propertyId", "ownType");
    res.status(200).json({ message: "here is the detail", addBoooking });
  } catch (error) {
    res.status(500).json({ message: "error while fetching by ID" });
  }
};

module.exports = { postBooking, listOfBookings, bookingById };

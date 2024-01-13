const express = require("express");
const app = express();
app.use(express.json());

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/magicBricks");

const { postProperty, searchProperty } = require("./property.service");
const { addUser, userById } = require("./user.service");
const{postBooking,listOfBookings,bookingById} = require('./booking.service')

app.post("/property", postProperty);
app.get("/property", searchProperty);

app.post("/users", addUser);
app.get("/user/:id", userById);

app.post("/booking", postBooking);
app.get("/booking", listOfBookings);
app.get("/booking/:id", bookingById);

app.listen(8001);
console.log("App listening on", 8001);

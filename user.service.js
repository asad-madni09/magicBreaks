const mongoose = require("mongoose");
const User = require("./user.model");

const addUser = async function (req, res) {
  const data = req.body;
  try {
    const allUsers = await User.create(data);
    res.status(200).json({ message: "User Added Successfully", allUsers });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error while adding User " + error.message });
  }
};
const userById = async function (req, res) {
  const id = req.params.id;
  try {
    const userId = await User.findById(id);
    res.status(200).json({ message: "the user name is:" + userId.name + " email Id is "+ userId.email });
  } catch (error) {
    res.status(500).json({ message: "Error fetching User" });
  }
};
module.exports = { addUser, userById };

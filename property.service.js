const mongoose = require("mongoose");
const Property = require("./property.model");

const postProperty = async function (req, res) {
  const data = req.body;
  try {
    const insertData = await Property.create(data);

    res.status(200).json({ message: "Data added successfully", insertData });
  } catch (error) {
    res.status(500).json({
      message: "Error while adding Data due to reason - " + error.message,
    });
  }
};
//////////////////SEARCH for property ////////////////////////////

const searchProperty = async function (req, res) {
  const { propertyType, city, price } = req.query;

  const query = {};
  try {
    if (propertyType) {
      query.ownType = propertyType;
    }
    if (city) {
      query.address = city;
    }
    if (price) {
      query.price = { $lte: price };
    }

    const search = await Property.find(query);
    res.status(200).json({ message: "Here is the properties", search });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error while finding properties - " + error.message });
  }
};

module.exports = { postProperty, searchProperty };

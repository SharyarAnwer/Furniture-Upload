const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  page: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  picture: {
    type: [String], // Define "pictures" as an array of strings
    required: true,
  },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;

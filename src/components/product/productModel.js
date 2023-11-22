// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: String,
  price: Number,
});

// Export function to create "product" model class
module.exports = mongoose.model("product", ProductSchema,'product');
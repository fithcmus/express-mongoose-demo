const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

const productModel = require('./productModel');

exports.getAll = () => {
  return productModel.find({});
};

exports.getById = (id) => {
  return productModel.findById(new ObjectId(id)).lean();
}
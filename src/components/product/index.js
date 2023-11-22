const express = require('express');
let productRoute = express.Router();
const productController = require('./productController');

productRoute.get('/', productController.get);
productRoute.get('/:id', productController.detail);

module.exports = productRoute;
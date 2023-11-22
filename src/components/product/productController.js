const productService = require('./productService');

exports.get = async (req, res) => {
  const products = await productService.getAll();
  res.render('customer/navigation/products', { products, layout: 'customer/layout' });
};

exports.detail = async (req, res) => {
  const product = await productService.getById(req.params.id);
  res.render('customer/product/detail', { product, layout: 'customer/layout' });
}
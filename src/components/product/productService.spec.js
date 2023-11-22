const mongoose = require("mongoose");
const productService = require('./productService');
require('dotenv/config');
/* Connecting to the database before each test. */
beforeEach(async () => {
  await mongoose.connect(process.env.MONGO_URL);
});

describe("productService getById", () => {
  it("should return the product with a specific id", async () => {
    const id = '65533e0ff6ef1116ad38f467';
    const product = await productService.getById(id);
    console.log('Product detail: ', product);
    expect(product._id.toString()).toBe(id);
  });
});

/* Closing database connection after each test. */
afterEach(async () => {
  await mongoose.connection.close();
});
// Require necessary packages
const express = require('express');
const path = require('path');
const mongoose = require("mongoose");

require('dotenv/config');
let initRouteWeb = require('./src/routes/navigation.js');

// Set up mongoose connection
mongoose.set("strictQuery", false);
const mongoDB = process.env.MONGO_URL;

main().catch((err) => console.log(err));
async function main() {
    await mongoose.connect(mongoDB);
    console.log('Database connected!');
}

// Server Initialization 
const app = express();
initRouteWeb(app);

// Configure Handlebars View Engine
app.use(express.static(path.join(__dirname, 'public/')));
app.set('views', path.join(__dirname, '/src/views'));
app.set("view engine", "hbs");

// Start the server
const PORT = process.env.PORT;
let server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

  
module.exports = app

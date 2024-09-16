const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const Car = require('./models/car.model.js')
const Clothe = require('./models/clothes.model.js')
const productRoute = require("./routes/product.route.js")
const carRoute = require("./routes/car.route.js")
const clothesRoute = require("./routes/clothes.routes.js")

const app = express();

/// middleware
app.use(express.json());


/// routes product
app.use("/api/products", productRoute);

/// routes car
app.use("/api/cars", carRoute)

//// routes clothes
app.use("/api/clothes", clothesRoute)










app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});

 
 
mongoose
.connect(
    "mongodb+srv://azizatamuradov1994:a2225506@mongopractice.69ry0.mongodb.net/"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });

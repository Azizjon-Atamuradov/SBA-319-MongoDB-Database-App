const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js')

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});

app.post('/api/products', async (req, res) => {

    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
    
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

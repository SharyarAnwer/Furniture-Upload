const express = require("express");

const Product = require("./model");

const router = express.Router();

router.post("/add-product", async (req, res) => {
  try {
    const { name, category, price, picture, page } = req.body;

    const product = new Product({ name, category, price, picture, page });

    await product.save();

    res.status(201).json({ message: "Product added successfully" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.post("/get-product", async (req, res) => {
  try {
    const { page } = req.body;

    // Search for orders by name and within a specific date range
    const products = await Product.find({

        page : page

    });

    res.status(201).json({ message: "Products found" , products});

  } 
  catch (error) {
    res.status(500).json({ message: error });
  }
});

module.exports = router;

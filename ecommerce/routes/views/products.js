const express = require("express");
const router = express.Router();
const ProductsService = require("../../services/products");
const { config } = require("../../config");

const productService = new ProductsService();

router.get("/", async function(req, res, next) {
  const { tags } = req.query;
  try {
    const products = await productService.getProducts({ tags });
    res.render("products", { products, dev: config.dev });
  } catch (err) {
    next(err);
  }
});

module.exports = router;

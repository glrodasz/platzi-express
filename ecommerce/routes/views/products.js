const express = require("express");
const router = express.Router();
const ProductsService = require("../../services/products");
const { config } = require("../../config");

const cacheResponse = require("../../utils/cacheResponse");
const { FIVE_MINUTES_IN_SECONDS } = require("../../utils/time");

const productService = new ProductsService();

router.get("/", async function(req, res, next) {
  cacheResponse(res, FIVE_MINUTES_IN_SECONDS);
  const { tags } = req.query;
  try {
    const products = await productService.getProducts({ tags });
    res.render("products", { products, dev: config.dev });
  } catch (err) {
    next(err);
  }
});

module.exports = router;

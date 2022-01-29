const path = require("path");
const express = require("express");

const rootDirectory = require("../util/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
   console.log("shop.js", adminData.products);
   const products = adminData.products;
   // res.sendFile(path.join(rootDirectory, "views", "shop.html"));
   res.render("shop", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
   });
});

module.exports = router;

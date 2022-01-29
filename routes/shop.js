const path = require("path");
const express = require("express");

const rootDirectory = require("../util/path");

const router = express.Router();

router.get("/", (req, res, next) => {
   //console.log(path.join(__dirname, "../", "views", "shop.html"));
   res.sendFile(path.join(rootDirectory, "views", "shop.html"));
});

module.exports = router;

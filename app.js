const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// const server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: false }));

// to serve statically -->
app.use(express.static(path.join(__dirname, "public")));

// app.use("/", (req, res, next) => {
//    console.log("/ route");
//    next();
// });

// app.get("/addproduct", (req, res, next) => {
//    console.log("/addproduct route");
// });

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
   res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3001, () => {
   console.log("Server is running on port 3001");
});

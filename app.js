const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// handlebars config-->
// const { engine } = require("express-handlebars");
// app.engine(
//    "hbs",
//    engine({
//       layoutsDir: "views/layouts/",
//       defaultLayout: "main-layout",
//       extname: "hbs",
//    })
// );

app.set("view engine", "ejs");
app.set("views", "views");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// const server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: false }));

// to serve statically -->
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
   // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
   res.status(404).render("404", { pageTitle: "Page Not Found!", path: "Error" });
});

app.listen(3001, () => {
   console.log("Server is running on port 3001");
});

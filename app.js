if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const db = require("./db");

const express = require("express");
const ejsMate = require("ejs-mate");
const path = require("path");
const routes = require("./routes/routes");
const bodyparser = require("body-parser");
const catchAsync = require("./catchAsync");

const userRoutes = require("./routes/routes");

const app = express();
app.engine("ejs", ejsMate);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyparser.json());
app.use("/", routes);

// app.use((err, req, res, next) => {
//   const { statusCode = 500 } = err;
//   if (!err.message) err.message = "Oh No Something Went Wrong!";
//   res.status(statusCode).render("error", { err });
// });

const port = process.env.PORT;

app.listen(process.env.PORT || 3000, () => {
  console.log("Serving on port 3000");
});

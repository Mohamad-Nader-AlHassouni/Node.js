"use strict";

const express = require("express");
const app = express();
const expressHandlebars = require("express-handlebars");

app.set("view engine", "handlebars");
app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));

// app.get('/', (req, res) => {
//   res.send('hello from backend to frontend!')
// });
app.get('/', (req, res) => {
  res.render("index");
});

app.use(express.urlencoded({ extended: true }));

app.post("/weather", (req, res) => {
  const cityName = req.body.cityName;
  res.render("index", { cityName });
});

app.listen(3000);

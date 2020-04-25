"use strict";

const express = require("express");
const app = express();
const expressHandlebars = require("express-handlebars");
const axios = require("axios");

app.set("view engine", "handlebars");
app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));

app.get("/", (req, res) => {
  res.render("index");
});

app.use(express.urlencoded({ extended: true }));

app.post("/weather", (req, res) => {
  const APIKEY = require("./sources/keys.json").API_KEY;
  const cityName = req.body.cityName;
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?APPID=${APIKEY}&q=${cityName}&units=metric`
    )
    .then(function (response) {
      res.render("index", {
        cityName: response.data.name,
        weatherText: `The temperature in ${cityName} is ${response.data.main.temp}°C!`,
      });
    })
    .catch(function (error) {
      res.render("index", {
        weatherText: 'City is not found!'
      });
    });
});
app.listen(3000);

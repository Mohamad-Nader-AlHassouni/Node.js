"use strict";

const fetch = require("node-fetch");

const body = {
    "name": "Nader Hassouni",
    "numberOfPeople": "2"
  };

fetch("https://reservation100-sandbox.mxapps.io/api/reservations", {
    method: 'post',
    body:    JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
})
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

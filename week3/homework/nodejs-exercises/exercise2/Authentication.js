"use strict";

const fetch = require("node-fetch");

fetch("https://restapiabasicauthe-sandbox.mxapps.io/api/books", {
  headers: { Authorization: "Basic YWRtaW46aHZnWDhLbFZFYQ==" },
})
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => console.error(err));

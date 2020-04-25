"use strict";

const Handlebars = require("handlebars");

const subjects = [
  "shark",
  "popcorn",
  "poison",
  "fork",
  "cherry",
  "toothbrush",
  "cannon",
];

const punchlines = [
  "watch movie with",
  "spread some love",
  "put on cake",
  "clean toilets",
  "go to the moon",
  "achieve world piece",
  "help people learn programing",
];

let x = Math.floor(Math.random() * 7);
let y = Math.floor(Math.random() * 7);

const data = {
  subject: subjects[x],
  punchline: punchlines[y],
};

const source = "{{subject}} is great to {{punchline}}";
const template = Handlebars.compile(source);
const result = template(data);

console.log(result);

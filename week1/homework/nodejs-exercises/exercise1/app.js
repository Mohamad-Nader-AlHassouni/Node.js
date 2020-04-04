'use strict'

const andrejs= require('./andrejs-awesome-function');

const numbers = [ "12", "846", "2", "1236" ];

numbers.forEach(number => {
    let paddedNumber = andrejs.padLeft(number, 4 , " ")
    console.log(paddedNumber);
});
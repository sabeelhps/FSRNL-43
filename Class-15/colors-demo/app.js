const colors = require('colors');
const giveMeAJoke = require('give-me-a-joke');
const figlet = require("figlet");

figlet("Welcome to NodeJS", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data.rainbow);
});


console.log("Welcome to NodeJS".rainbow);

giveMeAJoke.getRandomDadJoke (function(joke) {
    console.log(joke);
});

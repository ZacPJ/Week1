"use strict";

var balance = 1000;
var attempts = 0;
var loop = 0;

var cashMachine = function cashMachine(pin, amount) {
  if (attempts <= 3) {
    if (pin === 2022) {
      console.log("Pin is correct\nYour balance is ".concat(balance));

      if (amount > 0 && amount <= balance) {
        balance = balance - amount;
        console.log("Your balance is now ".concat(balance));
        loop = 1;
      } else {
        console.log("You cannot withdraw that amount please reenter pin and try again");
      }
    } else {
      console.log("Incorrect Pin please try again");
      attempts++;
    }
  } else {
    console.log("You entered the incorrect pin too many times. This account is now locked");
    loop = 1;
  }
};

while (loop != 1) {
  cashMachine(2022, 10000);
}
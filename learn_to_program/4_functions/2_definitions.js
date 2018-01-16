/*
Defining your own functions...
*/

var getDieRoll = function() {
  console.log("rolling a die");
  return Math.ceil(6 * Math.random());
};

var firstDie = getDieRoll();
var secondDie = getDieRoll();

console.log(firstDie);
console.log(secondDie);
console.log(firstDie + secondDie);

/*

Interestlingly enough, if I were to define the getDieRoll function HERE (i.e.
after we try to invoke it, I get an exception.

JavaScript exeuctes this program from the top down.

*/

/*

It's really important in Javascript to understand variable scope.

The scope of a variable is essentially where that varaible is available.

*/

//1) Let's add a result variable to the getDieRoll function.
//2) getDieRoll now has 2 variables available to it - dieSize and result
var getDieRoll = function(dieSize) {
  var result = Math.ceil(dieSize * Math.random());
  return result;
};

var firstDie = getDieRoll(10);
var secondDie = getDieRoll(10);

//3) Question is - are these 2 variables available outside of the getDieRoll function?
console.log(result);
//For result = the answer is no - "result is not defined". It's a "local variable"
//that is only available within the getDieRoll function.

console.log(dieSize);
//4) Same with dieSize - "dieSize is not defined"

//5) Ok, let's define another function...let's go to separate file 4a_scope.js

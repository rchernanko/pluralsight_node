//Here's another example...

var getDieRoll = function(dieSize) {
  var result = Math.ceil(dieSize * Math.random());
  return result;
};

//Let's define another function, showResult
var showResult = function() {
  console.log(firstDie);
  console.log(secondDie);
  console.log(firstDie + secondDie);
};

var firstDie = getDieRoll(10);
var secondDie = getDieRoll(10);
//After the firstDie and secondDie are created, let's invoke our new function
showResult();

//QUESTION - Can a function invoke / access a variable declared outside of itself?
//ANSWER - Yes it can...showResult CAN access the variables firstDie and secondDie

//firstDie and secondDie are considered "global variables".
//They are accessible ANYWHERE throughout the program, even inside another function

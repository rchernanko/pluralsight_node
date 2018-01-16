//Function from last module...
var getDieRoll = function(dieSize) {
  var result = Math.ceil(dieSize * Math.random());
  return result;
};

var roll = getDieRoll(6);

//Standard if statement coming up...

if (roll >= 5) {
  console.log("Great roll!");
}

console.log("You rolled a " + roll);

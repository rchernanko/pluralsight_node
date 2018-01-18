var getDieRoll = function(dieSize) {
  var result = Math.ceil(dieSize * Math.random());
  return result;
};

var roll = getDieRoll(6);

// Greater than or equal to...
if (roll >= 5) {
  console.log("Great roll!");
}

//Exact condition would be...
//if (roll == 5) {

//Not equal condition would be...
//if (roll != 5) {

console.log("You rolled a " + roll);

//Logical operators - AND:
if (roll >= 2 && roll <= 3) {
  console.log("You rolled a 2 or a 3");
}

//Logical operators - OR:
if (roll == 1 || roll == 6) {
  console.log("You rolled a 1 or a 6");
}

//Not operator:
if (!(roll == 1 || roll == 6)) {
  console.log("You did not roll a 1 or a 6");
}

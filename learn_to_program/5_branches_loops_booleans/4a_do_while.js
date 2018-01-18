var getDieRoll = function(dieSize) {
  var result = Math.ceil(dieSize * Math.random());
  return result;
};


console.log(roll);

//DO WHILE LOOP
do {
  var roll = getDieRoll(6);
} while (roll < 4) {
  roll = getDieRoll(6);
  console.log('rolled again: ' + roll);
}

if (roll >= 5) {
  console.log("Great roll!");
} else if (roll == 1) {
  console.log("That was a terrible roll");
} else {
  console.log("That was an ok roll");
}

//UP TO 3 mins

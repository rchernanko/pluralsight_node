var getDieRoll = function(dieSize) {
  var result = Math.ceil(dieSize * Math.random());
  return result;
};

//DO WHILE LOOP
do {
  var roll = getDieRoll(6);
  console.log(roll);
} while (roll > 4)
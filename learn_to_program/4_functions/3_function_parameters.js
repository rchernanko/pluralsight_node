//Passing parameters into a function (different sized die)

var getDieRoll = function(dieSize) {
  console.log(dieSize);
  return Math.ceil(dieSize * Math.random());
};

var firstDie = getDieRoll(6);
var secondDie = getDieRoll(8);

console.log(firstDie);
console.log(secondDie);
console.log(firstDie + secondDie);

/*

INTERESTING...

Just because we declare that the function has a parameter 'dieSize' DOESN'T
mean that you have to pass something in when you call it...

Let's take a look.

*/

console.log('NOT PASSING IN PARAMS');

var thirdDie = getDieRoll();

console.log(thirdDie);

/*

Above prints out...

NOT PASSING IN PARAMS
undefined (the dieSize within getDieRoll())
NaN (thirdDie)

Within getDieRoll we could handle a case of when dieSize is undefined + then do
something differently. But we will look at that in a later module.

*/

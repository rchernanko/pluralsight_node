// This sample program for this section (4_functions) is going to simulate rolling dice

// var firstDie = 5;
// var secondDie = 3;
// console.log(firstDie);
// console.log(secondDie);
// console.log(firstDie + secondDie);

/*
Of course, if we uncomment out the above and run the program with node, the
results will always be the same.

Instead let's use the function 'random' on the Math object
*/

// console.log(Math.random());

/*
Above generates a random number between 0 and 1.
This is great BUT we need something that should produce a value between 2 and 12...
*/

// console.log(6 * Math.random());

/*
Above will generate a random number between 1 and 5 (which is ok for our need).
We can then use another function on the Math object, 'ceil' which will always
round UP our randomly generated number. So e.g. if (6 * Math.random())
produces 5.1, Math.ceil will round UP to the value 6 (which is of course the
highest number on the dice).

There is another function on Math, 'round'. This is different to the 'ceil' in
that it rounds to the NEAREST integer (up or down). So Math.round(5.1) would
return 5, and Math.round(5.6) would return 6.

There's also Math.floor which always rounds DOWN, so e.g. Math.floor(5.9) returns
5.
*/

//So let's make use of this new knowledge and simulate a dice being rolled
var value1 = 6 * Math.random();
var roll1 = Math.ceil(value1);

var value2 = 6 * Math.random();
var roll2 = Math.ceil(value2);

console.log(roll1 + roll2);

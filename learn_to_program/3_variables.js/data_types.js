/*

Key ones (there are more that we will talk about later...):

- string
- number
- boolean
- object

If I want to find out the type of a particular variable...

*/

var lunch = "pizza";
console.log(typeof lunch);
//Above would print out 'string'

var x = 3;
console.log(typeof x);
//Would print out 'number'

var y = 2.5;
console.log(typeof y);
//Would print out 'number' too. Javascript considers integers and floating points as 'numbers'

//Can also do...would print 'number'
console.log(typeof 6.3423);

//Ok so we've looked at string and number so far...

var z = "3"; //can either be in single or double quotes, doesn't matter
console.log(typeof z);
// Prints out string, as would "3.14" and 'true'

var x = 3, y = 4;
var result = x > y;
console.log(result);
console.log(typeof result);
//Would print 'boolean'

//How about the typeof on the actual console object?
console.log(typeof console);
// Prints out 'object'

//TODO up to 6 mins...

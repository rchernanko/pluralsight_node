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

/*
But this is where things start to get interesting...
What if I do an operation on 2 different data types?
*/
var number1 = 3;
var string1 = '3';
var answer = number1 + string1;
console.log(answer);
console.log(typeof answer);
/*
The value of answer will be '33' and the type will be 'string'.

What's happened? Well, in 'number1 + string1' Javascript sees that one of the
types is a string and so assumes you want to concatenate a string
*/

/*
Another example, but instead of using addition, let's use multiply. There is a
slightly different result!
*/
var number2 = 3;
var string2 = '2.5';
var answer = number2 * string2;
console.log(answer);
console.log(typeof answer);
/*
Here, I get the answer of 7.5 (3 x 2.5). So while with an addition sign, JS
thinks I want to concatenate two strings, when we use a multiply sign, JS thinks
that we must want to multiple 2 numbers.

Interesting - If I were to change string2 to e.g. 'hello', console.log(answer)
would return NaN (not a number), andd the typeof answer would be number.

I.E. be very careful when using different data types.

*/

/*
One built in command we can use to convert the string '3' to the number 3, is
parseInt
*/

var number3 = 5;
var string3 = '3';
var result = number3 + string3;
console.log(result);
console.log(typeof result);
//At present, this would print '53' and would be a string. But using parseInt...

var number4 = 5;
var string4 = '3';
var result = number4 + parseInt(string4);
console.log(result);
console.log(typeof result);
//Because I've used the parseInt function, the result will be 8 and will be a number

console.log(parseInt('hello'));

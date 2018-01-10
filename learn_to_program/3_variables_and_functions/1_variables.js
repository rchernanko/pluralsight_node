// Few examples:

// 1) If I ran the below, node stops execution and throws an error - 'x is not defined'.
console.log(p);

// 2) If I ran the below, node would continue to execute BUT would let me know that
// x is 'undefined'
var x;
console.log(x);

// 3) Will work
var x = 3;
console.log(x);

// 4) You can actually initiate two different variables in one go
var x, y = 2;
//or
var x = 3, y = 2;

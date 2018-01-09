//Another type if function...

console.log(typeof(console.log));
//If I run the above, function is printed. console.log is a function

//let's define a quick function
var writeGreeting = function() {
  console.log('hello there');
}

//And now let's invoke that function
writeGreeting();

//Functions can also declare their own variables, e.g.:
var anotherFunction = function() {
  var greeting = 'hi there';
  console.log(greeting);
}

anotherFunction();

//Of course, you can also pass the function some parameters:
var yetAnotherBloodyFunction = function(name) {
  console.log("Hello, " + name);
}

yetAnotherBloodyFunction('Richard');

//What if you try to invoke a variable instead of a function?
var number1 = 1;
number1();
//Throws an exception - "TypeError: number1 is not a function"
